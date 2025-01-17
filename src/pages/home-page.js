import React from 'react'
import JobList from '../components/job-list'
import {jobs} from "../lib/data"

const HomePage = () => {
  return (
    <div className=''>

       <h1 className='title'>Ажлын зар</h1>
  
        <JobList jobs={jobs}/>

    </div>
  )
}

export default HomePage