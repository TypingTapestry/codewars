function scoreThrows(radii) {
    let num = 0;
    for (let i = 0; i < radii.length; i++) {
      if (radii[i] < 5) num += 10;
      if (radii[i] >= 5 && radii[i] <= 10) num += 5;
    } return num === 0 ? 0 : num === radii.length * 10 ? num + 100 : num;
}