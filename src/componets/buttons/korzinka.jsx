function Korzinka(corzinka) {
  return (
    <div className="product-box">
      <img src="image.png" />
      <div>
        <h3>{corzinka.productName}</h3>
        <p>{corzinka.productDesc}</p>
      </div>
      <div className="add">
        <h3 onClick={corzinka.minus}>-</h3>
        <input value={corzinka.count} type="text" />
        <h3 onClick={corzinka.plus}>+</h3>
      </div>
      <p>{corzinka.productPrice}</p>
      <p>{corzinka.productPrice}</p>
    </div>
  );
}
export default Korzinka;
