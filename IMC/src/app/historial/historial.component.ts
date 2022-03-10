import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  @Input('usuarioInput') usuarios:User[]=[];


  constructor() { }

  ngOnInit(): void {
  }

  public bucle(){
    for(let i=0; i<this.usuarios.length; i++){
      console.log(this.usuarios[i]);
    }
  }

}
