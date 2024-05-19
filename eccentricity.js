import  dijkstra  from './dijkstra';

function eccentricity(matrixInput, indis) {
    return Math.max(...dijkstra(matrixInput, indis));
}

export default eccentricity;
