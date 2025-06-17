/**
 * 
 * @param {String} carta 
 * @returns {HTMLElement} imgCarta 
 */

export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error('Carta es necesaria');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;

}

