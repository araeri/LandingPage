import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/api';
import Breadcrumb from '../components/Breadcrumb';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProducts().then((data) => {
      const foundProduct = data.find((p: Product) => p.id === Number(id));
      setProduct(foundProduct);
    });
  }, [id]);

  if (!product) return <div className="p-4 text-center">Cargando producto...</div>;

  return (
    <div>
      <Breadcrumb category={product.category} productName={product.title} />
      <div className="p-6 flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-96 object-contain"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-xl text-gray-700 mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <button className='bg-black text-white text-sm py-2 px-6 uppercase w-full md:w-auto'>Agregar al carro</button>
          <p className="text-gray-700 mt-6">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
