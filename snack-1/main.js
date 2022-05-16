// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        name: "Zucchina verde",
        peso: 1,
        lunghezza: 20
    },
    {
        name: "Zucchina blu",
        peso: 2,
        lunghezza: 20
    },
    {
        name: "Zucchina rossa",
        peso: 3,
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

let sum = 0
for (let i = 0; i < zucchine.length; i++) {
    sum += zucchine[i].peso
    console.log(zucchine[i].peso)
}

console.log(sum)