import React from 'react'
import Satellite from './satellite'
import './satellite.stories.css'

export default {
  component: 'Satellite',
  title: 'Satellites',
}

export const Phases = () => (
  <>
    <span class="box">
      <p>New</p>
      <Satellite cyclePercent="0" name="Satellite Name" />
    </span>
    <span class="box">
      <p>Waxing Crescent</p>
      <Satellite cyclePercent="12.5" name="Satellite Name" />
    </span>
    <span class="box">
      <p>First Quarter</p>
      <Satellite cyclePercent="25" name="Satellite Name" />
    </span>
    <span class="box">
      <p>Waxing Gibbous</p>
      <Satellite cyclePercent="32.5" name="Satellite Name" />
    </span>
    <span class="box">
      <p>Full</p>
      <Satellite cyclePercent="50" name="Satellite Name" />
    </span>
    <span class="box">
      <p>Waning Gibbous</p>
      <Satellite cyclePercent="62.5" name="Satellite Name" />
    </span>
    <span class="box">
      <p>Last Quarter</p>
      <Satellite cyclePercent="75" name="Satellite Name" />
    </span>
    <span class="box">
      <p>Waning Crescent</p>
      <Satellite cyclePercent="82.5" name="Satellite Name" />
    </span>
  </>
)
