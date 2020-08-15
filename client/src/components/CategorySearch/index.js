import React, { useState } from "react";
import { Row, Col, CardPanel, Select, Button } from "react-materialize";
import API from "../../utils/API";
import { ProductList, ProductListItem } from "../ProductList";
import "./style.css";


function CategorySearch() {
  const [products, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setProductSearch(value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get products update the products state
    event.preventDefault();
    console.log(productSearch);
    API.getProductsByCategory(productSearch)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  };

  return (
    <Row className="outerRow">
      <Col s={12}>
        <CardPanel className="outerCard">
          <span className="white-text">
            <h5 className="center">
              Looking for a sustainable alternative to everyday products?
            </h5>
            <br />

            <div>Search below for our recommendations...</div>
            <Row className="innerRow">
              <Col s={10}>
                <Select
                  s={12}
                  id="prod-type"
                  name="ProductSearch"

                  multiple
                  options={{
                    classes: "",
                    dropdownOptions: {
                      alignment: "left",
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250,
                    },
                  }}
                  // value={[""]}                  
                  value={productSearch}
                  onChange={handleInputChange}
                >
                  <option disabled value=""></option>
                  <option value="Accessories">Accessories</option>
                  <option value="Bathroom">Bathroom</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Shoes">Shoes</option>
                  <option value="General House Goods">General House Goods</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Storage">Storage</option>
                  <option value="Outdoor Gear">Outdoor Gear</option>
                  <option value="Other">Other</option>
                </Select>

                <CardPanel className="innerCard">
                  <span className="white-text"></span>
                </CardPanel>
                <Button
                  onClick={handleFormSubmit}
                  type="success"
                  className="productButton"
                  node="button"
                  style={{
                    marginRight: "5px",
                  }}
                  waves="light"
                >
                  Search
                </Button>
              </Col>
            </Row>
            {!products.length ? (
              <h1 className="text-center">No Products to Display</h1>
            ) : (
              <ProductList>
                {products.slice(0, 4).map(product => {
                  return (
                    <ProductListItem
                      category={product.catgeory}
                      key={product.productName}
                      title={product.title}
                      href={product.href}
                      summary={product.summary}
                      thumbnail={product.thumbnail}
                    />
                  );
                })}
              </ProductList>
            )}
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default CategorySearch;
