import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdPost = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postTags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdPost.current.value;
    const title = postTitle.current.value;
    const body = postBody.current.value;
    const tags = postTags.current.value.split(/\s+/);

    userIdPost.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postTags.current.value = "";

    addPost(userId, title, body, tags);
  };

  return (
    <>
      <form className="createPost" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            UserName
          </label>
          <input
            type="text"
            ref={userIdPost}
            className="form-control"
            id="userId"
            placeholder="Hello User :)"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={postTitle}
            className="form-control"
            id="title"
            placeholder="Whats New !!!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            rows={3}
            type="text"
            ref={postBody}
            className="form-control"
            id="body"
            placeholder="Upload your Content To share your Experience with your Friends"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tag Some-One
          </label>
          <input
            type="text"
            ref={postTags}
            className="form-control"
            id="tags"
            placeholder="#damodar {add your tags with spaces}"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          POST
        </button>
      </form>
    </>
  );
};

export default CreatePost;
