import { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Base from "../components/Base";
import CategorySideMenu from "../components/CategorySideMenu";
import NewFeed from "../components/NewFeed";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    // toast.success("Request for Access Sent to Admin Sucessfully !")
    navigate('/')
  }
  const handleClick1=()=>{
    // toast.success("Request for Access Sent to Admin Sucessfully !")
    navigate('categories/5')
  }
  const handleCreate=()=>{
    navigate("/user/newpost")
  }
  
  return (
    <Base>
      <Container className="mt-3">
        <Row>
          <Col md={2} className="pt-5">
            <CategorySideMenu />
          </Col>
          <Col md={10}>
            <Container className="mt-5">
            <div className="text-end">
              <Button className="text-end"onClick= {handleCreate}>Create Post</Button>
            </div>
            <Button color="primary"  className="mx-2 "onClick={handleClick}>Tech</Button>

            <Button color="primary" onClick={handleClick1}>Non-Tech</Button>
            </Container>
            <NewFeed />
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Home;
