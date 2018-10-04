export const store = {
    debug: true,
    state: {
      events: [
        {
          name: 'Travel Festival',
          id: 2,
          description: 'Travel Adventures creates custom educational travel experiences serving teachers and students nationwide.Travel Adventures is a provider of student tours including The National Performing Arts Festival.',
          banner: 'travel-festival.jpg',
          actions: {
            going: false,
            notGoing: false,
            notDecided: false
          },
          largeBanner : 'travel-festival-large.jpg'
        },
        {
          name: 'Music Fest',
          id: 3,
          description: 'A music festival is a community event oriented towards live performances of singing and instrument playing that is often presented with a theme such as musical genre (e.g., blues, folk, jazz, classical music), nationality, or locality of musicians, or holiday. Some festivals are focused on women’s music.',
          banner: 'music-festival.jpg',
          actions: {
            going: false,
            notGoing: false,
            notDecided: false
          },
          largeBanner : 'music-festival-large.jpg'
        },
        {
          name: 'Hack Fest',
          id: 4,
          description: 'Hackfest is a 36 hour hackathon that encourages learning, collaboration, growth, thinking and innovation. Participants trade their sleep for a weekend and join a team to create amazing things - project - typically software - in an environment optimized for creativity.',
          banner: 'hack-fest.jpg',
          actions: {
            going: false,
            notGoing: false,
            notDecided: false
          },
          largeBanner : 'hack-fest-large.jpg'
        },
        {
          name: 'Save Nature Initiative',
          id: 5,
          description: 'Nature Conservation is a peer-reviewed, open access, rapidly published online journal covering all aspects of nature conservation. The journal publishes papers across all disciplines interested in basic and applied conservation ecology and nature conservation in general at various spatial, temporal and evolutionary scales, from populations to ecosystems and from microorganisms and fungi to higher plants and animals.',
          banner: 'save-nature.jpg',
          actions: {
            going: false,
            notGoing: false,
            notDecided: false
          },
          largeBanner : 'save-nature-large.jpg'
        }
      ]
    },
    setEventResponseAction(eventId, going, notGoing, notDecided) {
      const id = parseInt(eventId);
      let event = this.state.events.find(function (event) {
        return event.id == id;
      });
      if (this.debug) console.log(`setEventResponseAction triggered on event =${event.name},event-id = ${event.id} with going = ${going} , notGoing = ${notGoing} and notDecided = ${notDecided}`)
      event.actions.going = going;
      event.actions.notGoing = notGoing;
      event.actions.notDecided = notDecided;
    }
  }
  