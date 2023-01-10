import React from 'react';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const ShopListItem = ({ dispatch, id, title, description, price, thumbnail }) => (
    <Grid item key={id} xs={12} sm={6} md={4}>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={thumbnail}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        <Link to={`/shop/${id}`}>{title}</Link>
        </Typography>
        <Typography gutterBottom>
          {description}
        </Typography>

      </CardContent>
      <CardActions align="right">
      <Typography variant="h4">
      ${price}
    </Typography>
      </CardActions>
    </Card>
  </Grid>

);

export default ShopListItem;