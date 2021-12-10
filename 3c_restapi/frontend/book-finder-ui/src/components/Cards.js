import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import edit from "../images/edit.png";
import del from "../images/del.png";
import deleteBook from "./DeleteBook";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UpdateBook from "./UpdateBook";
import { Link } from "react-router-dom";

const Cards = () => {
  const url = "http://localhost:5000/booklist";
  const [data, setData] = useState(false);
  let loading = true;
  const fetchBooks = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      loading = false;
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchBooks(url);
  }, [data]);
  return (
    <div>
      {data &&
        data.map((book) => {
          const { title, author, price, _id } = book;
          return (
            <div
              className="col-md-4 col-lg-3 col-sm-4"
              style={{
                float: "left",
              }}
            >
              <div className="cards">
                <div className="in-card">
                  <h5>{title}</h5>
                </div>
                <div className="in-card">{author}</div>
                <div className="in-card">
                  <h6>$ {price}</h6>
                  <Link to={`/${_id}`}>
                    <img
                      src={edit}
                      width="30px"
                      style={{
                        border: "2px solid black",
                        padding: "2px",
                        borderRadius: "5px",
                        position: "absolute",
                        bottom: "30px",
                        left: "30px",
                      }}
                    />
                  </Link>
                  <img
                    src={del}
                    width="30px"
                    height="30px"
                    style={{
                      border: "2px solid black",
                      padding: "2px",
                      borderRadius: "5px",
                      position: "absolute",
                      bottom: "30px",
                      right: "30px",
                    }}
                    onClick={() => {
                      if (window.confirm("Confirm Delete?")) {
                        deleteBook(_id);
                        console.log("Book Deleted!");
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
