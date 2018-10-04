<template>
<div class="card col-3" style="width: 18rem;"  >
                <img class="card-img-top" :src="getBannerPathComputed" alt="Card image cap">
                  <div class="card-body">
                    <h3 class="card-title">{{event.name}}</h3>
                    <p class="card-text">{{eventDescriptionComputed}}</p>
                     <router-link :to="{ name: 'event-details', params: { id: event.id }}" class="card-button btn btn-primary">Read More</router-link>                    
                  </div>
            </div>     
    
</template>
<script>
export default {
  props: ["event"],
  name: "EventsCard",
  computed: {
    getBannerPathComputed: function() {
      return require("@/assets/" + this.event.banner);
    },
    eventDescriptionComputed: function() {
      let shortDescription;
      if (this.event.description.length > 150) {
        shortDescription = this.event.description.substring(0, 150);
      } else {
        shortDescription = this.event.description;
      }

      return shortDescription;
    }
  }
};
</script>
<style scoped>
img {
  width: 200px;
  height: 200px;
      align-self: center;
    padding-top: 2%;
}
.card-button {
  bottom: 0;
}
</style>

