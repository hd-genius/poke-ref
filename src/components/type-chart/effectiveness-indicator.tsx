import { Effectiveness } from "../../models";
import classnames from "classnames";

import styles from "./effectiveness-indicator.module.scss";

interface EffectivenessIndicatorProps {
    effectiveness: Effectiveness,
}

export const EffectivenessIndicator = ({ effectiveness }: EffectivenessIndicatorProps) => {
    switch (effectiveness) {
        case Effectiveness.NO_EFFECT:
            return <div className={classnames(styles.effectivenessIndicator, styles.noEffect)}>0</div>;
        case Effectiveness.NOT_EFFECTIVE:
            return <div className={classnames(styles.effectivenessIndicator, styles.notEffective)}>1/2</div>;
        case Effectiveness.NEUTRAL:
            return <div className={classnames(styles.effectivenessIndicator, styles.neutral)}>1</div>;
        case Effectiveness.VERY_EFFECTIVE:
            return <div className={classnames(styles.effectivenessIndicator, styles.veryEffective)}>2</div>;
    }
};