// src/components/ui/StyledMap.tsx
"use client";

import { useMemo } from 'react';
// 1. Import OverlayView
import { GoogleMap, useJsApiLoader, Marker, OverlayView } from '@react-google-maps/api';

// ... (mapStyles array remains the same)
const mapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }], },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }], },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#263c3f' }], },
  { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#6b9a76' }], },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#38414e' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#212a37' }], },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9ca5b3' }], },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#746855' }], },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#1f2835' }], },
  { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#f3d19c' }], },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2f3948' }] },
  { featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }], },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#17263c' }], },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#515c6d' }], },
  { featureType: 'water', elementType: 'labels.text.stroke', stylers: [{ color: '#17263c' }], },
];

// This is required for OverlayView to position itself correctly
const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2),
});

export const StyledMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const locations = useMemo(
    () => [
      {
        id: 'vertex-lounge',
        position: { lat: 12.88330668168908, lng: 74.8395799441832 },
        label: 'Vertex Lounge,\nManaged Marketplace',
        url: 'https://maps.app.goo.gl/J5FbtbpZzkSkCZif6',
      },
      {
        id: 'ashoka-business-center',
        position: { lat: 12.89629733522708, lng: 74.84203633701524 },
        label: 'Ashoka business center',
        url: 'https://maps.app.goo.gl/F96Kkq16fj1TmS1ZA',
      },
      {
        id: 'ajanta-business-center',
        position: { lat: 12.892079263230086, lng: 74.84127673886275 },
        label: 'Ajanta business center',
        url: 'https://maps.app.goo.gl/RgGRjd6T3qDeYkcu8',
      },
      {
        id: 'vertex-treo',
        position: { lat: 12.879036666092235, lng: 74.85045687443261 },
        label: 'VERTEX TREO',
        url: 'https://maps.app.goo.gl/dA9pJvmaJFwRxGG6A',
      },
      {
        id: 'vertex-quad',
        position: { lat: 12.908256699363733, lng: 74.83640934071036 },
        label: 'vertex quad',
        url: 'https://maps.app.goo.gl/NUSHGVkHo9ppfqxx8',
      },
      {
        id: 'vertex-five',
        position: { lat: 12.878904966202214, lng: 74.85095970817984 },
        label: 'Vertex Five',
        url: 'https://maps.app.goo.gl/G7DrqUCSqYgPNLRC7',
      },
    ],
    [],
  );

  const center = useMemo(() => locations[0]?.position ?? { lat: 0, lng: 0 }, [locations]);

  if (!isLoaded) return <div className="flex items-center justify-center h-full bg-brand-gray">Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full"
      center={center}
      zoom={13}
      options={{
     
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {locations.map((location, index) => {
        // Get only locations with labels and find the index among them
        const locationsWithLabels = locations.filter(loc => loc.label);
        const labelIndex = locationsWithLabels.findIndex(loc => loc.id === location.id);
        
        // Alternate label position: even index = left, odd index = right
        const isLeft = labelIndex % 2 === 0;
        
        return (
          <div key={location.id}>
            {/* Marker */}
            <Marker
              position={location.position}
              onClick={() => window.open(location.url, '_blank')}
            />
            {/* Label positioned above marker */}
            {location.label && (
              <OverlayView
                position={location.position}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                getPixelPositionOffset={(width, height) => ({
                  x: isLeft ? -(width + 20) : 20, // Left or right offset
                  y: -(height + 40), // Position above the marker
                })}
              >
                <div className="relative inline-block">
                  {/* Speech bubble */}
                  <div className="relative bg-white rounded-lg px-3 py-2.5 shadow-lg">
                    <p className="text-black text-sm font-normal text-center leading-tight whitespace-nowrap">
                      {location.label.split('\n').map((line, idx) => (
                        <span key={`${location.id}-line-${idx}`}>
                          {line}
                          {idx < location.label.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                  {/* Speech bubble tail - always centered, pointing down to marker */}
                  <div 
                    className="absolute"
                    style={{
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderTop: '10px solid white',
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                    }}
                  />
                </div>
              </OverlayView>
            )}
          </div>
        );
      })}
    </GoogleMap>
  );
};