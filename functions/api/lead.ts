import { createClient } from "@supabase/supabase-js";

type LeadFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function validateLeadData(data: unknown): data is LeadFormData {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
<<<<<<< HEAD
    d.name.trim().length >= 2 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.company === "string" &&
    d.company.trim().length >= 2 &&
    typeof d.message === "string" &&
    d.message.trim().length >= 10
=======
    d.name.length >= 2 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.company === "string" &&
    d.company.length >= 2 &&
    typeof d.message === "string" &&
    d.message.length >= 10
>>>>>>> beb1ea251b23458612440d77875abcc4b9ef2f24
  );
}

export async function onRequest(context: {
  request: Request;
  env: {
    SUPABASE_URL: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
<<<<<<< HEAD
    MAILGUN_API_KEY?: string;
    MAILGUN_API?: string;
    MAILGUN_DOMAIN?: string;
    MAILGUN_FROM?: string;
    MAILGUN_TO?: string;
    MAILGUN_API_BASE?: string;
=======
>>>>>>> beb1ea251b23458612440d77875abcc4b9ef2f24
  };
}): Promise<Response> {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (context.request.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await context.request.json();

    if (!validateLeadData(body)) {
<<<<<<< HEAD
      return new Response(JSON.stringify({ ok: false, error: "Invalid data" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = context.env;

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing Supabase environment variables");
      return new Response(JSON.stringify({ ok: false, error: "Server misconfigured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const cleanLead = {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company.trim(),
      message: body.message.trim(),
    };

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { error } = await supabase.from("leads").insert([
      {
        name: cleanLead.name,
        email: cleanLead.email,
        company: cleanLead.company,
        message: cleanLead.message,
=======
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Invalid data",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const supabase = createClient(
      context.env.SUPABASE_URL,
      context.env.SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    const { error } = await supabase.from("leads").insert([
      {
        name: body.name,
        email: body.email,
        company: body.company,
        message: body.message,
>>>>>>> beb1ea251b23458612440d77875abcc4b9ef2f24
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(JSON.stringify({ ok: false, error: "Failed to save lead" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

<<<<<<< HEAD
    const mailgunApiKey = context.env.MAILGUN_API_KEY ?? context.env.MAILGUN_API;
    const mailgunDomain = context.env.MAILGUN_DOMAIN;
    const mailgunFrom = context.env.MAILGUN_FROM;
    const mailgunTo = context.env.MAILGUN_TO ?? mailgunFrom;
    const mailgunApiBase = context.env.MAILGUN_API_BASE ?? "https://api.mailgun.net";

    if (mailgunApiKey && mailgunDomain && mailgunFrom && mailgunTo) {
      const subject = `[DM Growth Lead] ${cleanLead.name} - ${cleanLead.company}`;
      const text = `Name: ${cleanLead.name}
Email: ${cleanLead.email}
Company: ${cleanLead.company}

Message:
${cleanLead.message}`;

      const emailResponse = await fetch(`${mailgunApiBase}/v3/${mailgunDomain}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`api:${mailgunApiKey}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          from: mailgunFrom,
          to: mailgunTo,
          subject,
          text,
          "h:Reply-To": cleanLead.email,
        }),
      });

      if (!emailResponse.ok) {
        const errText = await emailResponse.text();
        console.error("Mailgun send error:", emailResponse.status, errText);
      }
    } else {
      console.warn("Mailgun environment variables missing; skipping email send");
    }

=======
>>>>>>> beb1ea251b23458612440d77875abcc4b9ef2f24
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return new Response(JSON.stringify({ ok: false, error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}
