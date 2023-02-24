import React, { useContext, useState } from "react";
import { ModalContext } from "../../Context/ModalContext";
import { BiEditAlt, BiImport, BiExport, BiFullscreen } from "react-icons/bi";
import Select from "react-select";
import { languageMap } from "../../Context/PlaygroundContext";
import CodeEditor from "./CodeEditor";
function EditContainer({
  title,
  currentLanguage,
  setCurrentLanguage,
  currentCode,
  setCurrentCode,
  folderId,
  playgroundId,
  saveCode,
  runCode,
  isFullScreen,
  setIsFullScreen,
  getFile,
}) {
  const { openModal } = useContext;
  const themeOptions = [
    { value: "githubDark", label: "Github Dark" },
    { value: "githubLight", lablel: "github white" },
    { value: "bespin", label: "Bespin" },
    { value: "duotoneDark", label: "Duotone Dark" },
    { value: "duotoneLight", label: "Duotone Light" },
    { value: "dracula", label: "Dracula" },
    { value: "xcodeDark", label: "Xcode Dark" },
    { value: "xcodeLight", label: "Xcode Light" },
    { value: "vscodeDark", label: "Vscode Dark" },
    { value: "vscodeLight", label: "Vscode Light" },
    { value: "okaidia", label: "Okaidia" },
  ];
  const languageOptions = [
    { value: "cpp", label: "C++" },
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
    { value: "java", label: "java" },
  ];
  const [currentTheme, setCurrentTheme] = useState(themeOptions[0]);
  const handleThemeChange = (selectedOption) => {
    setCurrentTheme(selectedOption);
  };
  const [language, setLanguage] = useState(() => {
    for (let i = 0; i < languageOptions.length; i++) {
      if (languageOptions[i].value === currentLanguage) {
        return languageOptions[i];
      }
    }
    return languageOptions[0];
  });
  // language -> object for my dropdown menu { value, label}
  // currentLanguage -> string value "js", "python", "cpp"
  const handleLanguageChange = (selectedOption) =>{
    setLanguage(selectedOption);
    setCurrentLanguage(selectedOption.value);
    setCurrentCode(languageMap[selectedOption.value].defaultCode);
  }
  return (
    <div>
      <CodeEditor
        currentCode={currentCode}
        currentLanguage={currentLanguage}
        setCurrentCode={setCurrentCode}
        currentTheme={currentTheme}
      />
    </div>
  );
}

export default EditContainer;
