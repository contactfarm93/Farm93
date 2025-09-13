import React from 'react';
import { Hero } from './Hero';
import { Hero1 } from './Hero1';
import { Grow } from './Grow';
import Footer from './Footer';

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Hero1 Section */}
      <section className="w-full">
        <Hero1 />
      </section>

      {/* Grow Section */}
      <section className="w-full">
        <Grow />
      </section>

      {/* Footer */}
      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
};
