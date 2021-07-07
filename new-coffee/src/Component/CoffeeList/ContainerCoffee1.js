import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import Button01 from '../Card/Button1/Button01';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    margin: 'auto',
    backgroundColor: 'white',
    // minHeight: "300px"
  },



}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" style={{width:'100%',paddingLeft:120}}>
          <h1>Cà Phê Phin</h1>
        <h3>
          Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn, là nét văn hóa thưởng
          thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. Cà phê rang xay được chiết xuất chậm rãi từng giọt
          một thông qua dụng cụ lọc bằng kim loại có tên là 'Phin', cũng giống như thể hiện sự sâu sắc trong từng suy
          nghĩ và chân thành trong những mối quan hệ hiện hữu. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung
          với đá, có hoặc không có sữa đặc. House Coffee tự hào phục vụ cà phê Việt theo cách truyền thống của người
          Việt.
        </h3>
        </Grid>
    </div>
  );
}