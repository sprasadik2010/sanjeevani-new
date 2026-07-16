import React from 'react';
import { services } from '../../data';

const OurService = () => {
  return (
    <div className="px-6 md:px-16 py-12 max-w-6xl mx-auto">
      <h2 className="section-title font-serif-display gold-text text-4xl md:text-5xl">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition border border-amber-100">
            <i className={`fas ${s.icon} text-5xl gold-text mb-5`}></i>
            <h3 className="text-2xl font-bold">{s.title}</h3>
            <p className="text-gray-600 mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;