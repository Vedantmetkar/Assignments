function sumOfDigitProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    const maxLength = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');

    let sum = 0;
    for (let i = 0; i < maxLength; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    return sum;
}
console.log(sumOfDigitProducts(54, 23));
