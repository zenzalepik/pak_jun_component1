"use client";  // Tambahkan ini jika Anda menggunakan state atau hook di halaman ini
import HelloWorld from '../components/TombolIconRounded';
import React from 'react';
import SliderCarousel from '../components/SliderCarousel';

const Home = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to My Next.js App</h1>
      <SliderCarousel />
    </div>
  );
};

export default Home;
