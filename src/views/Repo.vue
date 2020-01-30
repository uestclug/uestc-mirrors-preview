<template>
  <div>
    <ExtendedAppBar :repo="thisrepo" />
    <v-tabs-slider></v-tabs-slider>
    <v-tab-item
      v-for="tabrepo in findRepos(this.$route.params.reponame).dist_url"
      :key="tabrepo.url"
      :value="'#tab-' + tabrepo.url"
    >
      <v-card>
        {{ tabrepo.name }}
      </v-card>
    </v-tab-item>
  </div>
</template>

<script>
import ExtendedAppBar from "@/components/Repo/ExtendedAppBar";
import repo from "@/assets/data/doc.json";

export default {
  name: "repo",
  components: { ExtendedAppBar },
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
