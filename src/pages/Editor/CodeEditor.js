import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import axios from 'axios';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://imu.glozic.dev/web/assets/Sample.css');
        setCode(response.data.body);
      } catch (error) {
        console.error('Error fetching CSS:', error);
      }
    };
  
    fetchData();
  }, []);

  console.log(code)
  const handleChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div>
      <AceEditor
        mode="css" 
        theme="github"
        value={code}
        onChange={handleChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default CodeEditor;
