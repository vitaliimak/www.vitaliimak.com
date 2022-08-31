#!/usr/bin/env sh

DATE=`date +'%Y-%m-%d'`
mkdir --parents ./src/posts/$DATE/

FILE="./src/posts/$DATE/index.md"
cp ./templates/post.md $FILE

sed -i "s/date: /date: $DATE/" $FILE
