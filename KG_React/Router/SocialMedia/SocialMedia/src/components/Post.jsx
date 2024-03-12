import { FcLike } from "react-icons/fc";
import { LuShare2 } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{}}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <TiDeleteOutline />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          <div className="alert alert-success reactions" role="alert">
            This Post has been reacted by {post.reactions} people
          </div>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary card-tags">
              #{tag}
            </span>
          ))}

          {/* <a href="#" className="btn btn-primary">
            <FcLike />
            <LuShare2 />
            <FaRegComment />
            {post.reactions}
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Post;
