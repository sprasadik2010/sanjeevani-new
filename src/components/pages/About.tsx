import React from 'react';

const About = () => {
  return (
    <div className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
      <h2 className="section-title font-serif-display gold-text text-4xl md:text-5xl">About Sanjeevani</h2>
      <div className="grid md:grid-cols-2 gap-12 mt-8 items-center">
        <div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2010, Sanjeevani Ayurveda is a sanctuary for natural healing. We blend ancient wisdom with modern understanding to offer personalized care.
          </p>
          <p className="text-gray-700 mt-4">
            Our team of experienced Vaidyas (Ayurvedic doctors) and therapists are dedicated to restoring balance through Panchakarma, herbal remedies, and lifestyle guidance.
          </p>
          <div className="mt-6 flex gap-6">
            <div><span className="font-bold gold-text text-3xl">12+</span><p className="text-sm">Years of trust</p></div>
            <div><span className="font-bold gold-text text-3xl">5k+</span><p className="text-sm">Happy patients</p></div>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=400&fit=crop&crop=center" 
          className="rounded-3xl shadow-xl" 
          alt="About Sanjeevani" 
        />
      </div>
    </div>
  );
};

export default About;