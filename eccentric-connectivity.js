
import  eccentricity  from './eccentricity';
import { derece } from './derece';

function eccentricconnectivity(matrixInput) {
    const nodeCount = matrixInput.length;
    let sonuc = 0;
    const dereceler = derece(matrixInput);

    for (let indis = 0; indis < nodeCount; indis++) {
        sonuc += dereceler[indis] * eccentricity(matrixInput, indis);
    }
    return sonuc;
}
 export default eccentricconnectivity;