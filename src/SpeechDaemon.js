import {EventEmitter} from 'events';

export default class SpeechDaemon extends EventEmitter {
  get lang() { return this.lang_ }
  set lang(v) { this.lang_ = v.replace('_', '-') }// for Android

  constructor(options) {
    super()
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event)=>{
      this.emit("result", event);
    };
    recognition.onsoundstart = (event) => {
      console.log(`${new Date()}認識中...`)
      this.emit("soundstart", null);
    };
    recognition.onsoundend = () => { this.emit("soundend", null) };
    recognition.onnomatch = () => {
      console.log(`${new Date()} 音声を認識できませんでした`)
      this.emit('nomatch', null)
    };
    recognition.onerror = (event) => {
      console.log(event)
      this.emit('error', event)
    };
    recognition.onstart = (event) => {
      console.log(`${new Date()} ${(event.timeStamp)} 音声認識サービス開始 ->>>>>`)
      this.emit('start', null)
    };
    recognition.onend = _ => {
      console.log(`${new Date()} <<<<<- 音声認識サービス切断`)
      this.hasAlreadyStarted = false
      this.emit('end', null)
      if(this.isIdle) return;
      this.listen()
    };
    this.recognition = recognition
    this.isIdle = false
    this.hasAlreadyStarted = false
  }

  listen() {
    if(this.hasAlreadyStarted) {
      return
    }
    this.hasAlreadyStarted = true
    this.isIdle = false
    if(this.lang) {
      this.recognition.lang = this.lang
    }
    this.recognition.start();
  }

  kill() {
    this.isIdle = true
    this.recognition.stop();
  }

  restart() {
    this.isIdle = false
    this.recognition.stop();
  }
}