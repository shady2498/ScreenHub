<template>
  <div id="app">
        <div>
          <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">Home</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="/anime">Anime</b-nav-item>
                <b-nav-item href="/movies">Movies</b-nav-item>
                <b-nav-item href="/news">News</b-nav-item>
                <b-nav-item href="/tvseries">TV Series</b-nav-item>
            <b-nav-item href="/watchlist">WatchList</b-nav-item>

            </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">

                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item right>
                  <!-- Using 'button-content' slot -->
                  <template v-slot:button-content>
                    <em>User</em>
                  </template>
                  <b-nav-item v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</b-nav-item>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
    </div>

<router-view @authenticated="setAuthenticated" />
  <div id="myfooter">
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>All Rights Reserved ScreebHub</strong>
    </v-col>
  </v-footer>
   </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
      authenticated: true,
      mockAccount: {
        username: 'userone',
        password: 'password'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

}

#myfooter{

 position: absolute;
 bottom: 0;
 width: 100%;
 background: grey;
}

</style>
