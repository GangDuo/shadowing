import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import SpeechDaemon from './SpeechDaemon';
import styles from './AppStyles';
import MicrophoneSwitch from './components/MicrophoneSwitch';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrophone, faPlayCircle, faStopCircle, faVolumeUp, faTimes, faTrash, faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faWindows, faApple, faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons';
import NativeSpeaker from './components/NativeSpeaker';
import { CorrectSign, IncorrectSign, WindowsSign, AppleSign, AndroidSign, GithubSign } from './components/app-icons';
import ButtonToConvertToTextFileThenDownload from './components/ButtonToConvertToTextFileThenDownload';
import { Typography , Grid, Tabs, Tab } from '@material-ui/core';
import InterimTranscript from './components/InterimTranscript';
import StackHistory from './components/StackHistory';
import { makeStyles } from '@material-ui/core/styles';

library.add(faMicrophone, faPlayCircle, faStopCircle, faVolumeUp, faCircle, fasCircle, faTimes, faWindows, faApple, faAndroid, faGithub, faTrash)

const useStyles = makeStyles({
  item: {
    textAlign: 'center',
  },
});

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

if(!Array.prototype.skip) {
  Array.prototype.skip = function(n) {
    if(n < 1) return this
    return this.filter((v, i) => i > (n - 1))
  }  
}

const getVoices = (arg) => {
  return window.speechSynthesis.getVoices().filter(arg || (voice => voice))
}
const getVoiceByName = (name) => {
  return getVoices(voice => voice.name === name)[0]
}
const indexOfLangsByLocale = (locale) => {
  return langs.reduce((ax, lang, i) => {
    const exists = lang.skip(1).reduce((xs, x) => {
      xs.push(x[0]);
      return xs;
    }, []).includes(locale)

    
    if(exists) {
      ax = i
      console.log(`exists ${i}`)
    }
    return ax
  }, null)
}
const isAndroid = () => /(android)/i.test(navigator.userAgent)

const saveHistories = x => window.localStorage.setItem('histories', JSON.stringify(x))

