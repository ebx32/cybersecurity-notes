# NMAP: HOST DISCOVERY (Which hosts are alive?)

## Introduction

First step in network recon is to reduce set of IP ranges into a list of  active hosts (running specific services). Network admin would use ICMP 
ping on local network. External pentesters would use different probes to  evade firewall restrictions.

> [!note]
> **Internet Control Message Protocol (ICMP)**:
> Netowrk layer protocol used by network devices to diagnose network communication issues.


Ping step which is used to perform host discovery before scanning active hosts can be skipped with a list scan (-sL), by disabling ping (-Pn) or 
by scanning the network with a combination of probes to recieve responses from active hosts.

## Ping scan options

### Specifying target hosts and networks

#### Input from list (`-iL`)

Pass a filename with a list of hosts (comma/space/tab/newline-separated) to scan, or read hosts from STDIN using hyphen (-). Hosts specified using IP addresses, hostname, CIDR notation, IPv6, or octet ranges.

#### Random targets (`-iR`)

Pass number of IPs to generate at random (-iR 10) or 0 for never ending scan. Nmap skips undesirable IPs like private, multicast or unallocated  ranges.

#### Exclude targets (`--exclude` | `--excludefile`)

Might not want to scan machines like legacy hardware which crashes when scanned or when you might get blamed from its outage even if it had nothing to do with you, or IP ranges which represent subsidiary companies, customers, or partners which you aren't authorized to scan.

> [!note]
> 
> Safer to run nmap -sL -n <TARGET> to see which IP to scan before you do. Scanning certain IPs can be disastrous.

2.2 Finding organization's IP address



3. References

  - https://www.cloudflare.com/learning/ddos/glossary/internet-control-message-protocol-icmp/
