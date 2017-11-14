# Not logged in users (visitors)

If you are installing the Messenger for anonymous users only (users without an account), the installation is very simple. All you need to do is:

1. Add the following snippet before the closing `</body>` tag
1. Replace `<YOUR_APP_ID>` in `intercomSettings` AND the snippet itself ('https://widget.intercom.io/widget/<APP_ID>') with your app ID.

```html
<script>
  window.intercomSettings = {
    app_id: "<APP_ID>"
  };
</script>

<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/<APP_ID>';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>
```
