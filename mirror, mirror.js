function evilTwin(obj) {
    let ret = Object.create(obj);
    ret.hasGoatee = true;
    return ret;
}