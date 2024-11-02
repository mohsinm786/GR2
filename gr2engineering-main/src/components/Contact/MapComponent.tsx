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
        // Load Google Maps API with your key
        await loadGoogleMapsApi('AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries'); // Replace with your actual API key

        if (mapRef.current && window.google) {
          // Center the map over Africa
          const map = new window.google.maps.Map(mapRef.current, {
            zoom: 1.5, // Adjusted zoom level to fit all markers
            center: { lat: 1.3733, lng: 17.7294 }, // Center on Africa
          });

          // Locations to be marked on the map
          const locations = [
            {
              lat: 29.7604,
              lng: -95.3698,
              title: 'GR2 USA — 2900 Wilcrest Drive #455, Houston Texas 77042',
              address: '2900 Wilcrest Drive #455, Houston Texas 77042, USA',
            },
            {
              lat: 4.710989,
              lng: -74.0721,
              title: 'Colombia - Bogotá',
              address: 'Bogotá, Colombia',
            },
            {
              lat: 19.2183,
              lng: 72.9781,
              title: 'India - Maharashtra, Thane',
              address: 'Maharashtra, Thane, India',
            },
          ];

          // InfoWindow to show the address when hovering
          const infoWindow = new window.google.maps.InfoWindow();

          // Add a marker for each location
          locations.forEach((location) => {
            const marker = new window.google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.title,
            });

            // Add event listeners for hover to show the InfoWindow
            marker.addListener('mouseover', () => {
              infoWindow.setContent(`<div><strong>${location.title}</strong><br />${location.address}</div>`);
              infoWindow.open(map, marker);
            });

            // Close the InfoWindow when the mouse leaves
            marker.addListener('mouseout', () => {
              infoWindow.close();
            });
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Initialize the map when component mounts
    initializeMap();
  }, []);

  // Render the map container
  return (
    <div
      ref={mapRef}
      style={{ height: '60vh', width: '100%' }} // Adjust the size as needed
    />
  );
};

export default MapComponent;
