
import React from 'react';
import NavigationBar from './NavigationBar';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  selectedSize?: string;
  quantity: number;
}

interface LayoutProps {
  children: React.ReactNode;
  cartItems?: CartItem[];
  onUpdateCartQuantity?: (id: string, quantity: number) => void;
  onRemoveCartItem?: (id: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  cartItems = []
}) => {
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pb-20">
        {children}
      </main>

      {/* Fixed Bottom Navigation */}
      <NavigationBar cartItemCount={cartItemCount} />
    </div>
  );
};

export default Layout;
