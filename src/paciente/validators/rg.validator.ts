export class RgValidator {
    static isValid(rg: string): boolean {
        if (!rg || typeof rg !== 'string') return false;
        const rgLimpo = rg.trim();
        return /^[0-9]{5,}$/.test(rgLimpo);
    }
}