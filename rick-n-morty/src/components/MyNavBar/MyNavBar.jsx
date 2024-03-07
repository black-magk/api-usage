import Navbar from "react-bootstrap/Navbar";
import RNM from "../../assets/RNM.webp";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./MyNavBar.css";
import { useLocation } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useSearch } from '../../context/SearchContext';
const MyNavBar = () => {

  const location = useLocation();
  const showSearchBar = location.pathname === "/characters/"; // Change to the path where you want the search bar to appear
 
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Navbar className="w-100 p-0 m-0 border-bottom border-1 border-dark">
        <Container expand="lg" fluid className="bg-white m-0 d-flex p-0">
          <Navbar.Brand className="p-0 m-0" >
            <img id='LogoImg'
              src={RNM}

              width="150"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Row id="LinkRow" className=" p-0 m-0 me-auto ">
            <Column id="LinkColumn" className="d-flex m-0 p-0" xs="auto">
              <Link
                id="LinkCustom"
                className=" d-flex align-items-center justify-content-center w-100 p-3"
                to="/"
              >
                {" "}
                PORTAL GUN
              </Link>
            </Column>
            <Column id="LinkColumn" className="d-flex m-0 p-0" xs="auto">
              <Link
                id="LinkCustom"
                className="d-flex align-items-center justify-content-center w-100 p-3"
                to="characters/"
              >
                {" "}
                CHARACTERS
              </Link>
            </Column>
            <Column id="LinkColumn" className="d-flex m-0 p-0" xs="auto">
              <Link
                id="LinkCustom"
                className="d-flex align-items-center justify-content-center w-100 p-3"
                to="about/"
              >
                {" "}
                ABOUT
              </Link>
            </Column>
          </Row>
          {showSearchBar && (

            <div id='SearchBarContainer'>
              <div id='TwentyFiveDiv'>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Find.."
                className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
              />
              <Button variant="outline-success bg-black text-white border-black">Search</Button>
              </Form>
              </div>
              </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
