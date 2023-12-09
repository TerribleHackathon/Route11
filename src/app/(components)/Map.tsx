"use client"

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY!;

import { useRef, useEffect, useState } from "react";


export default function Map() {
  const mapContainer = useRef<mapboxgl.Map | null>();
  const map = useRef(null);
  const [location, setLocation] = useState({ lat: -36.8726609, lng: 174.7448699 });
  const [zoom, setZoom] = useState(17);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    if (map.current) return;
    (map as any).current = new mapboxgl.Map({
      container: mapContainer.current as any,
      style: 'mapbox://styles/supesu/clpym683m009e01mr1kex2fcn',
      center: [location.lng, location.lat],
      zoom: zoom
    });
  }, []);

  return (
    <div className="flex h-full w-full">
      <div ref={mapContainer as any} className="flex h-full w-full" />
    </div>
  );
}