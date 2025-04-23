import React from 'react';

// Define Dealer interface for type safety
interface Dealer {
    name: string;
    location: string;
    mapUrl: string;
}

interface DealerListProps {
    dealers: Dealer[];
    currentDealers: Dealer[];
    selectedDealer: Dealer;
    setSelectedDealer: (dealer: Dealer) => void;
    handleSort: (sortType: string) => void;
    setSortedDealers: (dealers: Dealer[]) => void;
    setCurrentPage: (page: number | ((prev: number) => number)) => void;
    currentPage: number;
    totalPages: number;
}

export const DealerList: React.FC<DealerListProps> = ({
    dealers,
    currentDealers,
    selectedDealer,
    setSelectedDealer,
    handleSort,
    setSortedDealers,
    setCurrentPage,
    currentPage,
    totalPages,
}) => {
    return (
        <div className="w-full lg:w-1/3 p-3 sm:p-4">
            <div className="mb-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    {/* Dropdown for sorting */}
                    <select
                        className="w-full p-2 bg-white rounded-md cursor-pointer text-sm sm:text-base"
                        onChange={(e) => handleSort(e.target.value)}>
                        <option value="name-asc">Sort by Name (A-Z)</option>
                        <option value="name-desc">Sort by Name (Z-A)</option>
                        <option value="location-asc">Sort by Location (A-Z)</option>
                        <option value="location-desc">Sort by Location (Z-A)</option>
                    </select>

                    {/* Reset Button */}
                    <button
                        className="p-2 bg-white rounded-md font-semibold px-4 cursor-pointer hover:bg-yellow-200 transition duration-300 text-sm sm:text-base"
                        onClick={() => {
                            setSortedDealers(dealers);
                            setSelectedDealer(dealers[0]);
                            setCurrentPage(1); // Reset to the first page
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Dealer List */}
            <div className="max-h-[300px] sm:max-h-[350px] md:max-h-[400px] overflow-y-auto pr-1">
                <ul className="space-y-2">
                    {currentDealers.map((dealer, index) => (
                        <li
                            key={index}
                            className={`px-3 sm:px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:shadow-md ${selectedDealer?.name === dealer.name
                                ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                            onClick={() => setSelectedDealer(dealer)}
                        >
                            <h3 className="font-semibold text-sm sm:text-base">{dealer.name}</h3>
                            <p className="text-xs sm:text-sm">{dealer.location}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pagination Component */}
            <div className="flex items-center justify-center mt-5 md:mt-5 lg:mt-4 text-gray-700">
                {/* Display current page and total pages */}
                <div className="text-sm mr-2">Page {currentPage} of {totalPages}</div>
                <div className="flex space-x-2">
                    {/* Previous Page Button */}
                    <button
                        className="w-10 h-10 bg-white rounded-md flex items-center justify-center border border-gray-200 hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Next Page Button */}
                    <button
                        className="w-10 h-10 bg-white rounded-md flex items-center justify-center border border-gray-200 hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};