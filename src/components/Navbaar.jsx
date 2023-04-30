import { Navbar, Container, Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";
import resume from "../assets/files/resume.pdf";
import {RxSlash,RxChevronLeft,RxChevronRight} from "react-icons/rx";
import { CgFileDocument } from "react-icons/cg";

export const Navbaar = () => {

  // const [isOpen, setOpen] = useState(false)
  return (
    <div className="navbar-container">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        id="navbar"
        className="animate-navbar nav-theme justify-content-between"
      
      >
        <Container>
        <Nav.Link style={{display:"flex",alignItems:"center",justifyContent:"center", color:"white",fontSize:"25px",fontFamily:"'Rouge Script', cursive"}} href="#about">
                <RxChevronLeft />Luv Kumar<RxSlash/><RxChevronRight />
              </Nav.Link>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
            <Nav className="me-auto"></Nav>
            <Nav  style={{ gap:"30px",alignItems:"center"}}>
             {/* <div style={{display:"flex",gap:"30px",alignItems:"center"}}> */}
             <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#MyStats">My Stats</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link eventKey={2} href="#contact">
                Contact
              </Nav.Link>
              <Navbar.Brand>
            {/* Resume */}
            <Button
              className="m-2"
              variant="success"
              href={resume}
              target="_blank"
              style={{display:"flex",alignItems:"center",justifyContent:"center"}}
            >
              <CgFileDocument style={{marginBottom:"3px",marginRight:"5px"}}/>
              Resume
              
            </Button>
          </Navbar.Brand>
             {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
