<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/trust.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>Trust</h1>
<p>Trust (stylized as trust_) is a 2010 American drama thriller film directed by David Schwimmer and based on a screenplay by Andy Bellin and Robert Festinger, and an uncredited story by Schwimmer. It stars Clive Owen, Catherine Keener, Viola Davis, Jason Clarke, and Liana Liberato.

The film is about a fourteen-year-old girl who becomes a victim of sexual abuse when she befriends a man on the Internet.
</p>
<p>
<strong> Author: </strong> Andy Bellin<br>
<strong> Studio: </strong>Millennium Films<br>
<strong>Publisher:</strong>Millennium Films
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
