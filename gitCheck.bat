@echo off
TITLE Checking git
:a
ECHO ============================

ECHO NETWORK INFO

ECHO ============================

ipconfig

git fetch

timeout -t 5

git pull

timeout -t 10

goto a