#!/usr/bin/env sh

DATE=`date +'%Y-%m-%d'`
mkdir --parents ./src/content/blog/$DATE/

FILE="./src/content/blog/$DATE/index.md"
cp ./templates/post.md $FILE

sed -i "s/date: /date: $DATE/" $FILE
