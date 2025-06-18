
// Mock data for Homely - Home-cooked food ordering app
export const categories = [
  {
    id: 'north-indian',
    name: 'North Indian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=100&h=100&fit=crop'
  },
  {
    id: 'south-indian',
    name: 'South Indian',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=100&h=100&fit=crop'
  },
  {
    id: 'continental',
    name: 'Continental',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=100&h=100&fit=crop'
  }
];

export const banners = {
  'north-indian': [
    {
      title: "Authentic Home Meals",
      subtitle: "FRESH MADE - ORDER NOW",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=400&fit=crop"
    },
    {
      title: "Mom's Special Recipes",
      subtitle: "Traditional Flavors at Home",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=400&fit=crop"
    }
  ],
  'south-indian': [
    {
      title: "South Indian Delights",
      subtitle: "Crispy Dosas & More",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=400&fit=crop"
    },
    {
      title: "Filter Coffee & Breakfast",
      subtitle: "Authentic South Indian Taste",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=400&fit=crop"
    }
  ],
  continental: [
    {
      title: "Continental Classics",
      subtitle: "Pasta, Salads & More",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop"
    },
    {
      title: "Healthy Options",
      subtitle: "Fresh & Nutritious Meals",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
    }
  ],
  desserts: [
    {
      title: "Sweet Treats",
      subtitle: "Homemade Desserts",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=400&fit=crop"
    },
    {
      title: "Traditional Sweets",
      subtitle: "Just Like Grandma Made",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=400&fit=crop"
    }
  ]
};

// Hero images for ProductGrid sections by category
export const heroImages = {
  'north-indian': {
    quickPicks: {
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=400&fit=crop",
      title: "TODAY'S SPECIAL"
    },
    trending: {
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=400&fit=crop",
      title: "Most Loved Meals"
    }
  },
  'south-indian': {
    quickPicks: {
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=400&fit=crop",
      title: "BREAKFAST SPECIALS"
    },
    trending: {
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=400&fit=crop",
      title: "Popular South Indian"
    }
  },
  continental: {
    quickPicks: {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
      title: "HEALTHY CHOICES"
    },
    trending: {
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
      title: "Continental favorites"
    }
  },
  desserts: {
    quickPicks: {
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=400&fit=crop",
      title: "SWEET TREATS"
    },
    trending: {
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=400&fit=crop",
      title: "Popular desserts"
    }
  }
};

// Featured Categories for each main category
export const featuredCategories = {
  'north-indian': [
    {
      id: 'deal-north',
      name: 'TODAY\'S SPECIAL THALI',
      subtitle: 'UP TO 30% OFF*',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=400&fit=crop',
      isDeal: true
    },
    {
      id: 'roti-sabzi',
      name: 'ROTI & SABZI',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=400&fit=crop'
    },
    {
      id: 'dal-chawal',
      name: 'DAL CHAWAL',
      image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=400&fit=crop'
    },
    {
      id: 'biryani',
      name: 'BIRYANI',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d321?w=300&h=400&fit=crop'
    },
    {
      id: 'paratha',
      name: 'PARATHAS',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=400&fit=crop'
    },
    {
      id: 'curry',
      name: 'CURRIES',
      image: 'https://images.unsplash.com/photo-1574653853027-5d3348d37e7b?w=300&h=400&fit=crop'
    },
    {
      id: 'snacks',
      name: 'SNACKS',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=400&fit=crop'
    },
    {
      id: 'breakfast',
      name: 'BREAKFAST',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=400&fit=crop'
    },
    {
      id: 'combo-meal',
      name: 'COMBO MEALS',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=400&fit=crop'
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=400&fit=crop'
    },
    {
      id: 'under-200',
      name: 'UNDER ₹200',
      subtitle: '₹200',
      image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=400&fit=crop',
      isPriceCategory: true
    }
  ],
  'south-indian': [
    {
      id: 'deal-south',
      name: 'FILTER COFFEE COMBO',
      subtitle: 'UP TO 25% OFF*',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=400&fit=crop',
      isDeal: true
    },
    {
      id: 'dosa',
      name: 'DOSAS',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=400&fit=crop'
    },
    {
      id: 'idli-vada',
      name: 'IDLI & VADA',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=400&fit=crop'
    },
    {
      id: 'uttapam',
      name: 'UTTAPAM',
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=400&fit=crop'
    },
    {
      id: 'sambar-rasam',
      name: 'SAMBAR & RASAM',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=400&fit=crop'
    },
    {
      id: 'curd-rice',
      name: 'CURD RICE',
      image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=400&fit=crop'
    }
  ],
  continental: [
    {
      id: 'deal-continental',
      name: 'HEALTHY MEAL DEAL',
      subtitle: 'UP TO 20% OFF*',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=400&fit=crop',
      isDeal: true
    },
    {
      id: 'pasta',
      name: 'PASTA',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=400&fit=crop'
    },
    {
      id: 'salads',
      name: 'SALADS',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=400&fit=crop'
    },
    {
      id: 'sandwiches',
      name: 'SANDWICHES',
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=400&fit=crop'
    },
    {
      id: 'soups',
      name: 'SOUPS',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=400&fit=crop'
    },
    {
      id: 'wraps',
      name: 'WRAPS',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=400&fit=crop'
    }
  ],
  desserts: [
    {
      id: 'deal-desserts',
      name: 'SWEET TREAT COMBO',
      subtitle: 'UP TO 30% OFF*',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=400&fit=crop',
      isDeal: true
    },
    {
      id: 'traditional-sweets',
      name: 'TRADITIONAL SWEETS',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=400&fit=crop'
    },
    {
      id: 'cakes-pastries',
      name: 'CAKES & PASTRIES',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=400&fit=crop'
    },
    {
      id: 'ice-cream',
      name: 'ICE CREAM',
      image: 'https://images.unsplash.com/photo-1560008511-471c2703e8a1?w=300&h=400&fit=crop'
    },
    {
      id: 'kheer-pudding',
      name: 'KHEER & PUDDING',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=400&fit=crop'
    }
  ]
};

