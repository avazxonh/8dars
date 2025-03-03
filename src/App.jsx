import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const [method, setMethod] = useState("GET");
  const [productName, setProductName] = useState(null);
  const [productDesc, setProductDesc] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productBrand, setProductBrand] = useState(null);
  const [productCategory, setProductCategory] = useState(null);

  const newProduct = {
    title: productName,
    description: productDesc,
    price: productPrice,
    brand: productBrand,
    category: productCategory,
  };

  const { data, isPending, error } = useFetch(url, method, newProduct);

  return (
    <div className="wrapper">
      <h1>LOG IN</h1>
      <form>
        <div className="div-input">
          <label>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={(e) =>
                setProductName((prev) => (prev = e.target.value))
              }
            />
          </label>
        </div>

        <div className="div-input">
          <label>
            <input
              type="text"
              placeholder="text"
              name="text"
              onChange={(e) =>
                setProductDesc((prev) => (prev = e.target.value))
              }
            />
          </label>
        </div>

        <div className="div-input">
          <label>
            <input
              type="number"
              placeholder="price"
              name="number"
              onChange={(e) =>
                setProductPrice((prev) => (prev = e.target.value))
              }
            />
          </label>
        </div>

        <div className="div-input">
          <label>
            <input
              type="text"
              placeholder="text"
              name="text"
              onChange={(e) =>
                setProductBrand((prev) => (prev = e.target.value))
              }
              required
            />
          </label>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            setMethod((prev) => prev == "POST");
            console.log(method);
          }}
        >
          post
        </button>
      </form>
    </div>
  );
}

export default App;
