import React from 'react';
import { CorrectSign, IncorrectSign, WindowsSign, AppleSign, AndroidSign } from './app-icons';

export default function FrequentlyAskedQuestions() {
  return (
    <>
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

      <h3>過去の台詞について</h3>
      <p className="text-left">
        スピーカーアイコンを押して、ネイティブの発音を聞くと、台詞を履歴に記録します。<br/>
        スピーカーアイコンを押さないと、履歴には何も残りません。<br/>
        履歴から台詞を選択することもできます。
      </p>

      <style jsx>{`
      .qa {margin: 10px auto;}
      .text-left {text-align: left;}
      `}</style>
    </>
  )
}