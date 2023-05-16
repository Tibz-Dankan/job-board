import { useEffect, useState } from "react";

function Jobs() {
  //   const [jobDetails, setJobDetails] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);

  //   const jobDetails = [];

  useEffect(() => {
    //
    const fetchJobDetails = async (id) => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const data = await response.json();
      setJobDetails((jobsData) => [...jobsData, data]);
      //   jobDetails.push(data);
      console.log("jobDetails");
      console.log(jobDetails);
    };

    const fetchJobIds = async () => {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      const data = await response.json();
      //   console.log("data");
      //   console.log(data);

      data.map((jobId) => {
        fetchJobDetails(jobId);
      });
      //   console.log("jobDetails");x
      //   console.log(jobDetails);
    };

    fetchJobIds();
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      {jobDetails.map((jobDetail, index) => {
        return (
          <p key={index}>
            <span>{jobDetail.title}</span>
            <span>{new Date(jobDetail.time).toLocaleString()}</span>
          </p>
        );
      })}
    </div>
  );
}

export default Jobs;
