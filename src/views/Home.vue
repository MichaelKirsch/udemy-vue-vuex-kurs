<template>
    <div>
      <city-list></city-list> 
      <History></History>
    </div>
</template>

<script>
import History from "../components/History.vue";

import CityList from "../components/CityList.vue";
export default {
  name: "Home",
  components: {
    History,
    
    CityList,
  },
};
</script>

<style lang="scss" scoped></style>
