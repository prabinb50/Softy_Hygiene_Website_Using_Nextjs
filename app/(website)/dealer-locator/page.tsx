"use client"
import { AnimatedText } from '@/components/website/AnimationComponents';
import BannerImage from '@/components/website/BannerImage';
import { DealerList } from '@/components/website/DealerList';
import { DealerMap } from '@/components/website/DealerMap';
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
    { name: 'New shivam Traders', location: 'Hetauda', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226459.13219125647!2d85.032449!3d27.428706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb5e583ef3e35d%3A0xa4676223adb8754c!2sHetauda!5e0!3m2!1sen!2snp!4v1745318420000!5m2!1sen!2snp' },
    { name: 'Nirantar suppliers', location: 'Sukedhara', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226133.73933293214!2d85.344607!3d27.578681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1981d9a87549%3A0xb5dc82a78df698ce!2sSukedhara%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1745318450000!5m2!1sen!2snp' },
    { name: 'Prince Trade Center', location: 'Bhairahawa', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226996.10251402298!2d83.453811!3d27.505607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0x2b1e92d89d4bb3ae!2sBhairahawa%2C%20Siddharthanagar!5e0!3m2!1sen!2snp!4v1745318480000!5m2!1sen!2snp' },
    { name: 'Puja Shringar', location: 'Naryangarh', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226670.3734219651!2d84.428111!3d27.685681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e5c336b86399%3A0x9c10268847c83634!2sNarayangarh%2044200!5e0!3m2!1sen!2snp!4v1745318510000!5m2!1sen!2snp' },
    { name: 'R.S. Traders', location: 'Birgunj', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226882.64821243662!2d84.877328!3d27.016228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935446b21c99c3%3A0x45656a847bcde89d!2sBirgunj%2044300!5e0!3m2!1sen!2snp!4v1745318540000!5m2!1sen!2snp' },
    { name: 'Radhe Radhe Suppliers', location: 'Gulariya', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227127.24151934302!2d81.348865!3d28.209547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20c716088e4c5%3A0xa5e8c17f5fe8d638!2sGulariya%2021800!5e0!3m2!1sen!2snp!4v1745318570000!5m2!1sen!2snp' },
    { name: 'Radhika Traders', location: 'Birtamod', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227672.19048533635!2d87.941343!3d26.642204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e59d1414ce0755%3A0xc494de0a08969a2d!2sBirtamode%2057204!5e0!3m2!1sen!2snp!4v1745318600000!5m2!1sen!2snp' }
];

export default function DealerLocatorPage() {
    // State variables for managing dealer data and selected dealer
    const [selectedDealer, setSelectedDealer] = useState<Dealer>(dealers[0]);
    const [sortedDealers, setSortedDealers] = useState<Dealer[]>(dealers);

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const dealersPerPage = 8;

    // State for map height based on window size
    const [mapHeight, setMapHeight] = useState(400);

    // Effect to handle window resize for map height
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

        // Set initial map height based on window size
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Sorting function
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
        setCurrentPage(1);
    };

    // Pagination logic
    const indexOfLastDealer = currentPage * dealersPerPage;
    const indexOfFirstDealer = indexOfLastDealer - dealersPerPage;
    const currentDealers = sortedDealers.slice(indexOfFirstDealer, indexOfLastDealer);
    const totalPages = Math.ceil(sortedDealers.length / dealersPerPage);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Banner Image Component */}
            <BannerImage />

            {/* Main Content Area */}
            <div className="w-full sm:w-11/12 mx-auto py-8 sm:py-12 md:py-15 px-3 sm:px-0">
                <div className="text-center mb-8 sm:mb-12">
                    <AnimatedText>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                            Find Our Nearest Dealers
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg px-2">
                            We are here to help you with any questions or concerns you may have.
                        </p>
                    </AnimatedText>
                </div>

                <div className="bg-pink-100 rounded-md border-pink-100 overflow-hidden shadow-md">
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                        {/* Dealer List Component */}
                        <DealerList
                            dealers={dealers}
                            currentDealers={currentDealers}
                            selectedDealer={selectedDealer}
                            setSelectedDealer={setSelectedDealer}
                            handleSort={handleSort}
                            setSortedDealers={setSortedDealers}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />

                        {/* Dealer Map Component */}
                        <DealerMap selectedDealer={selectedDealer} mapHeight={mapHeight} />
                    </div>
                </div>
            </div>
        </div>
    );
}


