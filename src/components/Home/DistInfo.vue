<template>
  <v-col cols="12" md="6" lg="4" sm="6">
    <v-card
      :to="dist.info"
      hover
      :id="'infocard-' + dist.name"
      :loading="loading"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ disttype }}</div>
          <v-list-item-title class="headline mb-1"
            ><v-icon large>mdi-{{ icon }}</v-icon
            >&nbsp; {{ dist.name }}</v-list-item-title
          >
          <v-list-item-subtitle>{{ statusInfo }}</v-list-item-subtitle>
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
  props: ["dist", "status"],
  computed: {
    icon: function() {
      if (typeof this.dist.icon != "undefined") {
        return this.dist.icon;
      } else {
        return "package-variant-closed";
      }
    },
    statusInfo: function() {
      if (this.status != null) {
        if (this.status.status === "success") {
          var updateDate = new Date(this.status.updated * 1000);
          var date_str = updateDate.getFullYear() + "-";
          date_str +=
            (updateDate.getMonth() + 1 < 10
              ? "0" + (updateDate.getMonth() + 1)
              : updateDate.getMonth() + 1) + "-";
          date_str += updateDate.getDate() + " ";
          date_str += updateDate.getHours() + ":";
          date_str += updateDate.getMinutes();
          return "更新时间：" + date_str;
        }
        if (this.status.status === "failed") {
          return "更新失败";
        }
        if (this.status.status === "syncing") {
          return "更新中";
        }
      }
      return "未知";
    },
    loading: function() {
      if (this.status != null) {
        if (this.status.status === "syncing") {
          return true;
        }
        if (this.status.status === "failed") {
          return "error";
        }
      }
      return false;
    },
    disttype: function() {
      if (typeof this.dist.info != "undefined") {
        if (this.dist.info.startsWith("app")) {
          return "应用程序";
        }
        if (this.dist.info.startsWith("repo")) {
          return "Linux 发行版";
        }
        return "未知";
      } else {
        return "未知";
      }
    }
  }
};
</script>
