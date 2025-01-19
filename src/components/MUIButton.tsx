import * as React from "react";
import {Button} from "@mui/material";

interface ButtonProps {
    label: string;
    title: string;
    onClick?: () => void;
    disabled?: boolean;
}
export function MUIButton(props: ButtonProps) {
return (
    <Button title={props.title} onClick={props.onClick} disabled={props.disabled}>{props.label}</Button>
)
}