declare global {
    interface CanvasRenderingContext2D {
        fillRectCenter(x: number, y: number, w: number, h: number): void;
    }
}

CanvasRenderingContext2D.prototype.fillRectCenter = function(x: number, y: number, w: number, h: number) {
    this.fillRect(x - w / 2, y - h / 2, w, h);
};

export {};
