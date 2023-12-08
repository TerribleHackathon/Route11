"use client"
// Copied from ttps://dev.to/logiqbits/creating-interactive-maps-with-react-and-mapbox-gl-js-in-a-nextjs-app-53pn

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
//import geoJson from "";

const Map = () => {
  const mapContainerRef = useRef(null);
  const [zoom, setZoom] = useState(12);
  const [lng, setLng] = useState(-36.8608);
  const [lt, setLt] = useState(174.7400);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lt],
      zoom: zoom
    });

    map.on("load", function () {
        map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
            if (error) throw error;
            map.addImage("custom-marker", image);
            
            //add features here

            /*map.addSource("points", {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features: geoJson.map((point) => ({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [point.long, point.lat]
                },
                properties: {
                    title: `Point ${point.c + 1}`
                }
                }))
            }
            });
    
            map.addSource("line", {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                type: "LineString",
                coordinates: geoJson.map((point) => [point.long, point.lat])
                }
            }
            });
    
            map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
                "icon-image": "custom-marker",
                "text-field": ["get", "title"],
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 1.25],
                "text-anchor": "top"
            }
            });
    
            map.addLayer({
            id: "line",
            type: "line",
            source: "line",
            layout: {},
            paint: {
                "line-color": "blue",
                "line-width": 2
            }
            });*/
        }
        );
    });  

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="h-full w-full" ref={mapContainerRef} />
    </div>
  );
};

export default Map;

