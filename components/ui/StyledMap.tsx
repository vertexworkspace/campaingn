"use client";

import { useMemo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  OverlayView,
} from "@react-google-maps/api";

/* ------------------ MAP STYLES ------------------ */
const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

export const StyledMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  /* ------------ LOCATION LIST WITH CUSTOM POINTER DIRECTIONS ------------ */
  const locations = useMemo(
    () => [
         {
        id: "ajanta-business-center",
        position: { lat: 12.892079263230086, lng: 74.84127673886275 },
        label: "Ajanta Business Center",
        url: "https://maps.app.goo.gl/RgGRjd6T3qDeYkcu8",
        offsetX: 15,
        offsetY: -40,
        pointer: "left", // ▶
      },
       {
        id: "ashoka-business-center",
        position: { lat: 12.89629733522708, lng: 74.84203633701524 },
        label: "Ashoka Business Center",
        url: "https://maps.app.goo.gl/F96Kkq16fj1TmS1ZA",
        offsetX: -85,
        offsetY: -80,
        pointer: "down", // ◀
      },
      {
        id: "vertex-lounge",
        position: { lat: 12.88330668168908, lng: 74.8395799441832 },
        label: "Vertex One", 
        url: "https://maps.app.goo.gl/J5FbtbpZzkSkCZif6",
        offsetX: -48,
        offsetY: -80,
        pointer: "down", // ▼
      },
     
   
      {
        id: "vertex-treo",
        position: { lat: 12.879036666092235, lng: 74.85045687443261 },
        label: "Vertex Treo",
        url: "https://maps.app.goo.gl/dA9pJvmaJFwRxGG6A",
        offsetX: -55,
        offsetY: -80,
        pointer: "down", // ▲
      },
      {
        id: "vertex-quad",
        position: { lat: 12.908256699363733, lng: 74.83640934071036 },
        label: "Vertex Quad",
        url: "https://maps.app.goo.gl/NUSHGVkHo9ppfqxx8",
        offsetX: 20,
        offsetY: -35,
        pointer: "down",
      },
      {
        id: "vertex-five",
        position: { lat: 12.878904966202214, lng: 74.85095970817984 },
        label: "Vertex Five",
        url: "https://maps.app.goo.gl/G7DrqUCSqYgPNLRC7",
        offsetX: -45,
        offsetY: 10,
        pointer: "up",
      },
    ],
    []
  );

 const center = {
  lat: locations[0].position.lat,
lng: locations[0].position.lng + 0.0030, // shift view slightly RIGHT
};


  if (!isLoaded)
    return <div className="flex items-center justify-center h-full bg-brand-gray">Loading Map...</div>;

  /* ------------ POINTER SHAPES ------------ */
  const renderPointer = (direction: string) => {
    switch (direction) {
      case "up":
        return {
          borderBottom: "10px solid white",
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
        };
      case "down":
        return {
          borderTop: "10px solid white",
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
        };
      case "left":
        return {
          borderRight: "10px solid white",
          borderTop: "6px solid transparent",
          borderBottom: "6px solid transparent",
        };
      case "right":
        return {
          borderLeft: "10px solid white",
          borderTop: "6px solid transparent",
          borderBottom: "6px solid transparent",
        };
      default:
        return {};
    }
  };

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full "
      center={center}
      zoom={14.1}
      options={{
       
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {locations.map((location) => (
        <div key={location.id}>
          <Marker
            position={location.position}
            onClick={() => window.open(location.url, "_blank")}
          />

          <OverlayView
            position={location.position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={(width, height) => ({
              x: location.offsetX ?? -(width / 2),
              y: location.offsetY ?? -(height + 80),
            })}
          >
            <div className="relative inline-block">
              <div className="relative bg-white rounded-lg px-3 py-2.5 shadow-lg">
                <p className="text-black text-sm font-normal text-center leading-tight whitespace-nowrap">
                  {location.label.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < location.label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              {/* POINTER BASED ON TYPE */}
              {/* <div
                className="absolute"
                style={{
                  ...(location.pointer === "down" && { bottom: "-10px", left: "50%", transform: "translateX(-50%)" }),
                  ...(location.pointer === "up" && { top: "-10px", left: "50%", transform: "translateX(-50%)" }),
                  ...(location.pointer === "left" && { left: "-10px", top: "50%", transform: "translateY(-50%)" }),
                  ...(location.pointer === "right" && { right: "-10px", top: "50%", transform: "translateY(-50%)" }),

                  ...renderPointer(location.pointer),
                  width: 0,
                  height: 0,
                  position: "absolute",
                }}
              /> */}
            </div>
          </OverlayView>
        </div>
      ))}
    </GoogleMap>
  );
};
