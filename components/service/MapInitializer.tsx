'use client';

/**
 * Map initialization hook
 * Separates map setup logic from main component
 */

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AFRICA_MAP_CONFIG } from '@/lib/constants/africa-map';
import { SERVICE_CONFIG } from '@/lib/constants/service';

interface UseMapInitializerResult {
  map: React.MutableRefObject<mapboxgl.Map | null>;
  isLoaded: boolean;
  mapContainer: React.RefObject<HTMLDivElement>;
}

export const useMapInitializer = (): UseMapInitializerResult => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error('NEXT_PUBLIC_MAPBOX_TOKEN is not set');
      return;
    }

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: SERVICE_CONFIG.map.style,
      bounds: AFRICA_MAP_CONFIG.bounds.africa,
      fitBoundsOptions: {
        padding: 50,
      },
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.current.on('load', () => {
      setIsLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return { map, isLoaded, mapContainer };
};

