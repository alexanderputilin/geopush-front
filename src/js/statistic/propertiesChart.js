export function getPropertiesChartPie(legend, fuelds) {
    return {
        'series': [{
            'type': 'PieSeries',
            'innerRadius': '50%',
            'ticks': {
                'disabled': true
            },
            'labels': {
                'disabled': true
            },
            'slices': {
                'strokeOpacity': 0,
                'strokeWidth': 0
            },
            'dataFields': {
                'value': fuelds['value'],
                'category': fuelds['category']

            }
        }],
        'legend': {
            'parent': legend,
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

    }
}