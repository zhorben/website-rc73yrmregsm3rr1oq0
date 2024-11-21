import React from 'react'
import { motion } from 'framer-motion'
import Newsletter from '../components/Newsletter'
import { Toaster } from 'sonner'

import React from 'react';
import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';
import { Toaster } from 'sonner';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Toaster position="top-center" />
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Our Newsletter</h1>
        </div>
      </header>
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stay Informed and Inspired</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest updates, exclusive content, and special offers delivered straight to your inbox.
            </p>
            <Newsletter />
          </motion.div>
        </div>
      </main>
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Our Newsletter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;