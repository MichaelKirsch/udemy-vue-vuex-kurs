<template>
  <div>
    <v-container class="">
      
      <v-timeline 
        >
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          
        >
          <template v-slot:icon>
             <v-icon
                color="yeah.color"
                
            >
          {{year.icon}}
        </v-icon>
            
          </template>
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              {{year.head}}
            </h2>
            <div>
              {{ year.text }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "History",
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "September 2019",
        head:"Idea",
        text: "Idea of the rescuecam",
        icon: "mdi-check"
      },
      {
        color: "green",
        year: "September 2020",
        head:"Prize",
        text: "Winner of the Allgäuer Gründerbühne (6000€ Prize)",
        icon: "mdi-check"
      },
      {
        color: "pink",
        year: "November 2021",
        head:"Investment",
        text: "Funding secured by private investment",
        icon: "mdi-check"
      },
      {
        color: "amber",
        year: "January 2022",
        head:"Company",
        text: "Creation of Zafir Technology in Kempten",
        icon: "mdi-check"
      },
      {
        color: "orange",
        year: "Future",
        head:"Product",
        text: "Bring awesome tech to the customers",
        icon: ""
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
