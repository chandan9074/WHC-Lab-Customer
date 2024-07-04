// components/GoogleMap.js
import React, { useState } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import Images from "../../../public/assets/Images";
import walter from "../../../public/assets/Images/walter.png";

const containerStyle = {
    // width: "100%",
    height: "500px",
};

const center = {
    lat: 48.8566,
    lng: 2.3522,
};

const Map = ({ data, activeMarker, setActiveMarker }) => {
    const API_KEY = "AIzaSyBf3jYv9bdMBEiFStZdyfmlyZlX82_Cbnc";

    const handleMarkerClick = (marker) => {
        setActiveMarker(marker);
    };

    const handlePopupClose = () => {
        setActiveMarker(null);
    };

    const handleDirectionsClick = () => {
        if (activeMarker) {
            const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${activeMarker.lat},${activeMarker.lng}`;
            window.open(directionsUrl, "_blank");
        }
    };
    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={2}
                options={{
                    gestureHandling: "greedy",
                    disableDefaultUI: true,
                    // styles: mapStyles,
                }}
            >
                {data.map((location, index) => (
                    <Marker
                        key={index}
                        icon={{
                            url: Icons.mapMarker.src,
                            // scaledSize: new google.maps.Size(40, 40),
                        }}
                        position={{ lat: location.lat, lng: location.lng }}
                        onClick={() => handleMarkerClick(location)}
                    />
                ))}
                {activeMarker && (
                    <InfoWindow
                        position={{
                            lat: activeMarker.lat,
                            lng: activeMarker.lng,
                        }}
                        onCloseClick={handlePopupClose}
                    >
                        <div className="md:w-[300px] flex flex-col items-center justify-center">
                            <div className="w-full bg-[#0E2F55] px-5 py-2 flex justify-between">
                                <h5 className="text-lg md:text-xl font-medium text-white">
                                    {activeMarker.name}
                                </h5>
                                <button onClick={handlePopupClose}>
                                    <Image
                                        alt="cross"
                                        width={1000}
                                        height={1000}
                                        src={Icons.cross}
                                        className="w-5 h-5"
                                    />
                                </button>
                            </div>
                            <p className="text-base italic px-6 py-2 text-center">
                                {activeMarker.address}
                            </p>
                            <div className="flex gap-x-2 pb-[14.4px]">
                                <button
                                    onClick={handleDirectionsClick}
                                    className="px-2 md:px-[21px] py-[4.5px] bg-[#0E2F55] text-white text-base"
                                >
                                    Directions
                                </button>
                                <a
                                    href={activeMarker.webUrl}
                                    target="_blank"
                                    className="px-2 md:px-[21px] py-[4.5px] bg-[#0E2F55]"
                                >
                                    <span className="text-white text-base">
                                        Website
                                    </span>
                                </a>
                            </div>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
