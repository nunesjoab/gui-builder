import React from 'react';
import PropTypes from 'prop-types';

import CustomMap from 'Components/CustomMap/CustomMap';
import LineChart from 'Components/Charts/LineChart/LineChart';
import BarChart from 'Components/Charts/BarChart/BarChart';
import PieChart from 'Components/Charts/PieChart/PieChart';
import RadarChart from 'Components/Charts/RadarChart/RadarChart';
import SimpleTable from 'Components/Table/SimpleTable';

import Users from 'Services/Users';
import { withData } from 'utils';

const EnhancedSimpleTable = withData(SimpleTable);

const simpleHeader = [
    'Dessert (g)', 'Calories (g)', 'Fat (g)', 'Carbs (g)', 'Protein (g)',
];

const lineChartDataset = [
    {
        label: 'Temperatura',
        data: [
            { label: '05/06', value: 19 },
            { label: '06/06', value: 26 },
            { label: '07/06', value: 31 },
        ],
    },
    {
        label: 'Umidade',
        data: [
            { label: '05/06', value: 40 },
            { label: '06/06', value: 32 },
            { label: '07/06', value: 19 },
        ],
    },
];

const barChartDataset = [
    {
        label: 'LineDataset01',
        data: [
            { label: 'data01', value: 1 },
            { label: 'data02', value: 13 },
            { label: 'data03', value: 6 },
        ],
    },
    {
        label: 'LineDataset02',
        data: [
            { label: 'data01', value: 6 },
            { label: 'data02', value: 1 },
            { label: 'data03', value: -3 },
        ],
    },
];

const pieChartDataset = [
    { label: 'Protocolo A', value: 9 },
    { label: 'Protocolo B', value: 13 },
    { label: 'Protocolo C', value: 6 },
];

const Widget = ({ elementType }) => {

    const data = Users.getPlainUsers;

    let el;

    switch (elementType) {
    case ('map'):
        el = <CustomMap />;
        break;
    case ('linechart'):
        el = (
            <LineChart
                data={lineChartDataset}
                title="Gráfico de Linhas"
            />
        );
        break;
    case ('barchart'):
        el = (
            <BarChart
                data={barChartDataset}
                title="Gráfico de Barras"
            />
        );
        break;
    case ('piechart'):
        el = (
            <PieChart
                data={pieChartDataset}
                title="Gráfico de Pizza"
            />
        );
        break;
    case ('radarchart'):
        el = (
            <RadarChart
                data={lineChartDataset}
                title="Gráfico de Radar"
            />
        );
        break;
    case ('table'):
        el = (
            <EnhancedSimpleTable
                data={[]}
                header={simpleHeader}
                promiseData={data}
            />
        );
        break;
    default:
        el = <br />;
        break;
    }

    return el;
};

Widget.propTypes = {
    elementType: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Widget;
