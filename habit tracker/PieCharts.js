export function updatePieChart() {
    const rows = document.querySelectorAll("table tr");
    const habitRows = Array.from(rows).slice(2);
    const totalHabits = habitRows.length;

    if (totalHabits === 0) return;

    let totalMonthChecked = 0;

    for (let i = 0; i < 4; i++) {
        let checkedCount = 0;
        let weekChecked = 0;
        const maxDone = totalHabits * 7;

        habitRows.forEach(row => {
            const checkboxes = row.querySelectorAll('input[type="checkbox"]');
            const start = i * 7;
            const end = start + 7;

            for (let j = start; j < end; j++) {
                if (checkboxes[j] && checkboxes[j].checked) {
                    checkedCount++;
                    weekChecked++;
                }
            }
        });

        totalMonthChecked += weekChecked;

        const percentage = Math.round((checkedCount / maxDone) * 100);



        const pie = document.getElementById(`pie_w${i + 1}`);
        if (pie) {
            pie.style.setProperty('--p', percentage);
            pie.innerText = percentage + "%"
        }
    }
    const maxMonth = totalHabits * 28;
    const monthPercentage = Math.round((totalMonthChecked / maxMonth) * 100) || 0;
    const monthPie = document.getElementById("pie_m");
    if (monthPie) {
        monthPie.style.setProperty('--p', monthPercentage);
        monthPie.innerText = monthPercentage + "%";
    }
}
