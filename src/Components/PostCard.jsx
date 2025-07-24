import { Calendar1, Ellipsis, Locate, MapPin, Share2 } from "lucide-react";
import IconButton from "./Buttons/IconButton";
import ProfileCard from "./PorfileCard";
import Button from "./Buttons/Button";

function PostCard({ post, onOptionsClick, onShare, onCtaClick }) {
  const isEvent = post.type === "event";
  const eventStyles = [
    "text-red border-gray-600 hover:border-red font-medium w-full text-center rounded-xl mt-4",
    "text-green border-gray-600 hover:border-green font-medium w-full text-center rounded-xl mt-4",
  ];

  const ctaColorClasses = isEvent
    ? eventStyles[Math.floor(Math.random() * 2)]
    : "text-gray-900 border-gray-400";


  return (
    <div className="w-full max-w-[692px]  border border-gray-400  transition-all duration-500 ease-in-out">
      {post.imageUrl && (
        <img
          className="w-full h-[120px] object-cover"
          src={post.imageUrl}
          alt={post.title || ""}
        />
      )}

      <div className="px-[16.42px] py-4">
        {/* Tag */}
        <h5 className="font-semibold text-sm">{post.tag}</h5>

        {/* Title + Options */}
        <div className="flex justify-between mt-4 gap-2">
          <h3 className="font-bold text-lg leading-snug">{post.title}</h3>
          <IconButton icon={<Ellipsis />} onClick={onOptionsClick} />
        </div>

        {/* Description or Event Info */}
        {isEvent ? (
          <div className="flex gap-x-14 mt-4 text-sm">
            {post.date && (
              <div className="flex items-center font-medium gap-x-0.5">
                {" "}
                <Calendar1 className="h-4 w-4" /> {post.date}
              </div>
            )}
            {post.location && (
              <div className="flex items-center font-medium gap-x-0.5">
                <MapPin className="h-4 w-4" /> {post.location}
              </div>
            )}
          </div>
        ) : (
          <p className="text-[13.3px] font-light mt-4 line-clamp-2">
            {post.description}
          </p>
        )}

        {isEvent && (
          <Button
            label={post.cta || "Apply"}
            variant="outlined"
            className={ctaColorClasses}
            onClick={onCtaClick}
          />
        )}

        {/* Footer */}
        <div className="mt-6 flex justify-between items-center">
          <ProfileCard
            name={post.author?.name}
            viewsCount={post.author?.viewsCount}
            imgUrl={post.author?.imgUrl}
          />

          <Button
            icon={<Share2 className="h-4 w-4" />}
            label="Share"
            variant="solid"
            className="text-gray-900 rounded-md"
            onClick={onShare}
          />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
