import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import './Gantt.css';

export default class Gantt extends Component {
    componentDidMount() {
        gantt.config.date_format = "%Y-%m-%d %H:%i";
        const { tasks } = this.props;
        gantt.init(this.ganttContainer);
        gantt.i18n.setLocale("jp");
        gantt.config.server_utc = true;
        gantt.parse(tasks);
    }

    componentDidUpdate() {
        gantt.render();
    }

    initZoom() {
        gantt.ext.zoom.init({
            levels: [
                {
                    name: 'Days',
                    scale_height: 27,
                    min_column_width: 80,
                    scales: [
                        { unit: "day", step: 1, format: "%M %d日" }
                    ]
                },
                {
                    name: 'Months',
                    scale_height: 50,
                    min_column_width: 120,
                    scales: [
                        { unit: "month", format: "%F, %Y" },
                        { unit: "week", format: "#%W週" }
                    ]
                },
            ]
        });
    }

    setZoom(value) {
        if (!gantt.$initialized) {
            this.initZoom();
        }
        gantt.ext.zoom.setLevel(value);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.zoom !== nextProps.zoom;
    }

    render() {
        const { zoom } = this.props;
        this.setZoom(zoom);
        return (
            <div
                ref={(input) => { this.ganttContainer = input }}
                style={{ width: '100%', height: '100%' }}
            ></div>
        );
    }
}