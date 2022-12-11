import { Effectiveness, PokemonType } from "../../models";
import { EffectivenessIndicator } from "./effectiveness-indicator";
import { TypeIndicator } from "./type-indicator";

interface TypeChartProps {
    types: PokemonType[],
    relationships: {
        [key: string]: {
            [key: string]: Effectiveness
        }
    }
}

export const TypeChartTable = ({ types, relationships }: TypeChartProps) => {
    const buildRowForType = (attackingType: PokemonType) => {
        const attackRelationships = relationships[attackingType] ?? [];
        return <tr>
            <td>
                <TypeIndicator type={attackingType} />
            </td>
            {types.map(defendingType => {
                const effectiveness = attackRelationships[defendingType] ?? Effectiveness.NEUTRAL;
                return <td><EffectivenessIndicator effectiveness={effectiveness} /></td>
            })}
        </tr>;
    }
    return <table>
        {types.map(buildRowForType)}
    </table>;
};
