FROM alpine:3.18
### Install Application
RUN apk upgrade --no-cache && \
    apk add --no-cache --virtual=run-deps \
      su-exec \
      dnsmasq

VOLUME /var/dnsmasq
EXPOSE 53 53/udp
ENTRYPOINT ["dnsmasq","-d","-C","/var/dnsmasq/conf/dnsmasq.conf","-H","/var/dnsmasq/hosts"]