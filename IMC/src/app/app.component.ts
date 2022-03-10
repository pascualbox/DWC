import { Component, EventEmitter, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IMC';

  public usuarios: any[]=[];

  public getUser(usuario: User){
    console.log(usuario);

    this.usuarios?.push(new User(usuario.getNombre(), usuario.getIndice(), usuario.getSexo()));
  }
}
