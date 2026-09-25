export function rubricaAprobadoReprobado(puntuacion) {
  if (puntuacion < 0 || puntuacion > 11) {
    return "Puntuacion invalida";
  }

  return puntuacion >= 5 ? "Aprobado" : "Reprobado";
}
