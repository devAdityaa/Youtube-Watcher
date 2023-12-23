import React from 'react'
import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from "@mui/material"
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
import {MutatingDots} from 'react-loader-spinner'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [load, setLoad] = useState(false)
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    setLoad(true)
    
    fetchFromApi(`search?q=${selectedCategory}&part=snippet,id&regionCode=US&maxResults=50`)
    .then((data)=>{
      setVideos(data.items)
      setLoad(false)
    })
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row",background:"#000"}}}>
      <Box sx={{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{sx:0,md:2}}}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></Sidebar>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:"#fff"}}>
          Copyright 2023 Debaditya
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
        <Typography fontWeight="bold" variant='h4' mb={2} sx={{color:"#fff"}}>
          {selectedCategory} <span style={{"color":"#f31503"}}>Videos</span>
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
      
    </Stack>
  )
}

export default Feed