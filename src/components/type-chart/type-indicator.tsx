import { PokemonType } from "../../models";

interface TypeIndicatorProps {
    type: PokemonType,
    isAbbreviated?: boolean,
}

export const TypeIndicator = ({ type, isAbbreviated }: TypeIndicatorProps) => {
    const typeName = isAbbreviated ? PokemonType.getAbbreviatedName(type) : type;
    return <span>{typeName}</span>;
};