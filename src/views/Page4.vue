<template>
  <v-card flat>
    <a href="https://www.facebook.com/Ram-concept-d%C3%A9co-104206998512650/">
      <v-icon x-large color="black">mdi-facebook</v-icon>
    </a>
    <a href="https://www.instagram.com/ram_concept_deco/">
      <v-icon x-large color="black">mdi-instagram</v-icon>
    </a>

    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Message envoyer !</span>
      <v-icon dark> mdi-checkbox-marked-circle </v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              color="blue darken-2"
              label="Email"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="form.message"
              :rules="rules.message"
              color="teal"
            >
              <template v-slot:label>
                <div>Message</div>
              </template>
            </v-textarea>
          </v-col>

          <v-col cols="12">
            <v-checkbox v-model="form.terms" color="green">
              <template v-slot:label>
                <div @click.stop="">
                  Do you accept the
                  <a href="#" @click.prevent="terms = true">terms</a>
                  and
                  <a href="#" @click.prevent="conditions = true">conditions?</a>
                </div>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn text @click="resetForm"> Cancel </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!formIsValid" text color="primary" type="submit">
          post message
        </v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog v-model="terms" width="70%">
      <v-card>
        <v-card-title class="text-h6"> Terms </v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple" @click="terms = false"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="text-h6"> Conditions </v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple" @click="conditions = false"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      email: "",
      message: "",
      terms: false,
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        message: [(val) => (val || "").length > 0 || "This field is required"],
        email: [(val) => (val || "").length > 0 || "This field is required"],
      },
      animals: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
      conditions: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      snackbar: false,
      terms: false,
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return this.form.email && this.form.message && this.form.terms;
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>
