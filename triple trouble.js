function tripledouble(num1, num2) {
    for (let i = 0; i < 10; i++) {
      if (num1.toString().includes(i.toString().repeat(3)) && num2.toString().includes(i.toString().repeat(2))) return 1;
    } return 0;
}