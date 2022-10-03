import { createElement, useCallback } from "react";

import { BadgeSample } from "./components/BadgeSample";
import "./ui/FuncTemplate.css";

export function FuncTemplate(props) {
    const { functemplateType, functemplateValue, valueAttribute, onClickAction, style, bootstrapStyle } = props;
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return (
        <BadgeSample
            type={functemplateType}
            bootstrapStyle={bootstrapStyle}
            className={props.class}
            clickable={!!onClickAction}
            defaultValue={functemplateValue ? functemplateValue : ""}
            onClickAction={onClickHandler}
            style={style}
            value={valueAttribute ? valueAttribute.displayValue : ""}
        />
    );
}
