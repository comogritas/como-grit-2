import React from 'react';
import { ArrowRight } from 'lucide-react';

// Assets Imports
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.webp';
import about3 from '../assets/about3.jpg';

const Services = () => {
  const services = [
    {
      id: "01.",
      title: "CNC Laser Cutting",
      image: about1,
      // Smaller span, but tall
      className: "md:col-span-4 h-[450px]" 
    },
    {
      id: "02.",
      title: "CNC Bending",
      image: about2,
      // Wider and tall
      className: "md:col-span-8 h-[450px]"
    },
    {
      id: "03.",
      title: "Powder Coating",
      image: about3,
      className: "md:col-span-7 h-[500px]"
    },
    {
      id: "04.",
      title: "CNC Machining",
      image: about1,
      className: "md:col-span-5 h-[500px]"
    },
    {
      id: "05.",
      title: "Welding",
      image: about2,
      className: "md:col-span-6 h-[550px]"
    },
    {
      id: "06.",
      title: "Final Metal Processing",
      image: about3,
      className: "md:col-span-6 h-[550px]"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      {/* Header - Aligned with the narrower grid */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Services</h2>
        <div className="w-20 h-1 bg-blue-600"></div>
      </div>

      {/* Grid - max-w-screen-2xl makes the items less wide than full screen */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-2 px-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`group relative overflow-hidden cursor-pointer w-full rounded-sm ${service.className} md:h-auto min-h-[400px]`}
          >
            {/* Background Image */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Default Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

            {/* Blue Sliding Overlay */}
            <div className="absolute inset-0 bg-blue-600/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

            {/* Content Layer */}
            <div className="relative h-full p-10 flex flex-col justify-between z-10">
              <span className="text-white/60 text-xl font-mono group-hover:text-white transition-colors">
                {service.id}
              </span>

              <div>
                <h3 className="text-white text-3xl font-bold mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {service.title}
                </h3>
                
                {/* Reveal Button */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <div className="inline-flex items-center gap-3 text-white border border-white/40 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;