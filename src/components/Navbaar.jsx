import { Navbar, Container, Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";
import resume from "../assets/files/Lov_Kumar_Resume.pdf";
import { RxSlash, RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { CgFileDocument } from "react-icons/cg";

export const Navbaar = () => {

  // const [isOpen, setOpen] = useState(false)
  return (
    <div className="navbar-container" id="nav-menu">
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
          <Nav.Link id="user-detail-name" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "25px", fontFamily: "'Rouge Script', cursive" }} href="#about">
            <RxChevronLeft />Lov Kumar<RxSlash /><RxChevronRight />
          </Nav.Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav style={{ gap: "30px", alignItems: "center" }}>
              <Nav.Link href="#home" className="nav-link home">Home</Nav.Link>
              <Nav.Link className="nav-link about" eventKey={2} href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#Education-container">Education</Nav.Link>
              <Nav.Link href="#skills" className="nav-link skills">Skills</Nav.Link>
              <Nav.Link href="#MyStats">My Stats</Nav.Link>
              <Nav.Link href="#projects" className="nav-link projects">Projects</Nav.Link>
              <Nav.Link eventKey={2} href="#contact" className="nav-link contact">
                Contact
              </Nav.Link>
              <Navbar.Brand>
                {/* Resume */}
                <Button
                  className="m-2 nav-link resume"
                  id="resume-button-1"
                  variant="success"
                  href={resume}
                  target="_blank"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:"rgb(152,238,204)",border:"none",color:"black" }}
                >
                  <CgFileDocument style={{ marginBottom: "3px", marginRight: "5px" }} />
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
