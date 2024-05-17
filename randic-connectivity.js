// randic-connectivity.js
import { derece } from './derece';

function randicconnectivity(matrixInput) {
  let sonuc = 0;
  const nodeCount = matrixInput.length;
  const temp = derece(matrixInput);

  for (let i = 0; i < nodeCount; i++) {
    for (let j = 0; j < nodeCount; j++) {
      if (matrixInput[i][j] > 0) {
        sonuc += 1 / Math.sqrt(temp[i] * temp[j]);
      }
    }
  }

  sonuc = sonuc / 2;
  return sonuc;
}

export default randicconnectivity;
