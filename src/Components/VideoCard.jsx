import React from 'react'
import { Link } from 'react-router-dom';
import { Card,Typography,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:"358px",md:320},boxShadow:'none',borderRadius:1} }>
        <Link to={videoId? `/video/${videoId}`:`/`}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:{
                xs:"100%", sm:"358px", md:320
            },height:180}}
            />
            <CardContent 
            sx={{backgroundColor:'#1e1e1e',height:'106px'}}
            >
                <Link 
                to={videoId? `/video/${videoId}`:`/`}>
                    <Typography 
                    variant='subtitle1' 
                    fontWeight='bold' 
                    color='#fff'>
                        {snippet?.title.slice(0,60)+"..."}
                    </Typography>
                </Link>
                <Link 
                to={snippet.channelId? `/channel/${snippet?.channelId}`:`/`}>
                    <Typography 
                    variant='subtitle2' 
                    fontWeight='bold' 
                    color='gray'>
                        {snippet?.channelTitle}
                        <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard