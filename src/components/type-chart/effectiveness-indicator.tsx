import { Effectiveness, PokemonType } from "../../models";
import classnames from "classnames";

import styles from "./effectiveness-indicator.module.scss";

interface EffectivenessIndicatorProps {
    effectiveness: Effectiveness,
    attackingType: PokemonType,
    defendingType: PokemonType,
}

const effectivenessClass = new Map([
    [Effectiveness.NO_EFFECT, styles.noEffect],
    [Effectiveness.NOT_EFFECTIVE, styles.notEffective],
    [Effectiveness.NEUTRAL, styles.neutral],
    [Effectiveness.VERY_EFFECTIVE, styles.veryEffective],
]);

const effectivenessMultiplier = new Map([
    [Effectiveness.NO_EFFECT, "0"],
    [Effectiveness.NOT_EFFECTIVE, "1/2"],
    [Effectiveness.NEUTRAL, "1"],
    [Effectiveness.VERY_EFFECTIVE, "2"],
]);

const effectivenessDescription = new Map([
    [Effectiveness.NO_EFFECT, "No effect"],
    [Effectiveness.NOT_EFFECTIVE, "Not very effective"],
    [Effectiveness.NEUTRAL, "Effective"],
    [Effectiveness.VERY_EFFECTIVE, "Super effective"],
]);

export const EffectivenessIndicator = ({ effectiveness, attackingType, defendingType }: EffectivenessIndicatorProps) => {
    const className = effectivenessClass.get(effectiveness);
    const multiplier = effectivenessMultiplier.get(effectiveness);
    const arrow = String.fromCharCode(8594);

    return <div
        title={`${attackingType}${arrow}${defendingType}=${effectivenessDescription.get(effectiveness)}`}
        className={classnames(styles.effectivenessIndicator, className)}
    >
        {multiplier}
    </div>;
};