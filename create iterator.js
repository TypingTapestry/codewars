let createIterator = array => {
    return new function () {
      this.index = 0;
      this.next = () => {
        let done = !(array.length > this.index);
        if (!done) this.index++;
        return {
          value: done ? undefined : array[this.index - 1],
          done: done
        };
      }
    }
}