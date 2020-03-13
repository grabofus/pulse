export const map = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number => {
    return ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
};
