function processImage(imageData, height, width, weights) {
    let arr = [];
    let num = Math.floor(weights.length / 2);
    for (let h = 0; h < height; h++) {
      for (let w = 0; w < width; w++) {
        for (let i = 0; i < 3; i++) {
          let sum = 0;
          for (let x = -num; x <= num; x++) {
            for (let y = -num; y <= num; y++) {
              let hx = Math.max(Math.min(h + x, height - 1), 0);
              let wy = Math.max(Math.min(w + y, width - 1), 0);
              sum += imageData[wy * 3 + (hx * width * 3) + i] * weights[num + x][num + y];
            }
          } arr.push(Math.max(Math.min(Math.round(sum), 255), 0));
        }
      }
    } return arr;
}