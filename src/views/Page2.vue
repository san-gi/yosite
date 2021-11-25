<template>
  <div>
    <h1 class="mb-5">
      Presation, à distence ou en présentiel (dans un rayon de maximum 30km de
      la rochelle) à l'aide du questionnaire ci dessous
    </h1>

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
                <th class="text-left">Quantité</th>
                <th class="text-left">Prix</th>
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
        nameQuantity: "temps",
        name: "Conseil en décoration ou réagensement",
        txt: "Conseil couleurs, recherche de style/d'ambiance, idée déco, idées d'amménagement et de réagensement, consiel matériaux et tissus d'ameublement). un compte rendu vous sera envoyé par mail à la suite de la séance.",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120" },
        ],
      },
      {
        nameQuantity: "planches",
        name: "Planche d'ambiance",
        txt: "planche composée d'images de couleur(s), d'objets, de matériaux, de textile(s) et de luminaire(s) pour une meilleure vision de l'ambiance que vous souhaitez obtenir dans votre cocon",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120" },
        ],
      },
      {
        nameQuantity: "pièces",
        name: "Shopping list",
        txt: "Je vous prépare votre liste d'achats pour les pièces de votre intérieur en fonction de vos besoins et de votre budget. Les références, prix, mesures, le poids et le nom de chacun des articles seront inscrits.",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120" },
        ],
      },
      {
        nameQuantity: "m²",
        name: "Planche d'aménagement",
        txt: "plan de sol 2D",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120" },
        ],
      },
      {
        nameQuantity: "vue",
        name: "Croquis 3D",
        txt: "vue en perspective des pièces de votre intérieur",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120€" },
        ],
      },
      {
        nameQuantity: "vue",
        name: "Modélisation 3D avec rendu réaliste",
        txt: "Vu de votre intérieur en 3 dimensions",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120€" },
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