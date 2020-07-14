import React, { useState, useEffect } from 'react';
import { VolumeUpSign } from './app-icons';

function NativeSpeaker(props) {
  const [histories, setHistories] = useState([]);
  const {
    onChangedSentence, onChangeVoice,
    sentence, selectedVoice, voices
  } = props

  useEffect(_ => {
    const histories = JSON.parse(localStorage.getItem("histories"))
    if(!histories) return
    setHistories(histories)
  }, [])

  return (
    <div>
      <input className="text"
             value={sentence} onChange={onChangedSentence} />
      <button onClick={_ => {
        let sentences = [sentence, ...histories]
        if(histories.includes(sentence)) {
          sentences = [sentence, ...histories.filter(x => x !== sentence)]
        }
        setHistories(sentences)
        window.localStorage.setItem('histories', JSON.stringify(sentences))
        const uttr = new SpeechSynthesisUtterance(sentence)
        uttr.voice = selectedVoice
        uttr.lang = selectedVoice.lang.replace('_', '-')// for Android
        speechSynthesis.speak(uttr)
      }}><VolumeUpSign /></button>
      {/*
      <button onClick={_ => speechSynthesis.pause()}>一時停止</button>
      <button onClick={_ => speechSynthesis.resume()}>再開</button>
      */}

      <select value={selectedVoice.name}
              onChange={onChangeVoice}>
        {
          voices
          .map((voice, i) => {
            return (<option key={i} value={voice.name}>{`${voice.name} (${voice.lang})`}</option>)
          })            
        }
      </select>

      <div>
        <label htmlFor="histories">履歴</label>
        <select id="histories" size="5"
                onClick={e => {e.target.value && onChangedSentence && onChangedSentence(e)}}>
          {histories.map((x, i) => <option key={i} value={x}>{x}</option>)}
        </select>
      </div>

      <style jsx>{`
      button {
        height: 30px;
        width: 80px;
      }
      .text {
        width: 80%;
        height: 40px;
        font-size: 32px;
      }
      label {display: block;}
      #histories {width: 80%;}
      `}</style>
    </div>
  )
}

export default NativeSpeaker;