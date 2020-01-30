import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import './statistic.scss';
import { getDataChart } from './dataChart';
import { getPropertiesChartPie } from './propertiesChart';
import { BtnGroup } from'./../btn-group/btn-group';
import { hasClass } from './../has-class/has-class';

if (hasClass('.is-page-statistic')) {

    am4core.useTheme(am4themes_animated);
    am4core.options.autoSetClassName = true;


    // Device
    let deviceLegendContainer = am4core.createFromConfig({
        'width': '100%',
        'height': '100%'
    }, 'statistic-device-legend', am4core.Container);

    let deviceChart = am4core.createFromConfig(getPropertiesChartPie(deviceLegendContainer,{ value:'Numbers', category: 'device'}),
        'statistic-device-chart', am4charts.PieChart);

    deviceChart.data = getDataChart({type:'device',time:'week'});

    let deviceBtnGroup = new BtnGroup({
        'elementHTML' : '#deviceBtnGroup',
        'items' : {
            'week' : 'Неделя',
            'month' : 'Месяц',
            'all' : 'Все время',
        },
        'active' : 'week'
    });

    deviceBtnGroup.addEvents(function (item) {
        deviceChart.data = getDataChart({type:'device',time:item.target.dataset.show});
    });




    // Local
    let localLegendContainer = am4core.createFromConfig({
        'width': '100%',
        'height': '100%'
    }, 'statistic-local-legend', am4core.Container);

    let localChart = am4core.createFromConfig(getPropertiesChartPie(localLegendContainer,{ value:'Numbers', category: 'city'}),
        'statistic-local-chart', am4charts.PieChart);

    localChart.data = getDataChart({type:'local',time:'week'});

    let localBtnGroup = new BtnGroup({
        'elementHTML' : '#localBtnGroup',
        'items' : {
            'week' : 'Неделя',
            'month' : 'Месяц',
            'all' : 'Все время',
        },
        'active' : 'week'
    });

    localBtnGroup.addEvents(function (item) {
        localChart.data = getDataChart({type:'local',time:item.target.dataset.show});
    });




    // Years
    let yearsLegendContainer = am4core.createFromConfig({
        'width': '100%',
        'height': '100%'
    }, 'statistic-years-legend', am4core.Container);

    let yearsChart = am4core.createFromConfig(getPropertiesChartPie(yearsLegendContainer,{ value:'Numbers', category: 'years'}),
        'statistic-years-chart', am4charts.PieChart);

    yearsChart.data = getDataChart({type:'years',time:'week'});

    let yearsBtnGroup = new BtnGroup({
        'elementHTML' : '#yearsBtnGroup',
        'items' : {
            'week' : 'Неделя',
            'month' : 'Месяц',
            'all' : 'Все время',
        },
        'active' : 'week'
    });

    yearsBtnGroup.addEvents(function (item) {
        yearsChart.data = getDataChart({type:'years',time:item.target.dataset.show});
    });




    // Gender
    let genderLegendContainer = am4core.createFromConfig({
        'width': '100%',
        'height': '100%'
    }, 'statistic-gender-legend', am4core.Container);

    let genderChart = am4core.createFromConfig(getPropertiesChartPie(genderLegendContainer,{ value:'Numbers', category: 'gender'}),
        'statistic-gender-chart', am4charts.PieChart);

    genderChart.data = getDataChart({type:'gender',time:'week'});

    let genderBtnGroup = new BtnGroup({
        'elementHTML' : '#genderBtnGroup',
        'items' : {
            'week' : 'Неделя',
            'month' : 'Месяц',
            'all' : 'Все время',
        },
        'active' : 'week'
    });

    genderBtnGroup.addEvents(function (item) {
        genderChart.data = getDataChart({type:'gender',time:item.target.dataset.show});
    });


}



