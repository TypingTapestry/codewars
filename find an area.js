function findArea(points) {
    let res = 0;
    for (let i = 0; i < points.length - 1; i++) res += (points[i + 1].Y + points[i].Y) * (points[i + 1].X - points[i].X) / 2;
    return res;
}