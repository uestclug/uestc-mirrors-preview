<template>
  <div>
    <StatusAppBar>
      <template v-slot:tab>
        <v-tabs
          show-arrows
          align-with-title
          center-active
          background-color="primary"
          v-model="tab"
        >
          <v-tab href="#tab-server">服务器状态</v-tab>
          <v-tab href="#tab-sync">同步状态</v-tab>
        </v-tabs>
      </template>
    </StatusAppBar>
    <v-content>
      <v-container fluid>
        <v-card>
          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-server">
              <v-layout>
                <v-row align="center" justify="center">
                  <v-btn icon large target="_blank">
                    <v-icon large>mdi-selection-off</v-icon> </v-btn
                  ><span>这里是服务器状态页面</span>
                </v-row>
              </v-layout>
            </v-tab-item>
            <v-tab-item value="tab-sync">
              <v-layout>
                <v-row align="center" justify="center">
                  <v-btn icon large target="_blank">
                    <v-icon large>mdi-selection-off</v-icon> </v-btn
                  ><span>这里是同步状态页面</span>
                </v-row>
              </v-layout>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import StatusAppBar from "@/components/Status/StatusAppBar";

export default {
  name: "status",
  components: { StatusAppBar },
  data: () => ({
    tab: "tab-server"
  }),
  mounted: function() {
    if (typeof this.$route.params.tab != "undefined") {
      this.tab = "tab-" + this.$route.params.tab;
    }
  }
};
</script>
<style lang="scss" scoped></style>
