import { useState } from "react";
import {
  Bot,
  User,
  RefreshCcw,
  ArrowRight,
  Link,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import { launchReferralCampaign } from "../API/launchReferralCampaign";

const AIAgentConversation = () => {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Welcome Back, Kadid! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newUserMessage = { sender: "user", text: trimmed };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    // Mock AI reply
    setTimeout(() => {
      const newAIMessage = {
        sender: "ai",
        text: "That’s an interesting question! Let me process that...",
      };
      setMessages((prev) => [...prev, newAIMessage]);
    }, 800);
  };

  const handleLaunch = async (summary) => {
    const res = await launchReferralCampaign(summary);
    if (res.status === "ok") {
      alert(res.message);
    }
  };

  const handleQuickAction = (type) => {
    const userPromptMap = {
      referral: "I want to send a referral.",
      campaign: "Help me create a new referral campaign.",
      followup: "Set up a follow-up message for referrals.",
      view: "Show me the referrals I've sent.",
    };

    const aiResponseMap = {
      referral: {
        text: "Sure! Who would you like to refer?",
        summary: {
          Action: "Send Referral",
          ReferralCount: 1,
          EstimatedReach: "Moderate",
        },
      },
      campaign: {
        text: "Let's build a new campaign! What is your campaign name?",
        summary: {
          Action: "Create Campaign",
          Type: "Referral",
          Status: "Draft",
        },
      },
      followup: {
        text: "You can automate follow-ups here. Would you like to schedule them weekly?",
        summary: {
          Action: "Setup Follow-up",
          Frequency: "Weekly",
          Channel: "Email",
        },
      },
      view: {
        text: "Here are your latest referrals sent in the last week.",
        summary: {
          Action: "View Referrals",
          ReferralsSent: 7,
          Responses: 5,
        },
      },
    };

    const userText = userPromptMap[type];
    const aiReply = aiResponseMap[type];

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "ai", text: aiReply.text, summary: aiReply.summary },
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6 border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Bot className="text-blue-500" /> AI Agent
        </h2>
        <button
          className="text-gray-500 hover:text-blue-600 flex items-center gap-1 text-sm"
          onClick={() =>
            setMessages([
              {
                sender: "ai",
                text: "Welcome Back, Kadid! How can I help you today?",
              },
            ])
          }
        >
          <RefreshCcw size={16} /> Reset
        </button>
      </div>

      {/* Messages */}
      <div className="space-y-5">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === "ai" ? "items-start" : "justify-end"}`}
          >
            {msg.sender === "ai" && (
              <div className="mr-3 mt-1 p-2 bg-blue-100 text-blue-800 rounded-full">
                <Bot size={18} />
              </div>
            )}
            <div
              className={`max-w-[75%] px-4 py-2 rounded-xl ${
                msg.sender === "ai"
                  ? "bg-gray-100 text-gray-800"
                  : "bg-blue-600 text-white"
              }`}
            >
              <p>{msg.text}</p>
              {msg.summary && (
                <div className="mt-3 p-4 border rounded-lg bg-white text-sm space-y-2">
                  {Object.entries(msg.summary).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                  <div className="flex justify-end gap-2 mt-3">
                    <button className="px-4 py-1 rounded-md text-sm border border-gray-300 hover:bg-gray-100">
                      Edit
                    </button>
                    <button
                      className="px-4 py-1 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700"
                      onClick={() => handleLaunch(msg.summary)}
                    >
                      Launch
                    </button>
                  </div>
                </div>
              )}
            </div>
            {msg.sender === "user" && (
              <div className="ml-3 mt-1 p-2 bg-blue-600 text-white rounded-full">
                <User size={18} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="pt-6 border-t mt-8 space-y-4">
        <h3 className="font-semibold text-gray-700">Quick Links</h3>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleQuickAction("referral")}
            className="flex items-center gap-2 px-4 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50 text-sm"
          >
            <Link size={16} /> SEND REFERRAL
          </button>
          <button
            onClick={() => handleQuickAction("campaign")}
            className="flex items-center gap-2 px-4 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50 text-sm"
          >
            <Plus size={16} /> CREATE CAMPAIGN
          </button>
          <button
            onClick={() => handleQuickAction("followup")}
            className="flex items-center gap-2 px-4 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50 text-sm"
          >
            <Settings size={16} /> FOLLOW-UP
          </button>
          <button
            onClick={() => handleQuickAction("view")}
            className="flex items-center gap-2 px-4 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50 text-sm"
          >
            <Users size={16} /> VIEW REFERRAL
          </button>
        </div>

        {/* Input box */}
        <div className="relative mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me anything..."
            className="w-full border rounded-md px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAgentConversation;
