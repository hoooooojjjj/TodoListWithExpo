import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../reducer";
import axios from "axios";
import { fetchPost } from "../reducer/post";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
function Post() {
  const post = useSelector((state: RootState) => state.post);

  const postDispatch =
    useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  //   const getPost = async () => {
  //     const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     postDispatch({ type: "ADD_POST", data: posts.data });
  //   };

  useEffect(() => {
    // getPost();
    postDispatch(fetchPost());
  }, []);

  return (
    <div>
      {post.map((post, i) => (
        <div key={i}>
          <div>{post.userId}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
}

export default Post;
