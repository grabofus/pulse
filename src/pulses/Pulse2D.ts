import autoBind from 'auto-bind';

import { degreesToRadians, map } from '../utils';

import { PulseBase } from './PulseBase';

export class Pulse2D extends PulseBase {
    constructor(canvas: HTMLCanvasElement, animationSpeed: number) {
        super(canvas, animationSpeed);
        autoBind(this);
    }

    protected draw(): void {
        const { context, degree } = this.preDraw();

        const count = 20;
        // Draw
        for (let i = -count; i < count; i++) {
            const localDegree = degree + Math.abs(i) * -20;
            const rad = degreesToRadians(localDegree);
            const angle = Math.sin(rad);
            const h = map(angle, -1, 1, 50, 200);

            context.fillRectCenter(i * 20, 0, 20, h);
        }

        this.postDraw();
    }
}
