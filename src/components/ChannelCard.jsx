import { Box,CardContent, CardMedia , Typography } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";


function ChannelCard(channelDetail,snippet) {
  return (
    <Box
      sx={{
        boxShadow:'none',
        borderRadius:'20px', 
        display:'flex',
        justifyContent:'center', 
        alignItems:'center',
        width:{xs:'356px', md:'320px' },
        hight:'326px',
        margin:'auto'
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column' , justifyContent:'center',textAlign:'center', color:'#FFF' }}>
          <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={snippet.channelTitle} style={{borderRadius: '50%',hight:'180px' ,width:'180px', mb:2, border:'1px solid #e3e3e3'}}></img>
          <Typography variant="h6">
            {snippet.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:18, color:'grey',ml:0.5,mt:1}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="h3">
              {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
          
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard;