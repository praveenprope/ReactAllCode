import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(0)

  const Inc = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log(counter)
    const textToSpeech = new SpeechSynthesisUtterance(counter)
    const voice = speechSynthesis.getVoices();
    textToSpeech.voice = voice[0];
    speechSynthesis.speak(textToSpeech)
  }

  const Dig = () => {

    if (counter == 0) {
      counter = 0;
    } else {
      counter = counter - 1;
    }
    setCounter(counter)
    console.log(counter)
    const textToSpeech = new SpeechSynthesisUtterance(counter)
    const voice = speechSynthesis.getVoices();
    textToSpeech.voice = voice[0];
    speechSynthesis.speak(textToSpeech)
  }

  const Res = () => {
    counter = 0;
    setCounter(counter)
    const textToSpeech = new SpeechSynthesisUtterance(counter)
    const voice = speechSynthesis.getVoices();
    textToSpeech.voice = voice[0];
    textToSpeech.lang = 'hi-IN'
    speechSynthesis.speak(textToSpeech)
  }

  const Multi = () => {
    counter = counter * counter;
    setCounter(counter)
    const textToSpeech = new SpeechSynthesisUtterance(counter)
    const voice = speechSynthesis.getVoices();
    textToSpeech.voice = voice[0];
    textToSpeech.lang = 'en'
    speechSynthesis.speak(textToSpeech)
  }




  return (
    <>
      <h4>01.Counter</h4> <br />

      <h1>Counter Value is : {counter} </h1>


      <button onClick={Inc} >Increment | {counter}</button> <br /> <br />
      <button onClick={Dig} >Digrement | {counter}</button>   <br /> <br />
      <button onClick={Res} >Reset | {counter}</button>   <br /> <br />
      <button onClick={Multi} >Multiply | {counter}</button>

    </>
  )
}

export default App
