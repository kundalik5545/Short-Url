// import React, { useState } from "react";
// import { WebsiteName, mainDomain } from "../assets/config.jsx";
// import { copy } from "../assets/icons/Icons";
// import axios from "axios";

// axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// function HomePage() {
//   const [shortUrl, setShortUrl] = useState("");
//   const [formData, setFormData] = useState({
//     userId: "",
//     originalUrl: "",
//   });

//   const handleOnChange = (e) => {
//     const { value, name } = e.target;
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   // console.log(formData);

//   //To Post url
//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     const data = await axios.post("/url", formData);
//     console.log(data);
//     if (data.data.success) {
//       alert(data.data.message);
//       setShortUrl(`${mainDomain}${data.data.data.shortUrl}`);
//     }
//   };

//   //TO copy data
//   const handleCopyClick = () => {
//     const shortUrlText = document.getElementById("newShortUrl").textContent;

//     // Copy the short URL to the clipboard
//     navigator.clipboard
//       .writeText(shortUrlText)
//       .then(() => {
//         alert("Short URL copied to clipboard!"); // Success message
//       })
//       .catch((err) => {
//         console.error("Failed to copy text: ", err);
//       });
//   };

//   return (
//     <>
//       <div className="HomePage flex flex-col pt-10 m-3">
//         <h1 className="text-blue-600 text-3xl font-semibold">
//           Welcome to <span className="text-[#f99106]">{WebsiteName}</span>
//         </h1>

//         <h2 className="mx-1 p-4">
//           <span className="text-orange-400 text-2xl font-sans font-semibold">
//             #1{" "}
//           </span>
//           <span className="text-[#34495e] text-2xl font-sans font-semibold">
//             Urls Shortner is here...
//           </span>
//         </h2>

//         <p className="shortDesc text-lg mb-2">
//           A URL shortener app allows users to convert long URLs into shorter,
//           more manageable links. This makes it easier to share URLs across
//           social media platforms, emails, or messages. Users can input lengthy
//           URLs, and the app generates a concise, unique shortened version.
//           Advanced features may include link analytics, such as tracking the
//           number of clicks, geographic locations, and device types of users
//           accessing the link. Some URL shortener apps offer customizable short
//           links and expiration dates. The app simplifies link sharing while
//           providing valuable insights into user engagement, improving the
//           overall user experience.
//         </p>

//         <p className="text-xl font-mono mx-1 pt-4 ">Create your URL Here...</p>

//         <div className="urlShortner w-[600px]">
//           <form onSubmit={handleOnSubmit}>
//             <div className="form-group flex items-center gap-4 justify-between ">
//               <label htmlFor="userId" className="text-lg font-mono w-full">
//                 User ID:
//               </label>

//               <input
//                 type="number"
//                 name="userId"
//                 id="userId"
//                 className="mx-1 my-3 p-1 m-1 w-full"
//                 onChange={handleOnChange}
//               />
//             </div>

//             <div className="form-group flex items-center gap-4 justify-between">
//               <label htmlFor="originalUrl" className="text-lg font-mono w-full">
//                 Enter URL to shorten:
//               </label>

//               <input
//                 type="text"
//                 name="originalUrl"
//                 id="originalUrl"
//                 className="mx-1 my-1 p-1 w-full"
//                 onChange={handleOnChange}
//               />
//             </div>
//             <button
//               className="text-white bg-blue-500 p-3 m-2 rounded-md"
//               type="submit"
//             >
//               Short URL
//             </button>
//           </form>
//         </div>
//         {/* <hr className="mb-2 " /> */}
//         <div className="shortedUrl gap-4 mt-4 bg-slate-400 w-[600px] p-2">
//           <p className="shortUrlName flex items-center gap-4 justify-start text-black">
//             <span className="text-lg font-mono w-full"> Short URL:-</span>
//             <span
//               className="copyShortUrl text-lg font-mono decoration-sky-500"
//               id="newShortUrl"
//             >
//               {shortUrl}
//             </span>
//             <span className="cursor-pointer p-1" onClick={handleCopyClick}>
//               <img src={copy} className="w-10  " />
//             </span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;

import React, { useState } from "react";
import { WebsiteName, mainDomain } from "../assets/config.jsx";
import { copy } from "../assets/icons/Icons";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [shortUrl, setShortUrl] = useState("");
  const [formData, setFormData] = useState({
    userId: "",
    originalUrl: "",
  });

  // Handle input changes
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formData);

  // To Post URL-encoded form data
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert form data to URL-encoded format
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("userId", formData.userId);
      urlEncodedData.append("originalUrl", formData.originalUrl);

      // Post the form data to the API endpoint
      const response = await axios.post("/url", urlEncodedData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log(response.data);

      // Check if the response indicates success
      if (response.data.success) {
        alert(response.data.message);
        setShortUrl(`${mainDomain}${response.data.data.shortUrl}`);
      } else {
        alert("Failed to shorten the URL.");
      }
    } catch (error) {
      console.error("Error while posting URL:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // To copy short URL to clipboard
  const handleCopyClick = () => {
    const shortUrlText = document.getElementById("newShortUrl").textContent;

    // Copy the short URL to the clipboard
    navigator.clipboard
      .writeText(shortUrlText)
      .then(() => {
        alert("Short URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <div className="HomePage flex flex-col pt-10 m-3">
        <h1 className="text-blue-600 text-3xl font-semibold">
          Welcome to <span className="text-[#f99106]">{WebsiteName}</span>
        </h1>

        <h2 className="mx-1 p-4">
          <span className="text-orange-400 text-2xl font-sans font-semibold">
            #1
          </span>
          <span className="text-[#34495e] text-2xl font-sans font-semibold">
            Urls Shortener is here...
          </span>
        </h2>

        <p className="shortDesc text-lg mb-2">
          A URL shortener app allows users to convert long URLs into shorter,
          more manageable links. This makes it easier to share URLs across
          social media platforms, emails, or messages. Users can input lengthy
          URLs, and the app generates a concise, unique shortened version.
        </p>

        <p className="text-xl font-mono mx-1 pt-4">Create your URL Here...</p>

        <div className="urlShortner w-[600px]">
          <form onSubmit={handleOnSubmit}>
            <div className="form-group flex items-center gap-4 justify-between">
              <label htmlFor="userId" className="text-lg font-mono w-full">
                User ID:
              </label>

              <input
                type="number"
                name="userId"
                id="userId"
                className="mx-1 my-3 p-1 m-1 w-full"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="form-group flex items-center gap-4 justify-between">
              <label htmlFor="originalUrl" className="text-lg font-mono w-full">
                Enter URL to shorten:
              </label>

              <input
                type="text"
                name="originalUrl"
                id="originalUrl"
                className="mx-1 my-1 p-1 w-full"
                onChange={handleOnChange}
                required
              />
            </div>
            <button
              className="text-white bg-blue-500 p-3 m-2 rounded-md"
              type="submit"
            >
              Short URL
            </button>
          </form>
        </div>

        <div className="shortedUrl gap-4 mt-4 bg-slate-400 w-[600px] p-2">
          <p className="shortUrlName flex items-center gap-4 justify-start text-black">
            <span className="text-lg font-mono w-full"> Short URL:-</span>
            <span
              className="copyShortUrl text-lg font-mono decoration-sky-500"
              id="newShortUrl"
            >
              {shortUrl}
            </span>
            <span className="cursor-pointer p-1" onClick={handleCopyClick}>
              <img src={copy} className="w-10" alt="Copy" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
