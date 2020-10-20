<template>
<div id="thepage">
<b-container class="bv-example-row">
<b-row>
<b-col>
<div>
<img alt="king" src="../assets/therookie.jpg" >
</div>
</b-col>
<b-col>
<div class="content">
<h1>The Rookie</h1>
<p>The Rookie is an American police procedural comedy-drama television series created for ABC by Alexi Hawley. The series follows John Nolan, a man in his forties, who becomes the oldest rookie at the Los Angeles Police Department. The series is produced by ABC Studios and Entertainment One.
The series stars Nathan Fillion, Alyssa Diaz, Richard T. Jones, Titus Makin Jr., Mercedes Mason, Melissa O'Neil, Afton Williamson, Mekia Cox and Eric Winter. The Rookie premiered on October 16, 2018. The first season ran until April 16, 2019. The second season ran from September 29, 2019, to May 10, 2020. In May 2020, ABC renewed the series for a third season.
</p>
<p>
<strong> Author: </strong> Michele Greco<br>
<strong> Studio: </strong>ABC Studios<br>
<strong>Publisher:</strong> ABC
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
