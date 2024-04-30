import { Alert } from "bootstrap";
import React from "react";
import { Table, Container, Spinner } from "react-bootstrap";
import { useFetchItemsQuery } from "./apiService";
import { useState } from "react";
//import { Button } from "bootstrap";

const AddApi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useFetchItemsQuery(currentPage);

  const handlePrev = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  if (isLoading)
    return (
      <Container className="p-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  if (error)
    return (
      <Container className="p-5">
        <Alert variant="danger">Error: {error.message}</Alert>
      </Container>
    );

  return (
    <Container className="p-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="pagination d-flex justify-content-between">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </Container>
  );
};

export default AddApi;

// <Container className="p-5">
//   {data &&
//     data.map((post) => (
//       <Card key={post.id} className="mb-3">
//         <Card.Body>
//           <Card.Title>{post.title}</Card.Title>
//           <Card.Text>{post.body}</Card.Text>
//         </Card.Body>
//       </Card>
//     ))}
//   <div className="pagination d-flex justify-content-between">
//     <button onClick={handlePrev} disabled={currentPage === 1}>
//       Previous
//     </button>
//     <button onClick={handleNext}>Next</button>
//   </div>
// </Container>
