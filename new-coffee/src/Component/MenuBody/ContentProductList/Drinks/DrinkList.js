import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardDrink from './CardDrink';

const useStyles = makeStyles(theme => ({
  gridRoot: {
    width: '100%',
    margin: '30px 0',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  nullDrink: {
    textAlign: 'center',
    color: 'red',
  },
}));

function DrinkList(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Fire.firestore().collection('products')
      .where('type', '==', 'coffee')
      .onSnapshot(snapshot => {
        if (snapshot.docs.length) {
          const l = snapshot.docs.map(d => {
            return { id: d.id, ...d.data() };
          });
          setProductList(l);
        }
      });
  }, []);

  if (productList.length === 0)
    return <div className={classes.nullDrink}>No drink available</div>;
  return (
    <Grid container className={classes.gridRoot} spacing={2}>
      {
        productList.map((product, index) => {
          return (
            <Grid key={index} item md={4} sm={6} xs={12} className={classes.gridItem}>
              <CardDrink product={product}/>
            </Grid>
          );
        })
      }
    </Grid>
  );
}

export default DrinkList;

// const drinkList = [
//   {
//     id: 1,
//     name: 'CARAMEL MACCHIATO',
//     price: 59000,
//     details: 'Thỏa mãn cơn thèm ngọt! Ly cà phê Caramel Macchiato bắt đầu từ dòng sữa tươi và lớp bọt sữa béo ngậy, sau đó hòa quyện cùng cà phê espresso đậm đà và sốt caramel ngọt ngào. Thông qua bàn tay điêu luyện của các chuyên gia pha chế, mọi thứ hoàn toàn được nâng tầm thành nghệ thuật! .',
//     number: 10,
//     size: 'M',
//     image: '/img/drinks/CaramelMacchiato.jpg',
//     numSelect: 1,
//   },
//   {
//     id: 2,
//     name: 'LATTE',
//     price: 54000,
//     details: 'Ly cà phê sữa ngọt ngào đến khó quên! Với một chút nhẹ nhàng hơn so với Cappuccino, Latte của chúng tôi bắt đầu với cà phê espresso, sau đó thêm sữa tươi và bọt sữa một cách đầy nghệ thuật. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.',
//     number: 10,
//     size: 'M',
//     image: '/img/drinks/Latte.png',
//     numSelect: 1,
//   },
//   {
//     id: 3,
//     name: 'CAPPUCCINO',
//     price: 54000,
//     details: 'Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte, Cappuccino của chúng tôi bắt đầu với cà phê espresso, sau đó thêm một lượng tương đương giữa sữa tươi và bọt sữa cho thật hấp dẫn. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.',
//     number: 10,
//     size: 'M',
//     image: '/img/Cappuccino.jpg',
//     numSelect: 1,
//   },
//   {
//     id: 4,
//     name: 'MOCHA MACCHIATO',
//     price: 59000,
//     details: 'Một thức uống yêu thích được kết hợp bởi giữa sốt sô cô la ngọt ngào, sữa tươi và đặc biệt là cà phê espresso đậm đà. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.',
//     number: 10,
//     size: 'M',
//     image: '/img/drinks/MochaMacchiato.png',
//     numSelect: 1,
//   },
//   {
//     id: 1,
//     name: 'ESPRESSO',
//     price: 45000,
//     details: 'Đích thực là ly cà phê espresso ngon đậm đà! Được chiết xuất một cách hoàn hảo từ loại cà phê rang được phối trộn độc đáo từ những hạt cà phê Robusta và Arabica chất lượng hảo hạng.',
//     number: 10,
//     size: 'M',
//     image: '/img/drinks/Espresso.png',
//     numSelect: 1,
//   },
//   {
//     id: 1,
//     name: 'CARAMEL MACCHIATO',
//     price: 59000,
//     details: 'Americano là sự kết hợp giữa cà phê espresso thêm vào nước đun sôi. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.',
//     number: 10,
//     size: 'M',
//     image: '/img/drinks/Americano.png',
//     numSelect: 1,
//   },
// ];