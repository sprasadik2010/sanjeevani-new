import React, { useState } from 'react';

const ConsultNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation:', formData);
    alert('Consultation request sent! We\'ll call you within 24 hours.');
  };

  return (
    <div className="px-6 md:px-16 py-12 max-w-2xl mx-auto">
      <h2 className="section-title font-serif-display gold-text text-4xl md:text-5xl">Consult Now</h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl mt-6">
        <p className="text-gray-600">Connect with our senior Vaidya for a personalized consultation.</p>
        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <input 
            type="text" 
            placeholder="Your name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-amber-300 outline-none" 
            required 
          />
          <input 
            type="tel" 
            placeholder="Phone" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-amber-300 outline-none" 
            required 
          />
          <textarea 
            rows={3} 
            placeholder="Describe your health concern" 
            value={formData.concern}
            onChange={(e) => setFormData({...formData, concern: e.target.value})}
            className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-amber-300 outline-none"
            required
          ></textarea>
          <button type="submit" className="btn-gold w-full">
            <i className="fas fa-video mr-2"></i> Request Video Consult
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultNow;