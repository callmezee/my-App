import "./App.css";
import PostsList from "./features/posts/PostsList";
import AddFormPost from "./features/posts/AddFormPost";
import AddApi from "./features/posts/AddApi";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main className="App my-3">
      <AddFormPost />
      <PostsList />
      <AddApi />
    </main>
  );
}

export default App;
