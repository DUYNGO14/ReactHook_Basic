import { useEffect, useState, useRef } from "react";
import "./PostList.scss";
import Pagination from "../Pagiantion";
function PostList() {
  const [posts, setPosts] = useState([]);
  const [pagatation, setPagatation] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
    title_like: "",
  });   
  const typingTimeout = useRef(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const queryString = new URLSearchParams(filter);
        const response = await fetch(
          `http://js-post-api.herokuapp.com/api/posts?${queryString}`
        );
        const responseJson = await response.json();
        setPosts(responseJson.data);
        setPagatation(responseJson.pagination);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [filter]);
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
      _page: 1,
    });
    console.log(typingTimeout.current);
    if (!value.startsWith(" ")) {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
      typingTimeout.current = setTimeout(() => {
        setFilter({
          ...filter,
        });
      }, 300);
    }
  }
  const onPageChange = (page) => {
    setFilter({
      ...filter,
      _page: page,
    });
  };
  return (
    <div className="postList">
      <h1>Post List</h1>
      <div>
        <input
          type="text"
          value={filter._search}
          onChange={handleFilterChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pagination={pagatation}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default PostList;

