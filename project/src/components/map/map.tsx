import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {URL_MARKER_DEFAULT} from '../../consts'; // URL_MARKER_CURRENT
import { Offer } from '../../types/offer';


type MapProps = {
  city: Offer['city'],
  points: Offer[]
}

function Map ({city, points}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null!);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, defaultCustomIcon]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >

    </div>
  );
}

export default Map;
