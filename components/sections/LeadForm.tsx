"use client";

import { useState, type FormHTMLAttributes } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations";

type LeadFormProps = FormHTMLAttributes<HTMLFormElement>;

export function LeadForm({ className, ...props }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Failed to submit lead");
      }

      const data = (await res.json()) as { ok?: boolean };
      if (data?.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  });

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} {...props}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="Ada Lovelace" {...register("name")} />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground" htmlFor="company">
          Company
        </label>
        <Input id="company" placeholder="Studio, startup, or brand" {...register("company")} />
        {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground" htmlFor="message">
          Project details
        </label>
        <Textarea
          id="message"
          placeholder="Campaign goals, timelines, and anything else we should know."
          rows={4}
          {...register("message")}
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{siteConfig.lead.description}</p>
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </div>
      {status === "success" && (
        <p className="text-sm font-medium text-emerald-600">{siteConfig.lead.successCopy}</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-500">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
