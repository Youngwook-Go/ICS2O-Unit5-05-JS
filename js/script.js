// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-JS/sw.js", {
    scope: "/ICS2O-Unit5-05-JS/",
  })
}

// function description

function update() {
  console.log("update")
  // input
  const a = parseFloat(document.getElementById("lenghts1").value)
  const b = parseFloat(document.getElementById("lenghts2").value)
  const c = parseFloat(document.getElementById("lenghts3").value)

  const angleA = Math.acos((b**2 + c**2 - a**2) / (2 * b * c)) * (180/Math.PI)
  const angleB = Math.acos((c**2 + a**2 - b**2) / (2 * c * a)) * (180/Math.PI)
  const angleC = Math.acos((a**2 + b**2 - c**2) / (2 * a * b)) * (180/Math.PI)
  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  // output
  if ((a + b <= c || b + c <= a || c + a <= b || a <= 0 || b <= 0 || c <= 0) || ((Math.round(sumOfAngles)) != 180)) {
    console.log(1)
    document.getElementById("answer").innerHTML = "It is not a triangle"
  } else {
    if (a == b && b == c && c == a) {
      console.log(2)
      document.getElementById("answer").innerHTML =
        "It is a equilateral triangle"
    } else if (a == b || b == c || c == a) {
      console.log(3)
      document.getElementById("answer").innerHTML = "It is a isosceles triangle"
    } else {
      console.log(4)
      document.getElementById("answer").innerHTML = "It is a scalene triangle"
    }
  }
}
