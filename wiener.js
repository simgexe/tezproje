// wiener.js

import dijkstra from './dijkstra'; 

const wiener = (matrixInput) => {
 const nodeCount = matrixInput.length;
 let sonuc = 0;

 for (let indis = 0; indis < nodeCount; indis++) {
 sonuc += dijkstra(matrixInput, indis).reduce((acc, val) => acc + val, 0);
 }

 sonuc /= 2;

 return sonuc;
};

export default wiener;