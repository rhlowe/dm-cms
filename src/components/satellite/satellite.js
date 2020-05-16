import React from 'react'
import './satellite.css'

const Satellite = ({ cyclePercent, name }) => {
  const getPhase = (cyclePercent) => {
    if (cyclePercent >= 82.5) {
      return {
        name: "waning crescent",
        path: `
          M 50 10
          A 40 40 0 0 1 50 90
          A 20 40 0 0 1 50 10
        `
      };
    } else if (cyclePercent >= 75) {
      return {
        name: "last quarter",
        path: `
          M 50 10
          A 40 40 0 0 1 50 90
          A 0 40 0 0 1 50 10
        `
      };
    } else if (cyclePercent >= 62.5) {
      return {
        name: "waning gibbous",
        path: `
          M 50 10
          A 20 40 0 0 1 50 90
          A 40 40 0 0 0 50 10
        `
      };
    } else if (cyclePercent >= 50) {
      return {
        name: "full",
        path: `
          M 50 10
          A 0 40 0 0 1 50 90
          A 0 40 0 0 1 50 10
        `
      };
    } else if (cyclePercent >= 32.5) {
      return {
        name: "waxing gibbous",
        path: `
          M 50 10
          A 20 40 0 0 0 50 90
          A 40 40 0 0 1 50 10
        `
      };
    } else if (cyclePercent >= 25) {
      return {
        name: "first quarter",
        path: `
          M 50 10
          A 0 40 0 0 1 50 90
          A 40 40 0 0 1 50 10
        `
      };
    } else if (cyclePercent >= 12.5) {
      return {
        name: "waxing crescent",
        path: `
          M 50 10
          A 20 40 0 0 1 50 90
          A 40 40 0 0 1 50 10
        `
      };
    } else {
      return {
        name: "new",
        path: `
          M 50 10
          A 40 40 0 0 1 50 90
          A 40 40 0 0 1 50 10
        `
      };
    }
  }

  return (
    <svg
      aria-label={ getPhase(cyclePercent).name }
      className="satellite"
      viewBox="0 0 100 100"
      version="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="bg"
        cx="50"
        cy="50"
        r="40"
      />

      <path d={ getPhase(cyclePercent).path } className="shadow" />

      <circle
        className="outer"
        cx="50"
        cy="50"
        r="40"
        stroke-width="2"
      />

      <text y="-20">{ name }: { getPhase(cyclePercent).name }</text>
    </svg>
  )
}

export default Satellite