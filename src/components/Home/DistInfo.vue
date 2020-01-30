<template>
  <v-col cols="12" md="6" lg="4" sm="6">
    <v-card :to="dist.info" hover>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ disttype }}</div>
          <v-list-item-title class="headline mb-1"
            ><v-icon large>mdi-{{ icon }}</v-icon
            >&nbsp; {{ dist.name }}</v-list-item-title
          >
          <v-list-item-subtitle>更新时间: 2020-01-01</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions> -->
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: ["dist"],
  computed: {
    icon: function() {
      if (typeof this.dist.icon != "undefined") {
        return this.dist.icon;
      } else {
        return "package-variant-closed";
      }
    },
    disttype: function() {
      if (typeof this.dist.info != "undefined") {
        if (this.dist.info.startsWith("app")) {
          return "应用程序";
        }
        if (this.dist.info.startsWith("repo")) {
          return "Linux发行版";
        }
        return "未知";
      } else {
        return "未知";
      }
    }
  }
};
</script>
