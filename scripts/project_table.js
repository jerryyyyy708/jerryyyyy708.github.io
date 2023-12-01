function addRow(title, description, language, status) {
    // Get the table by its id
    const table = document.getElementById("projects");

    // Check if the table has a tbody. If not, create one.
    let tbody = table.querySelector("tbody");
    if (!tbody) {
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    }

    // Create a new table row
    const newRow = document.createElement("tr");

    // Array of values to append
    const values = [title, description, language, status];

    // Loop through the values and append them as cells to the new row
    for (let i = 0; i < values.length; i++) {
        const cell = document.createElement("td");
        cell.textContent = values[i];

        // If current value is status, set the class of the cell to the status value
        if (i === 3) {
            cell.className = values[i];
        }

        newRow.appendChild(cell);
    }

    // Append the new row to the tbody
    tbody.appendChild(newRow);
}



document.addEventListener("DOMContentLoaded", function() {
    const SQLPromise = initSqlJs({
        locateFile: file => `/scripts/sql-wasm.wasm`
    });

    fetch('projects.db').then(response => {
        return response.arrayBuffer();
    }).then(data => {
        const Uints = new Uint8Array(data);
        SQLPromise.then(SQL => {
            const db = new SQL.Database(Uints);
            const contents = db.exec("SELECT * FROM projects")[0];
            console.log('Column:', contents.values);
            for(i in contents.values) {
                if(contents.values[i][6])
                addRow(contents.values[i][1], contents.values[i][2], contents.values[i][3], contents.values[i][4]);
            }
        });
    });
});