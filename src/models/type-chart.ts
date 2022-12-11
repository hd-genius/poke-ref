import { Effectiveness } from "./effectiveness";
import { PokemonType } from "./pokemon-type";

export interface TypeChart {
    types: PokemonType[],
    attackRelationships: {
        [key: string]: {
            [key: string]: Effectiveness
        }
    },
}