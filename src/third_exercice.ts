// 4. Se solicita configurar un programa que según las siguientes faltas se imponga
// una sanción económica dentro de una institución estudiantil privada.
// • Llegada tardía $1.
// • Caminar por los pasillos en horas de clase $3.
// • No andar vestimenta apropiada $5.
// • No hacer uso adecuado de las instalaciones $10.
// • Si el estudiante comete una infracción mostrar un mensaje con el nombre y la
// infracción más el total que le corresponde cancelar

class infraccion {
    falta: number;
    nombre: string;

    constructor(falta: number, nombre: string) {
        this.falta = falta;
        this.nombre = nombre;
    }

    public seleccion(): void{
        if(this.falta === 1){
            console.log('llegada tarda $1');
            
        }else if (this.falta === 2){
            console.log('Caminar pot los pasillos en horas de clase $3w');
            
        }else if (this.falta === 3){
            console.log('No andar vestimenta apropiada $5');
            
        }else if (this.falta === 4){
            console.log('No hacer uso adecuado de las instalaciones $10');   
        }
        return console.log('El estudiante ' + this.nombre + ' ha cometido la infraccion numero ' + this.falta );
        
    }
}

let estudiante0 = new infraccion(4, 'Jonathan De la O');

estudiante0.seleccion();