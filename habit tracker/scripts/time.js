export function highlight_wday() {
    const d = new Date();
    const day = d.getDay();

    const days = ["so", "mo", "di", "mi", "do", "fri", "sa"];
    const weekday = document.getElementsByClassName(days[day]);

    for (let i of weekday) {
        i.style.backgroundColor = "lightblue";
    }


}
