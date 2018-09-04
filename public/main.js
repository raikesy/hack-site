// TODO: Wire up save and reset buttons
// TODO: Detect file/mime type and if it's code, show monospace and syntax highlight
// TODO: Wire up file selector for root level files
// TODO: Improve selector to show and select files nested at any level
// TODO: Add ability to add new files and delete existing ones (utilise all current server.js methods)
// TODO: Add some from of protection for critical files? (main.js and index.html)

const fileName = "test.txt";
const state = {
    selectedFile: "test.txt",
    serverText: null,
    clientText: null,
    allFiles: null

}

const fileSelect = document.getElementById("file-select");
const fileLink = document.getElementById("file-link");
const textArea = document.getElementById("textarea");

fileSelect.textContent = fileName;
fileSelect.classList.remove("is-loading");

fileLink.href = fileName;
fileLink.textContent = fileName;
fileLink.classList.remove("is-loading");

fetch(fileName).then(response => response.text()).then(fileText => {
    textArea.textContent = fileText;
    textArea.parentElement.classList.remove("is-loading");
});

