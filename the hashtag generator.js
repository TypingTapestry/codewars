function generateHashtag(str) {
    let tagged = str.split(' ').reduce((acc, cur) => {
      if (cur) acc += cur.charAt(0).toUpperCase() + cur.slice(1);
      return acc;
    }, '#');
    if (tagged === '#' || tagged.length > 140) {
      return false;
    } else return tagged;
}