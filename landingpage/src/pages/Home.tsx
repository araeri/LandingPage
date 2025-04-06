import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';
import CategoryButton from '../components/CategoryButton';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
  
function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categoryImages, setCategoryImages] = useState<Record<string, string>>({});

    useEffect(() => {
      getProducts().then((data) => {
        setProducts(data);
  
        const imageMap: Record<string, string> = {};
        data.forEach((product: Product) => {
          if (!imageMap[product.category]) {
            imageMap[product.category] = product.image;
          }
        });
        setCategoryImages(imageMap);
      }).catch(console.error);
    }, []);
  
    const categories = Array.from(new Set(products.map(p => p.category)));
  
    useEffect(() => {
      getProducts().then(setProducts).catch(console.error);
    }, []);

    useEffect(() => {
      getProducts().then(setProducts).catch(console.error);
    }, []);

    return (
      <div>
        <Slider />
        <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {categories.map((cat) => (
            <CategoryButton
              key={cat}
              title={cat}
              imageUrl={categoryImages[cat] || '/images/default.jpg'}
              onClick={() => console.log(`Filtrar por ${cat}`)}
            />
          ))}
        </div>
      </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
}

export default Home;
