import classnames from "classnames";
import { PokemonType } from "../../../models";

import styles from "./type-indicator.module.scss";

interface TypeIndicatorProps {
    type: PokemonType,
    isAbbreviated?: boolean,
    className?: string,
}

export const TypeIndicator = ({ type, isAbbreviated, className }: TypeIndicatorProps) => {
    const typeName = isAbbreviated ? PokemonType.getAbbreviatedName(type) : type;
    return <div className={classnames(styles.typeIndicator, styles[type], className)}>{typeName}</div>;
};