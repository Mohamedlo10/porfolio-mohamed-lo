import { createClient } from "@/lib/supabase";

// Fonction pour insérer un message dans la table contact
export async function sendContactMessage({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const supabase = createClient();
  const { error } = await supabase
    .from("contact")
    .insert([{ name, email, subject, message }]);
  if (error) throw error;
}

// Fonction pour récupérer tous les contacts
export async function getAllContacts() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("contact")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}
