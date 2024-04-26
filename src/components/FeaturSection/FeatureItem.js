import React from 'react';

const FeatureItem = ({ number, image, description }) => {
    return (
        <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img src={image} alt={`Feature ${number}`} className="w-32 h-32 object-cover" />
            <h3 className="mt-2 text-lg font-semibold">Feature {number}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureItem;
