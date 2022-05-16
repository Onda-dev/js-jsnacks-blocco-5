// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 20
    },
    {
        name: "Zucchina blu",
        peso: 2,
        lunghezza: 10
    },
    {
        name: "Zucchina rossa",
        peso: 3,
        lunghezza: 10
    },
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 10
    },
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 10
    },
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 20
    },
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 20
    },
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 20
    },
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 20
    },
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 20
    },
]

const zucchineLunghe = []
const zucchineCorte = []

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza > 15) {
        zucchineLunghe.push(zucchine[i])
    } else {
        zucchineCorte.push(zucchine[i])
    }
}

console.log(zucchineLunghe)
console.log(zucchineCorte)