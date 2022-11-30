function cutCancerCells(organism) {
    let arr = organism.split('');
    arr = arr.map((x, i) => {
      if (x.toLowerCase() === 'c') return '';
      else if (x === x.toLowerCase()) return arr[i + 1] === 'C' || arr[i - 1] === 'C' ? '' : x;
      else return x;
    });
    return arr.join('');
}