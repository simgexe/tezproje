import { derece } from './derece';

 function generalrandicconnectivity(matrixInput, alfa) {
  const nodeCount = matrixInput.length;
  const temp = derece(matrixInput);
  let sonuc = 0;

  for (let satir = 0; satir < nodeCount; satir++) {
    for (let sutun = 0; sutun < nodeCount; sutun++) {
      if (matrixInput[satir][sutun] > 0) {
        sonuc += (temp[satir] * temp[sutun]) ** alfa;
      }
    }
  }

  sonuc = sonuc / 2;
  return sonuc;
}

export default generalrandicconnectivity;
