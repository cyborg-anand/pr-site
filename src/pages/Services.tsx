import { motion } from 'framer-motion';
import { Factory,  PenTool as Tool, FileSearch, Cog, Gauge, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Factory size={40} />,
      title: 'Injection Molding',
      description: 'State-of-the-art injection molding for automotive components.',
      features: ['High-precision molding', 'Multiple cavity tools', 'Advanced material processing']
    },
    {
      icon: <Gauge size={40} />,
      title: 'Filter Manufacturing',
      description: 'Specialized production of automotive filtration systems.',
      features: ['Fuel filters', 'Air filters', 'Custom filtration solutions']
    },
    {
      icon: <Cog size={40} />,
      title: 'Plug Production',
      description: 'Precision-engineered automotive plugs and connectors.',
      features: ['Custom designs', 'High-temperature resistance', 'Durability testing']
    },
    {
      icon: <Tool size={40} />,
      title: 'Tool Design',
      description: 'Custom tooling and mold design services.',
      features: ['3D modeling', 'Prototype development', 'Tool maintenance']
    },
    {
      icon: <FileSearch size={40} />,
      title: 'Quality Testing',
      description: 'Comprehensive quality assurance and testing.',
      features: ['Material testing', 'Dimensional inspection', 'Performance validation']
    },
    {
      icon: <Wrench size={40} />,
      title: 'Custom Solutions',
      description: 'Tailored engineering solutions for specific requirements.',
      features: ['Design consultation', 'Material selection', 'Process optimization']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Manufacturing Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive plastic manufacturing solutions for the automotive industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;