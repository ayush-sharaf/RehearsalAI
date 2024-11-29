'use client'
import React,{useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { db } from '@/utils/db'
import { useRouter } from 'next/navigation'

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [jobPosition, setJobPosition] = useState()
  const [jobDesc, setJobDesc] = useState()
  const [jobExperience, setJobExperience] = useState()
  const [loading,setLoading]=useState(false)
  const [jsonResponse,setJsonResponse]=useState([])
  const {user}=useUser()
  const router=useRouter()

  const onSubmit = async(e) => {
    setLoading(true)
    e.preventDefault()
    console.log(jobPosition, jobDesc, jobExperience)
    const InputPrompt="job position: "+ jobPosition +" job description: "+ jobDesc +" , Years of experience : "+ jobExperience +" , depends on this information please give me 5 interview question with answers in json format , give question and answers as fields in json"

    const result = await chatSession.sendMessage(InputPrompt)
    const MockJsonResp=(result.response.text()).replace('```json', '').replace('```', '')
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if(MockJsonResp){
    const resp=await db.insert(MockInterview).values({
      mockId:uuidv4(),
      jsonMockResp:MockJsonResp,
      jobPosition:jobPosition,
      jobDescription:jobDesc,
      jobExperience:jobExperience,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-YYYY')
    }).returning({mockId:MockInterview.mockId})

    console.log("Inserted ID:",resp)
    if(resp){
      setOpenDialog(false)
      router.push('/dashboard/interview/'+resp[0]?.mockId)
    }
  }
  else{
    console.log("ERROR")
  }
    setLoading(false)

  }
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-95 hover:shadow-md cursor-pointer transition-all' onClick={()=>setOpenDialog(true)}>
        <h2 className='font-bold text-lg text-center'>+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent className="max-w-2xl">
    <DialogHeader>
      <DialogTitle className="text-2xl">Tell us more about your job interviewing?</DialogTitle>
      
        <form onSubmit={onSubmit}>
        <div>
          <h2 className=''>Add Details about your job position/role, Job description and years of experience</h2>
          <div className='mt-7 my-3'>
            <label >Job Role/Job Position</label>
            <Input placeholder='Ex Full Stack Developer' required
            onChange={(e)=>setJobPosition(e.target.value)}
            />
          </div>
          <div className='my-3'>
            <label htmlFor="">Job Description</label>
            <Textarea placeholder="Ex. React, Nodejs , Mysql etc" required
            onChange={(e)=>setJobDesc(e.target.value)}
            />
          </div>
          <div className='my-3'>
            <label >Years of experience</label>
            <Input placeholder='Ex. 5' type="number" required max="50"
            onChange={(e)=>setJobExperience(e.target.value)}
            />
          </div>
        </div>
        <div className='flex gap-5 justify-end'>
          <Button type="button" variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
          <Button type="submit" disabled={loading}>
            {loading?
            <>
            <LoaderCircle className='animate-spin'/> Generating from AI
            </>
          :
            'Start Interview'}</Button>
        </div>
        </form>
     
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview