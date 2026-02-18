import * as updateStats from "./PieCharts.js";
import * as time from "./time.js";
import * as createElements from "./createElements.js";

const habits = ["Bett gemacht", "Übungsaufgaben", "Sport gemacht", "Stoff aufgearbeitet"];
const container = document.getElementById("habit_table");

document.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        updateStats.updatePieChart();
    }
});


createElements.generateTable(container, habits);
updateStats.updatePieChart();
time.highlight_wday();