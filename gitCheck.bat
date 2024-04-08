@echo off
TITLE Checking git
:a

ipconfig

git fetch

git pull

timeout -t 5

goto a