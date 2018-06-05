import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl:'./fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<any>;
    comodin:any;

    constructor(){
        this.nombre = 'Iván';
        this.edad = 23;
        this.mayorDeEdad = true;
        this.trabajos = ['Carpintero', 55, 'Camarero', 28];
        this.comodin = 'Cualquier cosa';
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(45);
        console.log(this.nombre + " " + this.edad);

        // Variables y alcance
        var uno = 8;
        var dos = 15;

        if(uno == 8){
            let uno = 3;
            var dos = 88;
            console.log("Dentro del if: " + uno + " " + dos);
        }
        console.log("Fuera del if: " + uno + " " + dos);
    }

    cambiarNombre() {
        this.nombre = 'Ejemplo';
    }

    cambiarEdad(edad) {
        this.edad = edad;
    }
}