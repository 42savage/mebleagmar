<template>
  <div class="wrap">
    <!-- Messenger Wtyczka czatu Code -->
    <div id="fb-root"></div>

    <!-- Your Wtyczka czatu code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var chatbox = document.getElementById('fb-customer-chat')
    chatbox.setAttribute('page_id', '243529612765166')
    chatbox.setAttribute('attribution', 'biz_inbox')
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v14.0',
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  },
}
</script>

<style></style>
