import React from 'react'
import {useState, useEffect} from 'react'
import {Box, Typography} from "@mui/material"
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

const Search = () => {
  const [videos, setVideos] = useState([])
  const {searchItem} = useParams();
  console.log(searchItem)
  useEffect(()=>{
    fetchFromApi(`search?q=${searchItem}&part=snippet,id&regionCode=US&maxResults=50&order=viewCount`)
    .then((data)=>{
      setVideos(data.items)
    })
  },[searchItem])
  return (
      
  
  <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2,background:"#000"}}>
    <Typography fontWeight="bold" variant='h4' mb={2} sx={{color:"#fff"}}>
      Search Results For: <span style={{"color":"#f31503"}}>{searchItem} videos</span>
    </Typography>
    <Videos videos={videos}></Videos>
  </Box>
  )
}

export default Search