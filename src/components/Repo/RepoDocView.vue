<template>
  <v-card-text>
    <v-skeleton-loader
      :loading="loading"
      transition="fade-transition"
      height="100vh"
      type="article"
    >
      <VueShowdown class="mdtext" :markdown="mdtext" v-if="!docerr" />
      <v-layout v-if="docerr">
        <v-row align="center" justify="center">
          <v-btn icon large target="_blank">
            <v-icon large>mdi-selection-off</v-icon> </v-btn
          ><span>哦豁，文档不见了</span>
        </v-row>
      </v-layout>
    </v-skeleton-loader>
  </v-card-text>
</template>
<script>
export default {
  data: () => ({
    loading: true,
    docerr: false,
    mdtext: null
  }),
  props: ["doc"],
  mounted: function() {
    this.$ajax
      .get("doc/" + this.doc + ".md")
      .then(response => (this.mdtext = response.data))
      .catch(() => {
        this.docerr = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
<style lang="scss">
.mdtext code {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
</style>
