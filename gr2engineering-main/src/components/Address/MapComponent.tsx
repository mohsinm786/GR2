"use client";

import React, { useEffect, useRef } from 'react';

// Function to load Google Maps API
const loadGoogleMapsApi = (apiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps API failed to load'));

    document.head.appendChild(script);
  });
};

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        await loadGoogleMapsApi('AIzaSyCfrZMWt7mjWlB5-ZYSdUTbKOIGRHc8tfc'); // Replace with your API key

        if (mapRef.current && window.google) {
          const map = new window.google.maps.Map(mapRef.current, {
            zoom: 2, // Adjusted zoom level for better visibility of all markers
            center: { lat: 20.5937, lng: 78.9629 }, // Center the map on India initially
          });

          // Add markers for the locations
          const locations = [
            { lat: 29.7604, lng: -95.3698, title: 'USA - Houston, Texas' },
            { lat: 4.710989, lng: -74.0721, title: 'Colombia - Bogotá' },
            { lat: 19.2183, lng: 72.9781, title: 'India - Maharashtra, Thane' },
          ];

          locations.forEach((location) => {
            new window.google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.title,
            });
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    initializeMap();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: '40vh', width: '50%' }} // Adjust the size as needed
    />
  );
};

export default MapComponent;
