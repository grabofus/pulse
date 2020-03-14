import { Pulse } from './Pulse';

export interface PulseConstructor {
    new (canvas: HTMLCanvasElement, animationSpeed: number): Pulse;
}
