import { PostCard } from "./Components";
import posts from "./data/post.data";

function App() {
  return (
    <div className="h-screen w-full font-display bg-gray-50">
      {posts.map((post, index) => (
        <PostCard key={index + Math.floor(Math.random())} post={post} />
      ))}
    </div>
  );
}

export default App;
