<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/blackout.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>Black Out</h1>
<p>The Blackout (Russian: Аванпост, romanized: Avanpost, lit. 'Outpost') is a 2019 Russian science fiction thriller film directed by Egor Baranov. It stars Pyotr Fyodorov.[2][3][4][5] The film was released in the Russian Federation on November 21, 2019.
</p>
<p>
<strong> Author: </strong>Natalya Dubovaya<br>
<strong> Studio: </strong><br>
<strong>Publisher:</strong>
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
