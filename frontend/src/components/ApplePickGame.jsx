import { useEffect, useRef, useState } from "react";

const ApplePickGame = () => {
    const canvasRef = useRef(null);
    const playerWidth = 60;
    const playerHeight = 20;
    const canvasWidth = 400;
    const canvasHeight = 500;
    const playerSpeed = 1;

    const [playerX, setPlayerX] = useState((canvasWidth - playerWidth) / 2);
    const [leftPressed, setLeftPressed] = useState(false);
    const [rightPressed, setRightPressed] = useState(false);

    // Handle key presses
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") setLeftPressed(true);
            if (e.key === "ArrowRight") setRightPressed(true);
        };
        const handleKeyUp = (e) => {
            if (e.key === "ArrowLeft") setLeftPressed(false);
            if (e.key === "ArrowRight") setRightPressed(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    // Game loop for smooth movement
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const draw = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas

            // Move player smoothly if keys are pressed
            setPlayerX((prevX) => {
                let newX = prevX;
                if (leftPressed) newX = Math.max(0, prevX - playerSpeed);
                if (rightPressed) newX = Math.min(canvasWidth - playerWidth, prevX + playerSpeed);
                return newX;
            });

            // Draw player
            ctx.fillStyle = "pink";
            ctx.fillRect(playerX, canvasHeight - playerHeight - 10, playerWidth, playerHeight);

            requestAnimationFrame(draw); // Keep looping
        };

        draw(); // Start loop

    }, [leftPressed, rightPressed, playerX]); // Watch for key press flags

    return (
        <canvas
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            style={{
                border: "3px solid white",
                background: "#001f3f",
                display: "block",
                margin: "20px auto",
            }}
        />
    );
};

export default ApplePickGame;
