import React, { useEffect, useState } from "react";
import { usePostTitle } from "../hooks/useFetch";

const UseFetch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { post, loading } = usePostTitle(currentPage);

  return (
    <div>
      <button onClick={() => setCurrentPage(1)}>1</button>
      <button onClick={() => setCurrentPage(2)}>2</button>
      <button onClick={() => setCurrentPage(3)}>3</button>

      <br />

      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default UseFetch;
