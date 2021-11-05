import React from 'react';

import "./style.css";



//Props are like function arguments sent into the component as attibutes. 
export default function Product(props){
  return(
    <div>
      {props.name} {props.id} {props.datePurchased} {props.price}
      </div>
  )
  }
