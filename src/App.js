import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box, colors } from '@mui/material';
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './components'

function App(){
  return(

      <BrowserRouter>
      <Box sx={{background: '#000', color: '#111'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' exact element={<VideoDetail />} />
          <Route path='/channel/:id' exact element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )

}
export default App;