<template>
  <v-app>
    <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card>
                <v-card-title class="headline">
                    Registration Form    
                </v-card-title>
                <v-col sm="12">
                    <v-text-field
                    background-color="green lighten-5"
                    type="text"
                    dense
                    outlined
                    hide-details
                    v-model="dialogObj.email"
                    :error-messages="errors.email ? [errors.email] : []"
                    label="Email *"
                    required
                    >
                    <template v-slot:prepend-inner>
                        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                    </template>
                    </v-text-field>
                </v-col>
                <v-col sm="12">
                    <v-text-field
                    background-color="green lighten-5"
                    type="text"
                    dense
                    outlined
                    hide-details
                    v-model="dialogObj.password"
                    label="Password *"
                    required
                    :error-messages="errors.password ? [errors.password] : []"
                    >
                    <template v-slot:prepend-inner>
                    <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
                    </template>
                    </v-text-field>
                </v-col>
                <v-col sm="12">
                    <v-text-field
                    background-color="green lighten-5"
                    type="text"
                    dense
                    outlined
                    hide-details
                    v-model="dialogObj.first_name"
                    label="Firstname *"
                    :error-messages="errors.first_name ? [errors.first_name] : []"
                    required
                    >
                    <template v-slot:prepend-inner>
                    <span v-if="errors.first_name" class="error-message">{{ errors.first_name }}</span>
                    </template>
                    </v-text-field>
                </v-col>
                <v-col sm="12">
                    <v-text-field
                    background-color="green lighten-5"
                    type="text"
                    dense
                    outlined
                    hide-details
                    v-model="dialogObj.last_name"
                    label="LastName *"
                    :error-messages="errors.last_name ? [errors.last_name] : []"
                    required
                    >
                    <template v-slot:prepend-inner>
                    <span v-if="errors.last_name" class="error-message">{{ errors.last_name }}</span>
                    </template>
                    </v-text-field>
                </v-col>
                <v-col sm="12">
                    <v-text-field
                    background-color="green lighten-5"
                    type="text"
                    dense
                    outlined
                    hide-details
                    v-model="dialogObj.contact_no"
                    label="Contact No. *"
                    :error-messages="errors.contact_no ? [errors.contact_no] : []"
                    required
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '');"
                    >
                    <template v-slot:prepend-inner>
                    <span v-if="errors.contact_no" class="error-message">{{ errors.contact_no }}</span>
                    </template>
                    </v-text-field>
                </v-col>
                <v-col sm="12">
                    <v-text-field
                        v-model="dialogObj.birthday"
                        label="Birthday *"
                        outlined
                        dense
                        hide-details
                        prepend-inner-icon="mdi-calendar"
                        placeholder="yyyy/mm/dd"
                    :error-messages="errors.birthday ? [errors.birthday] : []"
                    required
                    >
                    <template v-slot:prepend-inner>
                        <span v-if="errors.birthday" class="error-message">{{ errors.birthday }}</span>
                    </template>
                    </v-text-field>
                    </v-col>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="add()">Add</v-btn>
                    <v-btn color="primary" text @click="close()">Close</v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data: () => {
    return {
      dialogObj: {
        title: "",
        id: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        contact_no: "",
        birthday: "",
        role_id: "2",
      },
      errors: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        contact_no: "",
        birthday: "",
        role_id: "",
      }
    };
  },
  created(){
  },
  methods: {
    close(){
      this.$router.push("/login");
      this.dialogObj.email = "";
      this.dialogObj.password = "";
      this.dialogObj.first_name = "";
      this.dialogObj.last_name = "";
      this.dialogObj.contact_no = "";
      this.dialogObj.birthday = "";
      this.dialogObj.role_id = "";
      this.dialogObj.id = "";
      this.clearErrors();
    },
    
    add(){
      axios.post(`api/users/add`, this.dialogObj).then ((res) => {
        this.dialogObj.email = "";
        this.dialogObj.password = "";
        this.dialogObj.first_name = "";
        this.dialogObj.last_name = "";
        this.dialogObj.contact_no = "";
        this.dialogObj.birthday = "";
        this.dialogObj.role_id = "";
        this.dialogObj.id = "";
        alert('User has been added!'); 
      })
      .catch(error => {
        if (error.response && error.response.status === 422) {
          const { errors } = error.response.data; 

            this.clearErrors();
            if (errors && errors.email) this.errors.email = errors.email[0];
            if (errors && errors.password) this.errors.password = errors.password[0];
            if (errors && errors.first_name) this.errors.first_name = errors.first_name[0];
            if (errors && errors.last_name) this.errors.last_name = errors.last_name[0];
            if (errors && errors.contact_no) this.errors.contact_no = errors.contact_no[0];
            if (errors && errors.birthday) this.errors.birthday = errors.birthday[0];
        } else {
          console.error('Error adding user:', error);
        }
      });
    },
    handleErrors(error) {
      if (error.response && error.response.status === 422) {
        const { errors } = error.response.data;

        this.clearErrors();
        if (errors && errors.email) this.errors.email = errors.email[0];
        if (errors && errors.password) this.errors.password = errors.password[0];
        if (errors && errors.first_name) this.errors.first_name = errors.first_name[0];
        if (errors && errors.last_name) this.errors.last_name = errors.last_name[0];
        if (errors && errors.contact_no) this.errors.contact_no = errors.contact_no[0];
        if (errors && errors.birthday) this.errors.birthday = errors.birthday[0];
      } else {
        console.error('Error saving user:', error);
      }
    },
    clearErrors() {
      this.errors.email = "";
      this.errors.password = "";
      this.errors.first_name = "";
      this.errors.last_name = "";
      this.errors.contact_no = "";
      this.errors.birthday = "";
    },
  },
};
</script>

<style>

</style>