import Button from "./Buttons/Button";
import ProfileCard from "./PorfileCard";
import { groups } from "../data/groups.data";


function RecommendedGroups() {
  return (
    <div className="mt-[54px]">
      <h4 className="text-sm font-medium tracking-widest mb-6">
        RECOMMENDED GROUPS
      </h4>

      <div className="space-y-3">
        {groups.map((group) => (
          <div key={group.id} className="flex justify-between items-center py-2.5">
            <ProfileCard name={group.name} imgUrl={group.imgUrl} isGroup={true} />

            <Button
              label={group.isFollowed ? "Followed" : "Follow"}
              variant={group.isFollowed ? "filled" :"solid"}
              className="rounded-3xl max-w-14 text-xs px-6"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default RecommendedGroups;
