import eccentricity from './eccentricity';

 function totalEccentricity(matrixInput) {
  const nodeCount = matrixInput.length;
  let sonuc = 0;

  for (let i = 0; i < nodeCount; i++) {
    sonuc += eccentricity(matrixInput, i);
  }

  return sonuc;
}
export default totalEccentricity;
 