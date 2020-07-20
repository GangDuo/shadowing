import React from 'react';

export default function InterimTranscript(props) {
  return (
  <>
    <span>{props.children}</span>
    <style jsx>{`
    span {color: gray;}
    `}</style>
  </>)
}