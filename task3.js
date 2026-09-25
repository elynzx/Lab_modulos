export function calculadoraEdad(anio, mes, dia) {
  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  const mesActual = fechaActual.getMonth();
  const diaActual = fechaActual.getDate();
  let edad = anioActual - anio;
  if (mesActual < mes - 1) {
    edad--;
  }
  if (mes - 1 === mesActual && diaActual < dia) {
    edad--;
  }
  return edad;
}
