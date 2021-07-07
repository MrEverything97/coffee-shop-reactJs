import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardFreeze from './CardFreeze';

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

function FreezeList(props) {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Fire.firestore().collection('products')
      .where('type', '==', 'freeze')
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

export default FreezeList;

// const freezelist = [
//   {
//     id: 1,
//     name: 'CARAMEL PHIN FREEZE',
//     price: 49000,
//     details: 'Thơm ngon khó cưỡng! Được kết hợp từ cà phê truyền thống , cùng với caramel, thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và caramel ngọt ngào. Món nước phù hợp trong những cuộc gặp gỡ bạn bè.',
//     number: 10,
//     size: 'M',
//     image: '/img/freeze/CaramelPhinFreeeze.jpeg',
//     numSelect: 1,
//   },
//
//   {
//     id: 3,
//     name: 'FREEZE TRÀ XANH',
//     price: 49000,
//     details: 'Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!',
//     number: 10,
//     size: 'M',
//     image: '/img/freeze/FreezeLatte.png',
//     numSelect: 1,
//   },
//   {
//     id: 4,
//     name: 'FREEZE SÔ-CÔ-LA',
//     price: 49000,
//     details: 'Thiên đường đá xay sô cô la! Từ những thanh sô cô la Việt Nam chất lượng được đem xay với đá cho đến khi mềm mịn, sau đó thêm vào thạch sô cô la dai giòn, ở trên được phủ một lớp kem whip beo béo và sốt sô cô la ngọt ngào.',
//     number: 10,
//     size: 'M',
//     image: '/img/freeze/FreezeChocolate.jpg',
//     numSelect: 1,
//   },
//
// ];