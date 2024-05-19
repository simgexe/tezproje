import eccentricity  from './eccentricity';
import {derece} from './derece';

function modifiedEccentricConnectivity(matrixInput) {
  const nodeCount = matrixInput.length;
  let sonuc = 0;
  const degrees = derece(matrixInput);

  for (let row = 0; row < nodeCount; row++) {
    let derTop = 0;
    for (let col = 0; col < nodeCount; col++) {
      if (matrixInput[row][col] > 0) {
        derTop += degrees[col];
      }
    }
    sonuc += eccentricity(matrixInput, row) * derTop;
  }

  return parseFloat(sonuc);
}

export default modifiedEccentricConnectivity;
