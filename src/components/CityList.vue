<template>
  <div>
    <v-data-table
    :items-per-page="15"
    :items="cities"
    :headers="headers"
    :search="search">
    <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search County"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import json from '../assets/csvjson_min.json'
export default {
    name:"CityList",
    data(){
        return{
            cities:json,
            search: '',
            headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'city',
          },
          { text: 'Country', value: 'country' },
          { text: 'Lat', value: 'lat' },
          { text: 'Lng', value: 'lng' },
          { text: 'County', value:"admin_name"},
        ],
        }
    }
}
</script>

<style lang="scss" scoped></style>
