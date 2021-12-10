import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";

const UpdateBook = () => {
  const url = "http://localhost:5000/booklist";
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const updateBook = async () => {
    // POST request using axios with async/await
    // const element = document.querySelector(
    //   "#post-request-async-await .article-id"
    // );
    console.log(id);
    axios({
      method: "patch",
      url: `http://localhost:5000/booklist/${id}`,
      data: {
        title: title,
        author: author,
        price: price,
      },
    });
    console.log(title, author, price);
    setAuthor("");
    setTitle("");
    setPrice("");
    // element.innerHTML = response.data.id;
  };
  return (
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <h6>Book Title</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            value={title}
            onChange={handleChangeTitle}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>
            <h6>Book Author</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Author"
            value={author}
            onChange={handleChangeAuthor}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>
            <h6>Book Price</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Price"
            value={price}
            onChange={handleChangePrice}
          />
        </Form.Group>
        <Button className="btn" variant="dark" onClick={updateBook}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateBook;
