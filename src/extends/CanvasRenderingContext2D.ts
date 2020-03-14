declare global {
    interface CanvasRenderingContext2D {
        drawTower(x: number, y: number, w: number, h: number): void;
        fillRectCenter(x: number, y: number, w: number, h: number): void;
    }
}

CanvasRenderingContext2D.prototype.drawTower = function(x: number, y: number, w: number, h: number) {
    this.save();

    this.translate(x, y);
    this.translate(0, -h / 2);

    // Top
    this.fillStyle = '#78a6a3';
    this.save();
    this.transform(1, 0.5, 0, 1, 0, -w / 4);
    this.fillRect(0, 0, w / 2, w / 2);
    this.restore();
    this.save();
    this.transform(-1, 0.5, 0, 1, 0, -w / 4);
    this.fillRect(0, 0, w / 2, w / 2);
    this.restore();

    // Left
    this.fillStyle = '#4c81a4';
    this.save();
    this.transform(1, 0.5, 0, 1, -w / 2, 0);
    this.fillRect(0, 0, w / 2, h);
    this.restore();

    // Right
    this.fillStyle = '#ced6ad';
    this.save();
    this.transform(-1, 0.5, 0, 1, w / 2, 0);
    this.fillRect(0, 0, w / 2, h);
    this.restore();

    this.restore();
};
CanvasRenderingContext2D.prototype.fillRectCenter = function(x: number, y: number, w: number, h: number) {
    this.fillRect(x - w / 2, y - h / 2, w, h);
};

export {};
