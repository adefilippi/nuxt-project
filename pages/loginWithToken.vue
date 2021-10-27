<template>

</template>

<script>
import login from "./login";

export default {
  auth: false,
  async asyncData(context) {

    let router = context.app.router;
    let auth = context.$auth;
    let req = context.req

    const qs = require('querystring');
    let body = '';
    let temp = '';
    while (temp = req.read()) {
      body += temp;
    }
    // Creating body from
    let post = qs.parse(body);
    let entries = Object.entries(post);
    // Si entries dans le body
    if (entries[0] !== undefined && entries[0][1] !== undefined) {
      let bearer = entries[0][1];
      if (bearer !== undefined) {
        auth.setUserToken(bearer, 'refreshToken');
        //await $auth.setToken('locale', bearer);
        auth.$state.loggedIn = true;
      }
    }
    await router.push("/")
  }
}
</script>
