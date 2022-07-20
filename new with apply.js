function construct(Class, ...args) {
    let obj = new Class(...args);
    return obj;
}