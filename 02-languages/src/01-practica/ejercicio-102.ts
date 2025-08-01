console.log("************** PRACTICE 102 *********************");

// CALIFICATIONS
// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:
const eso2o: Record<string, number> = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

// Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español
function values(obj: Record<string, number>): number[] {
  return Object.values(obj);
}

const grades: number[] = values(eso2o);
function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

function getGradeText(average: number): string {
  if (average === 10) return "Matrícula de Honor";
  if (average >= 9) return "Sobresaliente";
  if (average >= 7) return "Notable";
  if (average >= 6) return "Bien";
  if (average >= 5) return "Suficiente";
  if (average >= 4) return "Insuficiente";
  return "Muy deficiente";
}

function printAverage(classResults: Record<string, number>): string {
  const grades = values(classResults);
  const average = calculateAverage(grades);
  return `La media de la clase es: ${average.toFixed(2)} (${getGradeText(
    average
  )})`;
}

console.log(printAverage(eso2o));
