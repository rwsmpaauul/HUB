import * as updateStats from "./PieCharts.js";

document.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        updateStats.updatePieChart();
    }
});



updateStats.updatePieChart();