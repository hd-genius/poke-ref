import { Effectiveness, PokemonType, TypeChart as TypeChartModel } from "../../models";
import classNames from "classnames";
import { EffectivenessIndicator } from "./effectiveness-indicator";
import { TypeIndicator } from "../type-indicator";
import { If } from "react-semantic-components";

import styles from "./type-chart.module.scss";
import { useLoaderData } from "react-router-dom";

const effectivenessDescription = new Map([
    [Effectiveness.NO_EFFECT, "No effect"],
    [Effectiveness.NOT_EFFECTIVE, "Not very effective"],
    [Effectiveness.NEUTRAL, "Effective"],
    [Effectiveness.VERY_EFFECTIVE, "Super effective"],
]);

const arrowSymbol = String.fromCharCode(8594);

export const TypeChart = () => {
    const { types, attackRelationships } = useLoaderData() as TypeChartModel;

    const numberOfTypes = types.length;

    const buildRowForType = (attackingType: PokemonType, includeVerticalHeader: boolean) => {
        const relationships = attackRelationships[attackingType] ?? [];
        return <tr key={attackingType}>
            <If condition={includeVerticalHeader}>
                <th rowSpan={numberOfTypes} scope="row" className={classNames(styles.verticalHeader, styles.typeAxisHeader)}>attacking type</th>
            </If>
            <th scope="row" className={styles.attackTypeHeader}>
                <TypeIndicator type={attackingType} />
            </th>
            {types.map(defendingType => {
                const effectiveness = relationships[defendingType] ?? Effectiveness.NEUTRAL;
                return <td title={`${attackingType}${arrowSymbol}${defendingType}=${effectivenessDescription.get(effectiveness)}`} key={defendingType}>
                    <EffectivenessIndicator effectiveness={effectiveness} />
                </td>
            })}
        </tr>;
    };

    return <>
        <dl className={styles.typeChartKey}>
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
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th colSpan={numberOfTypes} className={styles.typeAxisHeader}>defending type</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                    {types.map(type => {
                        return <th scope="col" className={styles.defenseTypeHeader} key={type}>
                            <TypeIndicator type={type} className={styles.abbreviatedType} isAbbreviated />
                        </th>
                    })}
            </tr>
            {types.map((type, index) => buildRowForType(type, index === 0))}
            </tbody>
        </table>
    </>;
};
