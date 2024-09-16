import { useState } from 'react';

// Dummy data for merchandise sales
const merchandiseData = [
  { id: 1, name: 'T-Shirt', price: 20, sales: 50 },
  { id: 2, name: 'Cap', price: 10, sales: 35 },
  { id: 3, name: 'Mug', price: 15, sales: 40 },
  { id: 4, name: 'Notebook', price: 12, sales: 25 },
  { id: 5, name: 'Hoodie', price: 40, sales: 20 },
];

const MerchandiseSales = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const merchandisePerPage = 5;

  // Calculate the current merchandise to display
  const indexOfLastMerchandise = currentPage * merchandisePerPage;
  const indexOfFirstMerchandise = indexOfLastMerchandise - merchandisePerPage;
  const currentMerchandise = merchandiseData.slice(indexOfFirstMerchandise, indexOfLastMerchandise);

  const totalPages = Math.ceil(merchandiseData.length / merchandisePerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Merchandise Sales</h2>

      {/* Merchandise Sales Table */}
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Price</th>
            <th className="py-2 px-4 border-b text-left">Sales</th>
            <th className="py-2 px-4 border-b text-left">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {currentMerchandise.map((merchandise) => (
            <tr key={merchandise.id}>
              <td className="py-2 px-4 border-b">{merchandise.id}</td>
              <td className="py-2 px-4 border-b">{merchandise.name}</td>
              <td className="py-2 px-4 border-b">${merchandise.price}</td>
              <td className="py-2 px-4 border-b">{merchandise.sales}</td>
              <td className="py-2 px-4 border-b">${merchandise.price * merchandise.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => paginate(page + 1)}
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MerchandiseSales;
