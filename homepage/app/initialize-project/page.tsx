"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Typewriter from "../components/Typewriter"

export default function InitializeProject() {
  const [step, setStep] = useState(1)
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-green-400">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="text-green-400 hover:text-green-300 mb-8 inline-block">
          &lt; Return_to_Home
        </Link>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">
            <Typewriter text="&lt;Initialize_New_Project/&gt;" delay={50} />
          </h1>
          <div className="border border-green-400 p-8 mb-8">
            <div className="mb-4">
              <Typewriter
                text={`Step ${step} of 3: ${
                  step === 1 ? "Project Name" : step === 2 ? "Project Description" : "Confirm Details"
                }`}
                delay={30}
              />
            </div>
            {step === 1 && (
              <div>
                <label htmlFor="projectName" className="block mb-2">
                  Enter_Project_Name:
                </label>
                <Input
                  id="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full bg-gray-800 border-green-400 text-green-400 placeholder-green-600 mb-4"
                  placeholder="MyRetroProject"
                />
              </div>
            )}
            {step === 2 && (
              <div>
                <label htmlFor="projectDescription" className="block mb-2">
                  Enter_Project_Description:
                </label>
                <Textarea
                  id="projectDescription"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full bg-gray-800 border-green-400 text-green-400 placeholder-green-600 mb-4"
                  placeholder="A retro-inspired web application..."
                  rows={4}
                />
              </div>
            )}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Confirm_Project_Details:</h2>
                <p>
                  <strong>Project_Name:</strong> {projectName}
                </p>
                <p>
                  <strong>Project_Description:</strong> {projectDescription}
                </p>
              </div>
            )}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
                >
                  &lt; Previous
                </Button>
              )}
              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 ml-auto"
                >
                  Next &gt;
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 ml-auto"
                >
                  Initialize_Project
                </Button>
              )}
            </div>
          </div>
          <div className="text-sm text-green-300">
            <Typewriter text="* This is a demo. No actual project will be created." delay={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

