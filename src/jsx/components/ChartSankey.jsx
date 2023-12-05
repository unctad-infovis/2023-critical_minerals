import React, {
  useEffect, useCallback, useRef, memo
} from 'react';
import PropTypes from 'prop-types';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// https://www.highcharts.com/
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import HighchartsSankey from 'highcharts/modules/sankey';
// import highchartsSeriesLabel from 'highcharts/modules/series-label';
import highchartsExportData from 'highcharts/modules/export-data';

// Load helpers.
import roundNr from '../helpers/RoundNr.js';
import formatNr from '../helpers/FormatNr.js';

highchartsAccessibility(Highcharts);
highchartsExporting(Highcharts);
highchartsExportData(Highcharts);
HighchartsSankey(Highcharts);

Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    downloadCSV: 'Download CSV data',
    thousandsSep: ','
  }
});
Highcharts.SVGRenderer.prototype.symbols.download = (x, y, w, h) => {
  const path = [
    // Arrow stem
    'M', x + w * 0.5, y,
    'L', x + w * 0.5, y + h * 0.7,
    // Arrow head
    'M', x + w * 0.3, y + h * 0.5,
    'L', x + w * 0.5, y + h * 0.7,
    'L', x + w * 0.7, y + h * 0.5,
    // Box
    'M', x, y + h * 0.9,
    'L', x, y + h,
    'L', x + w, y + h,
    'L', x + w, y + h * 0.9
  ];
  return path;
};

