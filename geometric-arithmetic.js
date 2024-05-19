import { derece } from './derece';

 function geometricarithmetic(matrixInput) {
    const nodeCount = matrixInput.length;
    let sonuc = 0;
    const dereceler = derece(matrixInput);

    for (let satir = 0; satir < nodeCount; satir++) {
        for (let sutun = 0; sutun < nodeCount; sutun++) {
            if (matrixInput[satir][sutun] > 0) {
                const pay = 2 * Math.sqrt(dereceler[satir] * dereceler[sutun]);
                const payda = dereceler[satir] + dereceler[sutun];
                sonuc += pay / payda;
            }
        }
    }
    sonuc = sonuc / 2;
    return sonuc;
}
export default geometricarithmetic;