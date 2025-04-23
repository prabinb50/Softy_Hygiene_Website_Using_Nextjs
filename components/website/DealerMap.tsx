import React from 'react';

// Define Dealer interface for type safety
interface Dealer {
    name: string;
    location: string;
    mapUrl: string;
}

// Props interface for the DealerMap component
interface DealerMapProps {
    selectedDealer: Dealer;
    mapHeight: number;
}

export const DealerMap: React.FC<DealerMapProps> = ({ selectedDealer, mapHeight }) => {
    return (
        <div className="w-full lg:w-2/3 p-3 lg:p-4 py-0">
            {/* Map container*/}
            <div className="rounded-md overflow-hidden shadow-md">
                {/* Google Maps iframe embedding the dealer's location */}
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

            {/* Selected Dealer Info Card  */}
            <div className="mt-3 mb-3 lg:mb-0 bg-white p-3 rounded-md shadow-sm">
                <h3 className="font-bold text-lg text-purple-700">{selectedDealer.name}</h3>
                <p className="text-gray-600">Location: {selectedDealer.location}</p>
            </div>
        </div>
    );
};
