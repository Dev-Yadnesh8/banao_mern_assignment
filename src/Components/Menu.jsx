import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Menu = ({ position, items = [], onClose }) => {

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (!e.target.closest(".menu-content")) {
        onClose();
      }
    };
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => document.removeEventListener("mousedown", closeOnClickOutside);
  }, [onClose]);

  return createPortal(
    <div
      className="absolute z-50 bg-white shadow-md border border-gray-300 rounded-md py-1 w-40 menu-content"
      style={{
        top: position?.top ?? 0,
        left: position?.left ?? 0,
        position: "absolute",
      }}
    >
      {items.map((item, idx) => (
        <button
          key={idx}
          className="block w-full px-4 py-2 text-sm text-left text-gray-900 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            item.onClick?.();
            onClose();
          }}
        >
          {item.label}
        </button>
      ))}
    </div>,
    document.body
  );
};

export default Menu;
