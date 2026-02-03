class conversion {
    temperatura: number;
    escala: string;
    constructor(temperatura: number, escala: string) {
        this.temperatura = temperatura;
        this.escala = escala;
    }

    public convertir(): void {
        let resultado;
        if (this.escala === 'celsius a fahrenheit') {
            resultado = (this.temperatura * 1.8) + 32;
        } else if (this.escala == 'fahrenheit a celsius') {
            resultado = (this.temperatura - 32) / 1.8;
        }else if (this.escala == 'kelvin a celsius'){
            resultado = this.temperatura - 273.15;
        } else if (this.escala == 'kelvin a fahrenheit' ){
            resultado = (this.temperatura - 273.15) * 1.8 + 32;
        }
        return console.log('La temperatura convertida es: ' + resultado);
    }
}

let cambio1 = new conversion(100, 'celsius a fahrenheit');
cambio1.convertir();

// constructor(temp: number){
//     this.temperatura = temp;
// }