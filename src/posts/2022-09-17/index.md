---
title: Nextcloud
date: 2022-09-17
tags:
- nextcloud
- self-hosted
---
## Endless External Storage synchronization

The Nextcloud client uploads the local folder to the server many times without any local or remote changes.

**Fix:** Change the "Check for changes" option on the External Storage configuration to "Never".

![Nextcloud External Storage configuration](/images/posts/nextcloud-external-storage.png)

## Impossible to synchronize large files

**Fix:** Add configuration options to the `/var/lib/docker/volumes/nextcloud_aio_nextcloud/_data/.user.ini` file

```bash
# Other options
upload_max_filesize=10G
post_max_size=10G
memory_limit=1G
```
