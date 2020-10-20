<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/proximity.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>Proximity</h1>
<p>Proximity (typeset as ProXimity) is a 2000 American action thriller film starring Rob Lowe and James Coburn, produced by Overseas Entertaiment for Warner Bros. Pictures handling theatrical and TV distribution and Columbia TriStar Home Entertaiment for DVD distribution . It is written by Ben Queen and Seamus Ruane and directed by Scott Ziehl. The film is about an escaped prison convict (Lowe) and the head/founder (Coburn) of a support group called "Justice For The Victim's Families" who has his own tragic past and a dark secret.
</p>
<p>
<strong> Author: </strong> Scott Ziehl<br>
<strong> Studio: </strong>Columbia Entertaiment<br>
<strong>Publisher:</strong> Columbia Entertaiment
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
