

export function computeStrength(level) {

    if (level < 1) {
        throw new Error("Le niveau doit être un entier positif");
    }

    let strength = 0;

    if (level <= 50) {
        strength = level;
    } else if (level <= 100) {
        strength = 50 + Math.floor((level - 50) / 2);
    } else if (level <= 200) {
        strength = 50 + 25 + Math.floor((level - 100) / 3);
    } else {
        strength = 50 + 25 + 33 + Math.floor((level - 200) / 5);
    }

    return strength;
}