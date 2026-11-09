---
title: Create a new libvirt virtual machine
date: 2026-11-08
---

# Create a new libvirt virtual machine

This command is for creating a brand new system level virtual machine (a
“domain”) that will be started when the host starts.

It uses an [Ubuntu Cloud image][1] as its backing store.

```sh
image=/var/lib/libvirt/images/ubuntu-26.04-server-cloudimg-amd64.img
sudo virt-install \
  --name vm \
  --memory 8192 \
  --vcpus 2 \
  --boot uefi \
  --disk pool=images,size=24,backing_store=$image,backing_format=qcow2 \
  --import \
  --osinfo short-id=ubuntu26.04,require=on \
  --network network=default \
  --graphics none \
  --cloud-init user-data=$HOME/user-data.yaml \
  --autostart \
  --noautoconsole
```

## Notes

- `--name`: Name of the domain.
- `--memory`: size in MiB.
- `--boot`: This image supports both UEFI and BIOS.
- `--disk`: `size` in GiB. `pool` is an existing libvirt storage pool. The
  backing store can be used for multiple virtual machines. Deleting it will
  break virtual machines that use it.
- `--import`: Use an existing image (the backing store) instead of installing.
- `--osinfo`: Requires the osinfo database to be up to date.
- `--network`: Can also configure a MAC address: `mac=AA:BB:CC:DD:EE:FF`.
- `--graphics`: No graphical console will be allocated for the guest.
- `--cloud-init`: `user-data` is a path to a Cloud-init user-data file.
- `--autostart`: Set the autostart flag on the domain.
- `--noautoconsole`: Do not automatically try to connect to the guest console.

[1]: https://cloud-images.ubuntu.com
