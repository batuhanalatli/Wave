<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <main>
    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(assets/img/header.png)"></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">The Meeting Point for Music Lovers</h1>
          <p class="w-full md:w-8/12 mx-auto">
            Our platform is designed to be an open and free space for all music enthusiasts to share and discover the
            universal language of music. Here, anyone can upload their music, explore the contributions of others, and
            get acquainted with diverse genres.
          </p>
        </div>
      </div>

      <img class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full" src="/assets/img/introduction-music.png" />
    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Songs</span>
          <!-- Icon -->
          <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <app-song-item v-for="song in songs" :key="song.docID" :song="song" />
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </main>
</template>


<!-- eslint-disable vue/multi-word-component-names -->

<script>
import { songsCollection } from '@/includes/firebase';
import AppSongItem from '@/components/SongItem.vue'

export default {
  name: 'Home',
  components: {
    AppSongItem,
  },
  data() {
    return {
      songs: [],
      maxForPage: 25,
      pendingRequest: false,
    }
  },
  async created() {
    this.getSongs();

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {

    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

      if (bottomOfWindow) {
        this.getSongs();
      }
    },

    async getSongs() {
      if (this.pendingRequest) {
        return
      }

      this.pendingRequest = true;

      let snapshots;

      if (this.songs.length) {
        const lastDoc = await songsCollection.doc(this.songs[this.songs.length - 1].docID).get();
        snapshots = await songsCollection
          .orderBy('modified_name')
          .startAfter(lastDoc)
          .limit(this.maxForPage)
          .get();

      } else {
        snapshots = await songsCollection
          .orderBy('modified_name')
          .limit(this.maxForPage)
          .get();
      }


      snapshots.forEach((document) => {
        this.songs.push({
          docID: document.id,
          ...document.data(),

        });
      });

      this.pendingRequest = false;
    },

  }
};
</script>