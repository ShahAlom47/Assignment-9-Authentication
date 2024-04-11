

import { MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
    return (
        <div>
           <MapContainer center={[51.5072, 51.5072]} zoom={13} scrollWheelZoom={false} className='w-full h-screen'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[119.4179, 36.7783]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

        </div>
    );
};

export default Map;