import React from "react";
import "./style.css";
import Product from "./Product";
import ProductPanel from "./ProductPanel";


//Q1 Create a React component "Product" to display   the following properties. Name, id datePurchased, price 

//defining product properties
const name = "Kettle";
const id = "TB672";
const datePurchased = Date();
const price = "4.00";

// const name2 = "Washing machine";
// const id2 = "AB893";
// const datePurchased2 = "6/4/21";
// const price2 = "1500";



//Q2 Write a toString(...) method to concatenate the properties of the component "Product" defined in the activity 1
function toString(nm,id,date,pr){
  return nm + ", " + id + ", " + date + ", " + pr;

}

//Q3 Apply CSS to change the fonts and font colour.
//This will be done in the style.css file.

// Q4 Add a butoon to display the product information in window.alert
// function clickHandler(){
  // window.alert(toString(name1,id1,datePurchased1,price1))
// }

// function clickHandler2(){
  // window.alert(toString(name2,id2,datePurchased2,price2))
// }


 function App() {
  return (
    <div>
      <Product name = {name} id = {id} datePurchased = {datePurchased} price = {price} /> 
      <br/>
     <ProductPanel/>

      {/* <Product name = {name2} id = {id2} datePurchased = {datePurchased2} price = {price2} /> */}

      {/* <button onClick = {clickHandler}> */}
        {/* Show Product </button> */}
      
        {/* <button onClick = {clickHandler2}> */}
      {/* Show product </button> */}
      
    </div>
  );
}
export default App;

