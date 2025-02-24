"use client"

import React, { useState, useEffect } from "react";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  type: string;
  image: string;
}

export default function Products() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error loading properties:", error));
  }, []);

  const filteredProperties = filter
    ? properties.filter((property) => property.type === filter)
    : properties;

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded ${!filter ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          All Types
        </button>
        <button
          onClick={() => setFilter("For Sale")}
          className={`px-4 py-2 rounded ${filter === "For Sale" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          For Sale
        </button>
        <button
          onClick={() => setFilter("For Rent")}
          className={`px-4 py-2 rounded ${filter === "For Rent" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          For Rent
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div key={property.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-500 text-lg font-bold">{property.price}</p>
              <button
                onClick={() => handleViewDetails(property)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Details
              </button>
              <button
                className="mt-2 ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="mt-8 p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{selectedProperty.title}</h2>
          <p className="text-gray-600">{selectedProperty.location}</p>
          <p className="text-blue-500 text-lg font-bold">{selectedProperty.price}</p>
          <p className="mt-4">Type: {selectedProperty.type}</p>
          <button
            onClick={() => setSelectedProperty(null)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
