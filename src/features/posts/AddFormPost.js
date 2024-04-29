import { useState } from "react";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddFormPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <Container>
        <h1>API Fetching</h1>
        <Form className="container">
          <Form.Group controlId="formTitle">
            <Form.Label className="title my-3">Title</Form.Label>
            <Form.Control
              type="title"
              //id="postTitle"
              value={title}
              onChange={onTitleChanged}
              required
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBody">
            <Form.Label className="body my-3">Body</Form.Label>
            <Form.Control
              placeholder="Enter text"
              //id="postContent"
              as="textarea"
              rows={4}
              value={content}
              onChange={onContentChanged}
              required
            />
          </Form.Group>
          <button
            className="btn btn-secondary mb-3"
            onClick={onSavePostClicked}
          >
            Submit
          </button>
        </Form>
      </Container>
    </>
  );
};

export default AddFormPost;
