function ProductBox(props) {
  return (
    <div className="product-box">
      <img src="image.png" />
      <div>
        <h3>{props.productName}</h3>
        <p>{props.productDesc}</p>
      </div>
      <div className="add">
        <h3 onClick={props.minus}>-</h3>
        <input value={props.count} type="text" />
        <h3 onClick={props.plus}>+</h3>
      </div>
      <p>{props.productPrice}</p>
      <p>{props.productPrice}</p>
      <button onClick={props.addKor}>Add Korzinka</button>
    </div>
  );
}
export default ProductBox;
