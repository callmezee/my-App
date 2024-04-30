import React from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  // const renderedPosts = posts.map((post) => (
  //   <Container key={post.id} className="p5">
  //     <Card className="mb-3">
  //       <Card.Body>
  //         <Card.Title>{post.title}</Card.Title>
  //         <Card.Text>{post.content}</Card.Text>
  //       </Card.Body>
  //     </Card>
  //   </Container>
  // ));

  const renderedPosts = posts.map((post) => (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.content}</td>
    </tr>
  ));

  return (
    <>
      <Container className="p-5">
        <h2>Posts</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{renderedPosts}</tbody>
        </Table>
      </Container>
    </>
  );
};

export default PostsList;
