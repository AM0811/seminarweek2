import React from "react";


function ProductPanel(){

  //React Hooks
  const [productname, setProductname] = React.useState();

  function onChangeHandler(event){ //alternatively use const onChangeHandler = (event) =>{}
    let someValue = event.target.value;
    setProductname(someValue); // alternatively  use setProductname(event.target.value) 
  }

  const clear = (event) => {
    setProductname("")
  }
  return (
    <div>

      <input placeholder="Some value to enter"  value={productname} onChange = {onChangeHandler}/>
      
      <br/>
      {productname}
      <br/>
      <button onClick = {event => clear()}>
        clear 
        </button>

    </div>
)

}

export default ProductPanel;