<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/waco.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>Waco</h1>
<p>
The FBI and ATF seize religious leader David Koresh's Branch Davidian compound near Waco, Texas in the spring of 1993.
</p>
<p>
<strong> Author: </strong>  Drew Dowdle<br>
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
