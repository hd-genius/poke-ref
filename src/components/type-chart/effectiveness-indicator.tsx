import { Effectiveness } from "../../models";
import classnames from "classnames";

import styles from "./effectiveness-indicator.module.scss";

interface EffectivenessIndicatorProps {
    effectiveness: Effectiveness,
}

const effectivenessClass = new Map([
    [Effectiveness.NO_EFFECT, styles.noEffect],
    [Effectiveness.NOT_EFFECTIVE, styles.notEffective],
    [Effectiveness.NEUTRAL, styles.neutral],
    [Effectiveness.VERY_EFFECTIVE, styles.veryEffective],
]);

const effectivenessMultiplier = new Map([
    [Effectiveness.NO_EFFECT, String.fromCharCode(10006)],
    [Effectiveness.NOT_EFFECTIVE, String.fromCharCode(8595)],
    [Effectiveness.NEUTRAL, String.fromCharCode(9711)],
    [Effectiveness.VERY_EFFECTIVE, String.fromCharCode(8593)],
]);

export const EffectivenessIndicator = ({ effectiveness }: EffectivenessIndicatorProps) => {
    const className = effectivenessClass.get(effectiveness);
    const multiplier = effectivenessMultiplier.get(effectiveness);

    return <div className={classnames(styles.effectivenessIndicator, className)}>
        {multiplier}
    </div>;
};