import React, { useState } from "react";
import axios from "axios";
// import DelegatedAuthList from "../DelegatedAuthList";


function RegisterLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    
    const userData = {
      email,
      password
    };
   
    axios
      .post("/api/auth/register_login", userData)
      .then((res) => {
        console.log(res);
        alert("submit includes: " + userData.email + " " + userData.password);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center">
          <h3>Begin your Better Earth lifestyle!</h3>
        </div>
      </div>
      <div className="row">
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">email</i>
              <input
                id="emailLogin"
                type="email"
                className="validate"
                onChange={(e) => {
                  // console.log(email)
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="emailLogin">Email</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">work</i>
              <input 
                id="passwordLogin" 
                type="password" 
                className="validate"
                onChange={(e) => {
                  // console.log(password)
                    setPassword(e.target.value);
                  }} />
              <label htmlFor="passwordLogin">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Login
                <i className="material-icons prefix">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterLogin;

// const SignUpLoginForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const onSubmit = e => {
//         e.preventDefault();

//         const userData = {
//             email,
//             password
//         };
//         axios
//             .post("/api/auth/register_login", userData)
//             .then(res => {
//                 console.log(res);
//             })
//             .catch(err => {
//                 console.log(err);
//                 console.log(err.response);
//             });
//     };

//     return (
//         <Form onSubmit={onSubmit}>
//             <Form.Group controlId="formBasicEmail">
//                 <Row>
//                     <Form.Label column xs="2" sm="1">
//                         <EmailSymbol />
//                     </Form.Label>
//                     <Col xs="10" sm="11">
//                         <Form.Control
//                             type="email"
//                             placeholder="Enter email"
//                             onChange={e => {
//                                 setEmail(e.target.value);
//                                 console.log(email);
//                             }}
//                             required
//                         />
//                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
//                     </Col>
//                 </Row>
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//                 <Row>
//                     <Form.Label column xs="2" sm="1">
//                         <PasswordSymbol />
//                     </Form.Label>
//                     <Col xs="10" sm="11">
//                         <Form.Control
//                             type="password"
//                             placeholder="Password"
//                             onChange={e => setPassword(e.target.value)}
//                         />
//                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                     </Col>
//                 </Row>
//             </Form.Group>
//             <Form.Group controlId="formBasicCheckbox">
//                 <Row>
//                     <Col xs="2" sm="1">
//                         <Form.Check type="checkbox" />
//                     </Col>
//                     <Col xs="10" sm="11">
//                         <Form.Label>
//                             <MutedSpan>
//                                 I hereby confirm that the referral app is allowed to send me emails, up until I
//                                 unsuscribe
//                             </MutedSpan>
//                         </Form.Label>
//                     </Col>
//                 </Row>
//             </Form.Group>
//             <VerticalCenterWrapper>
//                 <SubmitButtom type="submit">Submit</SubmitButtom>
//             </VerticalCenterWrapper>
//         </Form>
//     );
// };

// const SignupLoginModal = props => {
//     return (
//         <Modal show={props.show} onHide={() => props.setShow(false)}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Sign up / Login</Modal.Title>
//             </Modal.Header>
//             <PaddedContainer>
//                 <ResponsiveHeader4>With email:</ResponsiveHeader4>
//                 <br />
//                 <SignUpLoginForm />
//                 <Row style={{ borderBottom: "1px solid #dee2e6" }} />
//                 <ResponsiveHeader4>Or with your favorite third party provider:</ResponsiveHeader4>
//                 <br />
//                 <DelegatedAuthList />
//             </PaddedContainer>
//         </Modal>
//     );
// };

// export default SignupLoginModal;
