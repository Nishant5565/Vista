import React, { useEffect, useState } from 'react';
import { fetchApi } from '@/Constant';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from 'react-router-dom';

import {
     Select,
     SelectContent,
     SelectGroup,
     SelectItem,
     SelectLabel,
     SelectTrigger,
     SelectValue,
   } from "@/components/ui/select"

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 5;

  useEffect(() => {
    const getPackage = async () => {
      const response = await fetchApi('api/packages', 'GET');
      if (response.status === 200) {
        setPackages(response.data);
        setFilteredPackages(response.data);
      }
    }
    getPackage();
  }, []);

  useEffect(() => {
    let filtered = packages.filter(pkg =>
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'low-to-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-to-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredPackages(filtered);
  }, [searchTerm, sortOrder, packages]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tour Packages</h1>
      <div className="mb-4 flex justify-between ">
        <input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-lg w-80 "
        />
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="border p-2 rounded-lg w-60">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="high-to-low">Price: High to Low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-nowrap gap-4">
        {currentPackages.length > 0 && currentPackages.map(pkg => (
          <Dialog key={pkg._id} onOpenChange={() => setSelectedPackage(pkg)} >
            <DialogTrigger asChild>
              <div className="border rounded-lg shadow-lg cursor-pointer w-60 p-1 ">
                <img src={pkg.image} alt={pkg.title} className="w-60 h-40 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h2 className="text-[17px] h-12 font-semibold text-gray-800">{pkg.title}</h2>
                  <p className="text-gray-600 mt-2 text-[12px] h-20">{pkg.description.substring(0, 100)}...</p>
                  <p className="text-gray-800 font-semibold mt-4">₹{pkg.price}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 overflow-hidden">
              <DialogHeader className=" p-4 font-normal bg-blue-600 text-white">
                <DialogTitle className="font-normal">{selectedPackage?.title}</DialogTitle>
              </DialogHeader>
              <DialogDescription className="p-4">
                <img src={selectedPackage?.image} alt={selectedPackage?.title} className="w-full h-60 object-cover rounded-lg" />
                <p className="text-gray-600 mt-4">{selectedPackage?.description}</p>
                <p className="text-gray-800 font-semibold mt-4">₹{selectedPackage?.price}</p>
              </DialogDescription>
              <Link to={`/package/${selectedPackage?._id}`} className="bg-teal-600 text-white px-4 py-2 mb-4 mx-auto rounded-lg">Book Now</Link>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <div className="mt-10 text-center ">
        {Array.from({ length: Math.ceil(filteredPackages.length / packagesPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 border rounded-lg ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Packages;