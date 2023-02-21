import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PlagroundContext, languageMap } from "../Context/PlaygroundContext";
import { ModalContext } from "../Context/ModalContext";
import { Buffer } from "buffer";
import axios from "axios";
function PlayGround() {
  const { folderId, playgroundId } = useParams();
  const { folders, savePlayground } = useContext(PlagroundContext);
  const { openModal, closeModal } = useContext(ModalContext);
  const { language, code } = folders[folderId].playgrounds[playgroundId];

  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentCode, setCurrentCode] = useState(code);
  const [currentInput, setCurrentInput] = useState("");
  const [currentOutput, setCurrentOutput] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  //encoding string to base 64
  const encode = (str) => {
    return Buffer.from(str, "binary").toString("base64");
  };
  //decoding base64 to string
  const decode = (str) => {
    return Buffer.from(str, "base64").toString();
  };
  // getting token for our code and std input;
  const postSubmission = async (language_id, source_code, stdin) => {
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-rapidAPI-Key": "b4e5c5a05fmsh9adf6ec091523f8p165338jsncc58f31c26e1",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapir.com",
      },
      data: JSON.stringify({
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
      }),
    };
    const res = await axios.request(options);
    return res.data.token;
  };
  // getting std out from out token with recursion
  const getOutput = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions" + token,
      params: { base64_encoded: true, fields: "*" },
      headers: {
        "X-RapidAPI-Key": "3ed7a75b44mshc9e28568fe0317bp17b5b2jsn6d89943165d8",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapir.com",
      },
    };
    const res = await axios.request(options);
    if (res.data.status_id <= 2) {
      const res2 = await getOutput(token);
      return res2.data;
    }
    return res.data;
  };
  const runCode = async () => {
    openModal({
      show: true,
      modalType: 6,
      identifiers: {
        folderId: "",
        cardID: "",
      },
    });
    const language_id = languageMap[currentLanguage].id;
    const source_code = encode(currentCode);
    const stdin = encode(currentInput);

    const token = await postSubmission(language_id, source_code, stdin);

    const res = await getOutput(token);

    const status_name = res.status.description;
    const decoded_output = decode
  };
  return <div>PlayGround</div>;
}

export default PlayGround;
