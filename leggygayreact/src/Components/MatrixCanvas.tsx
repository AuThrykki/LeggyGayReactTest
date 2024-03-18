import React, { useEffect } from 'react';
import MatrixRain from './Matrix';

const MatrixCanvas: React.FC = () => {
    useEffect(() => {
        MatrixRain()    
    }, []);

    return <canvas id="MatrixCanvas"></canvas>;
}

export default MatrixCanvas;