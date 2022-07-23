import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts';

function Map ({city, points}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.city.location.latitude,
            lng: point.city.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return(
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >

    </div>
  );
}

export default Map;
