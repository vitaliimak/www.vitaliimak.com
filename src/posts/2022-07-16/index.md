---
title: "Fix git error \"fatal: CRLF would be replaced by LF in FILE\""
permalink: "/blog/{{ title | slugify }}/"
date: 2022-07-16 14:45:24
tags:
- git
- post
---

## Error:

```
git add --all
fatal: CRLF would be replaced by LF in src/main.c
```

## Fix:

1. Remove CR symbol from CRLF

```
find ./src/*.c -exec sed -i 's/\r$//' {} +
```

Source: [StackOverflow](https://stackoverflow.com/questions/20168639/git-commit-get-fatal-error-fatal-crlf-would-be-replaced-by-lf-in)
