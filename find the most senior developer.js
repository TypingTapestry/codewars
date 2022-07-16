function findSenior(list) {
    let eldest = 0;
    list.forEach(({age}) => {
      if (age > eldest) eldest = age;
    });
    return list.filter(developer => developer.age === eldest);
}