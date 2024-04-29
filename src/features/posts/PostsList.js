import React from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <Container key={post.id} className="p5">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  ));

  return (
    <>
      <h2>Posts</h2>
      {renderedPosts}
    </>
  );
};

export default PostsList;
