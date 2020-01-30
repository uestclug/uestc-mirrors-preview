<template>
  <v-app-bar
    shrink-on-scroll
    prominent
    elevate-on-scroll
    color="primary"
    :dark="true"
    app
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <v-icon>mdi-{{ repo.icon }}</v-icon> &nbsp;
      <span>{{ repo.name }}</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="客官, 今天想来点什么?"
      class="hidden-sm-and-down"
    />
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn @click="toggleDark" icon>
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
    <v-btn @click="$modal.show('color-picker-ui')" icon>
      <v-icon>mdi-palette</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-tabs align-with-title background-color="primary">
        <v-tab href="#tab-home">简介</v-tab>
        <v-tab
          :href="'#tab-' + dists.url"
          v-for="dists in repo.dist_url"
          :key="dists.url"
          >{{ dists.name }}</v-tab
        >
      </v-tabs>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppBar",
  data() {
    return {
      color: "#1CA085"
    };
  },
  props: ["repo"],
  computed: {
    thisrepo: function() {
      if (this.$route.params.reponame != undefined) {
        return this.findRepos(this.$route.params.reponame);
      }
      return [];
    },
    thisapp: function() {
      if (this.$route.params.appname != undefined) {
        return this.findApp(this.$route.params.reponame);
      }
      return [];
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    toggleDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
<style lang="scss" scoped>
swatches {
  max-height: 24px;
  max-width: 24px;
}
</style>
