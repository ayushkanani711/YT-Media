import {useState , useEffect} from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{ sx: "column" , md: 'row'}}}>
      <Box sx ={{height:{sx:'auto', md: '92vh'}, borderRight:'1px solid #8f8c8c', px: {sx: 0, md: 2}}}>
        <Sidebar />
        <Typography className='copyright' variant="body 2" sx ={{mt:1.5 , color:"#fff"}}>
          copyright 2022 JSM Media 
        </Typography>
      </Box>
      <Box p={2} sx={{overflow:'auto',hight:'90vh',flex:2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
          New <span style={{color: '#F31503'}} >videos</span>
        </Typography>
        <Videos videos={[ ]} />
      </Box>
    </Stack>
  )
}

export default Feed