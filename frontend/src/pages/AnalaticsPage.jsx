import React, { useEffect, useState } from "react";
// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4001/";

function AnalyticsPage() {
  const [data, setData] = useState([]); // Changed from "" to an empty array assuming you're expecting multiple URLs

  useEffect(() => {
    // getAllData();
  }, []);

  return (
    <>
      <h1 className="text-primary mx-5">Analytics Page</h1>
    </>
  );
}

export default AnalyticsPage;
