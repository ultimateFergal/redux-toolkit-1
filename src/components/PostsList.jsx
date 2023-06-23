import React, { useEffect } from "react";

// redux
import { fetchAllPosts } from "../store/slices/posts";
import { useDispatch, useSelector } from "react-redux";

const PostsList = () => {
  const { list } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row">
        {list.map((post, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <img src={post.avatar} alt="avatar" />
              <div className="card-body">
                <h5 className="card-title">{`${post.first_name} ${post.last_name}`}</h5>
                <p className="card-text">{post.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
