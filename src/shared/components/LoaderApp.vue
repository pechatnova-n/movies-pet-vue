<template>
  <div class="loader">
    <div class="loader__spinner">

    </div>
  </div>
</template>
<script>
export default {
  name: 'LoaderApp',
}
</script>
<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__spinner {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat,
      conic-gradient(#0000 30%, #ffa516);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
    animation: l13 1s infinite linear;
  }

  @keyframes l13 {
    100% {
      transform: rotate(1turn);
    }
  }
}
</style>

