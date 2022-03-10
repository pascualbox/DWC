export class User {
  private nombre:string;
  private indice: number;
  private sexo: string;
  private indiceR: string;

  constructor(nombre: string, indice: number, sexo: string){
    this.nombre=nombre;
    this.indice=indice;
    this.sexo=sexo;
    this.indiceR=this.indice.toFixed(2);
  }

  public getNombre(): string{
    if(this.nombre!="")
    return this.nombre;
    else
    return "Usuario anónimo"
  }

  public getIndice(): number{
    return this.indice;
  }
  public getIndiceR(): string{
    return this.indiceR;
  }

  public getSexo(){
    if(this.sexo!="")
    return this.sexo;
    else
    return "un helicóptero apache de combate"
  }
}
