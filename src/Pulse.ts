import autoBind from 'auto-bind';

import { degreesToRadians, map, throwError } from './utils';

export class Pulse {
    private _animationSpeed: number = 2;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _height: number;
    private _width: number;

    constructor(canvas: HTMLCanvasElement) {
        autoBind(this);

        this._canvas = canvas;
        this._context = canvas.getContext('2d') ?? throwError('Context not supported!');

        this._height = canvas.height;
        this._width = canvas.width;

        console.log('Pulse created');

        window.requestAnimationFrame(this.draw);
    }

    public destroy(): void {
        console.log('Pulse destroyed');
    }

    public draw(): void {
        const context = this._context;
        const height = this._height;
        const width = this._width;

        const progress = this.getProgress();
        const degree = progress * 360;

        // Clear
        context.save();
        context.clearRect(0, 0, width, height);
        context.translate(width / 2, height / 2);

        // Draw
        for (let i = 0; i < 7; i++) {
            const localDegree = degree + i * -20;
            const rad = degreesToRadians(localDegree);
            const angle = Math.sin(rad);
            const h = map(angle, -1, 1, 50, 200);

            if (i === 0) {
                context.fillRectCenter(0, 0, 20, h);
            } else {
                context.fillRectCenter(i * 30, 0, 20, h);
                context.fillRectCenter(i * -30, 0, 20, h);
            }
        }

        // Restore
        context.restore();
        window.requestAnimationFrame(this.draw);
    }

    private getProgress(): number {
        return ((performance.now() / this._animationSpeed) % 1000) / 1000;
    }
}
