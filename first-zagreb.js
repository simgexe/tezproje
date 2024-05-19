
import { derece } from './derece';

 function firstzagreb(matrixInput) {
    const dereceler = derece(matrixInput);
    const nodeCount = matrixInput.length;
    let sonuc = 0;
    for (let indis = 0; indis < nodeCount; indis++) {
        sonuc += Math.pow(dereceler[indis], 2);
    }
    return sonuc;
}
export default firstzagreb;