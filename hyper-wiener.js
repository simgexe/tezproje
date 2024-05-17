import dijkstra from "./dijkstra";

const hyperwiener = (matrixInput) => {
    const nodeCount = matrixInput.length;
    let sonuc = 0;

    for (let indis = 0; indis < nodeCount; indis++) {
      const temp = dijkstra(matrixInput, indis);
      sonuc += temp.reduce((acc, val) => acc + val, 0);

      for (let d = 0; d < nodeCount; d++) {
        sonuc += temp[d] * temp[d];
      }
    }

    sonuc = sonuc / 2;
    return sonuc;
  };
  export default hyperwiener;