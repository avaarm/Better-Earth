import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col, CardTitle, Card, Icon } from "react-materialize";

// Exporting both ProductList and ProductListItem from this file

// ProductList renders a list item
export function ProductList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// ProductListItem renders a list item containing data from the product call
export function ProductListItem({
  category,
  name,
  thumbnail,
  title,
  summary,
  href,
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col m={6} s={12}>
            <Card
              closeIcon={<Icon>{thumbnail}</Icon>}
              header={
                <CardTitle
                  image="https://materializecss.com/images/sample-1.jpg"
                  reveal
                  waves="dark"
                />
              }
              reveal={<p>{summary}</p>}
              revealIcon={<Icon>more_vert</Icon>}
              title={title}
            >
              <p>
                <a href={href}></a>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

// import React from "react";
// import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "react-materialize";

// // Exporting both ProductList and ProductListItem from this file

// // ProductList renders a list item
// export function ProductList({ children }) {
//   return <ul className="list-group">{children}</ul>;
// }

// // ProductListItem renders a list item containing data from the product call
// export function ProductListItem({
//   category,
//   name,
//   thumbnail,
//   title,
//   summary,
//   href
// }) {
//   return (
//     <li className="list-group-item">
//       <Container>
//         <Row>
//           <Col size="xs-4 sm-2">
//             <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
//           </Col>
//           <Col size="xs-8 sm-9">
//             <h3>{category}</h3>
//             <h3>{title}</h3>
//             <h3>{name}</h3>
//             <p>Information: {summary}</p>
//             <a rel="noreferrer noopener" target="_blank" href={href}>
//               Go to product!
//             </a>
//           </Col>
//         </Row>
//       </Container>
//     </li>
//   );
// }

// import React from "react";
// import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "react-materialize";

// // Exporting both ProductList and ProductListItem from this file

// // ProductList renders a list item
// export function ProductList({ children }) {
//   return <ul className="list-group">{children}</ul>;
// }

// // ProductListItem renders a list item containing data from the product call
// export function ProductListItem({
//   category,
//   name,
//   thumbnail,
//   title,
//   summary,
//   href
// }) {
//   return (
//     <li className="list-group-item">
//       <Container></Container>

// <Row>
//   <Col
//     m={6}
//     s={12}
//   >
//     <Card
//       closeIcon={<Icon>{thumbnail}</Icon>}
//       header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
//       reveal={<p>{product.summary}</p>}
//       revealIcon={<Icon>{product.summary}</Icon>}
//       title="Card Title"
//     >
//       <p>
//         <a href={product.href}>

//         </a>
//       </p>
//     </Card>
//   </Col>
// </Row>
// </Container>
//     </li>
//   );
// }
