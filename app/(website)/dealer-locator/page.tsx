"use client"
import BannerImage from '@/components/website/BannerImage';
import React, { useState, useEffect } from 'react';

// Define Dealer interface for type safety
interface Dealer {
    name: string;
    location: string;
    mapUrl: string;
}

// Sample dealer data with map URLs
const dealers: Dealer[] = [
    { name: 'Shifa Suppliers', location: 'Abukhaireni', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225710.73087697633!2d84.480457!3d27.879558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39951eb47fcd0653%3A0xb1440c00115e0c08!2sAanbu%20Khaireni!5e0!3m2!1sen!2snp!4v1745315732889!5m2!1sen!2snp' },
    { name: 'Sirjana Ladies Collection', location: 'Khairenitar', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225364.59174456747!2d84.123945!3d28.045199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995a4c17b684d2b%3A0xfa62aeeb3fbeb67e!2sKhairenitar!5e0!3m2!1sen!2snp!4v1745315992262!5m2!1sen!2snp' },
    { name: 'Shayana Suppliers', location: 'Waling', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225481.10187222526!2d83.768649!3d27.989545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995c54b85798d13%3A0x4720664fba067678!2sWaling%2033801!5e0!3m2!1sen!2snp!4v1745316071431!5m2!1sen!2snp' },
    { name: 'Laxmi Traders', location: 'Baglung', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224876.93755349104!2d83.584735!3d28.277047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399609da7ba8828d%3A0x22703ce6a17dcdab!2sBaglung!5e0!3m2!1sen!2snp!4v1745316109827!5m2!1sen!2snp' },
    { name: 'Begin Traders', location: 'Pokhara', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224976.7772756307!2d83.956618!3d28.229722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1745316146395!5m2!1sen!2snp' },
    { name: 'Prasansa Store', location: 'Malekhu', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225856.93746766343!2d84.830096!3d27.80932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994d63937f0b085%3A0xdd9e20908ba3940!2sMalekhu%2C%20Benighat%2045100!5e0!3m2!1sen!2snp!4v1745318308325!5m2!1sen!2snp' },
    { name: 'Aarav Suppliers', location: 'Trishuli', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225211.72943842734!2d84.917274!3d28.118064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995204ceea6a129%3A0xe1f5cc8ca30e0b91!2sTrishuli!5e0!3m2!1sen!2snp!4v1745318352517!5m2!1sen!2snp' },
    { name: 'Joti Suppliers And Traders', location: 'Khotang', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227200.23030456423!2d86.705691!3d27.156177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e933bb4310e10d%3A0xf901dbd37f9a63b7!2sKhotang!5e0!3m2!1sen!2snp!4v1745318386652!5m2!1sen!2snp' },
];

export default function DealerLocatorPage() {
    // State to track the selected dealer
    const [selectedDealer, setSelectedDealer] = useState<Dealer>(dealers[0]);
    // State to store sorted dealers
    const [sortedDealers, setSortedDealers] = useState<Dealer[]>(dealers);

    // Initialize the map height based on screen size
    const [mapHeight, setMapHeight] = useState(400);

    // Adjust map height based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setMapHeight(300);
            } else if (window.innerWidth <= 1024) {
                setMapHeight(350);
            } else {
                setMapHeight(400);
            }
        };

        // Set initial height
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handler for sorting dealers
    const handleSort = (sortType: string) => {
        const newSortedDealers = [...dealers].sort((a, b) => {
            if (sortType === "name-asc") return a.name.localeCompare(b.name);
            if (sortType === "name-desc") return b.name.localeCompare(a.name);
            if (sortType === "location-asc") return a.location.localeCompare(b.location);
            if (sortType === "location-desc") return b.location.localeCompare(a.location);
            return 0;
        });

        setSortedDealers(newSortedDealers);
        setSelectedDealer(newSortedDealers[0]);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Banner Image Component */}
            <BannerImage />

            {/* Main Dealer Locator Container */}
            <div className="w-full sm:w-11/12 mx-auto py-8 sm:py-12 md:py-15">
                {/* Title Section */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                        Find Our Nearest Dealers
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg px-2">
                        We are here to help you with any questions or concerns you may have.
                    </p>
                </div>

                {/* Dealer List and Map Container */}
                <div className="bg-pink-100 rounded-md border-pink-100 overflow-hidden shadow-md">
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                        {/* Dealer List Section */}
                        <div className="w-full lg:w-1/3 p-3 sm:p-4">
                            {/* Controls Container */}
                            <div className="mb-4">
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    {/* Dropdown for sorting */}
                                    <select
                                        className="w-full p-2 bg-white rounded-md cursor-pointer text-sm sm:text-base"
                                        onChange={(e) => handleSort(e.target.value)}
                                    >
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
                                        }}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* Dealer List */}
                            <div className="max-h-[300px] sm:max-h-[350px] md:max-h-[400px] overflow-y-auto pr-1">
                                <ul className="space-y-2">
                                    {sortedDealers.map((dealer, index) => (
                                        <li
                                            key={index}
                                            className={`px-3 sm:px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:shadow-md ${selectedDealer.name === dealer.name
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
                        </div>

                        {/* Google Map Container */}
                        <div className="w-full lg:w-2/3 p-3 sm:p-4">
                            <div className="rounded-md overflow-hidden shadow-md">
                                <iframe
                                    src={selectedDealer.mapUrl}
                                    width="100%"
                                    height={mapHeight}
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map of ${selectedDealer.name} at ${selectedDealer.location}`}
                                    className="w-full"
                                ></iframe>
                            </div>

                            {/* Selected Dealer Info Card */}
                            <div className="mt-3 bg-white p-3 rounded-md shadow-sm">
                                <h3 className="font-bold text-lg text-purple-700">{selectedDealer.name}</h3>
                                <p className="text-gray-600">Location: {selectedDealer.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}