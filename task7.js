export function rubricaPerfecto(puntuacion) {
  if (puntuacion < 0 || puntuacion > 11) {
    return "Puntuacion invalida";
  }
  if (puntuacion == 11) {
    return "Perfecto";
  } else if (puntuacion > 8) {
    return "Excelente";
  }
  return puntuacion >= 5 ? "Aprobado" : "Reprobado";
}
