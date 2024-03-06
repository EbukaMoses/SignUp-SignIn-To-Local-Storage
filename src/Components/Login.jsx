import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import IMG from "/images/signup.png";
import { NavLink, useNavigate } from 'react-router-dom';


const Login = () => {

    const history = useNavigate();

const [inpval, setInpval] = useState({
  email: "",
  password: "",
});

const [data, setData] = useState([]);
// console.log(inpval);

const getdate = (e) => {
  // console.log(e.target.value);

  const { value, name } = e.target;
  // console.log(value,name);

  setInpval(() => {
    return {
      ...inpval,
      [name]: value,
    };
  });
};

const addData = (e) => {
  e.preventDefault();


    const getuserArr = localStorage.getItem('useryoutube');
    console.log(getuserArr);
    
  const { email, password } = inpval;

  if (email === "") {
    alert("Email field is required");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Input a valid Email");
  } else if (!email.includes("@")) {
    alert("Please enter a correct email address");
  }  else if (password === "") {
    alert("password field is required");
  } else if (password.length < 5) {
    alert("password length greater than five");
  } else {
      if (getuserArr && getuserArr.length) {
          const userdata = JSON.parse(getuserArr);
          const userlogin = userdata.filter((el, k) => {
              return el.email === email || el.password === password;
          })
          
          if (userlogin === 0) {
              alert("user not found")
          } else {
              console.log(userlogin);
              localStorage.setItem("user_login", JSON.stringify(userlogin))
              history("/details");
          }
          
    }
    // setInpval({"name":"","email": "", "date": "" , "password":""});
  }
};


  return (
    <div className="container mt-5">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign In</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={getdate}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={getdate}
                placeholder="Password"
              />
            </Form.Group>
            <Button
              variant="primary"
              className="col-lg-6"
              style={{ background: "#9F293C", border: "none" }}
              type="submit"
              onClick={addData}
            >
              Submit
            </Button>
          </Form>
          <p className="mt-3">
            Don't Have an Account{" "}
            <span>
              <NavLink to="/">SignUp</NavLink>
            </span>
          </p>
        </div>
        <div className="right_data" style={{ width: "100%" }}>
          <div className="sign_img">
            <img src={IMG} alt="" style={{ maxWidth: 480 }} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login