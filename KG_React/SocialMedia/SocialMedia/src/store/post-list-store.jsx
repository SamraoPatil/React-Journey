import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const reducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, []);

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const addPost = (userId, title, body, tags) => {
    let maxId = Math.max(DEFAULT_POST_LIST.map((post) => post.id));
    let newPostId = maxId + 1;
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: newPostId,
        title: title,
        body: body,
        reactions: {
          likes: "116",
          shares: "3",
          comment: "414",
        },
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: 1,
//     title: "Going to Goa",
//     body: "Chalo Goa Challe",
//     reactions: {
//       likes: "116",
//       shares: "3",
//       comment: "414",
//     },
//     userId: "user9",
//     tags: ["vacation", "friends", "trip", "goa"],
//   },
//   {
//     id: 2,
//     title: "Got Placed",
//     body: "Atleast after an long Bench Period , Kuch Real Stuff krne ko milega",
//     reactions: {
//       likes: "242",
//       shares: "2",
//       comment: "44",
//     },
//     userId: "user14",
//     tags: ["hardwork", "success", "placements"],
//   },
//   {
//     id: 3,
//     title: "Shiv Jayantichya Hardik Subhecha",
//     body: "19-Feb. Aaplya Sarvya Marathi Bhanduna Maharajanchya JanmDinachya Khup Khup BhagveMay Hardik Subhecha ",
//     reactions: {
//       likes: "2423",
//       shares: "23",
//       comment: "454",
//     },
//     userId: "user001",
//     tags: ["Chattrpati", "Maharaj", "Swaraj", "Maharashtra"],
//   },
//   {
//     id: 4,
//     title: "My Captain 45",
//     body: "Ohhh... Captain... My Captain.....",
//     reactions: {
//       likes: "23",
//       shares: "233",
//       comment: "544",
//     },

//     userId: "user45",
//     tags: ["Hitman", "Rohitsharma", "Ritikasharma", "India"],
//   },
// ];
export default PostListProvider;
