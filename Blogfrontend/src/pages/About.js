import userContext from "../context/userContext";
import Base from "../components/Base";
import { Col, Container, Row } from "reactstrap";
import '../App.css'
const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
         <div className="about-page" >
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-4">About Us</h1>
            <h3 className="text-end">Welcome User:<b> {object.user.login && object.user.data.name}</b></h3>
            <p>
<h3>Introduction:</h3>
Our blog application combines the power of ReactJS on the frontend and Spring Boot on the backend to create a seamless and dynamic platform for users to create, read, update, and delete blog posts. Leveraging the robustness of ReactJS for interactive user interfaces and the scalability of Spring Boot for handling server-side logic and data management, our application offers an intuitive and efficient blogging experience.
         <br/>   </p>
            <p>
            <h3> Frontend with ReactJS:</h3>
The frontend of our blog application is developed using ReactJS, a popular JavaScript library for building user interfaces. With ReactJS, we are able to create dynamic and responsive views that provide users with a smooth and interactive browsing experience. ReactJS enables us to efficiently manage state and handle user interactions, resulting in a fast and seamless interface for creating and consuming blog content. Additionally, ReactJS's component-based architecture allows for modular development, making it easier to maintain and scale our application as it grows.
<br/>   </p>
            <p>
            <h3> Backend with Spring Boot:</h3>
On the backend, our blog application is powered by Spring Boot, a lightweight framework for building Java-based applications. Spring Boot simplifies the development of web applications by providing a streamlined approach to configuration and dependency management. With Spring Boot, we can quickly set up RESTful APIs to handle CRUD operations for managing blog posts, user authentication, and other backend functionalities. Spring Boot's robust ecosystem and support for various data sources enable us to efficiently store and retrieve blog data from databases, ensuring the reliability and scalability of our application.
<br/>    </p>
          </Col>
        </Row>
      </Container>
    </div>
        <Container className="mt-5">  
          {console.log(object)}
        </Container>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