function SankeyChart({
  column_labels_1, column_labels_2, data, data_type, idx, note, source, subtitle, title
}) {
  const chartRef = useRef();

  const chartHeight = 800;
  const isVisible = useIsVisible(chartRef, { once: true });
  const createChart = useCallback(() => {
    Highcharts.chart(`chartIdx${idx}`, {
      caption: {
        align: 'left',
        margin: 15,
        style: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontSize: '14px'
        },
        text: `<em>Source:</em> ${source} based on <a href="https://comtradeplus.un.org/">Comtrade data</a> ${note ? (`<br /><em>Note:</em> <span>${note}</span>`) : ''}`,
        useHTML: true,
        verticalAlign: 'bottom',
        x: 0
      },
      chart: {
        events: {
          load() {
            const chart = this;
            chart.renderer.image('https://storage.unctad.org/2023-critical_minerals/assets/img/unctad_logo.png', 15, 15, 83, 100).add();
            const fromPoints = [10, chart.chartWidth / 5, chart.chartWidth / 5 + (1 * (chart.chartWidth / 5)) - 8, chart.chartWidth / 5 + (2 * (chart.chartWidth / 5)) - 17, chart.chartWidth / 5 + (3 * (chart.chartWidth / 5)) - 25, chart.chartWidth / 5 + (4 * (chart.chartWidth / 5)) - 35];
            chart.customLines = [];
            (fromPoints).forEach((customLine) => {
              chart.customLines.push(chart.renderer.path(['M', customLine + chart.plotLeft, chart.plotHeight * 1.25, 'L', customLine + chart.plotLeft, chart.plotTop + 75]).attr({
                'stroke-width': 0.5,
                stroke: 'rgba(0, 158, 219, 1)'
              }).add());
            });
          },
          render() {
            const chart = this;
            chart.legend.allItems = chart.legend.allItems.slice(0, 2);

            const positions_1 = [15, (chart.chartWidth / 5) + 5, (chart.chartWidth / 5) + (1.3 * (chart.chartWidth / 5)), (chart.chartWidth / 5) + (4 * (chart.chartWidth / 5)) - 60];
            if (chart.customLabels_1) {
              chart.customLabels_1.forEach((customLabel, i) => {
                customLabel.attr({
                  x: positions_1[i],
                  y: chart.plotTop - 45
                });
              });
            } else {
              chart.customLabels_1 = [];
              column_labels_1.forEach((label, i) => {
                chart.customLabels_1.push(
                  chart.renderer.text(column_labels_1[i]).attr({
                    align: 'left',
                    x: positions_1[i],
                    y: chart.plotTop - 45
                  }).css({
                    fontFamily: 'Roboto',
                    fontSize: '12',
                    fontWeight: 600
                  }).add()
                );
              });
            }
            const positions_2 = [45, (chart.chartWidth / 5) + 35, (chart.chartWidth / 5) + (1.5 * (chart.chartWidth / 5)), (chart.chartWidth / 5) + (2.5 * (chart.chartWidth / 5)), (chart.chartWidth / 5) + (4 * (chart.chartWidth / 5)) - 30];
            if (chart.customLabels_2) {
              chart.customLabels_2.forEach((customLabel, i) => {
                customLabel.attr({
                  x: positions_2[i],
                  y: chart.plotTop - 30
                });
              });
            } else {
              chart.customLabels_2 = [];
              column_labels_2.forEach((label, i) => {
                chart.customLabels_2.push(
                  chart.renderer.text(column_labels_2[i]).attr({
                    align: 'center',
                    x: positions_2[i],
                    y: chart.plotTop - 30
                  }).css({
                    fontFamily: 'Roboto',
                    lineHeight: 11,
                    fontSize: 11
                  }).add()
                );
              });
            }
          },
          redraw() {
            const chart = this;
            const fromPoints = [10, chart.chartWidth / 5, chart.chartWidth / 5 + (1 * (chart.chartWidth / 5)) - 8, chart.chartWidth / 5 + (2 * (chart.chartWidth / 5)) - 17, chart.chartWidth / 5 + (3 * (chart.chartWidth / 5)) - 25, chart.chartWidth / 5 + (4 * (chart.chartWidth / 5)) - 35];
            (fromPoints).forEach((customLine, i) => {
              if (chart.customLines) {
                chart.customLines[i].attr({
                  d: `M ${customLine + chart.plotLeft} ${chart.plotY + chart.plotTop} L ${customLine + chart.plotLeft} ${chart.plotTop + 10}`
                });
              }
            });
          }
        },
        height: chartHeight,
        inverted: false,
        resetZoomButton: {
          theme: {
            fill: '#fff',
            r: 0,
            states: {
              hover: {
                fill: '#0077b8',
                stroke: 'transparent',
                style: {
                  color: '#fff'
                }
              }
            },
            stroke: '#7c7067',
            style: {
              fontFamily: 'Roboto',
              fontSize: '13px',
              fontWeight: 400
            }
          }
        },
        spacingLeft: 15,
        spacingBottom: 30,
        style: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontFamily: 'Roboto',
          fontWeight: 400
        },
        type: 'sankey'
      },
      credits: {
        enabled: false
      },
      exporting: {
        buttons: {
          contextButton: {
            menuItems: ['viewFullscreen', 'separator', 'downloadPNG', 'downloadPDF', 'separator', 'downloadCSV'],
            symbol: 'download',
            symbolFill: '#000'
          }
        },
        enabled: true,
        filename: '2023-unctad'
      },
      legend: {
        align: 'right',
        enabled: (data.length > 1),
        itemStyle: {
          color: '#000',
          cursor: 'default',
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight: 400
        },
        layout: 'horizontal',
        margin: 0,
        verticalAlign: 'top'
      },
      plotOptions: {
        sankey: {
          animation: false,
          cursor: 'pointer',
          curveFactor: 0.5,
          dataLabels: {
            align: 'left',
            allowOverlap: true,
            style: {
              color: 'rgba(0, 0, 0, 0.8)',
              fontFamily: 'Roboto',
              fontSize: 12,
              fontWeight: 400,
              textOutline: '1px solid #fff'
            },
            x: 20,
          },
          events: {
            legendItemClick() {
              return false;
            },
            mouseOver() {
              // eslint-disable-next-line react/no-this-in-sfc
              this.group.toFront();
              return false;
            }
          },
          lineWidth: 1,
          linkOpacity: 0.7,
          minLinkWidth: 1,
          nodePadding: 20,
          selected: true,
          marker: {
            enabled: false,
            radius: 0,
            states: {
              hover: {
                animation: false,
                enabled: false,
                radius: 8
              }
            },
            symbol: 'circle'
          },
          states: {
            hover: {
              halo: {
                size: 0
              },
              enabled: false,
              lineWidth: 0
            },
            inactive: {
              enabled: false
            }
          }
        }
      },
      responsive: {
        rules: [{
          chartOptions: {
            chart: {
              height: 1000
            },
            plotOptions: {
              sankey: {
                dataLabels: {
                  allowOverlap: false
                }
              }
            },
            title: {
              margin: 80
            }
          },
          condition: {
            maxWidth: 700
          }
        }, {
          chartOptions: {
            title: {
              margin: 70
            }
          },
          condition: {
            maxWidth: 1000
          }
        }, {
          chartOptions: {
            title: {
              margin: 90
            }
          },
          condition: {
            maxWidth: 1200
          }
        }, {
          chartOptions: {
            title: {
              style: {
                fontSize: '22px',
                lineHeight: '26px'
              }
            }
          },
          condition: {
            maxWidth: 450
          }
        }]
      },
      series: data,
      subtitle: {
        align: 'left',
        enabled: true,
        style: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '18px'
        },
        text: subtitle,
        widthAdjust: -144,
        x: 100,
      },
      title: {
        align: 'left',
        margin: 125,
        style: {
          color: '#000',
          fontSize: '30px',
          fontWeight: 700
        },
        text: title,
        widthAdjust: -144,
        x: 100,
      },
      tooltip: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 0,
        borderWidth: 1,
        crosshairs: true,
        headerFormat: null,
        formatter() {
          const chart = this;
          if (chart.point.fromNode && chart.point.toNode) {
            const value = data_type === 'percentage' ? `${roundNr(chart.point.weight, 2)}%` : `US$ ${formatNr(chart.point.weight, ' ')}`;
            return `<div class="tooltip_container"><h3 class="tooltip_header">${chart.point.fromNode.name} \u2192 ${chart.point.toNode.name}</h3><div><span class="tooltip_label">Value:</span> <span class="tooltip_value">${value}</span></div></div>`;
          }
          return undefined;
          // const value = data_type === 'percentage' ? `${roundNr(chart.point.sum, 2)}%` : `US$ ${formatNr(chart.point.sum, ' ')}`;
          // return `<div class="tooltip_container"><h3 class="tooltip_header">${chart.key}</h3><div><span class="tooltip_label">Value:</span> <span class="tooltip_value">${value}</span></div></div>`;
        },
        shadow: false,
        shared: false,
        useHTML: true
      },
      xAxis: {
        enabled: false
      },
      yAxis: {
        enabled: false
      }
    });
    chartRef.current.querySelector(`#chartIdx${idx}`).style.opacity = 1;
  }, [column_labels_1, column_labels_2, data, data_type, idx, note, source, subtitle, title]);

  useEffect(() => {
    if (isVisible === true) {
      setTimeout(() => {
        createChart();
      }, 300);
    }
  }, [createChart, isVisible]);

  return (
    <div className="chart_container chart_parallel" style={{ minHeight: chartHeight }}>
      <div ref={chartRef}>
        {(isVisible) && (<div className="chart" id={`chartIdx${idx}`} />)}
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

SankeyChart.propTypes = {
  column_labels_1: PropTypes.instanceOf(Array).isRequired,
  column_labels_2: PropTypes.instanceOf(Array).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  data_type: PropTypes.string,
  idx: PropTypes.string.isRequired,
  note: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  source: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

SankeyChart.defaultProps = {
  data_type: 'absolute',
  note: false,
  subtitle: false
};

export default memo(SankeyChart);
