<template>
<div class="king" >
<div class="carousel">
<b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
background="#ababab"
    width= "100%"
  >
    <b-carousel-slide
      img-src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
><h1>ScreenHub</h1>
<p>Movies | TV Shows | Anime</p><br><p>Share your thoughts</p><br><p>And have fun</p></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ><h1>ScreenHub</h1><p>Movies | TV Shows | Anime</p><br><p>Share your thoughts</p><br><p>And have fun</p></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
    ><h1>ScreenHub</h1><p>Movies | TV Shows | Anime</p><br><p>Share your thoughts</p><br><p>And have fun</p></b-carousel-slide>
  </b-carousel>
</div>
</div>
</template>
<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

.text-home{
width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
margin-bottom: 380px
}

h1.b-carousel{
text-align: center;
margin: 15px;
}

.b-carousel-slide{
text-align: centre;
}

</style>
