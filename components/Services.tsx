export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
  <div className="container-custom">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-medium text-amber-900">Premium Dining Experience</span>
      </div>
      <h2 className="heading-1 mb-6">
        Crafted for Your <span className="text-gradient">Culinary Journey</span>
      </h2>
      <p className="body-large text-slate-600">
        From farm-fresh ingredients to seamless reservations, every detail is designed to elevate your dining experience
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      
      {/* Service 1: Curated Menu */}
      <div className="group card-elevated hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-3 group-hover:text-emerald-600 transition-colors">
              Seasonal Curated Menu
            </h3>
            <p className="body text-slate-600 mb-4 leading-relaxed">
              Experience the finest locally-sourced ingredients, carefully selected by our culinary team. Each dish celebrates the season's peak flavors with sustainable, farm-to-table freshness.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                Farm-to-Table
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                Seasonal Specials
              </span>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* Service 2: Online Ordering */}
      <div className="group card-elevated hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-3 group-hover:text-blue-600 transition-colors">
              Seamless Online Ordering
            </h3>
            <p className="body text-slate-600 mb-4 leading-relaxed">
              Order your favorites with just a few taps. Choose convenient pickup or doorstep delivery with real-time tracking, secure payment, and special dietary customization options.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                Quick Pickup
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                Fast Delivery
              </span>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* Service 3: Table Reservations */}
      <div className="group card-elevated hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-3 group-hover:text-purple-600 transition-colors">
              Smart Table Reservations
            </h3>
            <p className="body text-slate-600 mb-4 leading-relaxed">
              Book your perfect table instantly with real-time availability. Select your preferred seating area, party size, and special occasion needs—all confirmed in seconds.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                Real-Time Booking
              </span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                Instant Confirmation
              </span>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* Service 4: Award-Winning Team */}
      <div className="group card-elevated hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-3 group-hover:text-amber-600 transition-colors">
              Award-Winning Culinary Team
            </h3>
            <p className="body text-slate-600 mb-4 leading-relaxed">
              Led by our celebrated executive chef, our passionate culinary team brings decades of expertise, innovative techniques, and a commitment to excellence in every dish we create.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                Expert Chefs
              </span>
              <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                Award Winners
              </span>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
        <button className="btn-primary group">
          View Full Menu
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button className="btn-secondary">
          Make a Reservation
        </button>
      </div>
    </div>
  </div>
</section>
  );
}