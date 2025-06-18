
import React from 'react';
import { Home, Search, Grid3X3, User, ShoppingCart, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationBarProps {
  cartItemCount?: number;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ cartItemCount = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Grid3X3, label: 'Explore', path: '/explore' },
    { icon: Calendar, label: 'Plans', path: '/plans' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: ShoppingCart, label: 'Cart', path: '/cart', badge: cartItemCount > 0 }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 relative ${
                isActive 
                  ? 'text-orange-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium truncate">{item.label}</span>
              {item.badge && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationBar;
