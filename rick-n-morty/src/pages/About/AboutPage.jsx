import { useState, useEffect } from "react";

import getRickMorty from "../../RickandMortyAPI/RickMortyApi";
import RickMortyCards from "../../components/Card/Cards";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
import SearchBar from "../../components/Search/Search";
import './AboutPage.css'
const AboutPage = () => {
  const [rickMorty, setRickMorty] = useState([]);

  useEffect(() => {
    getRickMorty(setRickMorty);
  }, []);

  useEffect(() => {
    console.log("Updated rickMorty state:", rickMorty);
  }, [rickMorty]);

  return (
    <>
     
          <Container fluid className="bg-light">
             
           
         
        <Row className="justify-content-center">
          {rickMorty.map((item, i) => (
              <RickMortyCards key={i}
                id={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                type={item.type}
                gender={item.gender}
                locationName={item.location_name}
                locationUrl={item.location_url}
                characterUrl={item.character_url}
                castedEpisodes={item.casted_episodes}
                characterCompletedData={item.character_completed_data}
                characterCreation={item.character_creation}
              />

          ))}
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
