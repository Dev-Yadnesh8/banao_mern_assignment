import { ArrowLeft } from "lucide-react";
import Button from "./Buttons/Button";
import { useState } from "react";
import IconButton from "./Buttons/IconButton";

function Banner({ banner }) {
  const { title, subtitle, imageUrl } = banner;
  const [isJoin, setIsJoin] = useState(true);
  function handleJoinButton() {
    setIsJoin(!isJoin);
  }

  return (
    <div className="relative w-full h-[236px] sm:h-[440px] overflow-hidden transition-all duration-500 ease-in-out">
      <img
        className="object-cover w-full h-full transition-all duration-500 ease-in-out"
        src={imageUrl}
        alt={title}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      {/* Mobile Top Overlay (Back + Join Group) */}
      <div className="lg:hidden absolute top-4 inset-x-0 px-4 md:px-[76px] lg:px-52 flex justify-between items-center z-10 ">
        <IconButton icon={<ArrowLeft className="h-6 w-6 text-white" />} />

        <Button
          onClick={handleJoinButton}
          label={isJoin ? "Leave Group" : "Join Group"}
          variant="outlined"
          className="border-white text-white font-medium hover:bg-white/10 rounded-md text-sm px-4 py-1.5"
        />
      </div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-[76px] lg:px-52   pb-8 sm:pb-14 text-white transition-all duration-500 ease-in-out">
        <h2 className="text-xl sm:text-3xl font-semibold drop-shadow-md tracking-wide">
          {title}
        </h2>
        <p className="text-sm sm:text-lg mt-2 font-extralight tracking-wider">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default Banner;
