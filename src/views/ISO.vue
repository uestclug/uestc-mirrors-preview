<template>
  <div>
    <MainAppBar />
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <ISOWizard :req="down" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import MainAppBar from "@/components/layout/MainAppBar";
import ISOWizard from "@/components/ISO/ISOWizard";

export default {
  name: "ISO",
  data: () => ({
    down: {
      repo: null,
      version: null,
      arch: null
    }
  }),
  components: { MainAppBar, ISOWizard },
  mounted: function() {
    if (typeof this.$route.params.repo != "undefined") {
      this.down.repo = this.$route.params.repo;
    }
    if (typeof this.$route.params.version != "undefined") {
      this.down.version = this.$route.params.version;
    }
    if (typeof this.$route.params.arch != "undefined") {
      this.down.arch = this.$route.params.arch;
    }
  }
};
</script>
<style lang="scss" scoped></style>
