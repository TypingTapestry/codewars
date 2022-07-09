function pageDigits(pages) {
    let n = BigInt(pages.toString().length);
    let x = 10n ** (n - 1n);
    let y = pages - x + 1n;
    if (n === 1n) return pages;
    return n * y + pageDigits(pages - y);
}