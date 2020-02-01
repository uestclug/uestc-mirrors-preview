<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn dark v-on="on" icon>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="2" align-self="center"
            ><v-img :src="logo" width="100%" :aspect-ratio="1"
          /></v-col>
          <v-col cols="10">
            <v-card-title class="headline lighten-2" primary-title>
              UESTC Mirrors
            </v-card-title>
            <v-card-subtitle>Insider Preview</v-card-subtitle></v-col
          >
        </v-row>

        UESTC Mirrors 是 UESTC LUG 与 UESTC NetUnion 共同维护，
        在学校信息中心的支持下，为校内外（暂时只有校内）用户提供加速服务的镜像站点。
        <br />
        UESTC LUG 是由电子科技大学 GNU/Linux
        使用者共同发起并运营的开放性组织，旨在宣传自由软件精神，为校内外
        GNU/Linux 爱好者提供活动的平台和机会，并为校内外用户提供便利。
        <v-card-subtitle><b>授权和鸣谢</b></v-card-subtitle>
        本镜像在文档上借鉴了<a href="https://mirrors.tuna.tsinghua.edu.cn/"
          >TUNA Mirrors</a
        >的部分内容。<br />
        本镜像目前在内部开发阶段，公开测试时将公布源码。
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          关闭
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import logo from "@/assets/logo.png";
export default {
  data() {
    return {
      logo: logo,
      dialog: false
    };
  }
};
</script>
