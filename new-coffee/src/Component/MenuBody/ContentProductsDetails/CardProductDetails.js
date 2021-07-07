import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    backgroundColor: '#eae7de',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function CardProductDetails(props) {
  const { detail } = props;
  const classes = useStyles();


  return (

      <div>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={detail.img}
            title={detail.title}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {detail.textContent}
            </Typography>
          </CardContent>

          {/*<CardActions disableSpacing>*/}
          {/*  <Button*/}
          {/*  >*/}
          {/*    Read more*/}
          {/*  </Button>*/}
          {/*</CardActions>*/}
        </Card>
      </div>


  );
}

export default CardProductDetails;