import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import TombolIconRounded from './TombolIconRounded'; // Import komponen tombol yang baru saja kita buat

const slides = [
    Array.from({ length: 12 }, (_, i) => ({
        title: `Button ${i + 1}`,
        description: `Description for button ${i + 1}`
    })),
    Array.from({ length: 12 }, (_, i) => ({
        title: `Button ${i + 13}`,
        description: `Description for button ${i + 13}`
    })),
    Array.from({ length: 12 }, (_, i) => ({
        title: `Button ${i + 25}`,
        description: `Description for button ${i + 25}`
    })),
];

const SliderCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(slides[currentIndex]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const handleResize = () => {
            const newVisibleSlides = window.innerWidth < 1024 ? slides[currentIndex].slice(0, 6) : slides[currentIndex];
            setVisibleSlides(newVisibleSlides);
        };

        handleResize(); // Panggil fungsi saat komponen dimuat untuk memperbarui tampilan pertama kali
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentIndex]); // Tambahkan currentIndex sebagai dependency agar useEffect dipanggil saat currentIndex berubah

    return (
        <div className="relative w-full min-h-min overflow-x-hidden pb-20">
            <div className="inset-0 min-h-min grid grid-cols lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 gap-x-4 gap-y-4 transition-all duration-500 py-16  px-2 lg:px-16">
                {visibleSlides.map((button, index) => (
                    <TombolIconRounded
                        key={index}
                        title={button.title}
                        description={button.description}
                    />
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute lg:left-8 left-32 lg:bottom-1/2 bottom-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-xl hover:shadow-2xl "
            >
                <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute lg:right-8 right-32 lg:bottom-1/2 bottom-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-xl hover:shadow-2xl "
            >
                <ChevronRightIcon className="w-6 h-6 text-gray-800" />
            </button>
        </div>
    );
};

export default SliderCarousel;
