import { Filter, Pencil, Plus } from "lucide-react";
import {
  AuthModal,
  Banner,
  FloatingActionButton,
  Header,
  PostCard,
  RightSidebar,
  ToolBar,
} from "./Components";
import posts from "./data/post.data";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isJoin, setIsJoin] = useState(true);
  function handleJoinButtonClick() {
    setIsJoin(!isJoin);
  }

  return (
    <div className="min-h-screen w-full font-display">
      <Header
        onTriggerAuth={() => setShowModal(true)}
        isLoggedIn={isLoggedIn}
      />
      <Banner
        isJoin={isJoin}
        onJoinBtnClick={handleJoinButtonClick}
        banner={{
          title: "Computer Engineering",
          subtitle: "152,890 Computer Engineers follow this",
          imageUrl:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        }}
      />

      <div className="w-full max-w-7xl mx-auto md:px-10">
        <ToolBar isJoin={isJoin} onJoinBtnClick={handleJoinButtonClick} />

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
      {/* Auth Modal */}
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onSubmit={() => {
            setShowModal(false);
            setIsLoggedIn(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
