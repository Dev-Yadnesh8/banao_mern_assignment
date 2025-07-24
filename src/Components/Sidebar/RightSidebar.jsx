import LocationCard from "../LocationCard";
import RecommendedGroups from "../RecommondedGr";



function RightSidebar() {
  return (
    <aside className="hidden lg:block w-[243px] mt-14">
      <LocationCard />
      <RecommendedGroups />
    </aside>
  );
}

export default RightSidebar;
