import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import {Videos , ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = ({id}) => {
  
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])

  // const {id} = useParams();

  console.log(`id is...${id}`);
  console.log(`it is channelDetail... ${channelDetail}`);

  useEffect(()=> {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data)=>setchannelDetail(data?.items));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setvideos(data?.items));
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'rgb(2,0,36)',
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 21%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box sx={{mr: {sm:'100px'}}} >
        {videos && videos.length > 0 ? (<Videos videos={videos} />) : (<p>Loading videos...</p>)}
      </Box>

    </Box>
  )
}

export default ChannelDetail