export const products = {
  'north-indian': [
    {
      id: 'ni1',
      name: 'Home Style Dal Chawal',
      price: 180,
      originalPrice: 220,
      image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=400&fit=crop',
      brand: 'Priya\'s Kitchen',
      category: 'north-indian',
      subcategory: 'dal-chawal',
      slotsLeft: 5,
      ingredients: 'Toor dal, Basmati rice, Turmeric, Cumin, Amul ghee',
      customizations: ['Extra ghee', 'Less salt', 'Amul butter on rice']
    },
    {
      id: 'ni2',
      name: 'Punjabi Rajma Chawal',
      price: 220,
      originalPrice: 280,
      image: 'https://images.unsplash.com/photo-1574653853027-5d3348d37e7b?w=300&h=400&fit=crop',
      brand: 'Mama\'s Kitchen',
      category: 'north-indian',
      subcategory: 'curry',
      slotsLeft: 3,
      ingredients: 'Rajma beans, Basmati rice, Onions, Tomatoes, Cream',
      customizations: ['Extra cream', 'Less spicy', 'Brown rice option']
    },
    {
      id: 'ni3',
      name: 'Aloo Paratha with Curd',
      price: 150,
      originalPrice: 190,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=400&fit=crop',
      brand: 'Dadi\'s Recipe',
      category: 'north-indian',
      subcategory: 'paratha',
      slotsLeft: 8,
      ingredients: 'Wheat flour, Potatoes, Curd, Amul butter, Green chilies',
      customizations: ['Extra butter', 'Pickle on side', 'Jaggery option']
    }
  ],
  'south-indian': [
    {
      id: 'si1',
      name: 'Masala Dosa with Sambar',
      price: 120,
      originalPrice: 150,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=400&fit=crop',
      brand: 'Amma\'s Kitchen',
      category: 'south-indian',
      subcategory: 'dosa',
      slotsLeft: 10,
      ingredients: 'Rice, Urad dal, Potatoes, Coconut oil, Curry leaves',
      customizations: ['Extra sambar', 'Coconut chutney', 'No oil']
    },
    {
      id: 'si2',
      name: 'Idli Sambar (4 pieces)',
      price: 100,
      originalPrice: 130,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=400&fit=crop',
      brand: 'Tamil Kitchen',
      category: 'south-indian',
      subcategory: 'idli-vada',
      slotsLeft: 6,
      ingredients: 'Rice, Urad dal, Toor dal, Vegetables, Coconut',
      customizations: ['Extra idli', 'Ghee on top', 'Filter coffee combo']
    }
  ],
  continental: [
    {
      id: 'c1',
      name: 'Penne Arrabbiata',
      price: 250,
      originalPrice: 320,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=400&fit=crop',
      brand: 'Maria\'s Kitchen',
      category: 'continental',
      subcategory: 'pasta',
      slotsLeft: 4,
      ingredients: 'Penne pasta, Tomatoes, Garlic, Olive oil, Basil',
      customizations: ['Extra cheese', 'Whole wheat pasta', 'Less spicy']
    },
    {
      id: 'c2',
      name: 'Mediterranean Salad Bowl',
      price: 180,
      originalPrice: 230,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=400&fit=crop',
      brand: 'Healthy Bites',
      category: 'continental',
      subcategory: 'salads',
      slotsLeft: 7,
      ingredients: 'Mixed greens, Olives, Feta cheese, Olive oil, Lemon',
      customizations: ['Extra feta', 'No cheese', 'Add avocado']
    }
  ],
  desserts: [
    {
      id: 'd1',
      name: 'Homemade Gajar Halwa',
      price: 120,
      originalPrice: 160,
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=400&fit=crop',
      brand: 'Sweet Treats',
      category: 'desserts',
      subcategory: 'traditional-sweets',
      slotsLeft: 5,
      ingredients: 'Carrots, Milk, Sugar, Cardamom, Almonds',
      customizations: ['Extra dry fruits', 'Less sugar', 'Vegan option']
    },
    {
      id: 'd2',
      name: 'Chocolate Brownie',
      price: 80,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=400&fit=crop',
      brand: 'Baker\'s Delight',
      category: 'desserts',
      subcategory: 'cakes-pastries',
      slotsLeft: 12,
      ingredients: 'Dark chocolate, Butter, Eggs, Flour, Walnuts',
      customizations: ['Extra chocolate', 'Eggless option', 'Ice cream on top']
    }
  ]
};

