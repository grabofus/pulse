import autoBind from 'auto-bind';

import { degreesToRadians, map } from '../utils';

import { PulseBase } from './PulseBase';

export class Pulse3D extends PulseBase {
    constructor(canvas: HTMLCanvasElement, animationSpeed: number) {
        super(canvas, animationSpeed);
        autoBind(this);
    }

    protected draw(): void {
        const { context, degree } = this.preDraw();

        const towers: [number, number, number][] = [];

        const w = 40;
        const count = 6;
        // Draw
        for (let i = -count; i <= count; i++) {
            for (let j = -count; j <= count; j++) {
                const localDegree = degree + (Math.abs(i) + Math.abs(j)) * -20;
                const rad = degreesToRadians(localDegree);
                const angle = Math.sin(rad);
                const h = map(angle, -1, 1, 50, 200);

                // const x = (i * w) / 2;
                const x = (i * w) / 2 - (j * w) / 2;
                const y = (i * w) / 4 + (j * w) / 4;

                towers.push([x, y, h]);
            }
        }
        towers.sort(([aX, aY], [bX, bY]) => aY - bY).forEach(([x, y, h]) => context.drawTower(x, y, w, h));

        this.postDraw();
    }
}
