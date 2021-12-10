import axios from "axios";

const deleteBook = (id) => {
  axios({
    method: "delete",
    url: `http://localhost:5000/booklist/${id}`,
    //   data: {
    //     title: title,
    //     author: author,
    //     price: price,
    //   },
  });
};

export default deleteBook;
