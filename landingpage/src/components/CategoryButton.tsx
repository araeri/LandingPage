interface CategoryButtonProps {
    title: string;
    imageUrl: string;
    onClick?: () => void;
  }
  
  const CategoryButton = ({ title, imageUrl, onClick }: CategoryButtonProps) => {
    return (
      <button
        onClick={onClick}
        className="relative w-full h-40 bg-cover bg-center text-white font-bold text-xl flex items-center justify-center overflow-hidden transition transform hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <span className="z-10 capitalize">{title}</span>
        </button>
    );
  };
  
  export default CategoryButton;