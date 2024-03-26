import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OpportunityReviewCard1() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ marginTop:'1rem', marginLeft:'17rem', background: '#f5f5f5', width: 500 , }}>
    
        <CardMedia
        component="img"
        sx={{ width: 81 ,borderRadius:"50rem", mt:'1rem' , ml:'0.5rem'}}
        image="https://www.dell.com/wp-uploads/2021/07/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007594455_003454-440x440.jpg"
        alt="Live from space album cover"
      
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        
      />
      <Typography variant="body2" color="text.secondary" ml={'4rem'} mt={'-5rem'} alignItems={'left'}>
          
          </Typography>
          <Typography textAlign="left" component="div" variant="h6" ml={'6rem'} >
         Ngata Health Fair Day

        </Typography>
        <Typography textAlign="left" variant="subtitle1" color="text.secondary" component="div" ml={'6rem'}fontWeight={500}>
        Date: Tuesday, April 05, 2024<br/>
  
        Time: 9:00 AM - 2:00 PM
          </Typography>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon sx={{color:'darkred'}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ ml:"0.4rem"}}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <CardMedia
        component="img"
        sx={{ width: 500, 
         maxHeight: 190,
         ml:'-1rem',
          // Adjust the height as needed
         objectFit: 'fit', // or 'contain', 'fill', 'scale-down', etc.
     }}
        image="https://img.freepik.com/free-vector/flat-charity-event-twitch-banner_23-2149398088.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1701561600&semt=ais"
        alt="Hope Alive"

       
      />
         <Typography paragraph><b>Venue: Central Park, Main Entrance </b> </Typography>
          <Typography paragraph><b>Number of Volunteers Needed: 50</b> </Typography>
          
          <Typography paragraph>         

          <b>Description: </b> 
          Join us for a day of community service and environmental stewardship at Central Park! Our Community Clean-Up Day aims to beautify our local park, promote environmental awareness, and foster a sense of community pride. Volunteers of all ages are welcome to participate, and no prior experience is necessary.
          </Typography>
          
          </CardContent>
      </Collapse>
    </Card>
  );
}
