import React, { useState } from 'react';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    service: 'Panchakarma'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking:', formData);
    alert('Appointment booked successfully! We\'ll confirm via email.');
  };

  return (
    <div className="px-6 md:px-16 py-12 max-w-2xl mx-auto">
      <h2 className="section-title font-serif-display gold-text text-4xl md:text-5xl">Book Appointment</h2>
      <div className="bg-white p-8 rounded-3xl shadow-xl mt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-amber-300 outline-none" 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-amber-300 outline-none" 
            required 
          />
          <input 
            type="date" 
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-amber-300 outline-none" 
            required 
          />
          <select 
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="w-full border rounded-2xl px-5 py-3 focus:ring-2 focus:ring-amber-300 outline-none"
          >
            <option>Panchakarma</option>
            <option>Abhyanga</option>
            <option>Consultation</option>
            <option>Yoga Therapy</option>
          </select>
          <button type="submit" className="btn-gold w-full text-lg">
            <i className="fas fa-check mr-2"></i> Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;