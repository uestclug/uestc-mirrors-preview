<template>
  <div>
    <ExtendedAppBar :repo="thisrepo">
      <template v-slot:tabcontent>
        <v-tabs show-arrows align-with-title center-active background-color="primary" v-model="tab">
          <v-tab href="#tab-home">简介</v-tab>
          <v-tab
            :href="'#tab-' + dists.url"
            v-for="dists in thisrepo.dist_url"
            :key="dists.url"
            >{{ dists.name }}</v-tab
          >
        </v-tabs>
      </template>
    </ExtendedAppBar>
    <v-content>
      <v-container fluid>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-home">
            <v-card style="height: 80vh;">
              Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />
            </v-card>
          </v-tab-item>
          <v-tab-item
            v-for="tabrepo in thisrepo.dist_url"
            :key="tabrepo.url"
            :value="'tab-' + tabrepo.url"
          >
            <v-card><RepoDocView :doc="tabrepo.url"/></v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import ExtendedAppBar from "@/components/Repo/ExtendedAppBar";
import RepoDocView from "@/components/Repo/RepoDocView";
import repo from "@/assets/data/doc.json";

export default {
  name: "repo",
  data: () => ({
    tab: null
  }),
  components: { ExtendedAppBar, RepoDocView },
  computed: {
    thisrepo: function() {
      return this.findRepos(this.$route.params.reponame);
    }
  },
  methods: {
    findRepos(str) {
      return repo.linux.find(obj => {
        return obj.id === str;
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
