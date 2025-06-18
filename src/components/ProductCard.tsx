
import React from 'react';
import ProductCardImage from './product-card/ProductCardImage';
import ProductCardInfo from './product-card/ProductCardInfo';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  slotsLeft?: number;
  ingredients?: string;
  customizations?: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onClick?: () => void;
  showHeartIcon?: boolean;
  itemNumber?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onClick, 
  showHeartIcon = false,
  itemNumber 
}) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(product);
  };

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group overflow-hidden"
      onClick={handleClick}
    >
      <ProductCardImage
        name={product.name}
        image={product.image}
        onAddToCart={handleAddToCart}
        showHeartIcon={showHeartIcon}
        itemNumber={itemNumber}
      />
      
      <ProductCardInfo
        brand={product.brand}
        name={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
      />
      
      {/* Food-specific info */}
      {product.slotsLeft !== undefined && (
        <div className="px-2 pb-2">
          <div className="flex items-center justify-between text-xs">
            <span className={`font-medium ${product.slotsLeft <= 5 ? 'text-red-500' : 'text-green-600'}`}>
              {product.slotsLeft} meals left
            </span>
            {product.ingredients && (
              <span className="text-gray-500 truncate ml-2" title={product.ingredients}>
                Fresh ingredients
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
