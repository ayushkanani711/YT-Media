import {Link} from 'react-router-dom';
import { Typography,Card , CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants';
import { color } from '@mui/system';

function VideoCard({video: {id:{videoId},snippet}}) {
  console.log(snippet?.thumbnails?.high?.url);
  return (
    <Card sx={{width:{ md:'320px',xs:'100%'},boxShadow:'none',borderRadius:0}}>
      {/* <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt ={snippet?.title} sx={{width:358,hight:180}} />
      </Link> */}
  <CardContent sx={{background:'#1e1e1e' , hight:'80px', padding:0 }} >
    <img src={snippet.thumbnails.default.url} height={180} width={358} />
    <div style={{maxWidth :'42ch',overflow:'hidden',textoverflow: 'ellipsis' ,color:'white'}}>{snippet.title.slice(0,60) || demoVideoTitle.slice(0,60)}</div>
    <Typography variant="subtitle2" fontWeight="bold" color="grey" >
      {snippet.channelTitle || demoChannelTitle}
      <CheckCircle sx={{fontSize:12, ml:0.5}}/>
    </Typography>
    
  </CardContent>
    </Card>
  )
}

export default VideoCard;