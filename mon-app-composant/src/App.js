

import product from './products';
import Name from './composant/Name';
import Price from './composant/Price';
import Description from './composant/Description';
import Image from './composant/Image';
import Card from 'react-bootstrap/Card';
function App()  {
  const firstName = "Ali"; // Remplacez par votre prénom

  return (
    <div>
      <Card style={{ width: '18rem', margin:'20px' }}>
        <Card.Body>
          <Card.Title>Véhicule</Card.Title>
          <Name  nom={product.nom} />
          <Price prix={product.prix}/>
          <Image image={product.imageURL}/>
          <Description  description={product.description}/> 
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <Image imageURL="./image2.png" />} 
  
    </div>
  );
}

export default App;
