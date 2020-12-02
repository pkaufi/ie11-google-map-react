import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => (
    <div style={{height: '100vh', width: '100%'}}>
        <GoogleMapReact
            // bootstrapURLKeys={{key: "yourkey"}}
            defaultCenter={{lat: 59.95, lng: 30.33}}
            defaultZoom={11}
        >
            <AnyReactComponent
                text="My Marker"
            />
        </GoogleMapReact>
    </div>
);

export default GoogleMap;
