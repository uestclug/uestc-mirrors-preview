<template>
  <modal name="color-picker-ui" :adaptive="true" height="192" app>
    <div>
      <swatches :close-on-select="true" v-model="color" inline />
    </div>
  </modal>
</template>
<script>
import Swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";
export default {
  data() {
    return {
      colors: ["#F64272", "#F6648B", "#F493A7", "#F891A6", "#FFCCD5"]
    };
  },
  computed: {
    color: {
      get() {
        return this.$vuetify.theme.themes.light.primary;
      },
      set(val) {
        localStorage.colortheme = val;
        this.$vuetify.theme.themes.light.primary = val;
        this.$vuetify.theme.themes.dark.primary = val;
      }
    }
  },
  components: {
    Swatches
  }
};
</script>
