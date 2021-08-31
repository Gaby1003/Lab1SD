#!/bin/bash
cd vagrant
vagrant ssh instancia1 -c 'pm2 restart instancia1'