import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CircleSign(props) {
  return <FontAwesomeIcon icon='circle' {...props} />
}

export function CorrectSign(props) {
  return <FontAwesomeIcon icon={['far', 'circle']} color="green" {...props} />
}

export function IncorrectSign(props) {
  return <FontAwesomeIcon icon="times" color="red" {...props} />
}

export function MicrophoneSign(props) {
  return <FontAwesomeIcon icon="microphone" size="2x" />
}

export function VolumeUpSign(props) {
  return <FontAwesomeIcon icon="volume-up" size="1x" />
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

export function GithubSign(props) {
  return <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
}

export function TrashSign(props) {
  return <FontAwesomeIcon icon="trash" {...props} />
}