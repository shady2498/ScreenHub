<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/tomclancyjackryan.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>Tom Clancy JAck Ryan</h1>
<p>An up-and-coming CIA analyst, Jack Ryan, is thrust into a dangerous field assignment as he uncovers a pattern in terrorist communication that launches him into the center of a dangerous gambit.
</p>
<p>
<strong> Author: </strong> Graham Roland<br>
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