function App() {
  const speechLog = useRef([]);
  const speech = useRef();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [dialect, setDialect] = useState();
  const [finalTranscript, setFinalTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [sentence, setSentence] = useState("I'm going to make him an offer he can't refuse.");
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [histories, setHistories] = useState([]);
  const [currentTab, setCurrentTab] = React.useState(0);
  const classes = useStyles();

  const setDefautVoice = () => {
    // 日本語と英語以外の声は選択肢に追加しない。
    const voices = getVoices(voice => voice.lang.match('ja|en[-_]US')).reverse()
    const defautVoice = voices.filter(voice => voice.lang.match('en[-_]US') /*&& /^google/i.test(voice.name)*/)[0]
    defautVoice && setSelectedVoice(defautVoice)
    setVoices(voices)
  }
  const initialize = _ => {
    console.log('初期化処理')
    speech.current = new SpeechDaemon()
    speech.current.on('result', (event) => {
      let transcript = ''
      let buf = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal && (!isAndroid() || event.results[i][0].confidence > 0)) {
          if (speech.current.lang === 'ja-JP') {
            transcript += '。';
          }
          // judgment
          const pattern = new RegExp(/[\s!',\.、。]/, 'g')
          const [actual, expected] = [transcript, sentence].map(x => x.replace(pattern, '').toLowerCase())
          speechLog.current.push({transcript, isCorrect: (actual === expected)})
          console.log(speechLog.current)
          setFinalTranscript(speechLog.current.filter(x => x.transcript.length > 0).map(x => x.transcript).join('\n'))
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

    window.speechSynthesis.onvoiceschanged = _ => {
      console.log('onvoiceschanged')
      setDefautVoice()
    }
    setDefautVoice()

    const histories = JSON.parse(localStorage.getItem("histories"))
    if(!histories) return
    /* 昔のフォーマットを新フォーマットへ変換 */
    setHistories(histories.map(x => {
      if(typeof x === 'string') {
        return { sentence: x }
      }
      return x
    }))
  }
  
  useEffect(initialize, [])

  useEffect(_ => {
    console.log('changed selectedVoice')
    if(!selectedVoice) return

    const i = indexOfLangsByLocale(selectedVoice.lang.replace('_', '-'))
    setSelectedIndex(i)

    setDialect(langs[i].filter((a, j) => j > 0).reduce((xs, x) => {
      if(x[0] === selectedVoice.lang.replace('_', '-')) xs = x
      return xs
    })[0])
  }, [selectedVoice])

  if(!selectedVoice || !selectedIndex) {
    console.log('音声取得中')
    return (<>音声取得中</>)
  }

  const hasDialect = langs[selectedIndex][1].length > 1

  if(isPowerOn) {
    console.log('Microphone On')
    speech.current.lang = dialect
    speech.current.listen()
  } else {
    console.log('onMicrophone Off')
    speech.current.kill()
  }

  const latelyTranscript = (n) => {
    return (<>
    {
      speechLog.current
      .filter(x => x.transcript.length > 0)
      .slice(-1 * n)
      .map((x, i) => {
        return (
        <Grid key={i} container spacing={3}>
          <Grid item xs={1} classes={{ item: classes.item }}>
            {x.isCorrect ? <CorrectSign /> : <IncorrectSign />}
          </Grid>
          <Grid item xs={11}>
            {x.transcript}
          </Grid>
        </Grid>)
      })
    }
    </>)
  }

  const handleChangedSentence = e => setSentence(e.target.value)

  return (
    <div className="app">
      <Typography>ドラマ・映画の名言をシャドーイング</Typography>

      <Tabs
        value={currentTab}
        onChange={(event, newValue) => {
          setCurrentTab(newValue);
        }}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="ホーム" />
        <Tab label="過去の台詞" />
      </Tabs>
      {currentTab === 0 && (<>
      <div className="recognition">
        <div id="results">
          <span className="final" id="final_span">{latelyTranscript(5)}</span>
          <InterimTranscript>{interimTranscript}</InterimTranscript>
        </div>
        <div className="tools">
          <Grid container direction="column" justify="space-around" alignItems="center">
            <Grid item>
              <div style={{display: 'none'}}>
                <select disabled={true} value={selectedIndex}>
                {
                  langs.map((x, i) => <option key={x[0]} value={i}>{x[0]}</option>)
                }
                </select>&nbsp;&nbsp; 
                <select disabled={true} value={dialect} style={{visibility: hasDialect ? 'visible' : 'hidden'}}>
                {
                  langs[selectedIndex]
                    .filter((x, i) => i > 0)
                    .map((x ,i) => <option key={i} value={x[0]}>{x[1]||''}</option>)
                }
                </select>
              </div>
            </Grid>
          
            <Grid item>
              <ButtonToConvertToTextFileThenDownload text={finalTranscript}>
                ログをダウンロード
              </ButtonToConvertToTextFileThenDownload>
            </Grid>
            <Grid item>
              <div style={{padding: "10px"}}>
              <MicrophoneSwitch isPowerOn={isPowerOn}
                              onClick={() => {setIsPowerOn(!isPowerOn)}} />
              </div>
            </Grid>          
          </Grid>
        </div>
      </div>
      <br/>
      <NativeSpeaker sentence={sentence}
        selectedVoice={selectedVoice}
        voices={voices}
        onChangedSentence={handleChangedSentence}
        onChangeVoice={e => {
          const voice = getVoiceByName(e.target.value)
          setSelectedVoice(voice)
          speech.current.lang = voice.lang
          speech.current.restart()
        }}
        onSpeak={_ => {
          let sentences = [{sentence}, ...histories.filter(x => x.sentence !== sentence)]
          setHistories(sentences)
          saveHistories(sentences)
        }}
        rate={rate} onChangedRate={(e, newValue) => setRate(newValue)}
        volume={volume} onChangedVolume={(e, newValue) => setVolume(newValue)} />
      </>)}

      {currentTab === 1 && (
        <StackHistory histories={histories}
          toggleItemRemove={({checked, index}) => {
            const items = histories.concat();
            items[index].willRemove = checked
            setHistories(items)
          }}
          onRemove={_ => {
            const items = histories.filter(x => !x.willRemove).concat();
            setHistories(items)
            saveHistories(items)
          }} 
          onChange={handleChangedSentence} />)}

      <h2>よくある質問</h2>
      <h3>使用方法を教えて？</h3>
      <ol className="text-left">
        <li>ドラマ・映画の名言を入力しましょう。</li>
        <li>スピーカーアイコンをタップして、発音を聞きます。</li>
        <li>マイクアイコンをタップして、マイクONにします。</li>
        <li>役者になったつもりで、聞こえたとおりに喋ってみましょう。</li>
      </ol>

      <h3>動作しないけど...</h3>
      Chromeブラウザで動作します。
      <table className="qa">
        <thead>
          <tr>
            <th colSpan="2">対応デバイス</th>
            <th>可否</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><WindowsSign/></td>
            <td className="text-left">PC</td>
            <td><CorrectSign size="2x"/></td>
          </tr>
          <tr>
            <td><AndroidSign/></td>
            <td className="text-left">Android</td>
            <td><CorrectSign size="2x"/></td>
          </tr>
          <tr>
            <td><AppleSign/></td>
            <td className="text-left">iPhone</td>
            <td><IncorrectSign size="2x"/></td>
          </tr>
        </tbody>
      </table>

      <hr/>

      <div className="footer">
        <a target="_blank" href="https://github.com/GangDuo/shadowing"><GithubSign />GitHub</a>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
}

export default App;
