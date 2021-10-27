<template>
  <div>
    <h1>Hello world!</h1>
    <NuxtLink to="/fun/fun">Fun page</NuxtLink>
  </div>
</template>
<script>

export default {
  middleware: 'auth'
}

</script>
