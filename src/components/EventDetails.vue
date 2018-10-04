<template>
<div id="event-details" class="container">   
               <div class="event">
                   <div class="event-image row">
                       <div class="col-10"></div>
                       <img :src="getLargeBannerPathComputed(event)"> 
                       </div>
                   <div class="event-name"><h1> {{event.name}}</h1></div>
                   <div class="event-description"><h4>{{event.description}}</h4></div>
                   <div class="event-actions">
                      
                       <div class="row">
                        <div class="col-4">
                            <button class="btn btn-primary" @click="updateEventResponse('going')" :class="{'current-response': event.actions.going}" >Going</button>
                        </div>
                       <div class="col-4">
                            <button class="btn btn-primary" @click="updateEventResponse('notGoing')" :class="{'current-response': event.actions.notGoing}">Not Going</button>
                       </div>
                       <div class="col-4">
                            <button class="btn btn-primary" @click="updateEventResponse('notDecided')" :class="{'current-response': event.actions.notDecided}">Not decided yet</button>
                       </div>
                       </div>                       
                       </div>                   
               </div>
           </div>
    
</template>
<script>
import { store } from "../store.js";
export default {
  name: "EventDetails",
  props: ["event"],
  methods: {
    getLargeBannerPathComputed(event) {
      return require("@/assets/" + event.largeBanner);
    },
    updateEventResponse(response) {
      if (response == "going") {
        console.log("going");
        store.setEventResponseAction(this.event.id, true, false, false);
      } else if (response == "notGoing") {
        console.log("not going");
        store.setEventResponseAction(this.event.id, false, true, false);
      } else {
        console.log("not decided yet");
        store.setEventResponseAction(this.event.id, false, false, true);
      }
    }
  }
};
</script>
<style scoped>
body {
  font-family: "Signika", sans-serif;
}
img {
  width: 100%;
  height: 450px;
}
.current-response {
  background-color: greenyellow;
  color: darkred;
}
</style>


