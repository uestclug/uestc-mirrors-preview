<template>
  <v-card-text>
    <v-skeleton-loader
      :loading="loading"
      transition="fade-transition"
      height="100vh"
      type="article"
    >
      <VueShowdown :markdown="mdtext" v-if="!docerr" />
      <v-row v-if="docerr" align="center" justify="center">
        <v-btn :href="source" icon large target="_blank" v-on="on">
          <v-icon large>mdi-selection-off</v-icon> </v-btn
        ><span>哦豁，文档不见了</span>
      </v-row>
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
