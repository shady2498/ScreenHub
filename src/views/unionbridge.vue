<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/unionbridge.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>Union Bridge</h1>
<p> After burning out in the city, Will Shipe is summoned back home where he uncovers dark truths about his family and the town he grew up in.
</p>
<p>
<strong> Author: </strong> Brian Levin<br>
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
