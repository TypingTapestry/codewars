class Vector {
    constructor(components) {
      this.components = components;
    }
  
    add(vector) {
      if (this.components.length !== vector.components.length) throw new Error();
      let arr = [];
      for (let i = 0; i < this.components.length; i++) arr.push(this.components[i] + vector.components[i]);
      return new Vector(arr);
    }
  
    subtract(vector) {
      if (this.components.length !== vector.components.length) throw new Error();
      let arr = [];
      for (let i = 0; i < this.components.length; i++) arr.push(this.components[i] - vector.components[i]);
      return new Vector(arr);
    }
  
    dot(vector) {
      if (this.components.length !== vector.components.length) throw new Error();
      let dotProd = 0;
      for (let i = 0; i < this.components.length; i++) dotProd += this.components[i] * vector.components[i];
      return dotProd;
    }
  
    norm() {
      let sum = 0;
      for (let i = 0; i < this.components.length; i++) sum += this.components[i] ** 2;
      return Math.sqrt(sum);
    }
  
    toString() {
      return `(${this.components.join(',')})`;
    }
  
    equals(vector) {
      if (this.components.length !== vector.components.length) return false;
      for (let i = 0; i < this.components.length; i++) if (this.components[i] !== vector.components[i]) return false;
      return true;
    }
}