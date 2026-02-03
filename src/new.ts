class GYM  {
    peso: number;
    estatura: number;
    constructor(peso: number, estatura: number) {
        this.peso = peso;
        this.estatura = estatura;
    }
    public IMC(): void {
        let estado;
        let imc = (this.peso / (this.estatura * this.estatura));
        if (imc < 18.5) {
            console.log('Bajo peso');
        }else if (imc >= 18.5 && imc < 24.9) {
            console.log('Peso normal');
        }else if (imc >= 25 && imc < 29.9){
            console.log('sobre peso');
        }else if (imc >= 30){
            console.log('Sobre peso');
        }
        console.log('Tu IMC es: ' + imc.toFixed(2) + 'kg/m2');
    }

}

let cliente0 = new GYM(70, 1.75);
cliente0.IMC();