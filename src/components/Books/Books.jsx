import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2 className="mt-6 font-bold text-4xl md:text-white   text-center">
      <span className=" hover:bg-orange-500 rounded hover:text-white hover:text-2xl stroke-black stroke-2">
       Books For Qira'at
       </span>
      </h2>
      <div className="card_container mt-20    md:grid md:grid-cols-2 md:gap-6 md:m-2  lg:grid-cols-4  space-y-4">
        {books.map((book) => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
