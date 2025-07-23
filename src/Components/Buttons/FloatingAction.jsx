function FloatingActionButton({ icon, onClick }) {
  return (
    <div className="lg:hidden h-14 w-14 fixed bottom-6 right-6 z-50">
      <button
        onClick={onClick}
        className="p-4 bg-gradient-to-t from-[#FF5C5C] to-[#F0568A] text-white rounded-full shadow-md hover:scale-105 transition-transform duration-200"
      >
        {icon}
      </button>
    </div>
  );
}

export default FloatingActionButton;