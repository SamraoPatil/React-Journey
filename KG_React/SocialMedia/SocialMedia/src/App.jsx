import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="AppContainer">
          <div className="header">
            <Header></Header>
          </div>
          <div className="content">
            <SideBar
              className="sidebar"
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            ></SideBar>
            <div className="post">
              {selectedTab === "Home" ? (
                <PostList className="postlist"></PostList>
              ) : (
                <CreatePost></CreatePost>
              )}
            </div>
          </div>
          <div className="footer">
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
