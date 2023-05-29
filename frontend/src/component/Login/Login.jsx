// import React from "react";
// import "./login.css";

// function Login() {
//   return (
//     <>
//       <div className="LoginPage container-fluid p-5">
//         <div className="container row justify-content-center">
//           {/* <div className="col-6">
//             <img
//               src="../../images/login.avif"
//               alt="Welcome Login"
//               height="500px"
//               width="542px"
//             />
//           </div> */}
//           <div className="col-4 LoginPageCard2 ">
//             <div className="d-flex flex-column justify-content-center align-items-center p-5">
//               <h4>Sign In</h4>
//               <div className="InputBox p-3 d-flex flex-column align-items-center justify-content-center gap-3">
//                 <input
//                   type="email"
//                   className="border-0 border-bottom"
//                   placeholder="Email"
//                   required
//                 />
//                 <input
//                   type="password"
//                   className="border-0 border-bottom"
//                   placeholder="Password"
//                   required
//                 />
//               </div>
//               <div>
//                 <button className="LoginBtn text-white">Login</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

// // import React from "react";
// // import { Container, Row, Col, Card } from "react-bootstrap";

// // const Dashboard = () => {
// //   return (
// //     <Container fluid>
// //       <h1 className="dashboard-title">School Management System</h1>
// //       <Row>
// //         <Col md={4}>
// //           <Card className="dashboard-card">
// //             <Card.Body>
// //               <Card.Title>ALL Admins</Card.Title>
// //               <Card.Text>5</Card.Text> {/* Replace with actual data */}
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //         <Col md={4}>
// //           <Card className="dashboard-card">
// //             <Card.Body>
// //               <Card.Title>Total School</Card.Title>
// //               <Card.Text>1</Card.Text> {/* Replace with actual data */}
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //         <Col md={4}>
// //           <Card className="dashboard-card">
// //             <Card.Body>
// //               <Card.Title>Total Principal</Card.Title>
// //               <Card.Text>1</Card.Text> {/* Replace with actual data */}
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //       <Row>
// //         <Col md={4}>
// //           <Card className="dashboard-card">
// //             <Card.Body>
// //               <Card.Title>Total Teacher</Card.Title>
// //               <Card.Text>10</Card.Text> {/* Replace with actual data */}
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //         <Col md={4}>
// //           <Card className="dashboard-card">
// //             <Card.Body>
// //               <Card.Title>Total Students</Card.Title>
// //               <Card.Text>100</Card.Text> {/* Replace with actual data */}
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //         <Col md={4}>
// //           <Card className="dashboard-card">
// //             <Card.Body>
// //               <Card.Title>Year</Card.Title>
// //               <Card.Text>2023</Card.Text> {/* Replace with actual data */}
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Dashboard;

import React from 'react'
import "./login.css"
function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-4 leftSideBar d-flex flex-column p-5 text-center align-items-center">
            <div>
              <img
                src="/SMSLogo.png"
                alt="Logo"
                height="300px"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
            </div>
            <h2
              className="text-white"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              School Management System
            </h2>
          </div>
          <div className="col-8 rightSideBar d-flex flex-column gap-5 align-items-center justify-content-center text-center ">
            <h2 data-aos="fade-right" data-aos-duration="2000">
              Welcome to AuraSoft School System
            </h2>
            <div data-aos="fade-left" data-aos-duration="2000">
              <input
                type="email"
                className="border-0 border-bottom inputfiled"
                placeholder="Email"
                required
              />
              <input
                type="password"
                className="border-0 border-bottom inputfiled"
                placeholder="Password"
                required
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <button className="LoginBtn btn-warning ">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login