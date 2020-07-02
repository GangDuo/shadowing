import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MicrophoneSwitchStyles';

function MicrophoneSwitch(props) {
  const { isPowerOn, onClick } = props
  const background = props.background || '#1373C7'
  const handleClick = _ => {
    onClick && onClick.apply()
  }

  return (
  <>
    <div id="microphone"
         onClick={handleClick}
         className={`circle microphone-${isPowerOn ? 'on shiny-btn' : 'off'}`}>
      <div><FontAwesomeIcon icon="microphone" size="2x" /></div>
    </div>
    <div id="heartbeat" className={`circle ${isPowerOn ? 'heartbeat' : ''}`}></div>

    <style jsx>{styles}</style>
  </>)
}

export default MicrophoneSwitch;