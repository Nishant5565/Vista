import React, { useEffect, useState } from 'react';
import { fetchApi } from '@/Constant';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
     const getPackage = async () => {
          const response = await fetchApi('api/packages', 'GET');
          if (response.status === 200) {
               setPackages(response.data);
          }
     }
     getPackage();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tour Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.length > 0 && packages.map((pkg) => (
          <div key={pkg?._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={pkg?.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{pkg?.title}</h2>
              <p className="text-gray-700 mb-2">{pkg?.description}</p>
              <p className="text-gray-900 font-bold mb-2">${pkg?.price}</p>
              <p className="text-gray-600">Available Dates: {pkg?.dates.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;