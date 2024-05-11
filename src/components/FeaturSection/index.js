import React from 'react';
import FeatureItem from './FeatureItem'; // Komponen baru untuk item fitur

// Contoh data dengan gambar dan deskripsi
const features = [
    { number: 1, image: 'path/to/image1.jpg', description: 'Deskripsi fitur 1' },
    { number: 2, image: 'path/to/image2.jpg', description: 'Deskripsi fitur 2' },
    { number: 3, image: 'path/to/image3.jpg', description: 'Deskripsi fitur 3' },
    { number: 4, image: 'path/to/image4.jpg', description: 'Deskripsi fitur 4' },
    { number: 5, image: 'path/to/image5.jpg', description: 'Deskripsi fitur 5' },
    { number: 6, image: 'path/to/image6.jpg', description: 'Deskripsi fitur 6' },
    { number: 7, image: 'path/to/image7.jpg', description: 'Deskripsi fitur 7' },
    { number: 8, image: 'path/to/image8.jpg', description: 'Deskripsi fitur 8' },
    // Tambahkan lebih banyak fitur sesuai kebutuhan    
];

const FeatureSection = () => {
    return (
        <div id="feature">
            <div className="mt-24">
                <h1 className="flex justify-center text-3xl font-bold md:text-5xl">Our Feature</h1>
                <p className="flex justify-center">Fitur Hidroponik Kami</p>
            </div>
            <div className="grid grid-cols-2 m-4 md:px-8 gap-2 md:grid-cols-4 md:gap-4 ">
                {features.map((feature, index) => (
                    <FeatureItem key={index} number={feature.number} image={feature.image} description={feature.description} />
                ))}
            </div>
        </div>
    );
}

export default FeatureSection;