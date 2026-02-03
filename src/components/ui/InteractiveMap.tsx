"use client"

import { MapContainer, TileLayer, Circle } from "react-leaflet"

const center: [number, number] = [46.160329, -1.151139]

export default function ZoneInterventionMap() {
  return (
    <div className="w-full h-[520px] rounded-lg overflow-hidden">
      <MapContainer center={center} zoom={9} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={center}
          radius={60000}
          pathOptions={{
            color: "#dc2626",
            weight: 2,
            dashArray: "6 6",
            fillOpacity: 0
          }}
        />
      </MapContainer>
    </div>
  )
}
