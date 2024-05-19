import  eccentricity  from './eccentricity';

function thirdZagrebEccentricity(matrixInput) {
  const nodeCount = matrixInput.length;
  let sonuc = 0;

  for (let row = 0; row < nodeCount; row++) {
    for (let col = 0; col < nodeCount; col++) {
      if (matrixInput[row][col] > 0) {
        const e1 = eccentricity(matrixInput, row);
        const e2 = eccentricity(matrixInput, col);
        sonuc += e1 * e2;
      }
    }
  }

  sonuc = sonuc / 2;
  return parseFloat(sonuc);
}

export default thirdZagrebEccentricity;
