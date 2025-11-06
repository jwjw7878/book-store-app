import React from "react";
import bookStore from "../../store/bookStore";

const MyBooks = () => {
  const { list, toggleList } = bookStore();
  console.log(list);
  return (
    <div>
      <h1>My Books</h1>
      <div className="grid-container">
        {list.map((book) => (
          <div className="items" key={book.key}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
              alt="book-img"
            />
            <p className="book-title">{book?.title}</p>
            <p className="book-author">{book?.authors[0].name}</p>
            {/* <FaHeart className="heart" /> */}
            <CiHeart className="heart" onClick={() => toggleList(book)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
