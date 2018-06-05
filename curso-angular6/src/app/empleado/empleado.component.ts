import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Componente empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Iván', 23, "Desarrolador web", true);
        this.trabajadores = [
            new Empleado('Iván', 23, "Desarrolador web", true),
            new Empleado('Manolo', 54, "Cocinero", false),
            new Empleado('Pablo', 35, "Marketing", true)
        ];
        this.trabajador_externo = false;
        this.color = 'blue';
        this.color_seleccionado = '#ccc';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}