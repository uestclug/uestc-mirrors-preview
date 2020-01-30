<template>
  <v-row>
    <v-col cols="12">
      <v-card class="">
        <v-card-title class="headline justify-center"
          >UESTC 镜像站</v-card-title
        >

        <v-card-subtitle class="text-center"
          >本站由电子科技大学Linux用户组及电子科技大学网管会共同提供。
          <br />
          本站共收录了<b>114</b>个Linux发行版镜像和<b>514</b>个软件包镜像。</v-card-subtitle
        >
        <v-card-actions class="justify-center">
          <v-btn color="primary" large outlined to="browse"
            ><v-icon>mdi-folder</v-icon>浏览目录</v-btn
          >
                    <v-btn color="primary" large outlined to="downloadiso"
            ><v-icon>mdi-album</v-icon>下载ISO</v-btn
          >
        </v-card-actions>
        <v-card-actions class="justify-center">
          <v-btn text icon color="grey">
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          <v-btn text icon color="blue">
            <v-icon>mdi-telegram</v-icon>
          </v-btn>
          <v-btn text icon color="brown">
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn text icon color="purple">
            <v-icon>mdi-qqchat</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-row>
          <DistInfo
            v-for="repo_item in dists"
            :key="repo_item.name"
            :dist="repo_item"
          />
      </v-row>
    </v-col>
    <NewsView />
  </v-row>
</template>
<script>
import NewsView from "@/components/Home/NewsView";
import DistInfo from "@/components/Home/DistInfo";

import dists from "@/assets/data/dir.json"

export default {
  components: {
    NewsView,
    DistInfo
  },
  data: () => ({
    dists: dists
  })
};
</script>
