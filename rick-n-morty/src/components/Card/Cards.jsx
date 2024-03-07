import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const RickMortyCards = ({id, name, status, species, type, gender, locationName, locationUrl, characterUrl, castedEpisodes, characterCompletedData, characterCreation}) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-2 p-0">
        <Card.Img variant="top" src={characterUrl} className="m-0 p-0  "/>
        <Card.Body className="p-0">
          <Card.Title className="mt-1">{name}</Card.Title>
          <Card.Text className="m-2">
            {name}'s last known location was  {locationName}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
                  <ListGroup.Item>Status: {status}</ListGroup.Item>
                  <ListGroup.Item>Species: {species}</ListGroup.Item>
                  <ListGroup.Item>Gender: {gender}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default RickMortyCards;
