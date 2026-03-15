'use client';

import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { setKey, fromAddress } from 'react-geocode';
import Spinner from './Spinner';
import Image from 'next/image';
import pin from '@/assets/images/pin.png';

// Mapa interativo do imóvel usando Mapbox e geocodificação via Google
const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: '100%',
    height: '500px',
  });
  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);

  setKey(process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY);

  useEffect(() => {
    // Converte o endereço do imóvel em coordenadas geográficas
    const fetchCoords = async () => {
      try {
        const res = await fromAddress(
          `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`
        );

        if (res.results.length === 0) {
          setGeocodeError(true);
          return;
        }

        const { lat, lng } = res.results[0].geometry.location;

        setLat(lat);
        setLng(lng);
        setViewport({
          ...viewport,
          latitude: lat,
          longitude: lng,
        });
      } catch (error) {
        console.error('Erro ao geocodificar o endereço:', error);
        setGeocodeError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCoords();
  }, []);

  if (loading) return <Spinner loading={loading} />;

  if (geocodeError) {
    return (
      <div className='text-xl text-center font-bold mt-10'>
        Não foi possível exibir o mapa para este endereço.
      </div>
    );
  }

  return (
    !loading && (
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapLib={import('mapbox-gl')}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 15,
        }}
        style={{ width: '100%', height: '500px' }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        <Marker longitude={lng} latitude={lat} anchor='bottom'>
          <Image src={pin} alt='Localização do imóvel' width={40} height={40} />
        </Marker>
      </Map>
    )
  );
};

export default PropertyMap;
