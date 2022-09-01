import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import {URL_MARKER_DEFAULT, ACTIVE_ICON_URL} from '../../consts';
import { Offer } from '../../types/offer';


type MapProps = {
  city: Offer['city'],
  points: Offer[],
  hoveredId?: any,
  pointCurrent?: any,
}

function Map ({city, points, hoveredId, pointCurrent}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null!);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  const activeIcon = leaflet.icon({
    iconUrl: ACTIVE_ICON_URL,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });


  useEffect(() => {
    const markers: any[] = [];

    if (map) {
      points.forEach((point) => {
        const marker = leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: point.id === hoveredId ? activeIcon : defaultCustomIcon,
          });

        if (pointCurrent) {
          const currentMarker = leaflet.marker({
            lat: pointCurrent.location.latitude,
            lng: pointCurrent.location.longitude,
          }, {
            icon: pointCurrent.id === hoveredId ? defaultCustomIcon : activeIcon,
          });
          currentMarker.addTo(map);
        }

        marker.addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      if (map && markers) {
        markers.forEach((marker) => {
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
