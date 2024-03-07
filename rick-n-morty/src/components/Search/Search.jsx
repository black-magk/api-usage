import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form className="d-flex justify-content-end ">
      <InputGroup className= "" >
        <FormControl
          type="search"
          placeholder="Enter Name"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
