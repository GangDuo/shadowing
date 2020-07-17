import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CorrectSign(props) {
  return <FontAwesomeIcon icon={['far', 'circle']} size="2x" color="green" />
}

export function IncorrectSign(props) {
  return <FontAwesomeIcon icon="times" size="2x" color="red" />
}

export function MicrophoneSign(props) {
  return <FontAwesomeIcon icon="microphone" size="2x" />
}

export function VolumeUpSign(props) {
  return <FontAwesomeIcon icon="volume-up" size="2x" />
}

export function WindowsSign(props) {
  return <FontAwesomeIcon icon={['fab', 'windows']} size="2x" />
}

export function AppleSign(props) {
  return <FontAwesomeIcon icon={['fab', 'apple']} size="2x" />
}

export function AndroidSign(props) {
  return <FontAwesomeIcon icon={['fab', 'android']} size="2x" />
}