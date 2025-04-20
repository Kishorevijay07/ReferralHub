import React, { useState } from 'react';
import { HelpCircle, Mail, MessageSquare, BookOpen, Users } from 'lucide-react';
import { sendHelpRequest } from './../API/helpApi';

const Help = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await sendHelpRequest(form);
    if (res.success) {
      setStatus(res.message);
      setForm({ name: '', email: '', message: '' }); // reset form
    }
  };

  return (
    <div className="p-6 space-y-8 text-gray-800 text-sm">
      {/* ...Quick Help Cards remain the same... */}

      {/* Contact Form */}
      <div className="border rounded-lg bg-white p-6 space-y-4 shadow-sm">
        <h3 className="font-semibold text-base">Still Need Help?</h3>
        <p className="text-sm text-gray-500">Send us a message and our team will respond shortly.</p>

        {status && (
          <div className="text-green-600 text-sm bg-green-50 border border-green-200 px-4 py-2 rounded">
            {status}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded h-28"
            required
          ></textarea>

          <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;
