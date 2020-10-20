<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/onepiece.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>One Piece</h1>
<p>One Piece (Japanese: ワンピース, Hepburn: Wan Pīsu) is a Japanese anime television series adapted from the manga of the same name by Eiichiro Oda. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next Pirate King.
Produced by Toei Animation, One Piece premiered in Japan on Fuji TV on October 20, 1999, has aired more than 900 episodes, and has been exported to various countries around the world.[2]
In Japan, One Piece has consistently been among the top five animated shows in television viewer ratings. On international online video platforms, the One Piece anime got 1.9 million demand expressions per month in 2016, making it the year's most popular anime and fourteenth most popular TV show in the world, according to Business Insider.
</p>
<p>
<strong> Author: </strong> Oda<br>
<strong> Studio: </strong>Toei Animation<br>
<strong>Publisher:</strong> Toei Animation
</p>
</div>
</b-col>
</b-row>
<commentc/>
</b-container>
</div>
</template>

<script>
import commentc from '@/components/commentc.vue'

export default {
  components: {
    commentc
  }
}
</script>

<style scoped>
body{
padding-top: 100px;
}
img{
padding-top: 50px ;
}
</style>
