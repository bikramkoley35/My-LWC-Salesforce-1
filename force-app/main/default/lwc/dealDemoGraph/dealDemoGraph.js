import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';

import ChartJS from '@salesforce/resourceUrl/ChartJS2';

export default class DealDemoGraph extends LightningElement {

    chartInitialized = false;
    chart;

    renderedCallback() {

        if (this.chartInitialized) {
            return;
        }

        this.chartInitialized = true;

        loadScript(this, ChartJS)
            .then(() => {

                console.log('Chart Loaded');

                this.createChart();
            })
            .catch(error => {

                console.error(error);
            });
    }

    createChart() {

        const canvas =
            this.template.querySelector('canvas');

        const ctx =
            canvas.getContext('2d');

        this.chart = new window.Chart(ctx, {

            type: 'bar',

            data: {

                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May'
                ],

                datasets: [

                    {

                        label:
                            'Sales Information 2026-27',

                        data: [
                            40,
                            190,
                            400,
                            250,
                            180
                        ],

                        backgroundColor: [
                            'green',
                            'red',
                            'yellow',
                            'pink',
                            'blue'
                        ]

                    }

                ]

            },

            options: {

                responsive: true,

                scales: {

                    y: {

                        beginAtZero: true

                    }

                }

            }

        });
    }
}