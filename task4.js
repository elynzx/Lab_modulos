export class EdadAmigo {
  constructor(nombre, anio, mes, dia) {
    this.nombre = nombre;
    this.anio = anio;
    this.mes = mes;
    this.dia = dia;
  }

  retornarEdad() {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    
    let edad = anioActual - this.anio;
    if (mesActual < this.mes - 1) {
      edad--;
    }
    if (this.mes - 1 === mesActual && diaActual < this.dia) {
      edad--;
    }
    return `¡${this.nombre} tiene ${edad} años hoy!`;
  }
}
