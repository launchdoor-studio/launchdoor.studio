"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

const budgets = [
  "< $10k",
  "$10k — $25k",
  "$25k — $50k",
  "$50k — $100k",
  "$100k+",
  "Not sure yet",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.email.trim()) next.email = "Please add an email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "That doesn’t look like a valid email.";
    if (!form.message.trim() || form.message.trim().length < 20)
      next.message = "A few sentences helps us reply well (20+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    try {
      // Placeholder: wire up to an API route or email service when ready.
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-surface-raised ring-1 ring-surface-border p-8 md:p-10 text-center">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Check size={18} strokeWidth={2} />
        </div>
        <h3 className="mt-5 text-[20px] font-medium tracking-tight text-ink">
          Thanks — we got your note.
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted max-w-md mx-auto">
          We’ll get back within one business day. In the meantime, feel free to
          browse our work.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-surface-sunken px-4 py-2 text-[13px] text-ink hover:bg-white hover:ring-1 hover:ring-surface-border transition-all"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-surface-raised ring-1 ring-surface-border p-6 md:p-8"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field
          label="Your name"
          error={errors.name}
          input={
            <input
              type="text"
              required
              value={form.name}
              autoComplete="name"
              onChange={(e) => update("name", e.target.value)}
              className={inputClass(errors.name)}
              placeholder="Jane Doe"
            />
          }
        />
        <Field
          label="Email"
          error={errors.email}
          input={
            <input
              type="email"
              required
              value={form.email}
              autoComplete="email"
              onChange={(e) => update("email", e.target.value)}
              className={inputClass(errors.email)}
              placeholder="jane@company.com"
            />
          }
        />
        <Field
          label="Company (optional)"
          input={
            <input
              type="text"
              value={form.company}
              autoComplete="organization"
              onChange={(e) => update("company", e.target.value)}
              className={inputClass()}
              placeholder="Company name"
            />
          }
        />
        <Field
          label="Budget"
          input={
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={cn(inputClass(), "pr-8 appearance-none bg-transparent")}
            >
              <option value="">Select a range</option>
              {budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          }
        />
      </div>

      <div className="mt-4">
        <Field
          label="What are you looking to build?"
          error={errors.message}
          input={
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={cn(inputClass(errors.message), "resize-y min-h-32")}
              placeholder="A few sentences about the product, timeline, and any constraints."
            />
          }
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[12.5px] text-ink-subtle">
          We respond within one business day.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-white hover:bg-ink-soft disabled:opacity-60 transition-colors"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" ? (
            <Send size={15} strokeWidth={2} />
          ) : null}
        </button>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-[13px] text-red-600">
          Something went wrong. Please email us directly at hello@growvth.com.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[12.5px] text-ink-muted font-medium">{label}</span>
      {input}
      {error ? (
        <span className="text-[12px] text-red-600">{error}</span>
      ) : null}
    </label>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl bg-surface px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-subtle",
    "ring-1 ring-surface-border focus:ring-2 focus:ring-brand/60 focus:outline-none transition-all",
    error && "ring-red-500/60 focus:ring-red-500/60",
  );
}
