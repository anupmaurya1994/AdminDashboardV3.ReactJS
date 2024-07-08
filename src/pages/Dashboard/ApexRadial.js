import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "./dashboard.scss";

const ApexRadial = (props) => {
    const options = {
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: "13px",
                        color: void 0,
                        offsetY: 60
                    },
                    value: {
                        offsetY: 22,
                        fontSize: "16px",
                        color: void 0,
                        formatter: function (e) {
                            return e + "%"
                        }
                    }
                }
            }
        },
        colors: ["#556ee6"],
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                shadeIntensity: .15,
                inverseColors: !1,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            }
        },
        stroke: {
            dashArray: 4
        },
        labels: ["Series A"]
    };

    const series = [67];

    return (
        <React.Fragment>
            <ReactApexChart options={options} series={series} type="radialBar" height={143} />
        </React.Fragment>
    );
}

export default ApexRadial;
