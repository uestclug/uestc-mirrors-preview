<template>
  <v-app>
    <NavigationDrawer app />
    <router-view></router-view>
    <!-- <v-footer app> </v-footer> -->
    <ColorPicker app />
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/layout/NavigationDrawer";
import ColorPicker from "@/components/modal/ColorPicker";

export default {
  name: "App",

  components: {
    NavigationDrawer,
    ColorPicker
  }
};
</script>