export const quickPicks = [
  {
    id: 'q1',
    name: 'Quick Dal Rice Bowl',
    price: 150,
    originalPrice: 190,
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=400&fit=crop',
    brand: 'Express Kitchen',
    slotsLeft: 15,
    ingredients: 'Yellow dal, Rice, Turmeric, Cumin',
    customizations: ['Extra ghee', 'Less salt']
  },
  {
    id: 'q2',
    name: 'Grilled Chicken Salad',
    price: 280,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=400&fit=crop',
    brand: 'Healthy Choice',
    slotsLeft: 8,
    ingredients: 'Chicken breast, Mixed greens, Olive oil',
    customizations: ['Extra chicken', 'No dressing']
  },
  {
    id: 'q3',
    name: 'Masala Chai & Biscuits',
    price: 60,
    originalPrice: 80,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=400&fit=crop',
    brand: 'Chai Corner',
    slotsLeft: 20,
    ingredients: 'Tea leaves, Milk, Sugar, Cardamom',
    customizations: ['Less sugar', 'Almond milk', 'Extra strong']
  },
  {
    id: 'q4',
    name: 'Fruit Smoothie Bowl',
    price: 120,
    originalPrice: 160,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=400&fit=crop',
    brand: 'Fresh Vibes',
    slotsLeft: 12,
    ingredients: 'Mixed fruits, Yogurt, Honey, Granola',
    customizations: ['Extra fruits', 'No honey', 'Chia seeds']
  }
];

export const trendingProducts = [
  {
    id: 't1',
    name: 'Butter Chicken & Naan',
    price: 320,
    originalPrice: 420,
    image: 'https://images.unsplash.com/photo-1574653853027-5d3348d37e7b?w=300&h=400&fit=crop',
    brand: 'Royal Kitchen',
    slotsLeft: 6,
    ingredients: 'Chicken, Tomatoes, Cream, Butter, Wheat flour',
    customizations: ['Extra gravy', 'Garlic naan', 'Less cream']
  },
  {
    id: 't2',
    name: 'Avocado Toast & Eggs',
    price: 180,
    originalPrice: 230,
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=400&fit=crop',
    brand: 'Morning Fresh',
    slotsLeft: 10,
    ingredients: 'Sourdough bread, Avocado, Eggs, Olive oil',
    customizations: ['Poached eggs', 'Extra avocado', 'Multigrain bread']
  },
  {
    id: 't3',
    name: 'Hyderabadi Biryani',
    price: 280,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d321?w=300&h=400&fit=crop',
    brand: 'Nawab\'s Kitchen',
    slotsLeft: 4,
    ingredients: 'Basmati rice, Mutton, Saffron, Yogurt, Fried onions',
    customizations: ['Extra raita', 'Chicken option', 'Less spicy']
  },
  {
    id: 't4',
    name: 'Fresh Fruit Tart',
    price: 150,
    originalPrice: 200,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=400&fit=crop',
    brand: 'Sweet Corner',
    slotsLeft: 8,
    ingredients: 'Pastry base, Custard, Mixed fruits, Honey',
    customizations: ['Extra fruits', 'Sugar-free', 'Whipped cream']
  }
];

export const justInProducts = [
  {
    id: 'j1',
    name: 'Quinoa Power Bowl',
    price: 220,
    originalPrice: 280,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=400&fit=crop',
    brand: 'Fit Foods',
    slotsLeft: 12,
    ingredients: 'Quinoa, Chickpeas, Vegetables, Tahini',
    customizations: ['Extra protein', 'No dressing', 'Add avocado']
  },
  {
    id: 'j2',
    name: 'Grandma\'s Khichdi',
    price: 130,
    originalPrice: 170,
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=400&fit=crop',
    brand: 'Comfort Kitchen',
    slotsLeft: 15,
    ingredients: 'Rice, Moong dal, Turmeric, Ginger, Ghee',
    customizations: ['Extra ghee', 'Add vegetables', 'Less salt']
  },
  {
    id: 'j3',
    name: 'Filter Coffee & Vada',
    price: 90,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=400&fit=crop',
    brand: 'South Delights',
    slotsLeft: 18,
    ingredients: 'Coffee beans, Milk, Urad dal, Coconut oil',
    customizations: ['Extra strong', 'Less sugar', 'Coconut chutney']
  },
  {
    id: 'j4',
    name: 'Homemade Pasta Salad',
    price: 160,
    originalPrice: 210,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=400&fit=crop',
    brand: 'Italian Touch',
    slotsLeft: 9,
    ingredients: 'Pasta, Cherry tomatoes, Basil, Mozzarella',
    customizations: ['Extra cheese', 'Gluten-free pasta', 'No cheese']
  }
];
