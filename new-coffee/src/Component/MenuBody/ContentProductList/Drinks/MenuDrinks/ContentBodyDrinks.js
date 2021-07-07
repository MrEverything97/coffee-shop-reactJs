import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SizeDrinkds from '../../SizeContent';
import CartDrinks from '../../TangGiamSL';
import * as reactn from 'reactn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: '60px',
      width: '35%',
      height: '50vh',
    },
  },
  img: {
    width: '100%',
  },
  content: {
    margin: '40px',
  },
  name: {
    fontSize: '40px',
  },
  text: {
    fontSize: '25px',
    paddingTop: '20px',

  },
  price: {
    fontSize: '20px',
    color: 'red',
    margin: '20px',
  },
  cart: {
    paddingTop: '20px',
    display: 'flex',

  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 50,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: '0 30px 0 60px',
    fontSize: 20,

  },

}));

export default function ContentBodyDrinks(props) {
  const classes = useStyles();
  const [carts, setCarts] = reactn.default.useGlobal('carts');
  const [count, setCount] = React.useState(1);
  const [size, setSize] = React.useState('M');
  const { drinklist } = props;
  console.log(carts);

  const handleAddCart = () => {
    drinklist.push(
      {
        id: 'test',
        num: count,
        size: size,
      },
    );
    setCarts([...carts]);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <img className={classes.img} src="../img/drinks/1.jpg" alt=''/>
      </Paper>
      <div className={classes.content}>
        <div className={classes.name}>
          Caramel Machhiato
        </div>
        <div className={classes.text}>
          Thỏa mãn cơn thèm ngọt! Ly cà phê Caramel Macchiato bắt đầu từ dòng sữa tươi và lớp bọt sữa béo ngậy, sau đó
          hòa quyện cùng cà phê espresso đậm đà và sốt caramel ngọt ngào. Thông qua bàn tay điêu luyện của các chuyên
          gia pha chế, mọi thứ hoàn toàn được nâng tầm thành nghệ thuật! Bạn có thể tùy thích lựa chọn uống nóng hoặc
          dùng chung với đá.
        </div>
        <div className={classes.price}>
          Giá: 59,000 VNĐ.
        </div>
        <div>
          <SizeDrinkds/>

        </div>
        <div className={classes.cart}>
          <CartDrinks count={count} setCount={setCount}/>
          <button className={classes.button} onClick={handleAddCart}>
            Chọn mua
            {/*<DialogDrinks/>*/}
          </button>
        </div>

      </div>
    </div>
  );
}
