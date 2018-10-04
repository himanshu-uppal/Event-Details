<!-- {{ $route.params.id }} -->

<template>
 <main >
     
           <EventDetails :event="getRequestedEvent()"></EventDetails>
        </main>

    
</template>
<script>
import EventDetails from "@/components/EventDetails.vue";
import { store } from "../store.js";

export default {
  props: {
    id:{
      type:[Number,String],
      validator(value){
        return Number.isInteger(Number(value))
      }
    }
  },
  components: {
    EventDetails
  },
  data() {
    return {
      sharedState: store.state
    };
  },
  methods: {
    getRequestedEvent() {
     const id = parseInt(this.id);
      return this.sharedState.events.find(function(event) {
        return event.id == id;
      });
    }
  }
};
</script>

