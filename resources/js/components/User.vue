<template>
  <v-app>
    <v-card>
      <v-toolbar dark flat dense :color="scheme.secondary">
        <v-toolbar-title>USER/CLIENT</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="openAddDialog()">
          Add User
        </v-btn>
      </v-toolbar>
      <v-table
        dense
        fixed-header
        height="500px"
        density="compact">
            <thead>
                <tr>
                    <th> EMAIL </th>
                    <th> FIRSTNAME </th>
                    <th> LASTNAME </th>
                    <th> CONTACT NO. </th>
                    <th> BIRTHDAY </th>
                    <th> ROLE </th>
                    <th> ACTIONS </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in userTable" :key="index">
                    <td>{{item.email}}</td>
                    <td>{{item.first_name}}</td>
                    <td>{{item.last_name}}</td>
                    <td>{{item.contact_no}}</td>
                    <td>{{item.birthday}}</td>
                    <td>{{item.role.name}}</td>
                    <td>
                      <v-icon @click="openEditDialog(item)">
                        mdi-pencil
                      </v-icon>
                      <v-icon @click="deleteData(item)">
                        mdi-delete
                      </v-icon>
                    </td>
                </tr>
            </tbody>
      </v-table>
    </v-card>
    <v-dialog v-model="userDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">
          {{ dialogObj.title }}     
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
        <v-col sm="12">
          <v-select background-color="green lighten-5"
          dense
          outlined
          hide-details
            :error-messages="errors.role_id ? [errors.role_id] : []"
          label="Role *"
          required
          v-model="dialogObj.role_id" :items="roles" item-value="id" item-title="name">
          <template v-slot:prepend-inner>
            <span v-if="errors.role_id" class="error-message">{{ errors.role_id }}</span>
          </template>
          </v-select>
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <template v-if="dialogObj.title === 'ADD USER/CLIENT'">
            <v-btn color="primary" text @click="add()">Add</v-btn>
          </template>
          <template v-else-if="dialogObj.title === 'EDIT USER/CLIENT'">
            <v-btn color="primary" text @click="save(item)">Save</v-btn>
          </template>
          <v-btn color="primary" text @click="close(), userDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data: () => {
    return {
      userTable: [],
      roles: [],
      userDialog: false,
      menu: false,
      dialogObj: {
        title: "",
        id: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        contact_no: "",
        birthday: "",
        role_id: "",
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
    this.getRoleData();
    this.getData();
  },
  methods: {
    close(){
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
    openAddDialog(){
      this.userDialog = true;
      this.dialogObj.title = 'ADD USER/CLIENT';

    },
    openEditDialog(item){
      this.userDialog = true;
      this.dialogObj.title = 'EDIT USER/CLIENT';
      this.dialogObj.email = item.email;
      this.dialogObj.password = item.password;
      this.dialogObj.first_name = item.first_name;
      this.dialogObj.last_name = item.last_name;
      this.dialogObj.contact_no = item.contact_no;
      this.dialogObj.birthday = item.birthday;
      this.dialogObj.role_id = item.role_id;
      this.dialogObj.id = item.id;
    },
    deleteData(item){
      axios.delete(`api/users/${item.id}`).then ((res) => {
        if(res.data == 1){
          alert('User has been deleted!'); 
          this.getData();
        }
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
    },
    add(){
      const dataToSend = { ...this.dialogObj, logged_id: this.logged.id };
      axios.post(`api/users`, dataToSend).then ((res) => {
        this.userDialog = false;
        this.close();
        this.getData();
        alert('User has been added!'); 
      })
      .catch(error => {
        if (error.response && error.response.status === 422) {
          const { errors } = error.response.data; // Destructure errors from response data

            this.clearErrors();
            if (errors && errors.email) this.errors.email = errors.email[0];
            if (errors && errors.password) this.errors.password = errors.password[0];
            if (errors && errors.first_name) this.errors.first_name = errors.first_name[0];
            if (errors && errors.last_name) this.errors.last_name = errors.last_name[0];
            if (errors && errors.contact_no) this.errors.contact_no = errors.contact_no[0];
            if (errors && errors.birthday) this.errors.birthday = errors.birthday[0];
            if (errors && errors.role_id) this.errors.role_id = errors.role_id[0];
        } else {
          console.error('Error adding user:', error);
        }
      });
    },
    save() {
      console.log(this.dialogObj.id);
      const dataToSend = { ...this.dialogObj, logged_id: this.logged.id };
      axios.put(`api/users/${this.dialogObj.id}`, dataToSend)
        .then(res => {
          this.userDialog = false;
          this.close();
          this.getData(); 
          alert('User has been updated!'); 
        })
        .catch(error => {
          this.handleErrors(error);
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
        if (errors && errors.role_id) this.errors.role_id = errors.role_id[0];
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
      this.errors.role_id = "";
    },
    getData(){
      axios.get(`api/get_users?role_id=${this.logged.id}`).then ((res) => {
        this.userTable = res.data;
      })
    },
    getRoleData(){
      axios.get(`api/get_roles`).then ((res) => {
        let data = [];
        this.roles = res.data;
      }).catch((error) => {
        console.error('Error fetching roles:', error);
      });
    },
  },
};
</script>