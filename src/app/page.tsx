import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Select from "@/components/ui/Select/Select";

export default function Home() {
  return (
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
      </section>
    </main>
  );
}
