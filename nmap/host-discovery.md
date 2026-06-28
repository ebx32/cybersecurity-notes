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

## Finding an organization's IP address

### `dig`

```
➜  ~ dig scanme.nmap.org

; <<>> DiG 9.18.49 <<>> scanme.nmap.org
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 34727
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;scanme.nmap.org.               IN      A

;; ANSWER SECTION:
scanme.nmap.org.        600     IN      A       45.33.32.156

;; Query time: 247 msec
;; SERVER: 127.0.0.53#53(127.0.0.53) (UDP)
;; WHEN: Sun Jun 28 11:07:00 IST 2026
;; MSG SIZE  rcvd: 60
```



3. References

  - https://www.cloudflare.com/learning/ddos/glossary/internet-control-message-protocol-icmp/
