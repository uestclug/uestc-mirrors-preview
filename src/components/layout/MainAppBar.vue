<template>
  <v-app-bar elevate-on-scroll color="primary" :dark="true" app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <span>UESTC Mirrors</span>
    </v-toolbar-title>
    <Search />
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
  </v-app-bar>
</template>
<script>
import Search from "@/components/layout/Search";
export default {
  name: "AppBar",
  components: {
    Search
  },
  data() {
    return {
      color: "#1CA085"
    };
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
