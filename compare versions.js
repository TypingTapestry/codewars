function compareVersions(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    while (v1.length && v2.length) {
      let ver1 = Number(v1.shift());
      let ver2 = Number(v2.shift());
      if (ver1 !== ver2) return ver1 > ver2;
    } return v2.length === 0;
}