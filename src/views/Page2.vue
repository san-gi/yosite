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
            <v-data-table
              dense
              :headers="headers"
              :items="prestas[i].prix"
              item-key="name"
              class="elevation-1"
            ></v-data-table>
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
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120" },
        ],
      },
      {
        nameQuantity: "pièces",
        name: "Shopping list",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120" },
        ],
      },
      {
        nameQuantity: "m²",
        name: "Planche d'aménagement",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        prix: [
          { quantité: "30 minutes", prix: "40€" },
          { quantité: "1 heure", prix: "70€" },
          { quantité: "2 heures", prix: "120" },
        ],
      },
      {
        nameQuantity: "vue",
        name: "Croquis 3D",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      { text: "Prix", value: "prix",sortable: false, },
    ],
  }),
};
</script>