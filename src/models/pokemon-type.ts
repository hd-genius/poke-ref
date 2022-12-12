export enum PokemonType {
    NORMAL = "normal",
    FIRE = "fire",
    WATER = "water",
    GRASS = "grass",
    ELECTRIC = "electric",
    ICE = "ice",
    FIGHTING = "fighting",
    POISON = "poison",
    GROUND = "ground",
    FLYING = "flying",
    PSYCHIC = "psychic",
    BUG = "bug",
    ROCK = "rock",
    GHOST = "ghost",
    DARK = "dark",
    DRAGON = "dragon",
    STEEL = "steel",
    FAIRY = "fairy",
}

export namespace PokemonType {
    const nameToAbbreviation = new Map([
        [PokemonType.NORMAL, "nor"],
        [PokemonType.FIRE, "fir"],
        [PokemonType.WATER, "wat"],
        [PokemonType.GRASS, "gra"],
        [PokemonType.ELECTRIC, "ele"],
        [PokemonType.ICE, "ice"],
        [PokemonType.FIGHTING, "fig"],
        [PokemonType.POISON, "poi"],
        [PokemonType.GROUND, "gro"],
        [PokemonType.FLYING, "fly"],
        [PokemonType.PSYCHIC, "psy"],
        [PokemonType.BUG, "bug"],
        [PokemonType.ROCK, "roc"],
        [PokemonType.GHOST, "gho"],
        [PokemonType.DARK, "dar"],
        [PokemonType.DRAGON, "dra"],
        [PokemonType.STEEL, "ste"],
        [PokemonType.FAIRY, "fai"],
    ]);
    
    export function getAbbreviatedName (type: PokemonType): string {
        return nameToAbbreviation.get(type) ?? "";
    }
}
