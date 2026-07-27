"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <Header />

      <main style={{ padding: "48px", display: "flex", flexDirection: "column", gap: "32px" }}>
        <section style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <Button variant="primary">Réserver</Button>
          <Button variant="secondary">Découvrir</Button>
          <Button variant="outline">En savoir plus</Button>
          <Button variant="ghost">Annuler</Button>
          <Button variant="danger">Supprimer</Button>
          <Button variant="primary" loading>
            Chargement
          </Button>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "360px" }}>
          <Input label="Nom complet" placeholder="Ex. Jean Dupont" />
          <Input
            label="Adresse e-mail"
            type="email"
            defaultValue="jean@exemple"
            error="Veuillez saisir une adresse e-mail valide."
          />
          <Select
            label="Destination"
            options={[
              { label: "Nosy Be", value: "nosy-be" },
              { label: "Antsirabe", value: "antsirabe" },
              { label: "Sainte-Marie", value: "sainte-marie" },
            ]}
          />
          <Textarea label="Votre message" placeholder="Ex. Je souhaite réserver pour 4 personnes..." />
          <Checkbox
            label="J'accepte les conditions générales"
            checked={accepted}
            onChange={setAccepted}
          />
        </section>

        <section style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <Card hoverable style={{ maxWidth: "280px" }}>
            <p>Ceci est une Card simple, avec effet au survol.</p>
          </Card>
          <Card style={{ maxWidth: "280px" }}>
            <p>Ceci est une Card sans effet au survol.</p>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}
