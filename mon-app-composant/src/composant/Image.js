import React from 'react';
import product from '../products'
const Image = ({ imageURL}) => <img src={imageURL} alt="Produit" style={{ maxWidth: '100%' }} />;

export default Image;