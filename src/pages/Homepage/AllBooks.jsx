import { useQuery } from "@tanstack/react-query";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import React from "react";
import "./AllBooks.style.css";
import bookStore from "../../store/bookStore";

const AllBooks = () => {
  const { toggleList } = bookStore();
  const getfetchBooks = async () => {
    return axios.get("https://openlibrary.org/subjects/love.json");
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["get"],
    queryFn: getfetchBooks,
    select: (data) => data.data.works,
  });
  console.log(data);
  if (isError) return <p>{error.message}</p>;
  if (isLoading) return <p>로딩중</p>;

  return (
    <div>
      <div className="search-area">
        <p>찾으시는 도서를 검색해주세요</p>
        <div className="search-input">
          <input type="text" />
          <button>검색</button>
        </div>
      </div>
      <h1>인기 도서</h1>
      <div className="grid-container">
        {data.map((book) => (
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

export default AllBooks;
