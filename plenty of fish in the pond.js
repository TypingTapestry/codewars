function fish(shoal) {
    let size = 1;
    let fish = 0;
    shoal = shoal.split('').sort((a, b) => a - b);
    for (let i = 0; i < shoal.length; i++) {
      if (shoal[i] > size) continue;
      fish += Number(shoal[i]);
      if (fish >= size * 4) fish -= size ++* 4;
    } return size;
}