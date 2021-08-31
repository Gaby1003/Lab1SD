#!/bin/bash
cd vagrant
vagrant up
cd ..
npm install
node index.js
