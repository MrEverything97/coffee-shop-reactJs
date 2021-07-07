import React from 'react';
import ContentBodyDrinks from './ContentBodyDrinks';
import Footer1 from '../../../../Footer/Footer1';
import ContentTopDrinks from './ContentTopDrinks';

function ContentDrinks(props) {
  return (
    <div>
      <ContentTopDrinks/>
      <ContentBodyDrinks/>
      <Footer1/>
    </div>
  );
}

export default ContentDrinks;