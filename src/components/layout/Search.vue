<template>
  <v-autocomplete
    flat
    solo-inverted
    hide-details
    prepend-inner-icon="mdi-magnify"
    label="客官, 今天想来点什么?"
    class="hidden-sm-and-down"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>
          搜寻您想要的镜像...
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>
