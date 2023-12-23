import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { red } from '@mui/material/colors'


const SearchBar = () => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    
    e.preventDefault();
    if(search){
      navigate(`/search/${search}`)
      setSearch('')
    }
  }
  return (

    <Paper component="form" onSubmit={(e)=>{ handleSubmit(e)}} sx={{borderRadius:20,border:'1px solid #e3e3e3',paddingLeft:2,boxShadow:'none',marginRight:{sm:5}}}>
        <input className="search-bar" type="text" placeholder='Search...' value={search} onChange={(e)=>{
          setSearch(e.target.value)
        }} />
        <IconButton type='submit' sx={{p:'10px', color:'red'}}>
            <Search />
        </IconButton>
    </Paper>

  )
  
}

export default SearchBar