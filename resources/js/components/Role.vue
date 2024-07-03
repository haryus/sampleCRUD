<template>
    <v-app>
      <v-card>
        <v-toolbar dark flat dense :color="scheme.secondary">
          <v-toolbar-title>ROLE</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="openAddDialog()">
            Add Role
          </v-btn>
        </v-toolbar>
        <v-table
          dense
          fixed-header
          height="500px"
          density="compact">
              <thead>
                  <tr>
                      <th> NAME </th>
                      <th> ACTIONS </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(item, index) in roleTable" :key="index">
                      <td>{{item.name}}</td>
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
      <v-dialog v-model="roleDialog" max-width="500">
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
              v-model="dialogObj.name"
              :error-messages="errors.name ? [errors.name] : []"
              label="Name *"
              required
            >
              <template v-slot:prepend-inner>
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </template>
            </v-text-field>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <template v-if="dialogObj.title === 'ADD ROLE'">
              <v-btn color="primary" text @click="add()">Add</v-btn>
            </template>
            <template v-else-if="dialogObj.title === 'EDIT ROLE'">
              <v-btn color="primary" text @click="save(item)">Save</v-btn>
            </template>
            <v-btn color="primary" text @click="close(), roleDialog = false">Close</v-btn>
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
        roleTable: [],
        roleDialog: false,
        menu: false,
        dialogObj: {
          title: "",
          id: "",
          name: "",
        },
        errors: {
          name: "",
        }
      };
    },
    created(){
      this.getData();
    },
    methods: {
      close(){
        this.dialogObj.name = "";
        this.dialogObj.id = "";
        this.clearErrors();
      },
      openAddDialog(){
        this.roleDialog = true;
        this.dialogObj.title = 'ADD ROLE';
  
      },
      openEditDialog(item){
        this.roleDialog = true;
        this.dialogObj.title = 'EDIT ROLE';
        this.dialogObj.name = item.name;
        this.dialogObj.id = item.id;
      },
      deleteData(item){
        axios.delete(`api/roles/${item.id}`).then ((res) => {
          if(res.data == 1){
            alert('Role has been deleted!'); 
            this.getData();
          }
        })
        .catch(error => {
          console.error('Error deleting role:', error);
        });
      },
      add(){
        axios.post(`api/roles`, this.dialogObj).then ((res) => {
          this.roleDialog = false;
          this.close();
          this.getData();
          alert('Role has been added!'); 
        })
        .catch(error => {
          if (error.response && error.response.status === 422) {
            const { errors } = error.response.data; // Destructure errors from response data
  
              this.clearErrors();
              if (errors && errors.name) this.errors.name = errors.name[0];
          } else {
            console.error('Error adding role:', error);
          }
        });
      },
      save() {
        console.log(this.dialogObj.id);
        const dataToSend = { ...this.dialogObj, logged_id: this.logged.id };
        axios.put(`api/roles/${this.dialogObj.id}`, dataToSend)
          .then(res => {
            this.roleDialog = false;
            this.close();
            this.getData(); 
            alert('Role has been updated!'); 
          })
          .catch(error => {
            this.handleErrors(error);
          });
      },
      handleErrors(error) {
        if (error.response && error.response.status === 422) {
          const { errors } = error.response.data;
  
          this.clearErrors();
          if (errors && errors.name) this.errors.name = errors.name[0];
        } else {
          console.error('Error saving role:', error);
        }
      },
      clearErrors() {
        this.errors.name = "";
      },
      getData(){
        axios.get(`api/get_roles?role_id=${this.logged.id}`).then ((res) => {
          this.roleTable = res.data;
        })
      },
    },
  };
  </script>