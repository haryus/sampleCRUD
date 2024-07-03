<template>
    <div>
        <v-navigation-drawer
          v-model="drawer"
          app
        >
           <v-list dense>
              <v-subheader>LIST COMPONENTS:</v-subheader>
                 <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                 >
                    <v-list-item-content>
                       <v-list-item-title>
                           <v-icon>
                              {{ item.icon }}
                           </v-icon>
                           {{item.text}}
                       </v-list-item-title>
                    </v-list-item-content>
                 </v-list-item>
           </v-list>
        </v-navigation-drawer>
  
        <v-app-bar app>
           <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title>Simple CRUD  </v-toolbar-title>
           
           <v-spacer></v-spacer>
           <span>{{ logged.first_name + " " + logged.last_name + " "}}</span>
           <v-button @click="logOut()">
            <v-icon>mdi-logout</v-icon>
           </v-button>
        </v-app-bar>
    </div>
  </template>
  
  <script>
     export default {
        data: () => ({
           drawer: null,
           items:[
              {text:'User/Client', icon:'mdi-account', to:'user'},
              {text:'Client Interest', icon:'mdi-account-multiple', to:'client'},
              {text:'Interest', icon:'mdi-gesture-tap', to:'interest'},
              {text:'Role', icon:'mdi-briefcase', to:'role'},
           ]
        }),
         computed: {
            isLoggedIn() {
                  return this.$store.state.session;
            },
            logged() {
                  return this.$store.state.logged;
            }
         },
        methods: {
         logOut() {
            this.$store.commit('logout'); // Commit the 'logout' mutation
            this.$router.push('/login'); // Navigate to the login page
         }
        },
     }
  </script>