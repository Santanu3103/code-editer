import React, { useState, useEffect } from "react";

// npm i @uiw/react-codemirror
import CodeMirror from "@uiw/react-codemirror";

// npm i @uiw/codemirror-theme-bespin @uiw/codemirror-theme-duotone
// @uiw/codemirror-theme-dracula @uiw/codemirror-theme-github
// @uiw/codemirror-theme-xcode @uiw/codemirror-theme-vscode
// @uiw/codemirror-theme-okaidia
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
  isFullScreen,
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
  useEffect(() => {
    if (currentTheme === "githubDark") {
      setTheme(githubDark);
    } else if (currentTheme === "githubLight") {
      setTheme(githubLight);
    } else if (currentTheme === "bespin") {
      setTheme(bespin);
    } else if (currentTheme === "duotoneDark") {
      setTheme(duotoneDark);
    } else if (currentTheme === "duotoneLight") {
      setTheme(duotoneLight);
    } else if (currentTheme === "dracula") {
      setTheme(dracula);
    } else if (currentTheme === "xcodeDark") {
      setTheme(xcodeDark);
    } else if (currentTheme === "xcodeLight") {
      setTheme(xcodeLight);
    } else if (currentTheme === "vscodeDark") {
      setTheme(vscodeDark);
    } else if (currentTheme === "okaidia") {
      setTheme(okaidia);
    }
  }, [currentTheme]);
  return (
    <CodeMirror
      value={currentCode}
      height={`${isFullScreen ? "92vh" : "76vh"}`}
      theme={theme}
      extensions={[
        language,
        indentUnit.of("        "),
        EditorState.tabSize.of(8),
        EditorState.changeFilter.of(() => true),
      ]}
      onChange={(value) => setCurrentCode(value)}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        history: true,
        foldGutter: true,
        drawSelection: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        syntaxHighlighting: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        defaultKeymap: true,
        searchKeymap: true,
        historyKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
      }}
    />
  );
}

export default CodeEditor;
