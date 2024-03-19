
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';



const Cards = ({title,id,price,desc,img}) => {
  const navigate = useNavigate();

    return (
    <Card sx={{ maxWidth: 300,boxShadow:5 }}>
      <CardMedia
        sx={{ height: 100, width:80,marginLeft:5 }}
        image={img}
        title="green iguana"/>

    <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{marginLeft:30}}>
          {title.substring(0, 5)}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{marginLeft:30}}>
        {desc.substring(0, 10)}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{marginLeft:30}}>
        {price}
        </Typography>  
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained"
        onClick={() => navigate(`/details/${id}`)}  
        style={{marginLeft:30}}>Add to Card</Button>
      </CardActions>
    </Card>
  );
}

export default Cards;