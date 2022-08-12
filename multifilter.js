let multiFilter = function (...args) {
    return (el) => args.every((item) => item(el));
}