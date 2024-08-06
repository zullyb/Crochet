let rowCount = 0;

function incrementRowCount() {
    rowCount++;
    document.getElementById('rowCounter').innerText = rowCount;
}

function decrementRowCount() {
    if (rowCount > 0) {
        rowCount--;
        document.getElementById('rowCounter').innerText = rowCount;
    }
}

function setProjectTitle() {
    const titleInput = document.getElementById('projectTitle').value;
    document.getElementById('projectTitleDisplay').innerText = titleInput;
    // Clear the input field after displaying the title
    document.getElementById('projectTitle').value = "";
}
function resetRowCount() {
    rowCount = 0;
    document.getElementById('rowCounter').innerText = rowCount;
}
