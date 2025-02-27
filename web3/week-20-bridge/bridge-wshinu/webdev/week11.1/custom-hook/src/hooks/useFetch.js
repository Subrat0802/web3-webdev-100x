import { useEffect, useState } from "react";

export const usePostTitle = (url) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + url
      );
      const data = await response.json();
      console.log(data);
      setPost(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // setInterval(fetchData, 10 * 1000);
    fetchData()
  }, [url]);

  return { post, loading };
};
