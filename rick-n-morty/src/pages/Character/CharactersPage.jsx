import { useState, useEffect } from "react";

import getRickMorty from "../../RickandMortyAPI/RickMortyApi";
import RickMortyCards from "../../components/Card/Cards";
import Row from "react-bootstrap/Row";
import TitleImage from "../../assets/Characters.png"
import Container from "react-bootstrap/Container";
import './CharactersPage.css'
import { useSearch } from '../../context/SearchContext'; // Adjust the import path as necessary

const CharacterPage = () => {
    const [rickMorty, setRickMorty] = useState([]);
    const [filter, setFilter] = useState(false);
    const [filterData, setFilteredData] = useState([]);
  useEffect(() => {
    getRickMorty(setRickMorty);
  }, []);

  useEffect(() => {
    console.log("Updated rickMorty state:", rickMorty);
  }, [rickMorty]);

  const { searchTerm } = useSearch();

    
    useEffect(() => {

        if (searchTerm.length > 0) {
          
            setFilter(true)

            let filteredData = rickMorty.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredData(filteredData);
 
        } else {
            setFilter(false)
        }
        
    },[searchTerm])
  return (
    <>
          <Container>
              <h1 className="Title bg-black">[CHARACTERS] </h1>
              <p className="subTitle ">
                  
              The Rick and Morty universe is a kaleidoscope of eccentricity and complexity, populated by an array of unforgettable characters. From the mad genius of Rick Sanchez to the wide-eyed innocence of Morty Smith, each character brings their own unique flair to the chaotic adventures they embark upon. Whether it's the enigmatic and mysterious Birdperson, the hilariously dysfunctional Jerry Smith, or the fiercely independent Summer Smith, every character adds depth and dimension to the ever-expanding universe. Not to be overlooked are the eccentric alternate versions of Rick and Morty themselves, each iteration offering a glimpse into infinite possibilities. Together, they form a tapestry of humor, satire, and existential ponderings, captivating audiences with their wit, absurdity, and occasional moments of profound insight. The richness of the Rick and Morty universe lies not only in its imaginative storytelling but also in the colorful cast of characters who inhabit it, each contributing to the series' enduring appeal and cult following.</p>

            </Container>
          <Container fluid className="bg-light w-75">
             
           
         
              <Row className="justify-content-center">
                  
                  {!filter ?  rickMorty.map((item, i) => (
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

                  ))
                   :  filterData.map((item, i) => (
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
      
                        ))
                        
                      
        
    }
         
        </Row>
      </Container>
    </>
  );
};

export default CharacterPage;
