import { Effectiveness, PokemonType } from "../../models";
import { EffectivenessIndicator } from "./effectiveness-indicator";
import { TypeIndicator } from "../type-indicator";
import { If } from "react-semantic-components";

import styles from "./type-chart.module.scss";

const effectivenessDescription = new Map([
    [Effectiveness.NO_EFFECT, "No effect"],
    [Effectiveness.NOT_EFFECTIVE, "Not very effective"],
    [Effectiveness.NEUTRAL, "Effective"],
    [Effectiveness.VERY_EFFECTIVE, "Super effective"],
]);

const arrowSymbol = String.fromCharCode(8594);

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
                return <td title={`${attackingType}${arrowSymbol}${defendingType}=${effectivenessDescription.get(effectiveness)}`}>
                    <EffectivenessIndicator effectiveness={effectiveness} />
                </td>
            })}
        </tr>;
    };

    return <>
        <dl>
            <dt><EffectivenessIndicator effectiveness={Effectiveness.NO_EFFECT} /></dt>
            <dd>No effect</dd>
            <dt><EffectivenessIndicator effectiveness={Effectiveness.NOT_EFFECTIVE} /></dt>
            <dd>Not effective</dd>
            <dt><EffectivenessIndicator effectiveness={Effectiveness.NEUTRAL} /></dt>
            <dd>Neutral</dd>
            <dt><EffectivenessIndicator effectiveness={Effectiveness.VERY_EFFECTIVE} /></dt>
            <dd>Super effective</dd>
        </dl>
        <table className={styles.typeChart}>
            <caption>Pokemon type chart</caption>
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
        </table>
    </>;
};
