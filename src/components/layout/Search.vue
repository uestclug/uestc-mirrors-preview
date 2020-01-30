<template>
  <v-autocomplete
    flat
    :items="dists"
    item-text="name"
    item-value="name"
    solo-inverted
    hide-details
    prepend-inner-icon="mdi-magnify"
    label="客官, 今天想来点什么?"
    class="hidden-sm-and-down"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>
          貌似没要您想找的镜像...
        </v-list-item-title>
      </v-list-item>
    </template>
    <template v-slot:item="{ item }">
      <v-list-item-avatar
        color="indigo"
        class="headline font-weight-light white--text"
      >
      <v-icon>mdi-{{icon(item.icon)}}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon>mdi-arrow-right-circle</v-icon>
      </v-list-item-action>
    </template>
  </v-autocomplete>
</template>
<script>
import dists from "@/assets/data/dir.json";
export default {
  data: () => ({
    dists: dists
  }),
  methods: {
    icon: function(dist) {
      if (typeof dist != "undefined") {
        return dist;
      } else {
        return "package-variant-closed";
      }
    }
  }
};
</script>
