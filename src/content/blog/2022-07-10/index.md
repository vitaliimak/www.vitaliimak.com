---
title: How to update the custom Android ROM
date: 2022-07-10 19:49:50
tags:
- android
- adb
- post
layout: layouts/post.ejs
---

1. Download the ROM zip file on a computer
2. Connect the phone to the computer, reboot to recovery, and install the ROM
```
adb devices
adb reboot recovery
adb sideload ROM.zip
```
Installer message `serving: 'ROM.zip'  (~47%)    adb: failed to read command: Success` means that everything is okay.

[Reddit - adb: failed to read command: Success](https://www.reddit.com/r/LineageOS/comments/dt2et4/adb_failed_to_read_command_success/)

>  That's an ADB issue, nothing is wrong with the device, cable, PC or the installation process.
> If I remember correctly (from a discussion long ago), Google's ROMs are transferred about 2.2 times across the sideload. To make the progress bar add up to 100%, they said "2.2 times the file size equals 100%". Our ZIPs are transferred just once, so the final progress is at about 47% with a success. The xfer seems to show the transferred data compared to the file size. Ours clocks in at x1.00 or x1.01, while Google's is about x2.something.

3. Reboot to the system
4. Install the [**Magisk**](https://magisk.me/apk/) app
5. Reboot to recovery again, and install [**Magisk**](https://magisk.me/zip/) zip
```
adb reboot recovery
adb sideload Magisk.zip
```
6. Reboot to the system
7. Check **SafetyNet**
