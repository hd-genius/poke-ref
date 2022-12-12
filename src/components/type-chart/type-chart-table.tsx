import { Effectiveness, PokemonType } from "../../models";
import { EffectivenessIndicator } from "./effectiveness-indicator";
import { TypeIndicator } from "../type-indicator";
import { If } from "react-semantic-components";

import styles from "./type-chart.module.scss";

interface TypeChartProps {
    types: PokemonType[],
    relationships: {
        [key: string]: {
            [key: string]: Effectiveness
        }
    }
}

export const TypeChartTable = ({ types, relationships }: TypeChartProps) => {
    const numberOfTypes = types.length;

    const buildRowForType = (attackingType: PokemonType, includeVerticalHeader: boolean) => {
        const attackRelationships = relationships[attackingType] ?? [];
        return <tr>
            <If condition={includeVerticalHeader}>
                <th rowSpan={numberOfTypes} scope="row" className={styles.verticalHeader}>attacking type</th>
            </If>
            <th scope="row">
                <TypeIndicator type={attackingType} />
            </th>
            {types.map(defendingType => {
                const effectiveness = attackRelationships[defendingType] ?? Effectiveness.NEUTRAL;
                return <td>
                    <EffectivenessIndicator
                        effectiveness={effectiveness}
                        attackingType={attackingType}
                        defendingType={defendingType} />
                </td>
            })}
        </tr>;
    };

    return <table className={styles.typeChart}>
        <colgroup>
            <col className={styles.verticalHeaderColumn}></col>
        </colgroup>
        <tr>
            <th></th>
            <th></th>
            <th colSpan={numberOfTypes}>defending type</th>
        </tr>
        <tr>
            <th></th>
            <th></th>
            {types.map(type => <th scope="col"><TypeIndicator type={type} isAbbreviated /></th>)}
        </tr>
        {types.map((type, index) => buildRowForType(type, index === 0))}
    </table>;
};
