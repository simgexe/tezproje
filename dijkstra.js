const dijkstra = (matrixInput, indis) => {
  const nodeCount = matrixInput.length;
  const uzakliklar = Array(nodeCount).fill(Infinity);
  const tamamlanan = Array(nodeCount).fill(false);

  uzakliklar[indis] = 0;

  for (let i = 0; i < nodeCount - 1; i++) {
      let min_indis = -1;
      let min_deger = Infinity;

      for (let j = 0; j < nodeCount; j++) {
          if (!tamamlanan[j] && uzakliklar[j] < min_deger) {
              min_deger = uzakliklar[j];
              min_indis = j;
          }
      }

      if (min_indis === -1) break;

      tamamlanan[min_indis] = true;

      for (let k = 0; k < nodeCount; k++) {
          const yeni_deger = uzakliklar[min_indis] + matrixInput[min_indis][k];
          if (!tamamlanan[k] && matrixInput[min_indis][k] > 0 && yeni_deger < uzakliklar[k]) {
              uzakliklar[k] = yeni_deger;
          }
      }
  }

  return uzakliklar;
};

export default dijkstra;
