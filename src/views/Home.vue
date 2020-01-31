<template>
  <div>
    <MainAppBar />
    <v-content>
      <v-container fluid>
        <PrimaryView />
        <v-footer>
          <v-col class="text-center"> UESTC Mirrors &copy; {{ new Date().getFullYear() }} </v-col>
        </v-footer>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import MainAppBar from "@/components/layout/MainAppBar";
import PrimaryView from "@/components/Home/PrimaryView";

export default {
  name: "home",
  components: { MainAppBar, PrimaryView }
};
</script>
<style lang="scss" scoped></style>
