"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";
import { useEffect, useRef, useState } from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

// create custom icon
const customIcon = new Icon({
    iconUrl: "/assets/Icons/map.svg",
    iconSize: [38, 38], // size of the icon
});

// markers
const markers = [
    {
        geocode: [48.86, 2.3522],
        popUp: "Hello, I am pop up 1",
    },
    {
        geocode: [48.85, 2.3522],
        popUp: "Hello, I am pop up 2",
    },
    {
        geocode: [48.855, 2.34],
        popUp: "Hello, I am pop up 3",
    },
];
function Map({ data }) {
    console.log("data------", data);
    const router = useRouter();
    const mapRef = useRef();
    const [map, setMap] = useState(null);
    // const [openPopups, setOpenPopups] = useState([]);

    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current.leafletElement;
            const styles = [
                // The provided JSON styles
                [
                    {
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                saturation: 36,
                            },
                            {
                                color: "#333333",
                            },
                            {
                                lightness: 40,
                            },
                        ],
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [
                            {
                                visibility: "on",
                            },
                            {
                                color: "#ffffff",
                            },
                            {
                                lightness: 16,
                            },
                        ],
                    },
                    {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [
                            {
                                visibility: "off",
                            },
                        ],
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                color: "#fefefe",
                            },
                            {
                                lightness: 20,
                            },
                        ],
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [
                            {
                                color: "#fefefe",
                            },
                            {
                                lightness: 17,
                            },
                            {
                                weight: 1.2,
                            },
                        ],
                    },
                    {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#f5f5f5",
                            },
                            {
                                lightness: 20,
                            },
                        ],
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#f5f5f5",
                            },
                            {
                                lightness: 21,
                            },
                        ],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#dedede",
                            },
                            {
                                lightness: 21,
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                color: "#ffffff",
                            },
                            {
                                lightness: 17,
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [
                            {
                                color: "#ffffff",
                            },
                            {
                                lightness: 29,
                            },
                            {
                                weight: 0.2,
                            },
                        ],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#ffffff",
                            },
                            {
                                lightness: 18,
                            },
                        ],
                    },
                    {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#ffffff",
                            },
                            {
                                lightness: 16,
                            },
                        ],
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#f2f2f2",
                            },
                            {
                                lightness: 19,
                            },
                        ],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#e9e9e9",
                            },
                            {
                                lightness: 17,
                            },
                        ],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                color: "#b3d46d",
                            },
                        ],
                    },
                ],
                // Add other styles here...
            ];

            map.setStyle(styles);
        }
    }, []);

    // const closePopup = (index) => {
    //     // Find the marker by its index
    //     const layers = mapRef.current.leafletElement.getLayers();
    //     // Filter out only the marker layers
    //     const markerLayers = layers.filter(
    //         (layer) => layer instanceof L.Marker
    //     );
    //     // Find the marker layer by its index
    //     const markerLayer = markerLayers[index];
    //     // Close the popup associated with the marker layer
    //     if (markerLayer && markerLayer.closePopup) {
    //         markerLayer.closePopup();
    //     }
    // };
    const popupElRef = useRef(null);

    // const hideElement = () => {
    //     if (!popupElRef.current || !map) return;
    //     popupElRef.current._close();
    //     // map.closePopup();
    // };

    // const togglePopup = (index) => {
    //     if (openPopups.includes(index)) {
    //         setOpenPopups(openPopups.filter((item) => item !== index));
    //     } else {
    //         setOpenPopups([...openPopups, index]);
    //     }
    // };

    // const handlePopupOpen = (index) => {
    //     setOpenPopups([...openPopups, index]);
    // };

    // const handlePopupClose = (index) => {
    //     setOpenPopups(openPopups.filter((item) => item !== index));
    // };

    // const handlePopupClose = (popupRef) => {
    //     if (popupRef?.current) {
    //         popupRef.current.closePopup();
    //     }
    // };

    return (
        <MapContainer
            center={[48.8566, 2.3522]}
            zoom={2}
            ref={mapRef}
            // whenCreated={setMap}
        >
            {/* OPEN STREEN MAPS TILES */}
            <TileLayer
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=467NZCjp5VlALLlfSwJ2"
            />

            {/* Mapping through the markers */}
            {data.map((marker, index) => (
                <Marker
                    key={index}
                    position={[marker.lat, marker.lng]}
                    icon={customIcon}
                >
                    <Popup
                        // onOpen={() => handlePopupOpen(index)}
                        // onClose={() => handlePopupClose(index)}
                        // ref={popupElRef}

                        // ref={(popupElRef) => handlePopupClose(popupElRef)}
                        closeButton={false}
                    >
                        <div className="w-[300px] flex flex-col items-center justify-center">
                            <div className="w-full bg-[#0E2F55] px-5 py-2 flex justify-between">
                                <h5 className="text-xl font-medium text-white">
                                    {marker.name}
                                </h5>
                                {/* <button
                                    onClick={() => handlePopupClose(popupElRef)}
                                >
                                    <Image
                                        alt="cross"
                                        width={1000}
                                        height={1000}
                                        src={Icons.cross}
                                        className="w-5 h-5"
                                    />
                                </button> */}
                            </div>
                            <p className="text-base italic">{marker.address}</p>
                            <div className="flex gap-x-2 pb-[14.4px]">
                                <button className="px-[21px] py-[4.5px] bg-[#0E2F55] text-white text-base">
                                    Directions
                                </button>
                                <a
                                    href={marker.webUrl}
                                    target="_blank"
                                    className="px-[21px] py-[4.5px] bg-[#0E2F55] "
                                    // onClick={() => router.push(marker.webUrl)}
                                >
                                    <span className="text-white text-base">
                                        Website
                                    </span>
                                </a>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;
