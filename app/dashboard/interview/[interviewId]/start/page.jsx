'use client'
import React, { useEffect,use,useState } from 'react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import QuestionsSection from './_components/QuestionsSection'
import RecordAnswerSection from './_components/RecordAnswerSection'

function StartInterview({params}) {
    const [interviewData,setInterviewData]=useState()
    const [mockInterviewQuestion,setMockInterviewQuestion]=useState()
    const [activeQuestionIndex,setActiveQuestionIndex]=useState(0)

    useEffect(() => {
        GetInterviewDetails()
    },[])

    const unwrappedParams=use(params)
    useEffect(() => {
        console.log(unwrappedParams.interviewId)
        GetInterviewDetails()
    },[])

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview).where(eq(MockInterview.mockId,unwrappedParams.interviewId))
        const jsonMockResp=JSON.parse(result[0].jsonMockResp)
        console.log(jsonMockResp)
        setMockInterviewQuestion(jsonMockResp)
        setInterviewData(result[0])
    }
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Questions*/}
            <QuestionsSection 
            activeQuestionIndex={activeQuestionIndex}
            mockInterviewQuestion={mockInterviewQuestion}/>
            {/* Video / Audio Reording*/}
            <RecordAnswerSection/>

      </div>
    </div>
  )
}

export default StartInterview
