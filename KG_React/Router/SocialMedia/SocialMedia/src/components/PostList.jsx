import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingWindow from "./LoadingWindow";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingWindow></LoadingWindow>}
      {/* <LoadingWindow></LoadingWindow> */}
      {!fetching && postList.length === 0 && <Welcome></Welcome>}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
