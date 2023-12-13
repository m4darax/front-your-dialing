<template lang="">
    <nav>
    <div class="flex flex-column gap-3">
      <HeaderMain />
    </div>
  </nav>
  <div class="flex justify-content-center">
    <div class="width-body pt-2">
      <router-view />
    </div>
  </div>
</template>
<script>

import HeaderMain from '@/components/HeaderMain.vue';

export default {
  name: 'UserLayout',
  components: { HeaderMain }

}
</script>
<style>

.width-body {
  max-width: 50%;
  max-height: 50%;
}
</style>