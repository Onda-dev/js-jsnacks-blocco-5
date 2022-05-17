// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.

const auto = [
    {
        marca: "Fiat",
        modello: "500",
        alimentazione: "benzina"
    },
    {
        marca: "Alfa Roma",
        modello: "Giulia",
        alimentazione: "diesel"
    },
    {
        marca: "Toyota",
        modello: "Yaris",
        alimentazione: "gpl"
    },
    {
        marca: "Tesla",
        modello: "Model S",
        alimentazione: "elettrico"
    },
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "metano"
    },
    {
        marca: "Audi",
        modello: "A3",
        alimentazione: "benzina"
    },
    {
        marca: "Mercedes",
        modello: "Classe A",
        alimentazione: "diesel"
    },
    {
        marca: "Fiat",
        modello: "Punto",
        alimentazione: "metano"
    },
    {
        marca: "Bmw",
        modello: "Serie 1",
        alimentazione: "benzina"
    },
    {
        marca: "Mini",
        modello: "Cooper",
        alimentazione: "elettrico"
    }
]

const autoBenzina = auto.filter((elm) => elm.alimentazione === "benzina")
console.log(autoBenzina)
const autoDiesel = auto.filter((elm) => elm.alimentazione === "diesel") 
console.log(autoDiesel)
const autoAltro = auto.filter((elm) => elm.alimentazione !== "benzina" && elm.alimentazione !== "diesel")
console.log(autoAltro)