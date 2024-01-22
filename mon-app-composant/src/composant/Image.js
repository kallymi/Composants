// import React from 'react';
// import product from '../products'
// const Image = ({ imageURL}) => <img src={imageURL} alt="Produit" style={{ maxWidth: '100%' }} />;

// export default Image;

// Image.js

import React from 'react';
import product from '../products';
const Image = () => <img src={product.imageURL} alt="Produit" style={{ maxWidth: '100%' }} />;

export default Image;
