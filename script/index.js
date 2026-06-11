fetch("./helper/notes.json")
    .then(r => r.json())
    .then(data => {
        const table = document.getElementById("notes-table");

        for (const [topic, files] of Object.entries(data)) {
            const row = document.createElement("tr");

            const left = document.createElement("td");
            left.textContent = topic;

            const right = document.createElement("td");

            const ul = document.createElement("ul");

            files.forEach(file => {
                const li = document.createElement("li");

                const a = document.createElement("a");
                a.href = `view.html?file=./content/${topic.toLowerCase()}/${file}`;
                a.textContent = file;

                li.appendChild(a);
                ul.appendChild(li);
            });

            right.appendChild(ul);

            row.appendChild(left);
            row.appendChild(right);

            table.appendChild(row);
        }
    });