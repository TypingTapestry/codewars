function mostFrequentDays(year) {
    let arr = [new Date(year, 0, 1).getDay(), new Date(year, 11, 31).getDay()];
    if (arr[0] === arr[1]) arr.pop();
    if (!arr[0] || arr[0] > arr[1] && arr[1]) arr.reverse();
    return arr.map(x => ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'][x] + 'day');
}