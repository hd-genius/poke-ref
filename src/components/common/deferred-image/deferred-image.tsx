import { useEffect, useState } from "react";
import { If } from "react-semantic-components";
import { LoadingIndicator } from "../loading-indicator";
import classNames from "classnames";
import styles from "./deferred-image.module.scss";

export const DeferredImage = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
    }, [props.src]);

    return <>
        <img {...props} className={classNames(props.className, {
            [styles.hidden]: isLoading,
        })} onLoad={() => setIsLoading(false)} />
        <If condition={isLoading}>
            <LoadingIndicator />
        </If>
    </>;
}