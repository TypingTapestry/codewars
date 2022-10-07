function sqInRect(lng, wdth) {
    let arr = [];
    if (lng === wdth) return null;
    while (lng > 0 && wdth > 0) {
      arr.push(Math.min(lng, wdth));
      if (lng > wdth) lng -= wdth;
      else wdth -= lng;
    } return arr;
}