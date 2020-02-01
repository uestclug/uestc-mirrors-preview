<template>
  <div>
    <MainAppBar />
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <ISOWizard />
          </v-col>
        </v-row>
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
