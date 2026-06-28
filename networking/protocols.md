# Protocols and miscellaneous stuff

## The Stuff

**Uniform Resource Locator (URL)** aka **Fully Qualified Domain Name (FQDN)**. *Difference?* FQDN is the domain ```www.hackthebox.eu`, URL is the whole thing with paths and resource identifiers, query strings, etc `https://www.hackthebox.eu/example?floor=2&office=dev&employee=17`.

**Internet Service Provider (ISP)** gives us the network block. Routers routes packets across a network and to and fro the internet. Phonebook, translates private IP address to public IP address. 

**Demilitarized Zone (DMZ)**, logica/physical network which separates organization's private internal network (LAN) and the internet/external network. Like putting a webserver in a DMZ so the admin can condifure secure networking protections.

**Host-based firwalls** can be placed between workstations and servers to prevent spooding and man in the middle attacks.

Switch and routers should be on an "Administrator Network", to prevent workstations from snooping in on any communications between these devices, like using `wireshark`. 

## Network Types

1. **Wide Area Network (WAN)**: Internet. But not exclusively. Basically a bunch of LANs connected together. Internals WAN (aka intranet, air-gapped networks, etc.) used by government agencies and many companies. 

2. **Local Area Network (LAN)/ Wireless LAN (WLAN)**: RFC 1918, IP addresses assigned to devices for local use. WLAN without a cable (physical medium: coaxial cables, etc.)

3. **Virtual Private Network (VPN)**: Wanna drive past a hill without driving on top of it? Make a tunnel for yourself. [More](nordlayer.com/learn/vpn/types-and-protocols/)

    - Site-to-site VPN: Client and server are network devices. Unifies a bunch of separate networks into a single intranet. Like an office in OR and antoher in WA unified over the same intranet using VPN. 
    - Remote Access VPN: Temporary. Client initiates when needed. You're in OR and you connect to Vattefall's HQ's LAN in Sweden using a temporary encrypted VPN tunnel. `Split-tunnel` a config so you can watch youtube cat videos without VPN while being connected to you're company's network using VPN. Don't wanna waste all that bandwidth on cat videos right?
    - SSL VPN: Uses TLS to create an ecnrypted tunnel to connect to a gateway.

4. **Global Area Network (GAN)**: Internet. All that cable in the sea. 

5. **Metropolitant Area Network (MAN)**: connects several LANs in geographical proximity via leased lines like fibre glass. 

6. **Personal Area Network (PAN)/WPAN (the wireless verison of it)**: You're expensive apple ecosystem .

## Topologies



## MAC, ARP, IP, Ports

## Network Address Translation (NAT)

Too many devices, too little IPv4 addresses, yada yada yada. Multiple devices on a private network shares single public IP address via NAT. 

- Public IP address assigned by ISP.
- Private IP addresses used by devices connected in local network (like LAN). not routable on the global internet, meaning packets sent to these addresses are not forwarded by internet backbone routers. More secure too.

NAT works by modifying source/destination IP address in the headers of IP packets as they pass through by routers/other network devices. Router has table which keeps track of mappings called **NAT table**. 

```
PC (192.168.1.10) -----|
                       |      Router/NAT
Mobile (192.168.1.13)--|====> Public IP   ====> Remote Server (203.0.113.60)
                       |     203.0.113.50
Laptop (192.168.1.11)--|
```

Routers do these stuff most often.

### Types of NAT

1. **Static NAT**: one-to-one mapping, where each private IP address corresponds directly to a public IP address.

2. **Dynamic NAT**: Assigns a public IP from a pool of available addresses to a private IP as needed, based on network demand.

3. Port Address Translation (PAT)/NAT Overload: Multiple private IP addresses share a single public IP address, differentiating connections by using unique port numbers. May require **port forwarding**. 

## DHCP (Dynamic Host Configuration Protocol)

Network management protocol used to automate the process of configuring devices on IP networks. Allows devices to automatically receive an IP address and other network configuration parameters, such as subnet mask, default gateway, and DNS servers, without manual intervention.

DHCP recycles IP addresses that are no longer in use when devices disconnect from the network, optimizing the available address pool.

- **DHCP Server**: Network device (router/server) manages IP allocation w/ pool of addresses and config params.
- **DHCP Client**: Any device that connects to the network and requests network configuration parameters from the DHCP server.

```
DORA
=====

1. Discover: "Ya'll out there?" Client broacasts DHCP Discover message to find DHCP servers.
2. Offer: "I've got this IP address, want it?" proposed IP address lease to client.
3. Request: "Yuh" accepts offered IP address.
4. Acknowledge: DHCP confirming that the client has been assigned the IP address which it can use to communicate over network.
```



