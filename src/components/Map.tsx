"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import React from "react";

const markerIcon: Icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = ({ restaurant }) => {
  const lat = restaurant?.geocodes?.main?.latitude;
  const lng = restaurant?.geocodes?.main?.longitude;
  const name = restaurant?.name ?? "Unknown";

  const position: [number, number] = [lat, lng];
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-2">Location</h2>

      <div className="w-full h-84 rounded overflow-hidden">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </div>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open in Google Maps
      </a>
    </div>
  );
};

export default Map;
