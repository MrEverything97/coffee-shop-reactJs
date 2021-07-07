import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardFreeze from '../Freeze/CardFreeze';

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

function TeaAndSmoothieList(props) {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Fire.firestore().collection('products')
      .where('type', '==', 'tea')
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
              <CardFreeze product={product}/>
            </Grid>
          );
        })
      }
    </Grid>
  );
}

export default TeaAndSmoothieList;

// const teaandsmoothielist = [
//   {
//     id: 1,
//     name: 'Trà Quất Mật Ong',
//     price: 45000,
//     details: 'Sự xuất hiện của quất và mật ong mang đến hương vị tươi mới cho thức trà truyền thống.cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.',
//     number: 10,
//     size: 'M',
//     image: '/img/tea/TraQuatMatOng.jpeg',
//     numSelect: 1,
//   },
//
//   {
//     id: 2,
//     name: 'Trà Đào Cam Sả',
//     price: 49000,
//     details: 'Vị thanh ngọt của đào Hy Lạp, vị chua dịu của Cam Vàng nguyên vỏ,  cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này. ',
//     number: 10,
//     size: 'M',
//     image: '/img/tea/TraDaoCamXa.png',
//     numSelect: 1,
//   },
//   {
//     id: 3,
//     name: 'Sinh Tố Bơ',
//     price: 59000,
//     details: 'Sự hòa quyện hoàn hảo giữa vị béo ngậy của bơ tươi, vị ngọt thơm của sữa đặc và vị mát lạnh của đá bào sẽ làm xao xuyến bất kì tâm hồn yêu cái đẹp nào.',
//     number: 10,
//     size: 'M',
//     image: '/img/smoothie/SinhToBo.webp',
//     numSelect: 1,
//   },
//   {
//     id: 4,
//     name: 'Sinh Tố Xoài',
//     price: 59000,
//     details: 'Từ những quả xoài to, căng mọng nhất biến tấu cùng sữa tươi và sữa đặc truyền thống,  đem đến thức uống Sinh tố Xoài thơm hương, ngọt vị, mời bạn thưởng thức.',
//     number: 10,
//     size: 'M',
//     image: '/img/smoothie/SinhToXoai.png',
//     numSelect: 1,
//   },
//   {
//     id: 5,
//     name: 'Sinh Tố Cam Xoài',
//     price: 49000,
//     details: 'Vị mứt cam xoài hòa trộn độc đáo với sữa chua, cho cảm giác chua ngọt rất sướng. Điểm nhấn là những mẩu bánh cookie giòn tan giúp sự thưởng thức thêm thú vị.',
//     number: 10,
//     size: 'M',
//     image: '/img/SinhToCamXoai.webp',
//     numSelect: 1,
//   },
//   {
//     id: 6,
//     name: 'Sinh Tố Việt Quất',
//     price: 54000,
//     details: 'Mứt Việt Quất chua thanh, ngòn ngọt, phối hợp nhịp nhàng với dòng sữa chua bổ dưỡng. Là món sinh tố thơm ngon mà cả đầu lưỡi và làn da đều thích.',
//     number: 10,
//     size: 'M',
//     image: '/img/SinhToVietQuat.jpg',
//     numSelect: 1,
//   },
//
// ];