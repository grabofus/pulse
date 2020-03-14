import './App.css';

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { Pulse2D, Pulse3D } from './pulses';
import { PulseBase } from './pulses/PulseBase';
import { PulseConstructor } from './types';

enum Modes {
    Pulse2D,
    Pulse3D
}

const App: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mode, setMode] = useState(Modes.Pulse3D);
    const [animationSpeed] = useState(3);

    useLayoutEffect(() => {
        if (canvasRef.current) {
            const { height, width } = canvasRef.current.getBoundingClientRect();
            canvasRef.current.height = height;
            canvasRef.current.width = width;

            const Pulse: PulseConstructor = mode === Modes.Pulse2D ? Pulse2D : Pulse3D;

            const pulse = new Pulse(canvasRef.current, animationSpeed);
            return () => pulse.destroy();
        }
    }, [canvasRef, mode, animationSpeed]);

    const handleClick = useCallback(() => {
        setMode((prev) => (prev === Modes.Pulse2D ? Modes.Pulse3D : Modes.Pulse2D));
    }, []);

    return (
        <div className="wrapper">
            <canvas className="pulse" onClick={handleClick} ref={canvasRef} />
        </div>
    );
};

export default App;
