import css from 'styled-jsx/css'

const styles = css`
.microphone-switch {
  position: relative;
}

@keyframes shiny {
  0% {
    transform: scale(0) rotate(25deg);
    opacity: 0;
  }
  50% {
    transform: scale(1) rotate(25deg);
    opacity: 1;
  }
  100% {
    transform: scale(50) rotate(25deg);
    opacity: 0;
  }
}

.shiny-btn {
  position: relative;
  overflow: hidden;
}

.shiny-btn::after {
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 50px;
  height: 50px;
  background-image: linear-gradient(100deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 0) 0%);
  animation-name: shiny;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.circle {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.microphone-on,
.microphone-off {
  cursor: pointer;
}

.microphone-on {
  background: #1373C7;
  width: 48px;
  height: 48px;
  color: #FFF;
}

.microphone-off {
  background: #FFF;
  width: 38px;
  height: 38px;
  border: solid 5px #ED1C22;
  color: #1373C7;
}

.heartbeat {
  position: absolute;
  top: 0;
  left: 0;
  animation: pounding .1s linear infinite alternate;
  opacity: 0.2;
  z-index: -99;
  background: #1373C7;
  width: 48px;
  height: 48px;
}

@keyframes pounding {
  0% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
`

export default styles