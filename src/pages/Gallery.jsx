import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const galleryImages = [
    { id: 1, title: "Industrial Equipment Setup", category: "Manufacturing", url: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 2, title: "Precision Machinery", category: "Equipment", url: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 3, title: "Workshop Operations", category: "Production", url: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 4, title: "Quality Control", category: "Testing", url: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 5, title: "Advanced Technology", category: "Innovation", url: "https://images.pexels.com/photos/8439046/pexels-photo-8439046.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 6, title: "Factory Floor", category: "Manufacturing", url: "https://images.pexels.com/photos/4195326/pexels-photo-4195326.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 7, title: "Finished Products", category: "Products", url: "https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 8, title: "Team Collaboration", category: "Team", url: "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 9, title: "Technical Assembly", category: "Production", url: "https://images.pexels.com/photos/4195327/pexels-photo-4195327.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 10, title: "Project Showcase", category: "Projects", url: "https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 11, title: "Design Process", category: "Development", url: "https://images.pexels.com/photos/8439047/pexels-photo-8439047.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 12, title: "Final Inspection", category: "Quality", url: "https://images.pexels.com/photos/4195328/pexels-photo-4195328.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 13, title: "Metal Fabrication", category: "Manufacturing", url: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 14, title: "Welding Operations", category: "Production", url: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 15, title: "Quality Assurance", category: "Testing", url: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 16, title: "Modern Facility", category: "Infrastructure", url: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800" }
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    document.body.style.overflow = 'hidden';
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Expertise in Every Detail
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
              Explore our portfolio of metal fabrication projects and manufacturing capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(index)}
                className={`group relative cursor-pointer overflow-hidden bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 hover:border-blue-600 rounded-lg ${
                  isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                } ${
                  (index % 7 === 0 || index % 7 === 4) ? 'row-span-2' : 'aspect-square'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  minHeight: (index % 7 === 0 || index % 7 === 4) ? '400px' : '200px'
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {galleryImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">No images to display</p>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900/95 via-slate-900/98 to-black/95 backdrop-blur-lg animate-fadeIn"
          onClick={handleClose}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>

            <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
              <img
                src={selectedImage.url.replace('w=800', 'w=1600')}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain animate-scaleIn rounded-xl shadow-2xl"
              />
            </div>

            <button
              onClick={handleClose}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 z-20 border border-white/20 hover:border-white/40 rounded-xl"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 sm:p-4 transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 z-20 border border-white/20 hover:border-white/40 rounded-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 sm:p-4 transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 z-20 border border-white/20 hover:border-white/40 rounded-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl z-20 border border-white/20 hover:border-white/40 transition-colors">
              <p className="text-white text-sm font-medium">
                {currentIndex + 1} <span className="text-white/60">of</span> {galleryImages.length}
              </p>
            </div>

            <div className="absolute bottom-8 right-8 flex gap-2 z-20">
              <button
                onClick={handlePrev}
                className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}} />
    </div>
  );
}
