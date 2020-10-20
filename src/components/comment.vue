<template>
      <div class="msg">
        <div class="msg-body">
          <p class="name">{{ comment.name }} <span class="date">{{ comment.time }}</span></p>
          <p v-html="comment.message"></p>
        </div>
      </div>
</template>

<script>
export default {

  props: ['comment']

}
</script>
