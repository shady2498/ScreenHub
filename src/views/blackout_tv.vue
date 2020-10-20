<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/blackout_tv.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>Blackout</h1>
<p>Blackout is a 2012 three-part British television drama series produced by Red Production Company.[1] A corrupt council official wakes from an alcoholic blackout to realise that he may have been responsible for a murder. He soon begins a dramatic quest for redemption. The series is directed by Tom Green and written by Bill Gallagher.
</p>
<p>
<strong> Author: </strong> Bill Gallagher<br>
<strong> Studio: </strong>BBC One<br>
<strong>Publisher:</strong> BBC One
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
