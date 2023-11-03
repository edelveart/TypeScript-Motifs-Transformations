export class MotifPattern {
    private _motif: number[];
    private _modulo: number;

    public constructor(newMotif: Array<number>, moduloUniverse: number = 12) {
        this._modulo = Math.round(moduloUniverse);
        this._motif = newMotif
            .map((item) => ((Math.round(item) % this._modulo) + this._modulo) % this._modulo);
    }

    public identity(): MotifPattern {
        const identityMotifCopy = this._motif
            .map((i) => ((i % this._modulo) + this._modulo) % this._modulo);
        return new MotifPattern(identityMotifCopy);
    }

    public inversion(noteInversion: number): MotifPattern {
        const inversionMotifCopy = this._motif
            .map((i) => (((2 * noteInversion - i) % this._modulo) + this._modulo) % this._modulo);
        return new MotifPattern(inversionMotifCopy);
    }

    public retrograde(): MotifPattern {
        const retrogradeMotifCopy = this._motif.reverse()
            .map((r) => ((r % this._modulo) + this._modulo) % this._modulo);
        return new MotifPattern(retrogradeMotifCopy);
    }

    public retrogradeInversion(noteInversion: number): MotifPattern {
        const retroInverMotifCopy = this._motif.reverse()
            .map((i) => (((2 * noteInversion - i) % this._modulo) + this._modulo) % this._modulo);
        return new MotifPattern(retroInverMotifCopy);
    }

    public transposition(tau: number) {
        const transpositionMotifCopy = this._motif
            .map((i) => (i + (tau % this._modulo) + this._modulo) % this._modulo);
        return new MotifPattern(transpositionMotifCopy);
    }

    public itGroup(tau: number) {
        const inverseMotifCopy = this._motif.map((i) => ((-i % this._modulo) + this._modulo) % this._modulo);
        const invTransMotifCopy = inverseMotifCopy
            .map((i) => (i + (tau % this._modulo) + this._modulo) % this._modulo);
        return new MotifPattern(invTransMotifCopy);
    }

    public set setMotif(newMotif: number[]) {
        this._motif = newMotif
            .map((item) => ((Math.round(item) % this._modulo) + this._modulo) % this._modulo);
    }

    public get getMotif(): number[] {
        return this._motif;
    }

    public set setModulo(newModulo: number) {
        this._modulo = newModulo;
    }

    public get getModulo() {
        return this._modulo;
    }
}


