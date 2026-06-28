NMAP: INTRODUCTION
==================

1. Introduction

Nmap scanning techniques:

1. Host discovery
2. Port scanning
3. Service enumeration & detection
4. OS detection
5. Nmap scripting engine (NSE)

$ nmap <scan type> <options> <target>

2. Scanning techniques

Most scans send & recieve raw packets which require root access on Unix  
systems; use sudo nmap. Default scan is SYN scan (-sS), but falls back 
to connect scan (-sT) if the user doesn't have proper privileges to send 
raw packets.

2.1. -sS (TCP SYN/stealth scan)

Default scan. Scans thousands of ports per second on networks without 
restrictive firewalls. Unobtrusive and stealthy because it starts the 
TCP handshake (SYN) but never finishes it (ACK). How the port response 
tell us if it's open, closed or if the packet has been dropped by the 
firewall:

  - SYN/ACK respone: port is listening (open)
  - SYN respone: port is open; simultaneuous open/split handshake  
    connection.
  - RST (reset) response: port is not listening (closed), but host is 
    reachable
  - No response/ICMP unreachable: port is filtered (by firewalls).

2.2. -sT (TCP connect scan)

When user does not have superuser privileges to construct raw packets, 
nmap uses TCP connect scan as default. Called connect because it uses a 
connect() syscall (Berkley Socket API) to tell the OS to establish a 
connection with the target system, and uses the API to obtain status 
info on each connection attempt.

Nmap has less control over connect scan over TCP SYN scan, because OS 
instead tries to complete TCP connections on open ports instead of 
leaving them half open. More packets required and the target machine 
will log the connection (/var/log/syslog) which sysadmins will know if 
the machine has been scanned.

2.3. -sU (UDP scans)



3. References

  - https://nmap.org/book/man-port-scanning-techniques.html
