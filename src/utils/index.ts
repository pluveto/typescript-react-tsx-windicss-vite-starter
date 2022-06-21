export const util = {
    rand(min: number, max: number, step: number = 1) {
        return Math.floor(Math.random() * (max - min) / step) * step + min;
    },    
}