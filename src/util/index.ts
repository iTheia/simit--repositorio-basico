import faker from "faker";
import { Item } from "../const";

export function genData(cuantity: number): Item[] {
    let list: Item[] = [];
    for (let i = 0; i < cuantity; i++) {
        list.push({
            id: faker.random.uuid(),
            nombre: faker.name.firstName(),
            estado: random(1, 10) > 5 ? true : false,
            fecha: faker.date.month(),
            folio: faker.random.uuid().substr(1, 4),
        });
    }
    return list;
}

function random(min: number = 1, max: number) {
    return Math.floor(Math.random() * max) + min;
}
