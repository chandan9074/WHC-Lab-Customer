"use client";
import { useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import WhcHero from "../../../../public/WhcHero";
import petriDishVideo from "../../../../public/petri_dish_topview.mp4";
import PetriDesignV2 from "../../../../public/Petri_Design_v2";

const HeroRightSide = () => {
    const isDragging = useRef(false);
    const previousMousePosition = useRef({ x: 0, y: 0 });

    const handleMouseDown = (event) => {
        isDragging.current = true;
        previousMousePosition.current = {
            x: event.clientX,
            y: event.clientY,
        };
    };

    const handleMouseMove = (event) => {
        if (!isDragging.current) return;

        const deltaMove = {
            x: event.clientX - previousMousePosition.current.x,
            y: event.clientY - previousMousePosition.current.y,
        };

        previousMousePosition.current = {
            x: event.clientX,
            y: event.clientY,
        };

        // Update rotation based on mouse movement
        // You can adjust the rotation speed by multiplying with a factor
        // For example, divide by 100 for slower rotation
        // You may need to adjust the axis of rotation depending on your object's orientation
        const rotationSpeed = 0.005;
        const newRotation = {
            x: deltaMove.y * rotationSpeed,
            y: deltaMove.x * rotationSpeed,
        };

        // Apply rotation to the object
        // You need to access the object and apply the rotation here
        // For simplicity, I'll assume WhcHero has a prop called rotation that can be updated
        // Adjust this part according to how you control the rotation of WhcHero
        // For example, if WhcHero is a mesh, you might use the rotation prop
        // <WhcHero rotation={[x, y, z]} />
        // Make sure to handle degrees to radians conversion if necessary
        // For example, THREE.MathUtils.degToRad(degrees)
        // Here, I'm just logging the new rotation assuming rotation is a prop of WhcHero
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    return (
        <div
            className="relative h-[400px] sm:h-[600px]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <Canvas>
                <ambientLight />
                <Suspense fallback={null}>
                    {/* <Earth /> */}
                    <PetriDesignV2 />
                </Suspense>
                <OrbitControls
                    enableRotate={!isDragging.current}
                    enableZoom={false}
                    // zoom0={500}
                    // minZoom={500}
                />
                {/* <Environment preset="sunset" /> */}
            </Canvas>
        </div>
        // <div className="flex justify-center items-center h-full">
        //     <video
        //         playsInline
        //         src={petriDishVideo}
        //         autoPlay
        //         muted
        //         loop
        //         className="w-full h-[320px] sm:h-[400px] md:h-[300px] xl:h-[500px] 2xl:h-[600px] object-cover"
        //     />
        // </div>
    );
};

export default HeroRightSide;
