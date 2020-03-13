import React, { useLayoutEffect, useRef } from 'react';

import './App.css';
import { Pulse } from './Pulse';

const App: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useLayoutEffect(() => {
        if (canvasRef.current) {
            const { height, width } = canvasRef.current.getBoundingClientRect();
            canvasRef.current.height = height;
            canvasRef.current.width = width;

            const pulse = new Pulse(canvasRef.current);
            return () => pulse.destroy();
        }
    }, [canvasRef]);

    return (
        <div className="wrapper">
            <canvas className="pulse" ref={canvasRef} />;
        </div>
    );
};

export default App;
