<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <!--header-->
    <div class="about">
      <section class="mb-8 py-20 text-white text-center relative">
        <div class="absolute inset-0 w-full h-full bg-contain introduction-bg"
          style="background-image: url(assets/img/header.png)"></div>
        <div class="container mx-auto">
          <div class="text-white">
            <h1 class="font-bold text-5xl mb-5">About Wave</h1>
          </div>
        </div>
      </section>
    </div>


    <div class="columns-2">

      <!--what we offer-->
      <div class="px-20">

        <div class="text-center text-4xl py-10">
          <h1> What We Offer</h1>
        </div>

        <div class="mb-8 border-slate-500 rounded-full  px-8 py-10 text-justify bg-slate-200">
          <h1 class="text-center text-xl pb-5">Unified Playlist</h1>
          <p class="text-center">
            Users can contribute to a single, unified playlist that is accessible to everyone. Add your tracks to the
            list
            and discover what others have shared.
          </p>
        </div>

        <div class="mb-8 border-slate-500 rounded-full  px-8 py-10 text-justify bg-slate-200">
          <h1 class="text-center text-xl pb-5">Discovery</h1>
          <p class="text-center">
            Discover music from different genres and cultures. Meet new artists, new sounds, and innovative music.
          </p>
        </div>

        <div class="mb-8 border-slate-500 rounded-full  px-8 py-10 text-justify bg-slate-200">
          <h1 class="text-center text-xl pb-5">Community</h1>
          <p class="text-center">
            Become part of a large community that shares your love for music. Comment on tracks, show your appreciation,
            and connect with other music enthusiasts.
          </p>
        </div>

      </div>

      <!--how it wprks-->
      <div class="px-20">

        <div class="text-center text-4xl py-10">
          <h1> How It Works</h1>
        </div>

        <div class="mb-8 border-slate-500 rounded-full  px-8 py-10 text-justify bg-slate-200">
          <h1 class="text-center text-xl pb-5">Music Upload</h1>
          <p class="text-center">
            Easily upload your own music to the unified playlist and reach a broad audience. Your music will be
            available
            for everyone to discover on our site.
          </p>
        </div>

        <div class="mb-8 border-slate-500 rounded-full  px-8 py-10 text-justify bg-slate-200">
          <h1 class="text-center text-xl pb-5">Listening</h1>
          <p class="text-center">
            Listening to music on our platform is completely free. Enjoy your favorite tunes anytime, anywhere.
          </p>
        </div>

        <div class="mb-8 border-slate-500 rounded-full  px-8 py-10 text-justify bg-slate-200">
          <h1 class="text-center text-xl pb-5">Commenting</h1>
          <p class="text-center">
            Engage with the community by commenting on tracks. Share your thoughts, give feedback, and connect with
            other
            music enthusiasts.
          </p>
        </div>
      </div>

    </div>
  </div>

</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  name: 'about',
}
</script>