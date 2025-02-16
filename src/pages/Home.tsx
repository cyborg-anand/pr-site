import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Shield, Truck, Award, Cog, Gauge } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automotive Plastic Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Leading manufacturer of high-quality plastic components for the automotive industry
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 mx-auto">
              Explore Our Products <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose PR Plastics?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over two decades of experience in automotive plastic manufacturing, we deliver excellence in every component
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="w-12 h-12 text-blue-600" />,
                title: 'State-of-the-Art Manufacturing',
                description: 'Advanced injection molding facilities with precision engineering',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: 'Quality Assurance',
                description: 'ISO 9001:2015 certified manufacturing processes',
                image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7'
              },
              {
                icon: <Truck className="w-12 h-12 text-blue-600" />,
                title: 'Reliable Delivery',
                description: 'Just-in-time delivery system for optimal supply chain management',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`${feature.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Products</h2>
            <p className="text-gray-600">Precision-engineered components for automotive excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Gauge className="w-8 h-8 text-blue-600" />,
                title: 'Automotive Filters',
                description: 'High-performance fuel and air filtration systems'
              },
              {
                icon: <Cog className="w-8 h-8 text-blue-600" />,
                title: 'Precision Plugs',
                description: 'Durable and reliable automotive grade plugs'
              },
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: 'Custom Components',
                description: 'Specialized parts engineered to client specifications'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with PR Plastics</h2>
          <p className="text-xl mb-8">Join our growing list of satisfied automotive clients</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;