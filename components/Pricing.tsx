export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase bg-emerald-50 px-4 py-2 rounded-full">
          Premium Website Package
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
        Your Restaurant,
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
          Beautifully Online
        </span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        A complete digital presence designed to showcase your culinary excellence and streamline your operations
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-lg mx-auto">
      <div className="relative">
        {/* Popular Badge */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            ✨ Complete Package
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              OG's Resto Website
            </h2>
            <p className="text-slate-300 mb-6">
              Everything you need to succeed online
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-bold text-white">$29</span>
              <span className="text-slate-300 text-lg">one-time</span>
            </div>
            <p className="text-emerald-400 mt-3 font-medium">
              No monthly fees • Yours forever
            </p>
          </div>

          {/* Features List */}
          <div className="px-8 py-10">
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Curated Seasonal Menu Display</p>
                  <p className="text-slate-600 text-sm mt-1">Showcase locally-sourced ingredients with beautiful photography</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Complete Online Ordering System</p>
                  <p className="text-slate-600 text-sm mt-1">Seamless pickup and delivery ordering for your customers</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Real-Time Table Reservations</p>
                  <p className="text-slate-600 text-sm mt-1">Easy booking system with live availability updates</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Chef & Team Showcase</p>
                  <p className="text-slate-600 text-sm mt-1">Highlight your award-winning culinary expertise and story</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Ambiance Gallery & Virtual Tour</p>
                  <p className="text-slate-600 text-sm mt-1">Show off your warm, modern dining atmosphere</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Dietary & Allergen Information</p>
                  <p className="text-slate-600 text-sm mt-1">Full transparency with dietary accommodations and filters</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00?client_reference_id=57a7f89a-8329-49a5-b590-990f73e209a4'}
              className="w-full mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started - $29
            </button>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Guarantee */}
      <div className="mt-8 text-center">
        <p className="text-slate-600 text-sm">
          🎯 <span className="font-semibold">Perfect for restaurants</span> ready to grow their online presence
        </p>
      </div>
    </div>

    {/* Social Proof Section */}
    <div className="mt-20 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Why Restaurants Choose This Package
          </h3>
          <p className="text-slate-600">
            Everything you need, nothing you don't
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Launch in Days</h4>
            <p className="text-slate-600 text-sm">Get your restaurant online quickly with our streamlined setup</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Mobile-First Design</h4>
            <p className="text-slate-600 text-sm">Perfect experience on every device your customers use</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Boost Revenue</h4>
            <p className="text-slate-600 text-sm">Online ordering and reservations drive more business</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}