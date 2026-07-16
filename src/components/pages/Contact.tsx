import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="px-6 md:px-16 py-12 max-w-4xl mx-auto">
      <h2 className="section-title font-serif-display gold-text text-4xl md:text-5xl">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="text-gray-700"><i className="fas fa-map-pin gold-text w-6"></i> 123 Vaidya Marg, Jaipur, Rajasthan</p>
          <p className="text-gray-700 mt-4"><i className="fas fa-phone gold-text w-6"></i> +91 98765 43210</p>
          <p className="text-gray-700 mt-4"><i className="fas fa-envelope gold-text w-6"></i> info@sanjeevaniayurveda.com</p>
          <div className="mt-6 flex gap-4 text-2xl gold-text">
            <i className="fab fa-instagram cursor-pointer hover:text-amber-800"></i>
            <i className="fab fa-facebook cursor-pointer hover:text-amber-800"></i>
            <i className="fab fa-youtube cursor-pointer hover:text-amber-800"></i>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-3xl shadow">
          <input 
            type="text" 
            placeholder="Your name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border-b-2 border-amber-200 py-2 outline-none focus:border-amber-600" 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full border-b-2 border-amber-200 py-2 outline-none focus:border-amber-600" 
            required 
          />
          <textarea 
            rows={3} 
            placeholder="Message" 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full border-b-2 border-amber-200 py-2 outline-none focus:border-amber-600"
            required
          ></textarea>
          <button type="submit" className="btn-gold w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;