import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  const navigateToJobDetails = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  useEffect(() => {
    const fetchJobs = async () => {

      const response = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
      const data = await response.json();
      setJobs(data)
      console.log("data")
      console.log(data)

    };

    fetchJobs();
  }, []);

  return (
    <div>
      {jobs.map((jobId) => (
        <p key={jobId} onClick={()=>navigateToJobDetails(jobId)}>{jobId}</p>
      ))}
    </div>
  );
}

export default Jobs;
