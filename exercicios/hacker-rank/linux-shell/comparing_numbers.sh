#!/bin/bash
read X
read Y
[[ $X -eq $Y ]] && echo 'X is equal to Y'
[[ $X -gt $Y ]] && echo 'X is greater than Y'
[[ $X -lt $Y ]] && echo 'X is less than Y'

# read x
# read y
# if (( $x > $y )); then
#     printf "X is greater than Y"
# elif (( $x == $y )); then
#     printf "X is equal to Y"
# else
#     printf "X is less than Y"
# fi