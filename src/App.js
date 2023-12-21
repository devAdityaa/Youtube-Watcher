import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import { Feed,Nav,Channel,Search,Videos } from './Components'
const App = () => (
    <BrowserRouter>
        <Box>
            <Nav />
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path='/video/:id' exact element={<Videos/>}/>
                <Route path='/channel/:id' exact element={<Channel/>}/>
                <Route path='/search/:searchItem' exact element={<Search/>}/>

            </Routes>

        </Box>
    </BrowserRouter>
  )

export default App;