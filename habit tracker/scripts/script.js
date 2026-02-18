import * as updateStats from "./PieCharts.js";
import * as time from "./time.js";



document.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        updateStats.updatePieChart();
    }
});



updateStats.updatePieChart();
time.highlight_wday();