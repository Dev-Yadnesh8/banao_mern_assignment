import { Filter, Pencil, Plus } from "lucide-react";
import {
  Banner,
  FloatingActionButton,
  PostCard,
  RightSidebar,
  ToolBar,
} from "./Components";
import posts from "./data/post.data";


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

      <div className="w-full max-w-7xl mx-auto md:px-10">
        <ToolBar />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>

          <RightSidebar />
        </div>
      </div>

      <FloatingActionButton icon={<Pencil />} onClick={() => {}} />
    </div>
  );
}


export default App;
