import React from 'react'
import { Box } from '@mui/material'
import {MutatingDots} from 'react-loader-spinner'
const Loader = () => {
  return (
    <Box sx={{width:"100%", height:"92vh", background:"#000"}}>
        <MutatingDots 
visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor="#4fa94d"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{position:'relative',left:"50%", top:"50%", transform:"translate(-50%,-50%)"}}></MutatingDots>
    </Box>
  )
}

export default Loader