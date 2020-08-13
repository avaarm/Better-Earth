// import React, { useState } from "react";
// import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
// import Input from "./components/Input";
// import Button from "./components/Button";
// import API from "./utils/API";
// import { ProductList, ProductListItem } from "./components/ProductList";

// function App() {

//   const [products, setProducts] = useState([]);
//   const [productSearch, setProductSearch] = useState("");

//   const handleInputChange = event => {
//     // Destructure the name and value properties off of event.target
//     // Update the appropriate state
//     const { value } = event.target;
//     setProductSearch(value);
//   };

//   const handleFormSubmit = event => {
//     // When the form is submitted, prevent its default behavior, get products update the products state
//     event.preventDefault();
//     API.getProducts(productSearch)
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <Nav />
//       <Jumbotron />
//       <Container>
//         <Row>
//           <Col size="md-12">
//             <form>
//               <Container>
//                 <Row>
//                   <Col size="xs-9 sm-10">
//                     <Input
//                       name="ProductSearch"
//                       value={productSearch}
//                       onChange={handleInputChange}
//                       placeholder="Search For a Product"
//                     />
//                   </Col>
//                   <Col size="xs-3 sm-2">
//                     <Button
//                       onClick={handleFormSubmit}
//                       type="success"
//                       className="input-lg"
//                     >
//                         Search
//                     </Button>
//                   </Col>
//                 </Row>
//               </Container>
//             </form>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="xs-12">
//             {!products.length ? (
//               <h1 className="text-center">No Products to Display</h1>
//             ) : (
//               <ProductList>
//                 {products.map(product => {
//                   return (
//                     <ProductListItem
//                       category={product.catgeory}
//                       key={product.productName}
//                       title={product.title}
//                       href={product.href}
//                       summary={product.summary}
//                       thumbnail={product.thumbnail}
//                     />
//                   );
//                 })}
//               </ProductList>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;