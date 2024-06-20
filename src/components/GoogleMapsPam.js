import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const GoogleMapsPam = () => {
  //const [markerPosition, setMarkerPosition] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 10,
    lng: -84,
  });

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 10,
    lng: -84,
  };

  function handleMapClick(event) {
  

    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    console.log(markerPosition.lat);
    console.log(markerPosition.lng);

    localStorage.setItem("Coordenadas", markerPosition);
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
        onClick={handleMapClick}
      >
        {markerPosition && (
          <Marker position={markerPosition} />
          // <Marker title={markerPosition.lat.toString() +","+markerPosition.lng.toString()} position={markerPosition} />
          //
        )}
      </GoogleMap>

      {/* <div>
        <input
          id="coordenadas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Coordenadas"
          name="coordenadas"
          defaultValue={`${
            markerPosition === null
              ? ""
              : markerPosition.lat.toString() +
                "," +
                markerPosition.lng.toString()
          }`}
        />
      </div> */}

      <div className=" mb-30">
        <label for="socialUrl">Coordenadas</label>
        <div className="input-group flex-nowrap">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-google border-google text-white wh-44 radius-xs justify-content-center"
              id="addon-wrapping1"
            >
              <i className="lab la-google-f fs-18"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control form-control--social"
            placeholder="Coordenadas"
            aria-label="Username"
            aria-describedby="addon-wrapping1"
            id="coordenadas"
            name="coordenadas"
            value={markerPosition.lat+","+markerPosition.lng}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsPam;

