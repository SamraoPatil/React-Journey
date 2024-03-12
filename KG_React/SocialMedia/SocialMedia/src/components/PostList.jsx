import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingWindow from "./LoadingWindow";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  // This is for the  Loading window we want to show:
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const _signal = controller.signal;

    console.log(_signal);

    fetch("https://dummyjson.com/posts", { _signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPost(obj.posts);
        setFetching(false);
      });

    return () => {
      console.log("Clean=up");
      controller.abort();
    };
  }, []);

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
