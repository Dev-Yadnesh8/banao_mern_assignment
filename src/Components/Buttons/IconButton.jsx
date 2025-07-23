function IconButton({icon,onClick,className}) {
    return <button className={`cursor-pointer ${className && className}`} onClick={onClick}>
        {icon}
    </button>
}
export default IconButton;