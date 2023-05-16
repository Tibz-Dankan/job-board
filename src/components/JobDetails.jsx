import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function JobsDetails() {
  const [jobDetails, setJobDetails] = useState([]);

// const date4Roman4 = date4.toLocaleString();
// console.log(date4Roman4); //7/3/2022, 3:08:17 AM

  const {  id } = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      const data = await response.json();
      
      setJobDetails(data)
      console.log("data2")
      console.log(data)
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <p>{jobDetails.title}</p>
      <p>{new Date(jobDetails.time).toLocaleString()}</p>
    </div>
  );
}

export default JobsDetails;
