"use client";
import { useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import WhcHero from "../../../../public/WhcHero";

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
        console.log(newRotation);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    return (
        <div
            className="relative h-[600px]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <Canvas>
                <ambientLight />
                <Suspense fallback={null}>
                    {/* <Earth /> */}
                    <WhcHero />
                </Suspense>
                <OrbitControls
                    enableRotate={!isDragging.current}
                    enableZoom={false}
                />
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};

export default HeroRightSide;
