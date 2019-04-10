const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const pad = (str, length, char = ' ') =>
 str.padStart((str.length + length) / 2, char).padEnd(length, char);

const pickRandom = (array) => {
    shuffle(array)
    return array[0]
}
