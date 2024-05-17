// derece.js
export function derece(matrixInput) {
  const nodeCount = matrixInput.length;
  const dereceler = new Array(nodeCount).fill(0);

  // Calculate degrees
  for (let i = 0; i < nodeCount; i++) {
    for (let j = 0; j < nodeCount; j++) {
      if (matrixInput[i][j] > 0) {
        dereceler[i]++;
      }
    }
  }

  return dereceler;
}
