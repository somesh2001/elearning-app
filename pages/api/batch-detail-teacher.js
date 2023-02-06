// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import supabase from "@/supabaseClient";

async function handler(req, res) {
  const data = req.body;

  const response = await supabase.from("batches").select("*");
  res.status(200).json({ message: response.data });
}

export default handler;
