import { MapPin } from "lucide-react";
import InputField from "./Input/InputField";
import { useState } from "react";

function LocationCard() {
  const [location, setLocation] = useState();
  return (
    <>
      <InputField
        leftIcon={<MapPin className="h-4 w-4" />}
        onChange={(e) => setLocation(e.target.value)}
        onClear={() => setLocation("")}
        value={location}
      />
      <p className="text-xs text-gray-500 mt-8">
        Your location will help us serve better and personalize your experience
      </p>
    </>
  );
}

export default LocationCard;
