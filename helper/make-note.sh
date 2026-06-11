#!/usr/bin/env bash

BLUE='\033[0;34m'
GREEN='\033[0;32m'
NC='\033[0m'

current_dir="."

while true; do
    mapfile -t dirs < <(find "$current_dir" -maxdepth 1 -mindepth 1 -type d | sort)

    if [ ${#dirs[@]} -eq 0 ]; then
        break
    fi

    echo -e "${BLUE}Available directories:${NC}"
    for dir in "${dirs[@]}"; do
        echo "  $(basename "$dir")"
    done
    echo

    if [ "$current_dir" = "." ]; then
        read -rp "Where do you want to put your note? " choice
    else
        read -rp "Which subdirectory? " choice
    fi

    next_dir="$current_dir/$choice"

    if [ -d "$next_dir" ]; then
        current_dir="$next_dir"
    else
        echo "Directory does not exist."
    fi
done

read -rp "Note name: " note_name

date_prefix=$(date +%m-%d-%Y)
filename="${date_prefix}-${note_name}.txt"
filepath="${current_dir}/${filename}"

touch "$filepath"

echo -e "${GREEN}${filepath} created${NC}"

nano "$filepath"
