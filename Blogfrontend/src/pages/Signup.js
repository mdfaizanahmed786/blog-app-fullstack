import { useEffect } from "react";
import { useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";
import { useNavigate } from "react-router-dom";
const Signup = ({ setInterests }) => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const [interests, setCheckbox] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
    interest4:false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckbox({ ...interests, [name]: checked });
  };


  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    // if(error.isError){
    //   toast.error("Form data is invalid , correct all details then submit. ");
    //   setError({...error,isError:false})
    //   return;
    // }
    const selectedInterests = Object.keys(interests).filter(key => interests[key]);
    setInterests(selectedInterests);

    setCheckbox({
      interest1: false,
interest2: false,
interest3: false,
interest4:false
    })
    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User is registered successfully !! user id " + resp.id);
        navigate("/login");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
        
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          {/* { JSON.stringify(data) } */}

          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3> Fill Information to Register !!</h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form onSubmit={submitForm}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>
                  {/* email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>
                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* about field */}
                  <FormGroup>
                    <Label for="about">Write something about yourself</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "250px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      invalid={
                        error.errors?.response?.data?.about ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup>
                  {/* <FormGroup type="fieldset" className="mt-3" >
     <Label>Type of Category</Label>
                            <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Technical 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Non Technical
            </Label>
          </FormGroup>
</FormGroup> */}
<div>
          <label>Interests:</label><br/>
          <input type="checkbox" id="interest1" name="interest1" checked={interests.interest1} onChange={handleCheckboxChange} />
          <label htmlFor="interest1">React</label><br/>
          <input type="checkbox" id="interest2" name="interest2" checked={interests.interest2} onChange={handleCheckboxChange} />
          <label htmlFor="interest2">Angular </label><br/>
          <input type="checkbox" id="interest3" name="interest3" checked={interests.interest3} onChange={handleCheckboxChange} />
          <label htmlFor="interest3">Java </label><br/>
          <input type="checkbox" id="interest4" name="interest4" checked={interests.interest3} onChange={handleCheckboxChange} />
          <label htmlFor="interest4">SpringBoot </label><br/>
        </div>
                  <Container className="text-center">
                    <Button outline color="light">
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
