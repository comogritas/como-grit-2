import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function GalleryPreview() {
  const { t } = useTranslation();
  // Assuming this returns an array of up to 6 projects for the preview
  const projects = t("galleryProjects", { returnObjects: true });

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
            {t("galleryTitle")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("gallerySubtitle")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-slate-900 aspect-square rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image with zoom and dim effect */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Top Right Icon Reveal */}
              <div className="absolute top-6 right-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-20">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content Reveal (Slides up from the bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <div className="w-12 h-1 bg-blue-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                {/* Optional category or short text if you have it in your JSON */}
                {project.category && (
                   <p className="text-slate-300 text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                     {project.category}
                   </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/gallery"
            className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors duration-300 shadow-lg active:scale-95 inline-flex items-center gap-3 border border-transparent hover:border-blue-500"
          >
            <span className="relative z-10 uppercase tracking-wider text-sm">
              Explore More Projects
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}