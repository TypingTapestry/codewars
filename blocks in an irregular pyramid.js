function numBlocks(w, l, h) {
    return w * l * h + (w + l) * h * (h - 1n) / 2n + h * (h - 1n) * (2n * h - 1n) / 6n;
}