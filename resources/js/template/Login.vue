<template>
  <v-container fluid fill-height>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="12" md="8" lg="6">
        <v-card
          outlined
          elevation="4"
          class="ma-1 fade-in-text"
          width="100%"
          style="border: 1px solid rgba(70, 70, 70, 0.6)"
        >
          <v-row class="ma-0">
            <v-col
              class="subtheme"
              style="border-right: 1px solid rgba(70, 70, 70, 0.6)"
            >
              <v-row dense class="mt-n4 ml-n4 mb-n5">
                <v-col>
                  <router-link to="/registration">Go to Registration</router-link>

                  <!-- <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="goToRegistration" icon v-on="on" v-bind="attrs">
                        <v-icon>mdi-help-circle</v-icon>
                      </v-btn>
                    </template>
                    <span class="spancolor">Help</span>
                  </v-tooltip> -->
                </v-col>
              </v-row>
              <v-row style="text-align: center">
                <v-col>
                  <img draggable="false" class="mt-n12" />
                </v-col>
              </v-row>
              <v-row dense class="mt-n3">
                <v-col>
                  <br />
                  <div class="ma-5 mt-n12 noselect">
                    <h4 style="text-align: justify; color: #424242">
                      A simple CRUD system to manage an admin. 
                    </h4>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-row>
                <v-col>
                  <h2
                    class="maintheme noselect mt-4"
                    style="text-align: center; text-shadow: 4px 3px 3px rgba(49, 104, 121, 0.3);"
                  >
                    SIMPLE CRUD SYSTEM
                  </h2>
                </v-col>
              </v-row>

              <v-row class="mt-3 mb-n8">
                <v-col>
                  <v-text-field
                    dense
                    outlined
                    class="maintheme inputtext"
                    label="Email or First Name"
                    prepend-inner-icon="mdi-account-circle"
                    v-model="username"
                    @keyup.enter="login"
                  />
                </v-col>
              </v-row>
              <v-row class="mb-n5">
                <v-col>
                  <v-text-field
                    dense
                    outlined
                    class="inputtext"
                    label="Password"
                    prepend-inner-icon="mdi-onepassword"
                    v-model="password"
                    :type="isShowPassword ? 'text' : 'password'"
                    @keyup.enter="login"
                  >
                    <v-tooltip right slot="append">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          dark
                          v-on="on"
                          v-bind="attrs"
                          @click="isShowPassword = !isShowPassword"
                        >
                          {{ !isShowPassword ? "mdi-eye-off" : "mdi-eye" }}
                        </v-icon>
                      </template>
                      <span>{{
                        isShowPassword ? "Hide Password" : "Show Password"
                      }}</span>
                    </v-tooltip>
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n3 mb-3">
                <v-spacer />
                <v-col cols="6">
                  <v-btn
                    block
                    class="mt-n1 spancolor"
                    color="#337ab7"
                    style="color: white"
                    :loading="v_btnlogload"
                    :disabled="username == '' || password == ''"
                    @click="login"
                  >
                    <h5>Login</h5>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="errorDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Error</v-card-title>
        <v-card-text>{{ errorMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="errorDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    username: null,
    password: null,
    EmployeeIDError: "",
    PasswordError: "",
    isShowPassword: false,
    v_btnlogload: false,
    errorDialog: false,
    errorMessage: "",
  }),

  methods: {
    goToRegistration() {
      this.$router.push('/registration');
    },

    login() {
      axios
        .get(`api/users/show?name=${this.username}&password=${this.password}`)
        .then((res) => {
          let data = res.data;
          if (data.error) {
            // Handle specific error cases
            if (res.status === 403) {
              this.errorMessage = "Unauthorized access. Please contact your administrator.";
            } else if (res.status === 401) {
              this.errorMessage = "Invalid credentials. Please try again.";
            } else {
              this.errorMessage = "Server error. Please try again later.";
            }
            this.errorDialog = true;
          } else {
            this.$store.commit("setLogged", { logged: data });
            this.$router.push("/user");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          this.errorMessage = "An unexpected error occurred. Please try again later.";
          this.errorDialog = true;
        });
    },
  },
};
</script>

<style>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}

.fade-in-text {
  display: inline-block;
  font-family: Verdana, sans-serif;
  color: black;
  animation: fadeIn linear 1s;
  -webkit-animation: fadeIn linear 1s;
  -moz-animation: fadeIn linear 1s;
  -o-animation: fadeIn linear 1s;
  -ms-animation: fadeIn linear 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
