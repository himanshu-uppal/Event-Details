<template>
<main>
  <h1>Events</h1>
       <div id="event-cards" class="row">
            <EventsCard v-for="event in sharedState.events" :event="event"></EventsCard>
            </div>

</main>
</template>

<script>
import EventsCard from "@/components/EventsCard.vue";
import { store } from "../store.js";
export default {
  components: {
    EventsCard
  },

  data() {
    return {
      sharedState: store.state
    };
  }
};
</script>
