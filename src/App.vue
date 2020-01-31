<template>
  <v-app>
    <NavigationDrawer app />
    <router-view></router-view>
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
