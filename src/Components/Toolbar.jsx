import { Filter } from "lucide-react";
import Button from "./Buttons/Button";
import posts from "../data/post.data";

function ToolBar({ isJoin, onJoinBtnClick }) {
  const tabs = [
    { label: `All Posts (${posts.length})`, value: "all" },
    { label: "Article", value: "article" },
    { label: "Event", value: "event" },
    { label: "Education", value: "education" },
    { label: "Job", value: "job" },
  ];

  const activeTab = "all"; // Can later be dynamic

  return (
    <div className="w-full max-w-7xl mx-auto  mb-5 mt-5 px-4 lg:px-0 transition-all duration-500 ease-in-out lg:sticky lg:top-[84px] lg:z-40 lg:bg-white">
      {/* Mobile & Tablet View */}
      <div className="flex justify-between items-center lg:hidden">
        <h3 className="font-bold">Posts ({posts.length})</h3>
        <Button
          label={"Filter"}
          icon={<Filter className="h-4 w-4" />}
          className="rounded-md"
        />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-between items-center">
        {/* Tabs */}
        <ul className="flex gap-6 text-sm font-medium ">
          {tabs.map((tab) => (
            <li key={tab.value}>
              <button
                className={`pb-1 transition-all cursor-pointer ${
                  activeTab === tab.value
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button label="Write a Post" className="rounded-md" />
          <Button
            onClick={onJoinBtnClick}
            label={isJoin ? "Leave Group" : "Join Group"}
            variant="outlined"
            className="border-gray-900 text-black font-medium hover:bg-white/10 rounded-md text-sm px-4 py-1.5"
          />
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
