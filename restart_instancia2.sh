#!/bin/bash
cd vagrant
vagrant ssh instancia2 -c 'pm2 restart instancia2'