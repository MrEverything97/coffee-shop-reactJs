import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TangGiamSL from '../TangGiamSL';
import rtn from 'reactn';
import moment from 'moment';
import { db } from '../../../../firebaseConfig';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import ChọnCỡ from '../ChọnCỡ';
import CartDialog from '../../../MenuAppbar1/CartDialog/CartDialog';


function CardTeaAndSmoothie({ product }) {
  const classes = useStyles();
  const [user] = rtn.useGlobal('user');
  const [carts] = rtn.useGlobal('carts');
  const [productCart, setProductCart] = useState(product);

  const handleAddCart = async () => {
    if (!product)
      return;
    let soLuongDaChon = productCart?.soLuongDaChon || 1;
    let sizeDangChon = productCart?.sizeDangChon || 'S';
    let cartInfo = {
      idProduct: productCart.id,
      name: productCart.name,
      soLuongDaChon,
      sizeDangChon,
      userId: user.uid,
      daThanhToan: false,
      img: productCart.img,
      giaDangChon: productCart.size[sizeDangChon],

    };
    // tim kiem trong danh sach dat hang neu da co san pham cung voi size da ton tai
    let index = _.findIndex(carts, c => c.idProduct === cartInfo.idProduct && c.userId === user.uid && c.sizeDangChon === cartInfo.sizeDangChon);


    // neu da ton tai thi update
    if (index !== -1) {
      await db.collection('carts').doc(carts[index].id).set({
        ...cartInfo, updatedAt: moment().format(),
      }, { merge: true });
      return;
    }
    // neu khong ton tai thi them moi
    let cartId = 'cart_' + uuidv4();
    await db.collection('carts').doc(cartId).set({
      ...cartInfo,
      createdAt: moment().format(),
      updatedAt: moment().format(),
    }, { merge: true });

    // Add a new document in collection "cities"

  };


  if (!product)
    return null;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.img}
        title={product.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.name} variant="body2" color="textSecondary" component="p">
          {product.name}
        </Typography>
        <Typography className={classes.details} variant="body2" color="textSecondary" component="p">
          {product.details}
        </Typography>

      </CardContent>
      <Grid container alignContent={'center'}>
        <Grid item xs={6}>
          <ChọnCỡ productCart={productCart} setProductCart={setProductCart}/>
        </Grid>
        <Grid item xs={6}>
          <CardActions disableSpacing>
            <div className={classes.cart}>
              <TangGiamSL productCart={productCart} setProductCart={setProductCart}/>
            </div>
          </CardActions>
        </Grid>
      </Grid>
      <div className={classes.buttoncontent}>
        <button className={classes.button} onClick={handleAddCart}>
          Chọn mua
        </button>
        <CartDialog productCart={productCart} setProductCart={setProductCart}/>
      </div>

    </Card>
  );
}

export default CardTeaAndSmoothie;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 3,
  },
  details: {
    textAlign: 'justify',
    marginBottom: 3,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'red',
  },
  value: {
    margin: '0 5px',
  },
  content: {
    display: 'flex',
  },
  sizecontent: {
    margin: '10px 50px',
  },
  cartcontent: {
    margin: '20px 60px',
  },
  buttoncontent: {
    paddingLeft: '31%',
    paddingBottom: '10%',
    border: '50px',
  },
  button: {
    fontSize: '30px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

  },
}));