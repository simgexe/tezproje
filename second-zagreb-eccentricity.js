import eccentricity  from './eccentricity';

function secondZagrebEccentricity(matrixInput) {
  const nodeCount = matrixInput.length;
  let sonuc = 0;

  for (let index = 0; index < nodeCount; index++) {
    sonuc += Math.pow(eccentricity(matrixInput, index), 2);
  }

  return parseFloat(sonuc);
}

export default secondZagrebEccentricity;
