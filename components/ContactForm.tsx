'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website_id: '57a7f89a-8329-49a5-b590-990f73e209a4',
          form_data: { ...formData, submitted_at: new Date().toISOString() }
        })
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      console.log('✅ Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
  <div className="max-w-2xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
        Let's Connect
      </h2>
      <p className="text-lg text-slate-600 max-w-xl mx-auto">
        Have a question or want to make a reservation? We're here to help make your dining experience exceptional.
      </p>
    </div>
    
    {/* Form Fields */}
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-semibold text-slate-800 mb-2"
          >
            Full Name
          </label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-400 transition-all duration-200 hover:border-slate-300"
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-semibold text-slate-800 mb-2"
          >
            Email Address
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-400 transition-all duration-200 hover:border-slate-300"
          />
        </div>
        
        {/* Phone Field */}
        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-semibold text-slate-800 mb-2"
          >
            Phone Number
          </label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            required
            className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-400 transition-all duration-200 hover:border-slate-300"
          />
        </div>
        
        {/* Message Field */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-semibold text-slate-800 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about your inquiry, special requests, or how we can make your experience memorable..."
            required
            className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-400 resize-none transition-all duration-200 hover:border-slate-300"
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transform hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
        
        {/* Trust Badge */}
        <p className="text-center text-sm text-slate-500 mt-4">
          We typically respond within 24 hours
        </p>
      </div>
    </div>
  </div>
</section>
    </form>
  );
}