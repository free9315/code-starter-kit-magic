
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Check, Star, Clock, Users } from 'lucide-react';

const Plans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const mealPlans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      meals: 10,
      price: 1500,
      originalPrice: 1800,
      pricePerMeal: 150,
      validity: '15 days',
      popular: false,
      features: [
        'Choose from 50+ dishes',
        'Home delivery',
        'Fresh ingredients',
        'Basic customization'
      ]
    },
    {
      id: 'family',
      name: 'Family Plan',
      meals: 20,
      price: 2800,
      originalPrice: 3600,
      pricePerMeal: 140,
      validity: '30 days',
      popular: true,
      features: [
        'Choose from 100+ dishes',
        'Priority delivery',
        'Fresh ingredients',
        'Full customization',
        'Family sharing'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      meals: 30,
      price: 3900,
      originalPrice: 5400,
      pricePerMeal: 130,
      validity: '45 days',
      popular: false,
      features: [
        'Unlimited dish selection',
        'Express delivery',
        'Organic ingredients',
        'Chef consultation',
        'Special dietary options',
        'Weekend specials'
      ]
    }
  ];

  const subscriptionTypes = [
    {
      id: 'mess',
      name: 'Mess Subscription',
      description: 'Daily meals from verified mess kitchens',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop',
      plans: ['Monthly: ₹3,500', 'Quarterly: ₹9,500', 'Half-yearly: ₹18,000'],
      features: ['Fixed menu', 'Budget-friendly', 'Bulk serving']
    },
    {
      id: 'tiffin',
      name: 'Tiffin Service',
      description: 'Home-style packed meals delivered daily',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop',
      plans: ['Weekly: ₹980', 'Monthly: ₹3,800', 'Quarterly: ₹10,500'],
      features: ['Home-style cooking', 'Healthy portions', 'Customizable']
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white px-4 py-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Meal Plans</h1>
          <p className="text-gray-600">Choose a plan that fits your lifestyle</p>
        </div>

        {/* Meal Credit Plans */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Meal Credit Plans</h2>
          <div className="space-y-4">
            {mealPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-lg shadow-sm border-2 transition-colors ${
                  selectedPlan === plan.id ? 'border-orange-500' : 'border-transparent'
                } ${plan.popular ? 'ring-2 ring-orange-200' : ''}`}
              >
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 text-sm font-medium rounded-t-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-500">₹{plan.price}</div>
                      {plan.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">₹{plan.originalPrice}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{plan.meals} meals</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{plan.validity}</span>
                    </div>
                    <div className="font-medium text-green-600">
                      ₹{plan.pricePerMeal}/meal
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      selectedPlan === plan.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Services */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Subscription Services</h2>
          <div className="space-y-4">
            {subscriptionTypes.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.plans.map((planDetail, index) => (
                      <div key={index} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded">
                        {planDetail}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-2 bg-orange-500 text-white rounded-lg font-medium">
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {selectedPlan && (
          <div className="fixed bottom-20 left-4 right-4 bg-white p-4 rounded-lg shadow-lg border-t border-gray-200">
            <button className="w-full py-3 bg-orange-500 text-white rounded-lg font-bold text-lg">
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Plans;
