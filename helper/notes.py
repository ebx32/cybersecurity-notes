import os
import json

data = {}

for item in os.listdir("."):
    if os.path.isdir(item):
        if item.startswith("."):
            continue

        files = [
            f for f in os.listdir(item)
            if os.path.isfile(os.path.join(item, f))
            and f.endswith(".txt")
        ]

        if files:
            data[item] = sorted(files)

with open("notes.json", "w") as f:
    json.dump(data, f, indent=4)

print("Generated notes.json")