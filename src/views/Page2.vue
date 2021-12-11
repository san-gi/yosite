<template>
  <div>
    <h2 class="mb-5">
      Prestations à distance ou en présentiel (dans un rayon de maximum 30 kilomètres autour de La Rochelle)
    </h2>

    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item, i) in prestas" :key="i">
        <v-expansion-panel-header>{{
          prestas[i].name
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ prestas[i].txt }}
          <template>
            <thead>
              <tr>
                <th class="text-left"></th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in prestas[i].prix" :key="item.name">
                <td>{{ item.quantité }}</td>
                <td>{{ item.prix }}</td>
              </tr>
            </tbody>
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data: () => ({
    prestas: [
      {
        nameQuantity: "planches",
        name: "Planche d'ambiance",
        txt: "Planche composée d'images de couleur(s), d'objets, de matériaux, de textile(s) et de luminaire(s) pour une meilleure vision de l'ambiance que vous souhaitez obtenir dans votre cocon",
        prix: [
          { quantité: "100€ / planche", prix: "" },

        ],
      },
      {
        nameQuantity: "pièces",
        name: "Shopping list",
        txt: "Je vous prépare votre liste d'achats pour les pièces de votre intérieur en fonction de vos besoins et de votre budget. Les références, prix, mesures, le poids et le nom de chacun des articles seront inscrits.",
        prix: [
          { quantité: " 120€/pièce", prix: "" },
        ],
      },
      {
        nameQuantity: "m²",
        name: "Planche d'aménagement",
        txt: "Plan de sol 2D",
        prix: [
          { quantité: "de 0 à 50m²", prix: "60€" },
          { quantité: "de 0 à 80m²", prix: "80€" },
          { quantité: "de 80 à 120m²", prix: "100€" },
           { quantité: "au delà de 120m²", prix: "0.70€ / m²" },
        ],
      },
      {
        nameQuantity: "vue",
        name: "Croquis 3D",
        txt: "Vue en perspective des pièces de votre intérieur",
        prix: [
          { quantité: "100€ / vue", prix: "" },

        ],
      },
      {
        nameQuantity: "vue",
        name: "Modélisation 3D avec rendu réaliste",
        txt: "Vue de votre intérieur en 3 dimensions",
        prix: [
          { quantité: "Modélisation 3D avec rendu réaliste", prix: "sur devis" },

        ],
      },
    ],
    headers: [
      {
        text: "Quantité",
        value: "quantité",
        sortable: false,
      },
      { text: "Prix", value: "prix", sortable: false },
    ],
  }),
};
</script>