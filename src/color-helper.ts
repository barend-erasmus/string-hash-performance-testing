export class ColorHelper {

    public static getGradientColor(fromColor: number[], toColor: number[], weight: number): string {

        const rgb: number[] = [
            Math.round(fromColor[0] * weight + toColor[0] * (1 - weight)),
            Math.round(fromColor[1] * weight + toColor[1] * (1 - weight)),
            Math.round(fromColor[2] * weight + toColor[2] * (1 - weight)),
        ];

        return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }

}
