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
            <h5 className="center text">
              Looking for a sustainable alternative to everyday products?
            </h5>
            <br />

            
            <Row className="innerRow">
              <div className="container">
                <Col s={1} />
              <Col s={10} className="center">
              <div className="text">Search below for our recommendations...</div>
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
                  <option value="General House">General House Goods</option>
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
                  className="productButton subButton"
                  node="button"
                  style={{
                    marginRight: "5px",
                  }}
                  waves="light"
                >
                  Search
                </Button>
              </Col>
              <Col s={1} />
              </div>
            </Row>
            {products ? (
              <Row>
                <Col s={12}>
                <ProductList>
                    {products.slice(0,2).map(product => {
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
                  </Col>
                </Row>
            ) : ( <div></div> )}
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default CategorySearch;
