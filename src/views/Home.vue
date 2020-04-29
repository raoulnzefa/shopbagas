<template>
  <div class="home">
      <shopbagas/>
      <bagbagas/>
      <bag1bagas/>
      <bag2bagas/>
      <bag3bagas/>
      <footerbagas/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import shopbagas from '@/components/shopbagas.vue'
import bagbagas from '@/components/bagbagas.vue'
import bag1bagas from '@/components/bag1bagas.vue'
import bag2bagas from '@/components/bag2bagas.vue'
import bag3bagas from '@/components/bag3bagas.vue'
import footerbagas from '@/components/footerbagas.vue'

export default {
  name: 'Home',
  components: {
    shopbagas,
    bagbagas,
    bag1bagas,
    bag2bagas,
    bag3bagas,
    footerbagas
  }
}
</script>
