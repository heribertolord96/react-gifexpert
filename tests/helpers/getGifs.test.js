import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en <getGifs/>', () => {
    test('Debe retornar un arreglo de gifs ', async() => {
        const gifs = await getGifs('one Punch');
        console.log(gifs);
    })
})