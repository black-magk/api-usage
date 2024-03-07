import { Container } from "react-bootstrap";
import Portal2 from "../../assets/Portal2.png";
import RNM from "../../assets/RNM.webp";
import "./HomePage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
     
      <Container fluid className='p-0' id='HomeContainer' >
      <img src={RNM} className="logo " alt="React logo" />
      <div>
        <Link to="characters/">
          <img src={Portal2} className="logo " alt="RickNMortyPortal" />
        </Link>
              </div>
              </Container>
   
  );
};

export default HomePage;
