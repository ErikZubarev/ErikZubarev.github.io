#!/usr/bin/env bash

input="$1"

echo "{"

key=""
first=true

while IFS= read -r line || [ -n "$line" ]; do
    # Remove BOM, CR, and trim whitespace
    line=${line//$'\r'/}
    line=${line//$'\xEF\xBB\xBF'/}
    trimmed=$(echo "$line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

    # Skip empty/whitespace-only lines
    [ -z "$trimmed" ] && continue

    if [ -z "$key" ]; then
        key="$trimmed"
    else
        value="$trimmed"

        # Escape quotes
        esc_key=$(printf '%s' "$key" | sed 's/"/\\"/g')
        esc_value=$(printf '%s' "$value" | sed 's/"/\\"/g')

        if [ "$first" = true ]; then
            first=false
        else
            echo ","
        fi

        printf '    "%s": "%s"' "$esc_key" "$esc_value"

        key=""
    fi
done < "$input"

echo
echo "}"
