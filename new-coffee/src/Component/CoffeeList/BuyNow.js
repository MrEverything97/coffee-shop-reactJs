import React from 'react';
import { Button } from '@material-ui/core';
import BadgeList from '../Badge/BadgeList';
import { db } from '../../firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

function BuyNow(props) {

  const testDb = () => {
    let id = 'doc_' + uuidv4();
    console.log('start');
    const fieldTest = {
      name: 'thanh',
      age: 30,
      sex: 'Nam',
    };
    db.collection('users')
      .doc(id)
      .set(fieldTest)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <div>
      <BadgeList/>

      <Button variant={'outline'} color="black" style={{ backgroundColor: '#b0bec5' }} onClick={testDb}>
        Buy now
      </Button>
    </div>
  );
}

export default BuyNow;