function trumpDetector(retardSpeech) {
    let str = retardSpeech.toLowerCase();
    let vowels = 'aeiou';
    let vowel = vowels.includes(str[0]);
    let repeat = 0;
    for (let i = 1; i < str.length; i++) if (vowels.includes(str[i])) {
      if (str[i] === str[i - 1]) repeat++;
      else vowel++;
    } return Math.round(repeat / vowel * 100) / 100;
}