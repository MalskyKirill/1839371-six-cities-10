import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {URL_MARKER_DEFAULT, ACTIVE_ICON_URL} from '../../consts'; // URL_MARKER_CURRENT
import { Offer } from '../../types/offer';


type MapProps = {
  city: Offer['city'],
  points: Offer[]
  hoveredId?: any;
}

function Map ({city, points, hoveredId}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null!);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const activeIcon = leaflet.icon({
    iconUrl: ACTIVE_ICON_URL,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // useEffect(() => {
  //   if (map) {
  //     points.forEach((point) => {
  //       leaflet
  //         .marker({
  //           lat: point.location.latitude,
  //           lng: point.location.longitude,
  //         }, {
  //           icon: point.id === hoveredId ? activeIcon : defaultCustomIcon,
  //         })
  //         .addTo(map);
  //     });
  //   }
  // }, [map, points, defaultCustomIcon, activeIcon]);

  useEffect(() => {
    let markers: any[] = [];

    if (map) {
      points.forEach((point) => {
        const marker = leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: point.id === hoveredId ? activeIcon : defaultCustomIcon,
          });

        marker.addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      if (map && markers) {
        markers.forEach(marker => {
          marker.remove();
        });
      }
    };
  }, [map, points, defaultCustomIcon, activeIcon]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >

    </div>
  );
}

export default Map;
