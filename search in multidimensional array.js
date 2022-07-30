let locate = function (arr, value) {
    for (let i = 0; i < arr.length; i++) if ((Array.isArray(arr[i]) && locate(arr[i], value)) || arr[i] === value) return true;
    return false;
}