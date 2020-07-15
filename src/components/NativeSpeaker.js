import React, { useState, useEffect } from 'react';
import { VolumeUpSign } from './app-icons';

function NativeSpeaker(props) {
  const [histories, setHistories] = useState([]);
  const {
    onChangedSentence, onChangeVoice,
    sentence, selectedVoice, voices,
    rate, onChangedRate,
    volume, onChangedVolume
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
        if(rate && (rate >= 0.1 && rate <= 10)) {
          uttr.rate = rate
        }
        if(volume && (volume >= 0 && volume <= 1)) {
          uttr.volume = volume
        }
        speechSynthesis.speak(uttr)
      }}><VolumeUpSign /></button>
      {/*
      <button onClick={_ => speechSynthesis.pause()}>一時停止</button>
      <button onClick={_ => speechSynthesis.resume()}>再開</button>
      */}

      <div>速度×{rate}<input type="range" min="0.1" max="10.0" step="0.1" value={rate} onChange={onChangedRate} /></div>
      <div>音量×{volume}<input type="range" min="0" max="1" step="0.1" value={volume} onChange={onChangedVolume} /></div>

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