import "./App.css";
import { Nav } from "./components/Nav/Nav";

import { useProductContext } from "./context/productContext";

import { Card } from "./components/productCard/Card";

function App() {
  const {  state, dispatch, getUniqueSizes, filteredProducts } =
    useProductContext();


    const filterClearHandler = () => {
      dispatch({type: "FILTER_CLEAR", payload: {price: "", size: [], brand: "", category: ""}})
    }

  return (
    <div className="App">
      <Nav />

      <main className="main">
        <div className="main-wrapper">
          <div className="sidebar-filter">
            <header>
              <h1 className="text-lg">
                Filters <span className="text-sm clear-filter" onClick={() => filterClearHandler()}>Clear</span>
              </h1>
            </header>

            <div className="filters-wrapper">
              <div className="filter">
                <h2 className="filter-name text-md">Price</h2>
                <label className="text-sm">
                  <input
                    type="radio"
                    checked={state.price && state.price === "HIGH_TO_LOW"}
                    name="price"
                    onChange={() =>
                      dispatch({ type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW" })
                    }
                  />
                  <span> Price: High to Low</span>
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    checked={state.price && state.price === "LOW_TO_HIGH"}
                    name="price"
                    onChange={() =>
                      dispatch({ type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH" })
                    }
                  />{" "}
                  <span>Price: Low to High</span>
                </label>
              </div>

              <div className="filter">
                <h2 className="filter-name text-md">Size</h2>

                {getUniqueSizes.map((eachSize, i) => {
                  return (
                    <label className="text-sm" key={i}>
                      <input
                        type="checkbox"
                        checked={state.size.includes(eachSize)}
                        onChange={() =>
                          dispatch({ type: "CLOTHS_SIZE", payload: eachSize })
                        }
                      />
                      <span> {eachSize}</span>
                    </label>
                  );
                })}
              </div>

              <div className="filter">
                <h2 className="filter-name text-md">Brand</h2>
                <label className="text-sm">
                  <input
                    type="radio"
                    checked={state.brand && state.brand === "Pearl"}
                    name="brand"
                    onChange={() =>
                      dispatch({ type: "SORT_BY_BRAND", payload: "Pearl" })
                    }
                  />{" "}
                  <span>Pearl</span>
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    checked={state.brand && state.brand === "Binary Textile"}
                    name="brand"
                    onChange={() =>
                      dispatch({
                        type: "SORT_BY_BRAND",
                        payload: "Binary Textile",
                      })
                    }
                  />{" "}
                  <span>Binary Textile</span>
                </label>
              </div>

              <div className="filter">
                <h2 className="filter-name text-md">Categories</h2>
                <label className="text-sm">
                  <input
                    type="radio"
                    checked={state.category && state.category === "Men"}
                    name="category"
                    onChange={() =>
                      dispatch({ type: "SORT_BY_CATEGORY", payload: "Men" })
                    }
                  />{" "}
                  <span>Men</span>
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    checked={state.category && state.category === "Women"}
                    name="category"
                    onChange={() =>
                      dispatch({ type: "SORT_BY_CATEGORY", payload: "Women" })
                    }
                  />{" "}
                  <span>Women</span>
                </label>
              </div>
            </div>
          </div>
          <div className="product-container">
            <header>
              <h1 className="text-md">Products</h1>
            </header>

            <div className="products-wrapper">
              {filteredProducts.length === 0 ? <h1 className="center grey-text">No Such products</h1> : filteredProducts?.map((eachProduct) => {
                return <Card eachProduct={eachProduct} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
