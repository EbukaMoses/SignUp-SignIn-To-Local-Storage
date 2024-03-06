import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import IMG from '/images/signup.png'
import { NavLink } from "react-router-dom";

const Home = () => {

    const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
})

    const [data, setData] = useState([])
// console.log(inpval);

    const getdate = (e) => {
    // console.log(e.target.value);
    
        const { value, name } = e.target;
        // console.log(value,name);
        
        setInpval(() => {
            return {
                ...inpval,
                [name]:value
            }
        })
    
}

    const addData = (e) => {
      e.preventDefault();
    //   console.log(inpval);
      
        const { name, email, date, password } = inpval;
        
        if (name === "") {
            alert("name field is required")
        } else if (email === "") {
            alert("Email field is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Input a valid Email');
        } else if (!email.includes("@")) {
            alert("Please enter a correct email address");
        } else if (date === "") {
            alert("Date is Required!");
        } else if (password === "") {
            alert("password field is required");
        } else if (password.length < 5) {
            alert("password length greater than five");
        } else {
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
            alert("Data Submitted Successfully");
            // setInpval({"name":"","email": "", "date": "" , "password":""});
        }
    }
  return (
    <div className="container mt-5">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="name"
                onChange={getdate}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={getdate}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control type="date" name="date" onChange={getdate} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={getdate}
                placeholder="Password"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
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
            Already Have an Account{" "}
            <span>
              <NavLink to="/login">SignIn</NavLink>
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
};

export default Home;
