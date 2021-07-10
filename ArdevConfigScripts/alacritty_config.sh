#!/bin/bash

if [[ ! -f "$1" ]]; then
    echo "Error 501: Json file doesn't exist"
fi

export alac_theme="$(cat "$1" | jq '.[] | .theme')"

grep -i alac_theme ./themes/alac_themes.json
output=$?

if [[ $output -eq 0 ]]; then
    echo "Error 502: $alac_theme theme doens't exist"
fi

themes=./themes/alac_themes.json

export background=$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."background"')
export foreground="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."foreground"')"
export black_normal="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."black_normal"')"
export red_normal="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."red_normal"')"
export green_normal="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."green_normal"')"
export yellow_normal="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."yellow_normal"')"
export blue_normal="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."blue_normal"')"
export magenta_normal="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."magenta_normal"')"
export cyan_normal="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."cyan_normal"')"
export white_normal="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."white_normal"')"
export black_bright="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."black_bright"')"
export red_bright="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."red_bright"')"
export green_bright="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."green_bright"')"
export yellow_bright="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."yellow_bright"')"
export blue_bright="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."blue_bright"')"
export magenta_bright="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."magenta_bright"')"
export cyan_bright="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."cyan_bright"')"
export white_bright="$(cat "$themes" | jq -r --arg alac_theme "$alac_theme" '.[] | select(.'$alac_theme') | .'$alac_theme'."white_bright"')"


rm -f final.yml temp.yml
( echo "cat <<EOF >final.yml";
  cat $XDG_CONFIG_HOME/alacritty/alacritty.yml;
  echo "EOF";
) >temp.yml
. temp.yml
rm temp.yml
mv final.yml $XDG_CONFIG_HOME/alacritty/alacritty.yml
