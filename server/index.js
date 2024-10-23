import express from "express";
import connectdb from "./connectDB.js";
import cors from "cors";
import { Url } from "./UrlModel.js";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    // credentials: true,
    // origin: "http://localhost:5173", // Allow only this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

app.get("/", (req, res) => {
  res.send("This is home page");
});

// http://localhost:4001/url
app.post("/url", async (req, res) => {
  const { userId, originalUrl } = req.body;

  const Characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*";
  let shortUrl = "";
  const shortUrlLenght = 10;

  for (let i = 0; i < shortUrlLenght; i++) {
    shortUrl += Characters.charAt(
      Math.floor(Math.random() * Characters.length)
    );
  }
  //   console.log(shortUrl);

  const result = await Url.create({ shortUrl, userId, originalUrl });

  res.json({ message: "short url created", success: true, data: result });
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = req.params.shortUrl;
  //To find and update database for user click and also to redirect user to correct url
  const entry = await Url.findOneAndUpdate(
    { shortUrl },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  );
  // If the entry is found, redirect to the original URL
  if (entry) {
    res.redirect(entry.originalUrl);
  } else {
    // If no entry is found, send a 404 response
    res.status(404).send("URL not found");
  }
});

app.get("/analytics/:shortUrl", async (req, res) => {
  const shortUrl = req.params.shortUrl;
  const result = await Url.findOne({ shortUrl });

  res.json({
    totalClicks: result.visitHistory.length,
    message: `total clicks are ${result.visitHistory.length}`,
  });
});

app.get("/links/allUrl", async (req, res) => {
  const allUrls = await Url.find();
  //   console.log(allUrls);
  res.json({ allUrls: allUrls, message: "All url here", sucess: true });
});

connectdb()
  .then(() => {
    app.listen(PORT || 3000, () => {
      console.log(`🚀 Server is listening on port no ${PORT}`);
    });

    app.on("error", (err) => {
      console.error("🚫 There is error in app.on", err);
    });
  })
  .catch((err) => {
    console.error("🚫 Connection to mongodb & server failed !!!", err);
    throw err;
  });
