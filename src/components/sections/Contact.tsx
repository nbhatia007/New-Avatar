"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const INQUIRY_TYPES = [
  "Real Estate Client",
  "Business Consulting",
  "Speaking Inquiry",
  "Partnership",
  "Agent Opportunity",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    honeypot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // bot trap
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          inquiryType: form.inquiryType,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[var(--navy)] border border-[var(--navy-light)] text-white text-sm px-4 py-3 focus:outline-none focus:border-[var(--gold)]/60 transition-colors placeholder:text-[var(--gray-500)]";

  return (
    <SectionWrapper id="contact" dark={false}>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <SectionHeading
            eyebrow="Let's Connect"
            title="How Can I Help You?"
            subtitle="Whether you're looking to buy or sell a home, grow your business, book a speaker, or explore a partnership — let's start the conversation."
          />

          <div className="space-y-5">
            {[
              { label: "Real Estate Client", desc: "Buying, selling, or investing in the Triangle, NC" },
              { label: "Business Consulting", desc: "Improve profitability, operations, or scale with Nimbus" },
              { label: "Speaking Inquiry", desc: "Book Naveen for your event, conference, or team" },
              { label: "Partnership", desc: "Strategic relationships and shared opportunities" },
              { label: "Agent Opportunity", desc: "Build your real estate career with The Bhatia Team" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-[var(--gold)] mt-1 text-xs">▪</span>
                <div>
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                  <p className="text-[var(--gray-500)] text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-[var(--navy)] border border-[var(--navy-light)] p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <CheckCircle2 size={48} className="text-[var(--gold)]" />
              <h3 className="text-white text-xl font-bold">Message Received!</h3>
              <p className="text-[var(--gray-300)] text-sm max-w-xs">
                Thank you for reaching out. Naveen will get back to you shortly.
              </p>
              <Button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", inquiryType: "", message: "", honeypot: "" }); }} variant="outline">
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--gray-300)] text-xs mb-1.5">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[var(--gray-300)] text-xs mb-1.5">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--gray-300)] text-xs mb-1.5">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(optional)"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[var(--gray-300)] text-xs mb-1.5">How Can I Help? *</label>
                  <select
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    required
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select one…</option>
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[var(--gray-300)] text-xs mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me a bit about what you're looking for…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-xs">
                  <AlertCircle size={14} />
                  Something went wrong. Please try again or email hellonaveen@gmail.com
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                className="w-full py-4"
                disabled={status === "loading"}
              >
                <Send size={15} />
                {status === "loading" ? "Sending…" : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
