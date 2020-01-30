<template>
  <div>
    <MainAppBar />
    <v-content>
      <v-container class="fill-height" fluid>
        <ISOWizard />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import MainAppBar from "@/components/layout/MainAppBar";
import ISOWizard from "@/components/ISO/ISOWizard";

export default {
  name: "ISO",
  components: { MainAppBar, ISOWizard }
};
</script>
<style lang="scss" scoped></style>
