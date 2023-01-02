import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";
import Post from "../pages/Post";


const News = () => {
 
  const dispatch = useDispatch();
  const posts = useSelector((state) => console.log(state));

  useEffect(() => {
      dispatch(getPosts());
  }, [ dispatch]);

  return (
    <div className="thread-container">
      <ul>
        {posts?.map((post) => <Post post={post} key={post._id} />)}
      </ul>
    </div>
  );
};

export default News;
