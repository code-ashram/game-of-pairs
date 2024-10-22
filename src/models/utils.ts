import {Card} from "./models.ts";

export const generateNewDeck = () =>
  new Array(8)
    .fill(null)
    .flatMap((_, index) => [new Card(index + 1), new Card(index + 1)])
    .sort((a, b) => a.id.localeCompare(b.id))


