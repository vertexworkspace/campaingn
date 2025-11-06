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

  const center = useMemo(() => ({ lat: 12.921858201686305, lng: 74.86873329682365 }), []);

  if (!isLoaded) return <div className="flex items-center justify-center h-full bg-brand-gray">Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full"
      center={center}
      zoom={17}
      options={{
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {/* The Marker's only job is to be the red pin. No label prop. */}
      <Marker position={center} />

      {/* This is the OverlayView component. It places our custom div 
        on the map at the exact same coordinates as the marker.
      */}
      <OverlayView
        position={center}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <div className="p-2" style={{ transform: 'translateX(-50px) translateY(-03px)' }}>
           <p className="text-[#E31313] font-normal text-[12px] whitespace-nowrap bg-brand-dark px-2 py-1 ">
            Megamind Studios
          </p>
        </div>
      </OverlayView>
    </GoogleMap>
  );
};