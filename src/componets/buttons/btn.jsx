import { useState } from 'react';
import '../../App.css';
import ProductBox from '../product';
import Korzinka from './korzinka';
import GetAge from '../getAge';

function Button() {
  let [inputVal, setInputVal] = useState({
    productName: '',
    productDesc: '',
    productPrice: 0,
  });
  let [count, setCount] = useState(1);
  let [products, setProducts] = useState([]);
  let [shop, setShopVal] = useState([]);

  const handleProductName = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputVal({ ...inputVal, [name]: value });
  };

  function add() {
    if (inputVal.productName === '' || inputVal.productDesc === '') {
      alert('Please Inter product Name');
    } else {
      setProducts((prev) => [...prev, inputVal]);
    }
  }

  function addKor(name, description, price) {
    let currentCartItems = shop;

    const foundItemIndex = currentCartItems.findIndex(
      (item) => item.name === name
    );

    if (foundItemIndex >= 0) {
      currentCartItems[foundItemIndex].count += 1;

      setShopVal([...currentCartItems]);
    } else {
      setShopVal((prev) => [...prev, { name, description, price, count: 1 }]);
    }
  }

  let totalSum = shop.reduce((total, item) => {
    return (total += Number(item.price * item.count));
  }, 0);

  return (
    <>
      <div className="addProducts">
        <input
          onChange={handleProductName}
          type="text"
          name="productName"
          placeholder="Product name"
        />
        <input
          onChange={handleProductName}
          type="text"
          name="productDesc"
          placeholder="Product description"
        />
        <input
          onChange={handleProductName}
          name="productPrice"
          type="text"
          placeholder="Price ..."
        />
        <button onClick={add}>Add</button>
      </div>
      <h1>Cart</h1>
      {products?.map((item) => (
        <div key={item.index}>
          <ProductBox
            productName={item.productName}
            productDesc={item.productDesc}
            productPrice={item.productPrice}
            addKor={() =>
              addKor(item.productName, item.productDesc, item.productPrice)
            }
          ></ProductBox>
        </div>
      ))}

      <div className="corBox">
        <div className="corBox_nav">
          <h1>Shop</h1>

          {shop?.map((item) => {
            function plus() {
              setCount(item.count++);
            }
            function minus() {
              setCount(item.count--);
            }
            item.price * products.count;
            return (
              <Korzinka
                productName={item.name}
                productDesc={item.description}
                productPrice={item.price}
                count={item.count}
                plus={plus}
                minus={minus}
              ></Korzinka>
            );
          })}
        </div>
        <h1>Total sum {totalSum}</h1>
      </div>
    </>
  );
}
export default Button;
