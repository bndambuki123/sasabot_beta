import React from 'react';
import SignupForm from '../components/SignupForm';

export const Signup = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Join SasaBot Beta Program
          </h1>
          <p className="text-xl text-gray-600">
            Get 3 months free access and 50% lifetime discount
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};