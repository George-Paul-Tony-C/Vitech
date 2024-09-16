import React from 'react';

export default function MerchandiseCard({ productName, productImage, productPrice, productQuantity, onPayNow }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src={productImage} // URL for product image
        alt={productName}
      />

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-600">{productName}</h3>

        {/* Product Price */}
        <div className="text-gray-600 mt-2">
          <p className="text-lg">Price: ₹{productPrice}</p>
        </div>

        {/* Product Quantity */}
        <div className="text-gray-600 mt-2">
          <p>Available Quantity: {productQuantity}</p>
        </div>

        {/* Pay Now Button */}
        <div className="mt-4">
          <button
            onClick={onPayNow}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
