#!/bin/sh

# Ensure that assigned uid has entry in /etc/passwd.

if [ `id -u` -ge 10000 ]; then
    cat /etc/passwd | grep -v runner > /tmp/passwd
    echo "runner:x:`id -u`:`id -g`:,,,:/home/runner:/bin/bash" >> /tmp/passwd
    cat /tmp/passwd > /etc/passwd
    rm /tmp/passwd
fi

# Perform environment var substitution.
cp ./server.js.envplate ./server.js
/usr/local/bin/ep -v ./server.js

grunt && node server.js
