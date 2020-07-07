import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import SpeechDaemon from './SpeechDaemon';
import styles from './AppStyles';
import MicrophoneSwitch from './components/MicrophoneSwitch';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrophone, faPlayCircle, faStopCircle, faVolumeUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';
import NativeSpeaker from './components/NativeSpeaker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faMicrophone, faPlayCircle, faStopCircle, faVolumeUp, faCircle, faTimes)

var langs =
[['Afrikaans',       ['af-ZA']],
 ['አማርኛ',           ['am-ET']],
 ['Azərbaycanca',    ['az-AZ']],
 ['বাংলা',            ['bn-BD', 'বাংলাদেশ'],
                     ['bn-IN', 'ভারত']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Dansk',           ['da-DK']],
 ['Deutsch',         ['de-DE']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-KE', 'Kenya'],
                     ['en-TZ', 'Tanzania'],
                     ['en-GH', 'Ghana'],
                     ['en-NZ', 'New Zealand'],
                     ['en-NG', 'Nigeria'],
                     ['en-ZA', 'South Africa'],
                     ['en-PH', 'Philippines'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Español',         ['es-AR', 'Argentina'],
                     ['es-BO', 'Bolivia'],
                     ['es-CL', 'Chile'],
                     ['es-CO', 'Colombia'],
                     ['es-CR', 'Costa Rica'],
                     ['es-EC', 'Ecuador'],
                     ['es-SV', 'El Salvador'],
                     ['es-ES', 'España'],
                     ['es-US', 'Estados Unidos'],
                     ['es-GT', 'Guatemala'],
                     ['es-HN', 'Honduras'],
                     ['es-MX', 'México'],
                     ['es-NI', 'Nicaragua'],
                     ['es-PA', 'Panamá'],
                     ['es-PY', 'Paraguay'],
                     ['es-PE', 'Perú'],
                     ['es-PR', 'Puerto Rico'],
                     ['es-DO', 'República Dominicana'],
                     ['es-UY', 'Uruguay'],
                     ['es-VE', 'Venezuela']],
 ['Euskara',         ['eu-ES']],
 ['Filipino',        ['fil-PH']],
 ['Français',        ['fr-FR']],
 ['Basa Jawa',       ['jv-ID']],
 ['Galego',          ['gl-ES']],
 ['ગુજરાતી',           ['gu-IN']],
 ['Hrvatski',        ['hr-HR']],
 ['IsiZulu',         ['zu-ZA']],
 ['Íslenska',        ['is-IS']],
 ['Italiano',        ['it-IT', 'Italia'],
                     ['it-CH', 'Svizzera']],
 ['ಕನ್ನಡ',             ['kn-IN']],
 ['ភាសាខ្មែរ',          ['km-KH']],
 ['Latviešu',        ['lv-LV']],
 ['Lietuvių',        ['lt-LT']],
 ['മലയാളം',          ['ml-IN']],
 ['मराठी',             ['mr-IN']],
 ['Magyar',          ['hu-HU']],
 ['ລາວ',              ['lo-LA']],
 ['Nederlands',      ['nl-NL']],
 ['नेपाली भाषा',        ['ne-NP']],
 ['Norsk bokmål',    ['nb-NO']],
 ['Polski',          ['pl-PL']],
 ['Português',       ['pt-BR', 'Brasil'],
                     ['pt-PT', 'Portugal']],
 ['Română',          ['ro-RO']],
 ['සිංහල',          ['si-LK']],
 ['Slovenščina',     ['sl-SI']],
 ['Basa Sunda',      ['su-ID']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Kiswahili',       ['sw-TZ', 'Tanzania'],
                     ['sw-KE', 'Kenya']],
 ['ქართული',       ['ka-GE']],
 ['Հայերեն',          ['hy-AM']],
 ['தமிழ்',            ['ta-IN', 'இந்தியா'],
                     ['ta-SG', 'சிங்கப்பூர்'],
                     ['ta-LK', 'இலங்கை'],
                     ['ta-MY', 'மலேசியா']],
 ['తెలుగు',           ['te-IN']],
 ['Tiếng Việt',      ['vi-VN']],
 ['Türkçe',          ['tr-TR']],
 ['اُردُو',            ['ur-PK', 'پاکستان'],
                     ['ur-IN', 'بھارت']],
 ['Ελληνικά',         ['el-GR']],
 ['български',         ['bg-BG']],
 ['Pусский',          ['ru-RU']],
 ['Српски',           ['sr-RS']],
 ['Українська',        ['uk-UA']],
 ['한국어',            ['ko-KR']],
 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                     ['cmn-Hans-HK', '普通话 (香港)'],
                     ['cmn-Hant-TW', '中文 (台灣)'],
                     ['yue-Hant-HK', '粵語 (香港)']],
 ['日本語',           ['ja-JP']],
 ['हिन्दी',             ['hi-IN']],
 ['ภาษาไทย',         ['th-TH']]];

function App() {
  const speechLog = useRef('');
  const speech = useRef(new SpeechDaemon());
  const [selectedIndex, setSelectedIndex] = useState(57);
  const [dialect, setDialect] = useState(langs[selectedIndex][1][0]);
  const [finalTranscript, setFinalTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState();
  const [sentence, setSentence] = useState("お手本にする文を入力しましょう！");

  const updateCountry = e => {
    speech.current.lang = langs[e.target.value][1][0]
    speech.current.restart()

    setSelectedIndex(e.target.value)
    setDialect(speech.current.lang)
  }

  const initialize = _ => {
    console.log('初期化処理')
    speech.current.on('result', (event) => {
      let transcript = ''
      let buf = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          if (speech.current.lang === 'ja-JP') {
            transcript += '。';
          }
          speechLog.current += transcript + '\n'
          console.log(speechLog.current)
          setFinalTranscript(speechLog.current)
        } else {
          buf += transcript
        }
        setInterimTranscript(buf)
      }
    })
    .on('start', () => {
      console.log("話しかけてみて")
    }).on('soundstart', () => {
      console.log("認識中...")
    }).on('soundend', () => {
      console.log("停止中")
    }).on('nomatch', (event) => {
      console.log('音声を認識できませんでした')
    }).on('error', (event) => {
      console.log('エラー: ' + event.error)
    })
  }

  useEffect(initialize, [])

  useEffect(speechSynthesis.onvoiceschanged = e => {
    console.log('onvoiceschanged')
    const voices = speechSynthesis.getVoices()
      // 日本語と英語以外の声は選択肢に追加しない。
      .filter(voice => voice.lang.match('ja|en-US'))
      //.filter(voice => voice.lang.match('en-US') && /^google/i.test(voice.name))
      .reverse()
    const defautVoice = voices.filter(voice => voice.lang.match('en-US') && /^google/i.test(voice.name))[0]
    defautVoice && setSelectedVoice(defautVoice)
    setVoices(voices)
  }, [])

  if(isPowerOn) {
    console.log('Microphone On')
    speech.current.lang = dialect
    speech.current.listen()
  } else {
    console.log('onMicrophone Off')
    speech.current.kill()
  }

  const latelyTranscript = (n) => {
    return finalTranscript.split('\n')
      .filter(x => x.length > 0)
      .slice(-1 * n)
      .map((x, i) => <p key={i}>{x}</p>)
  }

  const downloadLogFile = () => {
    const a = document.createElement('a');
    a.href = 'data:text/plain,' + encodeURIComponent(finalTranscript);
    a.download = `log${moment().format('_YYYYMMDD_HHmmss')}.txt`;
    a.click();
  }

  const judgment = (_ => {
    const phrases = speechLog.current.split('\n').filter(x => x.length > 0)
    if(phrases.length > 0) {
      return phrases.pop().replace(/\s/g, '').indexOf(sentence.replace(/\s/g, '').toLowerCase()) !== -1 ?
      　<FontAwesomeIcon icon={['far', 'circle']} size="2x" color="green" /> :
        <FontAwesomeIcon icon="times" size="2x" color="red" />
    } else {
      return (<></>)
    }
  })()

  if(!selectedVoice) {
    return (<>音声取得中</>)
  }

  return (
    <div className="app">
      <h1>英語の歌詞を正しく発音しているか判定します</h1>
      <h2>お手本</h2>
      <NativeSpeaker sentence={sentence}
        selectedVoice={selectedVoice}
        voices={voices}
        onChangedSentence={e => setSentence(e.target.value)}
        onChangeVoice={e => setSelectedVoice(e.target.value)} />

      {judgment}

      <h2>発音確認</h2>
      <div id="results">
        <span className="final" id="final_span">{latelyTranscript(10)}</span>
        <span className="interim" id="interim_span" style={{color: "gray"}}>{interimTranscript}</span>
      </div>

      <div className="tools">
        <div className="compact marquee" id="div_language">
          <select id="select_language" value={selectedIndex} onChange={updateCountry}>
          {
            langs.map((x, i) => <option key={x[0]} value={i}>{x[0]}</option>)
          }
          </select>&nbsp;&nbsp; 
          <select id="select_dialect" style={{visibility: langs[selectedIndex][1].length === 1 ? 'hidden' : 'visible'}}>
          {
            langs[selectedIndex]
              .filter((x, i) => i > 0)
              .map((x ,i) => <option key={i} value={x[0]}>{x[1]||''}</option>)
          }
          </select>
        </div>

        <MicrophoneSwitch isPowerOn={isPowerOn}
                          onClick={() => {setIsPowerOn(!isPowerOn)}} />

        <div><input type="button" value="ログをダウンロード" onClick={downloadLogFile} /></div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}

export default App;
