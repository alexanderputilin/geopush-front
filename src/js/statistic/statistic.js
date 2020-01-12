import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import './statistic.scss';
import { deviceData } from './deviceData';


am4core.useTheme(am4themes_animated);

let deviceLegendContainer = am4core.createFromConfig({
    'width': '100%',
    'height': '100%'
}, 'statistic-device-legend', am4core.Container);

const propertiesChartPie = {

    'series': [{
        'type': 'PieSeries',
        'innerRadius': '50%',
        'ticks': {
            'disabled' : true
        },
        'labels': {
            'disabled' : true
        },
        'slices' : {
            'strokeOpacity' : 0,
            'strokeWidth' : 0
        },
        'dataFields': {
            'value': 'Numbers',
            'category': 'device'

        }
    }],
    'data': deviceData,
    'legend': {
        'parent': deviceLegendContainer,
        'position' : 'left',
        //'valign' : 'top',
        'useDefaultMarker': true,
        'fontSize' : 16,
        'minWidth' : 380,
        'marginBottom' : 0,
        'marginLeft' : 0,
        'marginRight' : 0,
        'marginTop' : 0,
        'valueLabels' : {
            'fontWeight' : 500,
        },
        'itemContainers' : {
            'paddingTop' : 5,
            'paddingBottom' : 5
        },
        'markers': {
            'children': [{
                'cornerRadiusTopLeft': 12,
                'cornerRadiusTopRight': 12,
                'cornerRadiusBottomRight': 12,
                'cornerRadiusBottomLeft': 12,
                'strokeWidth': 0,
                'strokeOpacity': 0,
                'stroke': '#ccc',
                'width': 18,
                'height': 18
            }]
        }
    }

};


let deviceChart = am4core.createFromConfig(propertiesChartPie,
    'statistic-device-chart', am4charts.PieChart);




let localLegendContainer = am4core.createFromConfig({
    'width': '100%',
    'height': '100%'
}, 'statistic-local-legend', am4core.Container);



let localChart = am4core.createFromConfig({
    'series': [{
        'type': 'PieSeries',
        'innerRadius': '50%',
        'ticks': {
            'disabled' : true
        },
        'labels': {
            'disabled' : true
        },
        'slices' : {
            'strokeOpacity' : 0,
            'strokeWidth' : 0
        },
        'dataFields': {
            'value': 'Numbers',
            'category': 'city'

        }
    }],
    'data':  [{
        'city': 'Казань',
        'Numbers': 501.9
    }, {
        'city': 'Москва',
        'Numbers': 301.9
    }, {
        'city': 'Санкт-Петергбург',
        'Numbers': 201.1
    }, {
        'city': 'Нижний Новгород',
        'Numbers': 165.8
    }, {
        'city': 'Саратов',
        'Numbers': 139.9
    }, {
        'city': 'Другие',
        'Numbers': 99
    }],

    'legend': {
        'parent': localLegendContainer,
        'position' : 'left',
        'useDefaultMarker': true,
        'fontSize' : 16,
        'minWidth' : 380,
        'marginBottom' : 0,
        'marginLeft' : 0,
        'marginRight' : 0,
        'marginTop' : 0,
        'valueLabels' : {
            'fontWeight' : 500,
        },
        'itemContainers' : {
            'paddingTop' : 5,
            'paddingBottom' : 5
        },
        'markers': {
            'children': [{
                'cornerRadiusTopLeft': 12,
                'cornerRadiusTopRight': 12,
                'cornerRadiusBottomRight': 12,
                'cornerRadiusBottomLeft': 12,
                'strokeWidth': 0,
                'strokeOpacity': 0,
                'stroke': '#ccc',
                'width': 18,
                'height': 18
            }]
        }
    }
}, 'statistic-local-chart', am4charts.PieChart);


let genderLegendContainer = am4core.createFromConfig({
    'width': '100%',
    'height': '100%'
}, 'statistic-gender-legend', am4core.Container);

let genderChart = am4core.createFromConfig({
    'series': [{
        'type': 'PieSeries',
        'innerRadius': '50%',
        'ticks': {
            'disabled' : true
        },
        'labels': {
            'disabled' : true
        },
        'slices' : {
            'strokeOpacity' : 0,
            'strokeWidth' : 0
        },
        'dataFields': {
            'value': 'Numbers',
            'category': 'gender'

        }
    }],
    'data':  [{
        'gender': 'Мужской',
        'Numbers': 501.9
    }, {
        'gender': 'Женский',
        'Numbers': 301.9
    }],

    'legend': {
        'parent': genderLegendContainer,
        'position' : 'left',
       // 'valing' : 'top',
        'useDefaultMarker': true,
        'fontSize' : 16,
        'minWidth' : 380,
        'marginBottom' : 0,
        'marginLeft' : 0,
        'marginRight' : 0,
        'marginTop' : 0,
        'valueLabels' : {
            'fontWeight' : 500,
        },
        'itemContainers' : {
            'paddingTop' : 5,
            'paddingBottom' : 5
        },
        'markers': {
            'children': [{
                'cornerRadiusTopLeft': 12,
                'cornerRadiusTopRight': 12,
                'cornerRadiusBottomRight': 12,
                'cornerRadiusBottomLeft': 12,
                'strokeWidth': 0,
                'strokeOpacity': 0,
                'stroke': '#ccc',
                'width': 18,
                'height': 18
            }]
        }
    }
}, 'statistic-gender-chart', am4charts.PieChart);
