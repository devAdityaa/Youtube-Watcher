import React from 'react'
import {useState, useEffect} from 'react'
import {Box, Typography} from "@mui/material"
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'
import {MutatingDots} from 'react-loader-spinner'

const Search = () => {
  const [videos, setVideos] = useState([])
  const [load, setLoad] = useState(false)
  const {searchItem} = useParams();
  console.log(searchItem)
  useEffect(()=>{
    setLoad(true)
    fetchFromApi(`search?q=${searchItem}&part=snippet,id&regionCode=IN&maxResults=50&order=viewCount`)
    .then((data)=>{
      setVideos(data.items)
      setLoad(false)
    })
  },[searchItem])
  return (
      
  
  <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2,background:"#000"}}>
    <Typography fontWeight="bold" variant='h4' mb={2} sx={{color:"#fff"}}>
      Search Results For: <span style={{"color":"#f31503"}}>{searchItem} videos</span>
    </Typography>
    {load?(<MutatingDots visible={true}
  height="100"
  width="100"
  color="#f31503"
  secondaryColor="#f31503"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{position:'absolute',left:"50%", top:"50%", transform:"translate(-50%,-50%)"}}></MutatingDots>):(<Videos videos={videos}></Videos>)}
  </Box>
  )
}

export default Search