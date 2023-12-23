import React from 'react'
import {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';


const VideoDetail = () => {
    const {id} = useParams()
    const [videoDetail, setvideoDetail] = useState(null)
    console.log("url",`https://www.youtube.com/watch?v=${id}`)
    useEffect(()=>{
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
        .then((data)=>{
            setvideoDetail(data.items[0])
        })
    },[id])
  return (
    <Box minHeight="95vh">
        <Stack direction={{xs:'column',md:'row'}}>
            <Box flex='1'>
                <Box sx={{width:"100%",position:'sticky',top:'86px'}}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
                </Box>

            </Box>
        </Stack>
    </Box>
  )
}

export default VideoDetail