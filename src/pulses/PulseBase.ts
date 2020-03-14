import autoBind from 'auto-bind';

import { throwError } from '../utils';

interface DrawParams {
    context: CanvasRenderingContext2D;
    degree: number;
    height: number;
    width: number;
    progress: number;
}

export abstract class PulseBase {
    private _animationSpeed: number;
    private _context: CanvasRenderingContext2D;
    private _handle: number = -1;
    private _height: number;
    private _width: number;

    constructor(canvas: HTMLCanvasElement, animationSpeed: number) {
        autoBind(this);

        this._animationSpeed = animationSpeed;
        this._context = canvas.getContext('2d') ?? throwError('Context not supported!');

        this._height = canvas.height;
        this._width = canvas.width;

        console.log('Pulse created');

        this.requestAnimationFrame();
    }

    public destroy(): void {
        console.log('Pulse destroyed');
        this.cancelAnimationFrame();
    }

    protected abstract draw(): void;

    protected getProgress(): number {
        return ((performance.now() / this._animationSpeed) % 1000) / 1000;
    }

    protected postDraw(): void {
        this._context.restore();
        this.requestAnimationFrame();
    }

    protected preDraw(): DrawParams {
        const context = this._context;
        const height = this._height;
        const width = this._width;

        const progress = this.getProgress();

        const degree = progress * 360;

        // Clear
        context.save();
        context.clearRect(0, 0, width, height);
        context.translate(width / 2, height / 2);

        return {
            context,
            degree,
            height,
            width,
            progress
        };
    }

    private cancelAnimationFrame(): void {
        window.cancelAnimationFrame(this._handle);
    }

    private requestAnimationFrame(): void {
        this._handle = window.requestAnimationFrame(this.draw);
    }
}
