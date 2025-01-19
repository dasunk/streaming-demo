import * as React from "react";
import {Typography} from "@mui/material";

interface HeaderProps {
    header: string;
}

export function MUIHeader(props: HeaderProps) {
    return <Typography variant="h4" component="h1" sx={{ mb: 2 }} fontWeight={600}>
        {props.header}
    </Typography>
}