<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/flyingcars.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>Flying cars</h1>
<p>Just weeks before his wedding, an aimless filmmaker stuck at an office job develops a secret obsession with radio-controlled car racing and meets a talented girl at the racetrack who agrees...
</p>
<p>
<strong> Author: </strong> Dave hill<br>
<strong> Studio: </strong>Dave hill<br>
<strong>Publisher:</strong> Dave hill
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
