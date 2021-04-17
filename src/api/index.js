import burgerBuns from '../json/burgerBuns.json';
import ingredient from '../json/ingredient.json';
import meat from '../json/meat.json';

export const getJSON = (url) => {
    switch (url) {
        case "/burger":
            return burgerBuns;
        case "/meat":
            return meat;
        case "/ingredients":
            return ingredient;
    }
}