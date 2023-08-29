import { Box,CardContent, CardMedia , Typography } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";


function ChannelCard({channelDetail: {snippet:{channelId,channelTitle,thumbnails}},marginTop}) {
  
  // console.log(snippet);
  // const {snippet:{channelId,channelTitle,thumbnails}} = channelDetail; --> this way destructure
  
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
        margin:'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column' , justifyContent:'center',textAlign:'center', color:'#FFF' }}>
          <img src={thumbnails?.default?.url || demoProfilePicture} 
              // alt={channelDetail.snippet.channelTitle} 
              style={{borderRadius: '50%',hight:'180px' ,width:'180px', mb:2, border:'1px solid #e3e3e3'}}
          ></img>
          {channelTitle && (<Typography variant="h6">
            {channelTitle}
            <CheckCircle sx={{fontSize:18, color:'grey',ml:0.5,mt:1}}/>
          </Typography>
          )}
          {/* {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="h3">
              {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )} */}
          
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard;