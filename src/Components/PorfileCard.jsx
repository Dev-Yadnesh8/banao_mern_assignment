function ProfileCard({ name, viewsCount, imgUrl, isGroup = false }) {
  return (
    <div className="flex items-center gap-x-[12.42px]">
      {/* Profile Image */}
      <img
        src={imgUrl}
        alt={name}
        className={isGroup ? "w-9 h-9 rounded-full object-cover" : "w-12 h-12 rounded-full object-cover"}
      />

      {/* Text Content */}
      {!viewsCount && (
        <span className={isGroup ? "text-sm text-gray-700 font-normal" : "font-semibold text-gray-900"}>
          {name}
        </span>
      )}

      {viewsCount && !isGroup && (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900">{name}</span>
          <span className="text-sm text-gray-600">{viewsCount} views</span>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
