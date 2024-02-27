import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
  return (
    <Wrapper>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ minHeight: "100%", minWidth: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

export default SimpleMap;

const Wrapper = styled.div`
  height: 90vh;
  width: 90vw;
  margin: 2rem 5%;
`;
