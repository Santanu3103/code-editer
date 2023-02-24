import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";

import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { bespin } from "@uiw/codemirror-theme-bespin";
import { duotoneDark, duotoneLight } from "@uiw/codemirror-theme-duotone";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

// npm i @codemirrot/lang-"";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

// configs
import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";

function CodeEditor({
  currentCode,
  currentLanguage,
  setCurrentCode,
  currentTheme,
}) {
  const [theme, setTheme] = useState(githubDark);
  const [language, setLanguage] = useState(javascript);
  useEffect(() => {
    if (currentLanguage === "javascript") {
      setLanguage(javascript);
    } else if (currentLanguage === "python") {
      setLanguage(python);
    } else if (currentLanguage === "java") {
      setLanguage(java);
    } else if (currentLanguage === "cpp") {
      setLanguage(cpp);
    }
  }, [currentLanguage]);
//   { value: "githubDark", label: "Github Dark" },
//     { value: "githubLight", lablel: "github white" },
//     { value: "bespin", label: "Bespin" },
//     { value: "duotoneDark", label: "Duotone Dark" },
//     { value: "duotoneLight", label: "Duotone Light" },
//     { value: "dracula", label: "Dracula" },
//     { value: "xcodeDark", label: "Xcode Dark" },
//     { value: "xcodeLight", label: "Xcode Light" },
//     { value: "vscodeDark", label: "Vscode Dark" },
//     { value: "vscodeLight", label: "Vscode Light" },
//     { value: "okaidia", label: "Okaidia" },
  useEffect(()=>{
    if(currentTheme === "githubDark"){
        setTheme(githubDark);
    }
    else if(currentTheme==="githubLight"){
        setTheme(githubLight);
    }
  })
  return <div>CodeEditor</div>;
}

export default CodeEditor;
