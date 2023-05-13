<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  to: {
    default: 0,
  },
});

const wrapper = ref(null);

onMounted(() => {
  wrapper.value.addEventListener(
    "play",
    (evt) => {
      if (evt.target.tagName === "VIDEO" || evt.target.tagName === "AUDIO") {
        evt.target.currentTime = Number(props.to);
      }
    },
    { capture: true }
  );
});
</script>

<template>
  <div ref="wrapper" class="video-wrapper">
    <slot />
  </div>
</template>

<style>
.video-wrapper {
  display: contents;
}
</style>
