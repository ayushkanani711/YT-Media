import {useState , useEffect} from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);
  
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=> setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection:{ sx: "column" , md: 'row'}}}>
      <Box sx ={{height:{sx:'auto', md: '92vh'}, borderRight:'1px solid #8f8c8c', px: {sx: 0, md: 2}}}>
        <Sidebar 
          selectedCategory= {selectedCategory} setselectedCategory={setselectedCategory}
        />
        <Typography className='copyright' variant="body2" sx ={{mt:1.5 , color:"#fff"}}>
          copyright @2023 YT Media 
        </Typography>
      </Box>
      <Box p={2} sx={{overflow:'auto',hight:'90vh',flex:2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color: '#F31503'}} >videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed