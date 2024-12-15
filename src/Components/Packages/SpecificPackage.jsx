import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '@/Constant';

const SpecificPackage = () => {
  const { id } = useParams();
  const [specificPackage, setSpecificPackage] = useState(null);

  useEffect(() => {
    const getPackage = async () => {
      const response = await fetchApi(`api/packages/${id}`, 'GET');
      if (response.status === 200) {
        setSpecificPackage(response.data);
      }
    };
    getPackage();
  }, [id]);

  if (!specificPackage) {
    return <div className="text-center text-lg font-semibold text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="relative mb-6">
        <img
          src={specificPackage.image}
          alt={specificPackage.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-70 text-white px-4 py-1 rounded-md text-sm">
          ₹{specificPackage.price}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-800">{specificPackage.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{specificPackage.description}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Available Dates</h2>
        <div className="flex flex-wrap gap-4">
          {specificPackage.availableDates.map((date, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium"
            >
              {new Date(date).toLocaleDateString()}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SpecificPackage;
