import _ from "underscore";

/**
 * Esta función crea un nuevo deck de cartas.
 * @param {Array<String>} tiposDeCarta ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>}retorna un nuevo deck de cartas mezclado.
 * @throws {Error} Si no se proporcionan tipos de carta.
 */
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta son obligatorios');


    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}