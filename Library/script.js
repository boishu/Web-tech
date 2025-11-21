function addBook() {
    const title = document.getElementById("titleInput").value.trim();
    const year = document.getElementById("yearInput").value.trim();
    const tableBody = document.querySelector("#bookTable tbody");

    
    const titlePattern = /^[A-Za-z]+$/;
    if (!titlePattern.test(title)) {
        alert("Title must contain ONLY alphabets, no spaces, no numbers!");
        return;
    }

    
    const currentYear = new Date().getFullYear();
    if (!(year >= 1900 && year <= currentYear)) {
        alert("Enter a valid 4-digit year between 1900 and " + currentYear);
        return;
    }

    
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${title}</td>
        <td>${year}</td>
    `;

    
    if (year < 2000) {
        row.style.background = "#dcdcdc";  // light gray
    } else {
        row.style.background = "#ccffcc";  // light green
    }

    tableBody.appendChild(row);
}
