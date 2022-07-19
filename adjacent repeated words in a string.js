function countAdjacentPairs(searchString) {
    this.count = 0;
    if (searchString !== '') {
      this.arr = searchString.toLowerCase().split(' ');
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === this.arr[i + 1] && this.arr[i + 1] !== this.arr[i + 2]) {
          this.count++;
          i++;
        }
      } return this.count;
    } return 0;
}