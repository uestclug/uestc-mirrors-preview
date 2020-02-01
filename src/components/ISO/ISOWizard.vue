<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" :editable="e1 > 1">
        选择发行版
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2" :editable="e1 > 2">
        选择版本
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3" :editable="e1 > 3">
        选择架构
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 4" step="4" :editable="e1 > 4">
        选择文件格式
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 5" step="5" :editable="e1 > 5">
        完成
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card-title>选择发行版</v-card-title>
        <!-- <v-card class="mb-12" color="grey lighten-1" height="200px"> </v-card> -->
        <v-item-group v-model="dist_selected">
          <v-row>
            <v-item
              v-slot:default="{ active, toggle }"
              v-for="dist in isolist"
              :key="dist.name"
              :value="dist.versions"
            >
              <v-col cols="12" md="4" lg="3" sm="6">
                <v-card :color="active ? 'primary' : ''" @click="toggle">
                  <v-card-title
                    ><v-icon>{{ icon(dist.icon) }}</v-icon
                    >&nbsp; {{ dist.name }}</v-card-title
                  >
                </v-card>
              </v-col>
            </v-item>
          </v-row>
        </v-item-group>
        <v-divider />
        <v-card-actions>
          <v-btn
            color="primary"
            @click="nextStep(1)"
            :disabled="dist_selected == null"
          >
            继续
          </v-btn>
        </v-card-actions>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card-title>选择版本</v-card-title>
        <v-item-group v-model="version_selected">
          <v-row>
            <v-item
              v-slot:default="{ active, toggle }"
              v-for="version in dist_selected"
              :key="version.name"
              :value="version"
            >
              <v-col cols="12">
                <v-card :color="active ? 'primary' : ''" @click="toggle">
                  <v-card-title
                    ><v-icon>mdi-information-outline</v-icon>&nbsp;
                    {{ version.name }}</v-card-title
                  >
                </v-card>
              </v-col>
            </v-item>
          </v-row>
        </v-item-group>

        <v-btn
          color="primary"
          @click="nextStep(2)"
          :disabled="version_selected == null"
        >
          继续
        </v-btn>

        <v-btn text @click="prevStep(2)">返回</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card-title>选择架构</v-card-title>
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="nextStep(3)">
          继续
        </v-btn>

        <v-btn text @click="prevStep(3)">返回</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card-title>选择文件格式</v-card-title>
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="nextStep(4)">
          继续
        </v-btn>

        <v-btn text @click="prevStep(4)">返回</v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn text @click="prevStep(5)">返回</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import isolist from "@/assets/data/iso.json";

export default {
  data() {
    return {
      e1: 1,
      isolist: isolist,
      dist_selected: null,
      version_selected: null
    };
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },
  methods: {
    icon: function(dist) {
      if (typeof dist != "undefined") {
        return "mdi-" + dist;
      } else {
        return "mdi-package-variant-closed";
      }
    },
    nextStep(n) {
      this.e1 = n + 1;
    },
    prevStep(n) {
      this.e1 = n - 1;
    }
  }
};
</script>
