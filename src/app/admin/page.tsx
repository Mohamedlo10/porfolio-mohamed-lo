"use client";

import { useState, useEffect } from "react";
import { getAllContacts } from "@/app/api/query";

const STATIC_PIN = "112244";

export default function AdminPage() {
  const [pin, setPin] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState("");
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === STATIC_PIN) {
      setIsAuth(true);
      setError("");
    } else {
      setError("Code PIN incorrect");
    }
  };

  useEffect(() => {
    if (isAuth) {
      setLoading(true);
      getAllContacts()
        .then((data) => setContacts(data || []))
        .finally(() => setLoading(false));
    }
  }, [isAuth]);

  if (!isAuth) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col gap-4 w-80"
        >
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            Accès Admin
          </h2>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Entrer le code PIN"
            className="px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
          >
            Valider
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-4">
      <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg shadow-lg p-6 mt-10">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Messagerie
        </h2>
        {loading ? (
          <div className="text-gray-300 text-center">Chargement...</div>
        ) : contacts.length === 0 ? (
          <div className="text-gray-400 text-center">Aucun message reçu.</div>
        ) : (
          <ul className="space-y-6">
            {contacts.map((c) => (
              <li
                key={c.id}
                className="bg-slate-700 rounded-lg p-4 border border-slate-600"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-purple-400">
                    {c.name || (
                      <span className="italic text-gray-400">Anonyme</span>
                    )}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(c.created_at).toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-gray-300 mb-1">
                  <span className="font-semibold">Email:</span> {c.email}
                </div>
                <div className="text-sm text-gray-300 mb-1">
                  <span className="font-semibold">Sujet:</span> {c.subject}
                </div>
                <div className="text-base text-white mt-2 whitespace-pre-line">
                  {c.message}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
