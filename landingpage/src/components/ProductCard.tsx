import React from 'react';
import { useNavigate } from 'react-router-dom';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="shadow-md p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500">${product.price}</p>
    </div>
  );
};

export default ProductCard;
