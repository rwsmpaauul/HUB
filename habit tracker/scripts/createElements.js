export function generateTable(container, habits) {
    let html = `<tr><th rowspan="2" class="header">Habits:</th>`;

    for (let i = 1; i < 5; i++) {
        html += `<th colspan="7" class="header wa">Woche ${i}</th>`;
    }
    html += `</tr><tr>`;

    const days = ["Mo", "Di", "Mi", "Do", "Fri", "Sa", "So"];
    for (let i = 0; i < 28; i++) {
        html += `<th class="${days[i % 7].toLowerCase()} w${(i / 7) + 1} wd">${days[i % 7]}</th>`;
    }
    html += `</tr>`;

    habits.forEach(habit => {
        html += `<tr><td class="task">${habit}</td>`;
        for (let i = 0; i < 28; i++) {
            html += `<td><input type="checkbox"></td>`;
        }
        html += `</tr>`
    })

    container.innerHTML = html;

}