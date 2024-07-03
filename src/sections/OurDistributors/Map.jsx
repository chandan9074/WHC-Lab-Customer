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

const Map = ({ data }) => {
    const API_KEY = "AIzaSyBf3jYv9bdMBEiFStZdyfmlyZlX82_Cbnc";
    const [activeMarker, setActiveMarker] = useState(null);

    const handleMarkerClick = (marker) => {
        setActiveMarker(marker);
    };

    const handlePopupClose = () => {
        setActiveMarker(null);
    };

    // const mapStyles = [
    //     { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
    //     { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
    //     { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
    //     {
    //         featureType: "administrative",
    //         elementType: "geometry.stroke",
    //         stylers: [{ color: "#c9b2a6" }],
    //     },
    //     {
    //         featureType: "administrative.land_parcel",
    //         elementType: "geometry.stroke",
    //         stylers: [{ color: "#dcd2be" }],
    //     },
    //     {
    //         featureType: "administrative.land_parcel",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#ae9e90" }],
    //     },
    //     {
    //         featureType: "landscape.natural",
    //         elementType: "geometry",
    //         stylers: [{ color: "#dfd2ae" }],
    //     },
    //     {
    //         featureType: "poi",
    //         elementType: "geometry",
    //         stylers: [{ color: "#dfd2ae" }],
    //     },
    //     {
    //         featureType: "poi",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#93817c" }],
    //     },
    //     {
    //         featureType: "poi.park",
    //         elementType: "geometry.fill",
    //         stylers: [{ color: "#a5b076" }],
    //     },
    //     {
    //         featureType: "poi.park",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#447530" }],
    //     },
    //     {
    //         featureType: "road",
    //         elementType: "geometry",
    //         stylers: [{ color: "#f5f1e6" }],
    //     },
    //     {
    //         featureType: "road.arterial",
    //         elementType: "geometry",
    //         stylers: [{ color: "#fdfcf8" }],
    //     },
    //     {
    //         featureType: "road.highway",
    //         elementType: "geometry",
    //         stylers: [{ color: "#f8c967" }],
    //     },
    //     {
    //         featureType: "road.highway",
    //         elementType: "geometry.stroke",
    //         stylers: [{ color: "#e9bc62" }],
    //     },
    //     {
    //         featureType: "road.highway.controlled_access",
    //         elementType: "geometry",
    //         stylers: [{ color: "#e98d58" }],
    //     },
    //     {
    //         featureType: "road.highway.controlled_access",
    //         elementType: "geometry.stroke",
    //         stylers: [{ color: "#db8555" }],
    //     },
    //     {
    //         featureType: "road.local",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#806b63" }],
    //     },
    //     {
    //         featureType: "transit.line",
    //         elementType: "geometry",
    //         stylers: [{ color: "#dfd2ae" }],
    //     },
    //     {
    //         featureType: "transit.line",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#8f7d77" }],
    //     },
    //     {
    //         featureType: "transit.line",
    //         elementType: "labels.text.stroke",
    //         stylers: [{ color: "#ebe3cd" }],
    //     },
    //     {
    //         featureType: "transit.station",
    //         elementType: "geometry",
    //         stylers: [{ color: "#dfd2ae" }],
    //     },
    //     {
    //         featureType: "water",
    //         elementType: "geometry.fill",
    //         stylers: [{ color: "#B3D46D" }],
    //     },
    //     {
    //         featureType: "water",
    //         elementType: "labels.text.fill",
    //         stylers: [{ color: "#92998d" }],
    //     },
    // ];
    // let iconMarker = new window.google.maps.MarkerImage(
    //     "https://lh3.googleusercontent.com/bECXZ2YW3j0yIEBVo92ECVqlnlbX9ldYNGrCe0Kr4VGPq-vJ9Xncwvl16uvosukVXPfV=w300",
    //     null /* size is determined at runtime */,
    //     null /* origin is 0,0 */,
    //     null /* anchor is bottom center of the scaled image */,
    //     new window.google.maps.Size(32, 32)
    // );

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
                            <p className="text-base italic px-6 text-center">
                                {activeMarker.address}
                            </p>
                            <div className="flex gap-x-2 pb-[14.4px]">
                                <button className="px-2 md:px-[21px] py-[4.5px] bg-[#0E2F55] text-white text-base">
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
