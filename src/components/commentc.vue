<template>
<div id="thepage">
<div>
    <!-- vue-star is not working for liking the post -->
   <vue-star animate="animated bounceIn" color="#F05654">
    <i slot="icon" class="fa fa-heart"></i>
  </vue-star>
</div>
<div>
  <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
  <strong>Rating : {{value}}</strong>
  </div>

<br><br><br><br>
<div class="container">
<div class="button">
<b-button pill variant="primary">Like</b-button>
<br>
</div>
<div class="comment-list">
    <span v-show="loading" class="spinner"></span>
          <ul>
              <comment v-for="comment in comments" :comment="comment" :key="comment"></comment>
          </ul>
        </div>

        <commentform v-on:commented="updateComment"></commentform>
</div>
<br><br>
</div>
</template>

<script>

import comment from '@/components/comment.vue'
import commentform from '@/components/commentform.vue'
export default {
  data () {
    return {
      myToggle: false,
      value: 2,
      comments: [],
      loading: false
    }
  },

  components: {
    comment,
    commentform
  },

  created () {
    this.loading = true

    // Fetch the comments
    this.$http.get('http://localhost:8080').then((response) => {
      // success callback
      this.comments = response.data
      this.loading = false
    }, (response) => {
      // error callback
      console.error(response)
      this.loading = false
    })
  },

  methods: {
    updateComment (comment) {
      this.comments.push(comment)
    },
    handleClick () {

    }
  }

}
</script>

<style>
body{
background-color:black;
height: 100%;
}

.button{
padding-bottom: 10px;
float: left;
}
#thepage{
margin-top: 50px;
}

.content p{
padding: 0 0 0 50px;
position: relative;
}
</style>
