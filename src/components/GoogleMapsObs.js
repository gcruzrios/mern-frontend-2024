import React from "react";
import { GoogleMap, useJsApiLoader, LoadScript, Marker} from '@react-google-maps/api';


const GoogleMapsObs = () => {

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 10, lng: -84
  }

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 10.2,
        lng: -83.5 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 10.5,
        lng: -83

      },
    },
    
 
    
  ];
  return (
    <div>
     

     <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}>
         { 
         
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         
         }
         
     </GoogleMap>

    </div>
  );
};

export default GoogleMapsObs;






