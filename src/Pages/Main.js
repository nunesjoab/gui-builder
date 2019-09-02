import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Loader from '../Components/Loader/Loader';
import { DojotButton, CleanButton, CustomButton } from '../Components/Button';

function Checkboxes() {
    return (
        <Fragment>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked color="primary" />
            <Checkbox defaultChecked color="secondary" />
        </Fragment>
    );
}

const Main = () => (
    <Fragment>
        <Grid container justify="center">
            <Checkboxes />
            <CleanButton a="x">CleanButton</CleanButton>
            <DojotButton a="x">DojotButton</DojotButton>
            <CustomButton a="x">CustomButton</CustomButton>
            <Button> Material Button</Button>
            <Loader />
        </Grid>
    </Fragment>
);

export default Main;
