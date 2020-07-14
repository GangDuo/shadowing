import React from 'react';
import styles from './MicrophoneSwitchStyles';
import { MicrophoneSign } from './app-icons';

function MicrophoneSwitch(props) {
  const { isPowerOn, onClick } = props
  const background = props.background || '#1373C7'
  const handleClick = _ => {
    onClick && onClick.apply()
  }

  return (
  <div className="microphone-switch">
    <div id="microphone"
         onClick={handleClick}
         className={`circle microphone-${isPowerOn ? 'on shiny-btn' : 'off'}`}>
      <div><MicrophoneSign /></div>
    </div>
    <div id="heartbeat" className={`circle ${isPowerOn ? 'heartbeat' : ''}`}></div>

    <style jsx>{styles}</style>
  </div>)
}

export default MicrophoneSwitch;