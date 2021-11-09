#!/bin/bash
read x
read y
read z

if [ $x == $z ] && [ $x == $y ] && [ $z == $y ]
then
  echo "EQUILATERAL"
elif [ $x == $z ] || [ $x == $y ] || [ $z == $y ]
then
  echo "ISOSCELES"
else
  echo "SCALENE"
fi