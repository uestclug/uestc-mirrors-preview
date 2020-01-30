<template>
  <v-col cols="12" md="4">
    <v-card class="mx-auto">
      <v-list two-line subheader>
        <v-subheader>镜像站公告</v-subheader>
        <v-list-item two-line v-for="(news_item, index) in news" :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="news_item.title"></v-list-item-title>
            <v-list-item-subtitle
              v-text="news_item.desc"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text
              v-text="news_item.time"
            ></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
</template>
<script>
import news from "@/assets/data/news.json";

export default {
  data: () => ({
    news: news.news
  })
};
</script>
