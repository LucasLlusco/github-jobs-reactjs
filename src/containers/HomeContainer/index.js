
import React, { useEffect, useState } from 'react'
import { Container, JobsSectionWrapper, NoResults, } from './styled'
import data from '../../data/data.json' 
import SearchBar from '../../components/home/SearchBar/index';
import FilterPanel from '../../components/home/FilterPanel/index';
import ItemList from '../../components/home/ItemList/index';


const HomeContainer = () => {
    const [jobs, setJobs] = useState(data) 
    const [selectedType, setSelectedType] = useState(null);
    const [selectedLocationRadio, setSelectedLocationRadio] = useState(null);
    const [locationInput, setLocationInput] = useState("");
    const [searchInput, setSearchInput] = useState("")
    const [checked, setChecked] = useState(false);

    const handleType = (e) => { 
        if (checked === false) { 
            setSelectedType(e.target.value);
        } else { 
            setSelectedType(null)
        }
        setChecked(!checked) 
    }
    const handleLocationRadio = (e) => { 
        setSelectedLocationRadio(e.target.value);
    }
    const handleLocationInput = (e) => {
        setLocationInput(e.target.value);
    }
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }
    const applyFilters = () => {
        let filteredJobs = [...data]; 

        if (selectedType) {
            filteredJobs = filteredJobs.filter(job => job.type == selectedType);
        }
        if (selectedLocationRadio) { 
            if (selectedLocationRadio !== "All") {
                filteredJobs = filteredJobs.filter(job => job.location == selectedLocationRadio);
            }
        }
        if (locationInput) {
            filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(locationInput.toLowerCase()));            
        }
        if (searchInput) { 
            filteredJobs = filteredJobs.filter(job => 
                job.title.toLowerCase().includes(searchInput.toLowerCase()) || 
                job.company.toLowerCase().includes(searchInput.toLowerCase()) ||
                job.description.toLowerCase().includes(searchInput.toLowerCase()) 
            );            
        }
        setJobs(filteredJobs) 
    }
    useEffect(() => {
        applyFilters();
    }, [selectedType, selectedLocationRadio, locationInput, searchInput]) 
    
  return (
    <Container>
        <SearchBar value={searchInput} changeInput={handleSearchInput}/>
        <JobsSectionWrapper>
            <FilterPanel 
                changeType={handleType}
                value={locationInput}
                changeInput={handleLocationInput}
                changeLocationRadio={handleLocationRadio}/>
            {jobs.length === 0 ? ( 
                <NoResults>No results found.</NoResults>
            ) : (
                <ItemList items={jobs}/> 
            )}
        </JobsSectionWrapper>
    </Container>
  )
}

export default HomeContainer
