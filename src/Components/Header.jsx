import { ArrowBigDown, ChevronDown, Search } from "lucide-react";
import InputField from "./Input/InputField";
import { useState } from "react";
import ProfileCard from "./PorfileCard";
import IconButton from "./Buttons/IconButton";

function Header({ onTriggerAuth, isLoggedIn }) {
  const [searchQuery, setSearchQuery] = useState();

  return (
    <div className="hidden lg:flex sticky top-0 z-50 justify-between items-center px-8 h-20 w-full border-b border-gray-500 shadow-sm bg-white transition-all duration-500 ease-in-out">
      {/* Logo */}
      <img
        src="/company_logo.png"
        alt="Company Logo"
        className="h-6 object-contain"
      />

      {/* Search Field */}
      <div className="w-1/2 max-w-md">
        <InputField
          placeholder="search for you favourite group in ATG"
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={() => setSearchQuery("")}
          value={searchQuery}
          variant="solid"
          className="w-full rounded-full"
          leftIcon={<Search className="h-5 w-5 text-gray-700" />}
        />
      </div>

      {/* User Info or Auth Prompt */}
      {isLoggedIn ? (
        <div className="flex items-center gap-x-2">
          <ProfileCard
            imgUrl={"https://i.imgflip.com/94cuiy.jpg"}
            name={"Badak Kumar"}
            isGroup={true}
          />
          <IconButton
            icon={<ChevronDown className="h-4 w-4 text-gray-950" />}
          />
        </div>
      ) : (
        <div className="text-sm text-gray-600 text-center flex items-center">
          <span className="mr-1">Create Account.</span>
          <span
            onClick={onTriggerAuth}
            className="text-blue font-bold cursor-pointer"
          >
            It’s Free!
          </span>
          <IconButton
            icon={<ChevronDown className="h-4 w-4 text-gray-950" />}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
