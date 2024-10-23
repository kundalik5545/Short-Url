import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://short-url-five-eta.vercel.app/";
// axios.defaults.baseURL = "http://localhost:4001/";

function LinksPage() {
  const [data, setData] = useState([]); // Changed from "" to an empty array assuming you're expecting multiple URLs

  const getAllData = async () => {
    try {
      const response = await axios.get("/links/allUrl");
      console.log(response.data); // Log the full response to understand its structure
      if (response.data.sucess) {
        // Ensure you're checking the correct property name
        setData(response.data.allUrls); // Store the data in the state
      } else {
        console.error("API Error: ", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error); // Log any potential error
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <h1 className="text-primary mx-5">Analytics Page</h1>
      {data.length > 0 ? (
        <div className="text-dark p-2 ">
          {data.map((url, index) => (
            <div key={index} className="p-2">
              <h3 className="text-lg text-blue-600 font-semibold">
                User ID: {url.userId}
              </h3>
              <p>Short URL: {`http://localhost:4001/${url.shortUrl}`}</p>
              <p>Original URL: {url.originalUrl}</p>
              {/* Add more fields depending on your data structure */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-primary p-2 bg-warning">No data available</p>
      )}
    </>
  );
}

export default LinksPage;
