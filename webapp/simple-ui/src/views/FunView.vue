<template>
  <div class="fun-tools">
    <h1>Fun tools</h1>

      <ImageView />

  </div>
</template>

<script>
// @ is an alias to /src
import ImageView from '@/components/ImageView.vue'

export default {
  name: 'FunView',
  components: {
    ImageView
  }
}
</script>

