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
    d.name.length >= 2 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.company === "string" &&
    d.company.length >= 2 &&
    typeof d.message === "string" &&
    d.message.length >= 10
  );
}

export async function onRequest(context: {
  request: Request;
  env: {
    SUPABASE_URL: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
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
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(JSON.stringify({ ok: false, error: "Failed to save lead" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

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
