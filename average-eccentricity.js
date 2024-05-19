import  totalEccentricity  from './total-eccentricity';

function averageEccentricity(matrixInput) {
  const nodeCount = matrixInput.length;
  const sonuc = (1 / nodeCount) * totalEccentricity(matrixInput);
  return parseFloat(sonuc);
}

export default averageEccentricity;
