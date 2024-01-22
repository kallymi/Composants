

import React from 'react';
import product from './products';
import Name from './composant/Name';
import Price from './composant/Price';
import Description from './composant/Description';
import Image from './composant/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App()  {
  const firstName = prompt("Donnezvotre prenom");
  return (
    <div>
        <Card style={{ width: '18rem' }}>
          <Name />
          <Image/>
          <Description /> 
          <Price prix={product.prix}/>
          <p>Hello, {firstName ? firstName : 'there'}!
          {firstName && <image src="/image/image2.png" alt="image"/>} </p>
        </Card>
    </div>
  );
}

export default App;


