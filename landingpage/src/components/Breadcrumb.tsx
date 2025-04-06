import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  category: string;
  productName: string;
}

const Breadcrumb = ({ category, productName }: BreadcrumbProps) => {
  return (
    <nav className="text-sm text-gray-600 px-6 py-8">
      <ol className="flex flex-wrap space-x-1 md:space-x-2">
        <li>
          <Link to="/" className="hover:underline ">Inicio</Link>
          <span className="mx-1">/</span>
        </li>
        <li>
          <span className="capitalize">{category}</span>
          <span className="mx-1">/</span>
        </li>
        <li className="text-gray-800 font-medium truncate">{productName}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
