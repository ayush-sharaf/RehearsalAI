'use client'
import React, { useEffect } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'
import { useState } from 'react'

function RecordAnswerSection() {
  const [userAnswer,setUserAnswer] = useState('')
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  useEffect(() => {
    results.map((result) => {
        setUserAnswer(prevAns=>prevAns+result?.transcript)
    });
  }, [results]);


  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex flex-col justify-center items-center  rounded-lg p-5 bg-black my-20'>
      <Image src={'/assets/webcam.png'} width={200} height={200} alt='webcam' className='absolute'/>
      <Webcam
       mirrored={true}
      style={{
        height:300,
        width:'100%',
        zIndex:10,
      }}
      />
    </div>
    
    <Button variant="outline" className="my-10" onClick={isRecording?stopSpeechToText:startSpeechToText}>
      {isRecording ? <h2> <Mic/>Recording...</h2> : 'Start Recording'}
    </Button>

    
    </div>
  )
}

export default RecordAnswerSection
