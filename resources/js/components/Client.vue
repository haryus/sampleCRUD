<template>
    <v-app>
      <v-card>
        <v-toolbar dark flat dense :color="scheme.secondary">
          <v-toolbar-title>CLIENT</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="openAddDialog()">
            Add Client
          </v-btn>
        </v-toolbar>
        <v-table
          dense
          fixed-header
          height="500px"
          density="compact">
              <thead>
                  <tr>
                      <th> FIRSTNAME </th>
                      <th> LASTNAME </th>
                      <th> CONTACT NO. </th>
                      <th> BIRTHDAY </th>
                      <th> INTEREST </th>
                      <th> ACTIONS </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(item, index) in clientTable" :key="index">
                      <td>{{item.client.first_name}}</td>
                      <td>{{item.client.last_name}}</td>
                      <td>{{item.client.contact_no}}</td>
                      <td>{{item.client.birthday}}</td>
                      <td>{{item.interest.name}}</td>
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
      <v-dialog v-model="clientDialog" max-width="500">
        <v-card>
          <v-card-title class="headline">
            {{ dialogObj.title }}     
          </v-card-title>
          <v-col sm="12">
            <v-select background-color="green lighten-5"
            dense
            outlined
            hide-details
              :error-messages="errors.user_id ? [errors.user_id] : []"
            label="Client *"
            required
            v-model="dialogObj.user_id" :items="clients" item-value="id" item-title="full_name">
            <template v-slot:prepend-inner>
              <span v-if="errors.user_id" class="error-message">{{ errors.user_id }}</span>
            </template>
            </v-select>
          </v-col>
          <v-col sm="12">
            <v-select background-color="green lighten-5"
            dense
            outlined
            hide-details
            :error-messages="errors.interest_id ? [errors.interest_id] : []"
            label="Interest *"
            required
            v-model="dialogObj.interest_id" :items="interests" item-value="id" item-title="name">
            <template v-slot:prepend-inner>
              <span v-if="errors.interest_id" class="error-message">{{ errors.interest_id }}</span>
            </template>
            </v-select>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <template v-if="dialogObj.title === 'ADD CLIENT'">
              <v-btn color="primary" text @click="add()">Add</v-btn>
            </template>
            <template v-else-if="dialogObj.title === 'EDIT CLIENT'">
              <v-btn color="primary" text @click="save(item)">Save</v-btn>
            </template>
            <v-btn color="primary" text @click="close(), clientDialog = false">Close</v-btn>
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
        clientTable: [],
        clients: [],
        interests: [],
        clientDialog: false,
        menu: false,
        dialogObj: {
          title: "",
          id: "",
          user_id: "",
          interest_id: "",
        },
        errors: {
          user_id: "",
          interest_id: "",
        }
      };
    },
    created(){
      this.getData();
      this.getClientData();
      this.getInterestData();
    },
    methods: {
      close(){
        this.dialogObj.user_id = "";
        this.dialogObj.interest_id = "";
        this.dialogObj.id = "";
        this.clearErrors();
      },
      openAddDialog(){
        this.clientDialog = true;
        this.dialogObj.title = 'ADD CLIENT';
  
      },
      openEditDialog(item){
        this.clientDialog = true;
        this.dialogObj.title = 'EDIT CLIENT';
        this.dialogObj.user_id = item.user_id;
        this.dialogObj.interest_id = item.interest_id;
        this.dialogObj.id = item.id;
      },
      deleteData(item){
        axios.delete(`api/clients/${item.id}`).then ((res) => {
          if(res.data == 1){
            alert('Client has been deleted!'); 
            this.getData();
          }
        })
        .catch(error => {
          console.error('Error deleting client:', error);
        });
      },
      add(){
        const dataToSend = { ...this.dialogObj, logged_id: this.logged.id };
        axios.post(`api/clients`, dataToSend).then ((res) => {
          this.clientDialog = false;
          this.close();
          this.getData();
          alert('Client has been added!'); 
        })
        .catch(error => {
          if (error.response && error.response.status === 422) {
            const { errors } = error.response.data; // Destructure errors from response data
  
              this.clearErrors();
              if (errors && errors.user_id) this.errors.user_id = errors.user_id[0];
              if (errors && errors.interest_id) this.errors.interest_id = errors.interest_id[0];
          } else {
            console.error('Error adding client:', error);
          }
        });
      },
      save() {
        console.log(this.dialogObj.id);
        const dataToSend = { ...this.dialogObj, logged_id: this.logged.id };
        axios.put(`api/clients/${this.dialogObj.id}`, dataToSend)
          .then(res => {
            this.clientDialog = false;
            this.close();
            this.getData(); 
            alert('Client has been updated!'); 
          })
          .catch(error => {
            this.handleErrors(error);
          });
      },
      handleErrors(error) {
        if (error.response && error.response.status === 422) {
          const { errors } = error.response.data;
  
          this.clearErrors();
          if (errors && errors.user_id) this.errors.user_id = errors.user_id[0];
          if (errors && errors.interest_id) this.errors.interest_id = errors.interest_id[0];
        } else {
          console.error('Error saving client:', error);
        }
      },
      clearErrors() {
        this.errors.user_id = "";
        this.errors.interest_id = "";
      },
      getData(){
        axios.get(`api/clients`).then ((res) => {
          this.clientTable = res.data;
          console.log(this.clientTable);
        })
      },
      getClientData(){
        axios.get(`api/get_clients`).then ((res) => {
          let data = [];
          this.clients = res.data;
        }).catch((error) => {
          console.error('Error fetching clients:', error);
        });
      },
      getInterestData(){
        axios.get(`api/get_interests`).then ((res) => {
          let data = [];
          this.interests = res.data;
        }).catch((error) => {
          console.error('Error fetching clients:', error);
        });
      },
    },
  };
  </script>