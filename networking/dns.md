# Domain Name System (DNS)

Hierarchical and decentralized naming system which translates human-readable domain names or resources to machine-readable IP addresses.

## Hierarchy

```
                                  Root servers
                                  /     |     \
                                 /      |      \
                                /       |       \
Top-Leve Domains (TLD)       .com      .org    .gov
                              /\        /\      /\
                             /  \      /  \    /  \
Second-Level Domains     google  .    .    .  .   nasa
                             ...        ...    /    |    \
                                              /     |     \
                                             /      |      \
Subdomain/Hostname                  astrobiology  apod    code
        
            >>>>>>>>>>>>>>> Parts of a URL <<<<<<<<<<<<<<<

        https://    apod.   nasa    .gov    /apod/ap040924.html
           |         |       |        |             |
    Scheme/Protocol  |   Second-Level |       (Page) path
                 Subdomain           TLD
```

Root servers :- direct DNS queries to propert TLD servers.

## Types of DNS servers

1. **Recursive DNS servers**(resolvers): resolving domain names to corresponding IP address. Queries root name servers, TLD servers, and authoritative name servers until the IP address is found. Recursive DNS servers cache the results to speed up future queries and reduce the load on other DNS servers.

2. Authoritative DNS Servers: Responsible for maintaining the DNS records for specific domains. store the authoritative information about domain names like their records. A (IP address), AAAA (IPv6 address), Canonical Name;CNAME (forwards a domain/subdomain to another domain), Mail Exchange;MX (mail to email server), TXT (text notes stored by admin in record for email security), Name Server;NS (name server for corresponding DNS entry), SOA (admin info about domain), SRV (port for specific service), PTR (domain name in reverse-lookups).

3. Caching/Forwarding DNS Servers

Caching; store the results of DNS queries to speed up future requests. Forwarding; forward DNS queries to other DNS servers for resolution.

## DNS Resolution process (Domain Translation)

1. Type domain into browser
2. Computer checks local DNS cache for IP address
3. If not; queries **recursive DNS server**. Provided by ISP/third-party service (eg. Google DNS).
4. Recursive checks local cache, otherwise queries root server which points it to appropriate TLD name server. 
5. TLD directs query to authoritative name server.
6. Authoritative name server responds with IP address.
7. Recursive returns IP address to computer.

Use `dig` to resolve domain to IP address.

```
dig DOMAIN_NAME
```

Reverse DNS for IP address to domain

```
dig -x IP_ADDR
```

## References and more readings

https://www.solarwinds.com/resources/it-glossary/dns-hierarchy
https://www.cloudflare.com/learning/dns/dns-records/
https://academy.hackthebox.com/app/module/289/section/3241

https://www.cloudflare.com/learning/dns/dns-cache-poisoning/
