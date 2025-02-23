---
title: BIOS OEM Windows key
date: 20241208
...

# BIOS OEM Windows Key

On a Linux system the OEM Windows key can be found by running

```shell
sudo strings /sys/firmware/acpi/tables/MSDM
```

One of the strings is the actual original Windows product key. Microsoft
probably does something on their activation servers to allow updating to newer
versions of Windows.
