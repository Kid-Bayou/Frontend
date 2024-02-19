import Counter from "./Counter";
import Temperature from "./Temperature";
import "./App.css";

function App() {
  // ************

  let item = ["Egg", 24, 2];
  const [itemName, price, quantity] = item;

  // ************

  let user = {
    name: "John",
    gender: "Male",
    age: 30,
  };
  const { name, gender, age } = user;

  // ************

  const fruits = ["apple", "banana", "orange", "mango", "grape"];
  const [firstFruit, ...otherFruits] = fruits;

  // ************

  const products = [
    { name: "TV", category: "electronics", price: 500 },
    { name: "Laptop", category: "electronics", price: 1000 },
    { name: "Bananas", category: "groceries", price: 2 },
    { name: "Apples", category: "groceries", price: 3 },
    { name: "Phone", category: "electronics", price: 700 },
  ];
  const electronicProducts = products.filter(
    (product) => product.category === "electronics"
  );
  const groceriesProducts = products.filter(
    (product) => product.category === "groceries"
  );

  // ************

  const names = ["Alice", "Bob", "Charlie"];
  const moreNames = [...names, "David", "John"];

  return (
    <>
      <Counter />
      <Temperature />
    </>
  );
}

export default App;
