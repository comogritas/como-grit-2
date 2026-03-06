import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { id: 1, title: "Industrial Equipment Setup", category: "Manufacturing", url: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, title: "Precision Machinery", category: "Equipment", url: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, title: "Workshop Operations", category: "Production", url: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, title: "Quality Control", category: "Testing", url: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, title: "Advanced Technology", category: "Innovation", url: "https://images.pexels.com/photos/8439046/pexels-photo-8439046.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, title: "Factory Floor", category: "Manufacturing", url: "https://images.pexels.com/photos/4195326/pexels-photo-4195326.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 7, title: "Finished Products", category: "Products", url: "https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 8, title: "Team Collaboration", category: "Team", url: "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 9, title: "Technical Assembly", category: "Production", url: "https://images.pexels.com/photos/4195327/pexels-photo-4195327.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 10, title: "Project Showcase", category: "Projects", url: "https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 11, title: "Design Process", category: "Development", url: "https://images.pexels.com/photos/8439047/pexels-photo-8439047.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 12, title: "Final Inspection", category: "Quality", url: "https://images.pexels.com/photos/4195328/pexels-photo-4195328.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Our Expertise in Every Detail</h1>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of projects and manufacturing capabilities. From precision engineering
              to finished products, discover the quality and attention to detail that defines our work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                  index % 5 === 0 || index % 5 === 3 ? 'sm:col-span-1 lg:row-span-2' : ''
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                    <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                    <p className="text-orange-300 text-xs">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300"
          onClick={handleClose}
        >
          <div className="relative w-11/12 h-5/6 sm:w-4/5 sm:h-5/6 max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white font-bold text-xl">{selectedImage.title}</h3>
              <p className="text-orange-400 text-sm">{selectedImage.category}</p>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white hover:bg-gray-200 rounded-full p-2 transition-colors duration-200 shadow-lg"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full p-2 transition-colors duration-200 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full p-2 transition-colors duration-200 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 px-4 py-2 rounded-full">
              <p className="text-white text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}