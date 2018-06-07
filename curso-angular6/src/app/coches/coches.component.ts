import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;

    constructor(
        private _peticionesService: PeticionesService
    ){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Seat Ibiza", "110", "Negro"),
            new Coche("Kia ceed", "130", "Azul")
        ];
    }

    ngOnInit(){
        console.log(this._peticionesService.getPrueba());
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
}