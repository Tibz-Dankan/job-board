import React from 'react';
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import Jobs from './components/Jobs';
import JobsDetails from './components/JobDetails';


function App() {

  const router = createBrowserRouter([
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/jobs/:id",
      element: <JobsDetails />,
    },
    {
      path: "*",
      element: <Navigate to="/jobs" />,
    },
 
  ]);

  return (
  <div>
       <RouterProvider router={router} />
  </div>
  );
}

export default App;
