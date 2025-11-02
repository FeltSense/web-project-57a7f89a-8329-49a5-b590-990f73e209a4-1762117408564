export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="container-custom">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
        Customer Stories
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        What Our Guests Are Saying
      </h2>
      <p className="text-xl text-slate-600">
        Real experiences from real people who love OG's Resto
      </p>
    </div>

    {/* Video Testimonials Grid */}
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
      {/* Testimonial 1 - Featured Large */}
      <div className="md:col-span-2 group">
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          {/* Video Thumbnail */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
            <img 
              src="https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg"
              alt="Sarah Martinez testimonial"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Duration Badge */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
              1:24
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg"
                alt="Sarah Martinez"
                className="w-16 h-16 rounded-full object-cover border-4 border-amber-500"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">Sarah Martinez</h3>
                <p className="text-amber-400 text-sm font-medium mb-2">Regular Guest • 50+ Orders</p>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-slate-300 text-lg leading-relaxed">
              "The online ordering system is absolutely seamless! I ordered the truffle mushroom risotto at 6:45 PM and it arrived at my door in exactly 23 minutes, still piping hot. The packaging kept everything fresh, and the portion sizes are incredibly generous. I've tried at least 15 different dishes now, and every single one has been restaurant-quality perfection."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          {/* Video Thumbnail */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200">
            <img 
              src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
              alt="Marcus Chen testimonial"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Duration Badge */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium">
              0:58
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <img 
                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                alt="Marcus Chen"
                className="w-14 h-14 rounded-full object-cover border-3 border-amber-400"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Marcus Chen</h3>
                <p className="text-amber-600 text-sm font-medium mb-2">Food Blogger</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-slate-700 leading-relaxed">
              "I've reviewed over 200 restaurants in the city, and OG's Resto consistently delivers exceptional quality. Their farm-to-table approach isn't just marketing—you can actually taste the freshness. The seasonal menu changes keep things exciting, and their chef's attention to detail is remarkable."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          {/* Video Thumbnail */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200">
            <img 
              src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
              alt="Jennifer Park testimonial"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Duration Badge */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium">
              1:12
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <img 
                src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
                alt="Jennifer Park"
                className="w-14 h-14 rounded-full object-cover border-3 border-amber-400"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Jennifer Park</h3>
                <p className="text-amber-600 text-sm font-medium mb-2">Corporate Event Planner</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-slate-700 leading-relaxed">
              "We've catered 8 corporate events with OG's Resto this year, serving anywhere from 30 to 150 people. Their team is incredibly professional, the food arrives on time and perfectly presented, and we've received nothing but compliments. They even accommodate dietary restrictions without any hassle."
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-amber-400/30 last:border-r-0">
            <div className="text-4xl font-bold text-white mb-2">4.9</div>
            <div className="text-amber-100 text-sm font-medium">Average Rating</div>
          </div>
          <div className="border-r border-amber-400/30 md:border-r last:border-r-0">
            <div className="text-4xl font-bold text-white mb-2">2,847</div>
            <div className="text-amber-100 text-sm font-medium">Happy Customers</div>
          </div>
          <div className="border-r border-amber-400/30 last:border-r-0">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-amber-100 text-sm font-medium">Would Recommend</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">23min</div>
            <div className="text-amber-100 text-sm font-medium">Avg. Delivery Time</div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <button className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
        Experience OG's Resto Today
        <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      <p className="text-slate-600 mt-4 text-sm">Join thousands of satisfied guests</p>
    </div>
  </div>
</section>
  );
}