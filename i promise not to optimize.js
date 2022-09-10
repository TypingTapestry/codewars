function antiOptimizeAsync(task) {
    let time = Date.now() + 11000;
    let res = task();
    return new Promise(resolve => setTimeout(resolve, time - Date.now(), res));
}