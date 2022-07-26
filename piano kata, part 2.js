function whichNote(keyPressCount) {
    let key = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let num = 88;
    keyPressCount--;
    keyPressCount %= num;
    return key[keyPressCount % key.length];
}