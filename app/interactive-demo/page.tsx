"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InteractiveDemo() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Array<{ type: "user" | "system"; content: string }>>([
    {
      type: "system",
      content: "Welcome to Progress Tech Solutions Interactive Demo! How can I help you today?",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: input }])

    // Simulate system response (you can replace this with actual API calls)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "system",
          content: "I understand you're interested in our product management solutions. Let me help you explore our features.",
        },
      ])
    }, 1000)

    setInput("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#005FAF] mb-8">Interactive Demo</h1>
          
          {/* Chat Interface */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            {/* Messages Area */}
            <div className="h-[600px] overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.type === "user"
                        ? "bg-[#005FAF] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005FAF] focus:border-transparent"
                />
                <Button
                  type="submit"
                  className="bg-[#005FAF] hover:bg-[#004080] px-6"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 