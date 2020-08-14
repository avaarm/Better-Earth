import React, {useEffect} from "react";
import DeleteBtn from "../DeleteBtn";
import { Row, Col, CardPanel } from "react-materialize";
import "./style.css";
import { ListItem, List } from "../List";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_PRODUCT, UPDATE_PRODUCTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

// anything that is materialize react specific has to be imported
function ResultList() {
  const [state, dispatch] = useStoreContext();

  const removeProduct = id => {
    API.deleteProduct(id)
      .then(() => {
        dispatch({ 
          type: REMOVE_PRODUCT,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getProducts = () => {
    dispatch({ type: LOADING });
    API.getProducts()
      .then(results => {
        dispatch({
          type: UPDATE_PRODUCTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <Row>
      <Col s={12}>
        <CardPanel className="productResults">
   

          <span className="white-text">
            <div>
              <h3 className="mb-5 mt-5">Click on a product to view</h3>
              {state.products.length ? (
                <List>
                  {state.products.map((product) => (
                    <ListItem key={product._id}>
                      <Link to={"/products/" + product._id}>
                        <strong>
                          {product.title} by {product.name}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => removeProduct(product._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>You haven't selected any products yet!</h3>
              )}
              <div className="mt-5">
                <Link to="favorites">View favorites</Link>
              </div>
            </div>
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default ResultList;
