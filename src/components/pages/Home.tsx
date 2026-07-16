import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data';

const Home = () => {
  return (
    <div className="px-6 md:px-16 py-8">
      {/* HERO BANNER */}
      <div className="hero-banner p-8 md:p-16 rounded-4xl banner-shadow flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="flex-1 space-y-5">
          <span className="text-sm font-semibold tracking-widest text-amber-700 uppercase">Welcome to wellness</span>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold leading-tight text-gray-800">
            Rejuvenate <br /><span className="gold-text">Body & Mind</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            Authentic Ayurveda for modern life. Experience holistic healing with Sanjeevani.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/book-now" className="btn-gold inline-block">
              <i className="fas fa-calendar-check mr-2"></i> Book Now
            </Link>
            <Link to="/consult-now" className="btn-outline-gold inline-block">
              <i className="fas fa-user-md mr-2"></i> Consult Now
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=500&fit=crop&crop=center"
            alt="Ayurveda banner"
            className="rounded-3xl shadow-2xl max-h-[300px] md:max-h-[400px] w-full object-cover"
          />
        </div>
      </div>

      {/* Services Preview */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition hover-scale">
            <i className={`fas ${s.icon} text-4xl gold-text mb-4`}></i>
            <h3 className="font-bold text-xl">{s.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="mt-20 bg-amber-50/60 p-8 rounded-3xl text-center">
        <p className="font-serif-display text-2xl italic text-gray-700 max-w-3xl mx-auto">
          “True health is harmony of body, mind, and spirit. Let Sanjeevani guide your journey.”
        </p>
        <p className="mt-3 gold-text font-semibold">— Dr. Anjali Sharma, Founder</p>
      </div>
    </div>
  );
};

export default Home;