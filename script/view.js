const params = new URLSearchParams(window.location.search);
const file = params.get("file");
if (!file) {
    document.getElementById("content").textContent = "No file specified.";
} else {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not load file");
            }
            return response.text();
        })
        .then(text => {
            document.getElementById("content").textContent = text;
        })
        .catch(error => {
            document.getElementById("content").textContent =
                "Error: " + error.message;
        });
}