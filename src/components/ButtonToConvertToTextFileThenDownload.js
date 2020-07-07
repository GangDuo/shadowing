import React from 'react';
import moment from 'moment';

export default function ButtonToConvertToTextFileThenDownload(props) {
  const {children, text} = props
  const downloadTextFile = () => {
    const a = document.createElement('a');
    a.href = 'data:text/plain,' + encodeURIComponent(text);
    a.download = `log${moment().format('_YYYYMMDD_HHmmss')}.txt`;
    a.click();
  }

   return (<button onClick={downloadTextFile}>{children}</button>)
}