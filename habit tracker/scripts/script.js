import * as updateStats from "./PieCharts.js";
import * as time from "./time.js";
import * as createElements from "./createElements.js";
import * as cloud from "./supaBase.js";

const habits = ["Bett gemacht", "Übungsaufgaben", "Sport gemacht", "Stoff aufgearbeitet"];
const container = document.getElementById("habit_table");
createElements.generateTable(container, habits);

async function init() {
    await cloud.readFromCloud();
    updateStats.updatePieChart();
    time.highlight_wday();
}

init();

document.addEventListener('change', async (event) => {
    if (event.target.type === 'checkbox') {
        updateStats.updatePieChart();
        await cloud.saveToCloud();
    }
});



