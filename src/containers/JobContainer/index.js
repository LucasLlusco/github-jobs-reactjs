import React from 'react'
import { Container } from './styled'
import { useParams } from 'react-router-dom'
import data from '../../data/data.json'
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/job/ItemDetail';

const JobContainer = () => {
  const [job, setJob] = useState(data) 
  const { jobId } = useParams(); 
  
  useEffect(() => {
    const item = job.find((element) => element.id === jobId)
    setJob(item)
  }, [jobId]) 
  
  return (
    <Container>
      <ItemDetail item={job} />
    </Container>
  )
}

export default JobContainer