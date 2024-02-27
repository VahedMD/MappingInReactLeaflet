import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const MyLocation = () => {
  const [position, setPosition] = useState(null);

  const Markers = () => {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  };

  return (
    <Wrapper>
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ minHeight: "100%", minWidth: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position === null ? null : (
          <Markers>
            <Popup>You are here</Popup>
          </Markers>
        )}
      </MapContainer>
    </Wrapper>
  );
};

export default MyLocation;

const Wrapper = styled.div`
  height: 90vh;
  width: 90vw;
  margin: 2rem 5%;
`;
