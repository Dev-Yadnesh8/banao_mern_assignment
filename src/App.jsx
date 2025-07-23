import { Filter, Pencil, Plus } from "lucide-react";
import { Banner, FloatingActionButton, PostCard } from "./Components";
import Button from "./Components/Buttons/Button";
import posts from "./data/post.data";
import IconButton from "./Components/Buttons/IconButton";

function App() {
  return (
    <div className="min-h-screen w-full font-display">
      <Banner
        banner={{
          title: "Computer Engineering",
          subtitle: "152,890 Computer Engineers follow this",
          imageUrl:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        }}
      />
      <div className="mt-3.5 mb-5 px-4 md:px-[76px] lg:px-52 flex justify-between items-center transition-all duration-500 ease-in-out">
        <h3 className="font-bold">Posts({posts.length})</h3>
        <Button
          label={"Filter"}
          icon={<Filter className="h-4 w-4" />}
          className="rounded-md"
        />
      </div>
      {posts.map((post, index) => (
        <PostCard key={index + Math.floor(Math.random())} post={post} />
      ))}
      /* Floating Button - visible on mobile only */
      <FloatingActionButton icon={<Pencil/>} onClick={()=>{}}/>        
    </div>
  );
}

export default App;
