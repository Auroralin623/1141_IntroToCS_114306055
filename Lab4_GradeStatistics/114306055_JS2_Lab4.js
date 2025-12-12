let rowCount = 0;

document.getElementById("submitBtn").addEventListener("click", function () {
    const math = document.getElementById("math").value;
    const english = document.getElementById("english").value;

    if (math === "" || english === "") return;

    rowCount++;

    const avg = ((Number(math) + Number(english)) / 2).toFixed(2);

    const tbody = document.querySelector("#gradeTable tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${avg}</td>
    `;

    tbody.appendChild(row);

    updateColumnAverages();

    document.getElementById("math").value = "";
    document.getElementById("english").value = "";
});

function updateColumnAverages() {
    const rows = document.querySelectorAll("#gradeTable tbody tr");
    let mathSum = 0;
    let englishSum = 0;
    let avgSum = 0;

    rows.forEach(row => {
        mathSum += Number(row.children[1].innerText);
        englishSum += Number(row.children[2].innerText);
        avgSum += Number(row.children[3].innerText);
    });

    const count = rows.length;

    document.getElementById("mathAvg").innerText = (mathSum / count).toFixed(2);
    document.getElementById("englishAvg").innerText = (englishSum / count).toFixed(2);
    document.getElementById("overallAvg").innerText = (avgSum / count).toFixed(2);
}