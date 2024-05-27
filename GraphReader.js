import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import * as ImagePicker from 'expo-image-picker';

const GraphReader = () => {
  const [imageUri, setImageUri] = useState(null);
  const [adjacencyMatrix, setAdjacencyMatrix] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Medya kütüphanesine erişim izni gerekiyor!');
      }
    })();
  }, []);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    } else {
      Alert.alert('Bir resim seçilmedi');
    }
  };

  const htmlContent = `
    <html>
    <head>
      <script src="https://docs.opencv.org/4.x/opencv.js" async></script>
      <script>
        function findClosestNode(x, y, nodes) {
          let closestNode = null;
          let minDist = Infinity;
          for (let node of nodes) {
            let dist = Math.pow(node.x - x, 2) + Math.pow(node.y - y, 2);
            if (dist < minDist) {
              minDist = dist;
              closestNode = node;
            }
          }
          return closestNode;
        }

        function onOpenCvReady() {
          if (!cv || !cv.imread) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'error', message: 'OpenCV.js is not loaded properly.' }));
            return;
          }

          let imgElement = document.getElementById('imageSrc');
          let canvas = document.getElementById('canvasOutput');

          try {
            let src = cv.imread(imgElement);
            cv.imshow('canvasOutput', src);

            let gray = new cv.Mat();
            cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

            let blurred = new cv.Mat();
            cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);

            let edges = new cv.Mat();
            cv.Canny(blurred, edges, 50, 150, 3, false);

            let circles = new cv.Mat();
            cv.HoughCircles(blurred, circles, cv.HOUGH_GRADIENT, 1.2, 20, 50, 30, 10, 40);

            let nodes = [];
            if (circles.rows > 0) {
              for (let i = 0; i < circles.cols; ++i) {
                let x = circles.data32F[i * 3];
                let y = circles.data32F[i * 3 + 1];
                nodes.push({ x, y });
                let radius = circles.data32F[i * 3 + 2];
                let center = new cv.Point(x, y);
                cv.circle(src, center, radius, [0, 255, 0, 255], 3);
              }

              let lines = new cv.Mat();
              cv.HoughLinesP(edges, lines, 1, Math.PI / 180, 50, 50, 10);

              let adjacencyMatrix = new Array(nodes.length).fill(0).map(() => new Array(nodes.length).fill(0));
              if (lines.rows > 0) {
                for (let i = 0; i < lines.rows; ++i) {
                  let x1 = lines.data32S[i * 4];
                  let y1 = lines.data32S[i * 4 + 1];
                  let x2 = lines.data32S[i * 4 + 2];
                  let y2 = lines.data32S[i * 4 + 3];
                  let startNode = findClosestNode(x1, y1, nodes);
                  let endNode = findClosestNode(x2, y2, nodes);
                  if (startNode !== null && endNode !== null && startNode !== endNode) {
                    let index1 = nodes.indexOf(startNode);
                    let index2 = nodes.indexOf(endNode);
                    adjacencyMatrix[index1][index2] = 1;
                    adjacencyMatrix[index2][index1] = 1;
                    cv.line(src, new cv.Point(x1, y1), new cv.Point(x2, y2), [255, 0, 0, 255], 2);
                  }
                }
              }

              window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'matrix', matrix: adjacencyMatrix }));
            } else {
              window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'error', message: 'No circles detected.' }));
            }

            src.delete();
            gray.delete();
            blurred.delete();
            edges.delete();
            circles.delete();
            if (lines) lines.delete();

            window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'log', message: 'Processing completed successfully.' }));

          } catch (err) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'error', message: 'Error processing image: ' + err }));
          }
        }

        function checkOpenCvReady() {
          if (cv && cv.imread) {
            onOpenCvReady();
          } else {
            setTimeout(checkOpenCvReady, 50);
          }
        }

        window.onload = checkOpenCvReady;
      </script>
    </head>
    <body>
      <img id="imageSrc" src="${imageUri}" style="display:none;" />
      <canvas id="canvasOutput"></canvas>
    </body>
    </html>
  `;

  const onMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data.type === 'log' || data.type === 'error') {
      console.log(data.message);
    } else if (data.type === 'matrix') {
      setAdjacencyMatrix(data.matrix);
      console.log('Received adjacency matrix:', data.matrix);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>Görüntü Seç</Text>
      </TouchableOpacity>
      {imageUri && (
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlContent }}
          style={styles.webView}
          onMessage={onMessage}
        />
      )}
      {adjacencyMatrix && (
        <View style={styles.matrixContainer}>
          <Text>Komşuluk Matrisi:</Text>
          {adjacencyMatrix.map((row, rowIndex) => (
            <Text key={rowIndex}>{row.join(' ')}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
  },
  webView: {
    width: '100%',
    height: '50%',
    marginBottom: 20,
  },
  matrixContainer: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default GraphReader;
