<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- <v-app-bar-nav-icon @click="openSideMenu"></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
      <SideNav/>

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav
  },
  data: () => ({
    //
  }),
  methods: {
    // openSideMenu () {
    //   this.$store.dispatch('toggleSideMenu')
    // },
    ...mapActions(['toggleSideMenu'])
    // ...は分割構文。それぞれmethods内に展開する意味
  }
};
</script>
