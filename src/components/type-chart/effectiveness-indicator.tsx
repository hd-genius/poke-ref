import { Effectiveness } from "../../models";

import styles from "./effectiveness-indicator.module.css";

interface EffectivenessIndicatorProps {
    effectiveness: Effectiveness,
}

export const EffectivenessIndicator = ({ effectiveness }: EffectivenessIndicatorProps) => {
    switch (effectiveness) {
        case Effectiveness.NO_EFFECT:
            return <span className={styles.noEffect}>0</span>;
        case Effectiveness.NOT_EFFECTIVE:
            return <span className={styles.notEffective}>1/2</span>;
        case Effectiveness.NEUTRAL:
            return <span className={styles.neutral}>1</span>;
        case Effectiveness.VERY_EFFECTIVE:
            return <span className={styles.veryEffective}>2</span>;
    }
};