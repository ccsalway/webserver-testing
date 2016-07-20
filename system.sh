cat >> /etc/modules <<EOF
nf_conntrack
EOF

cat > /etc/sysctl.d/99-local.conf <<EOF
net.ipv4.ip_local_port_range = 1024 65535
net.nf_conntrack_max = 150000
net.core.somaxconn = 10000
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_tw_reuse = 1
fs.file-max = 100000
EOF
