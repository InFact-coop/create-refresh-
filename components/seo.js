import Head from "next/head"

function SEO({ title, description, cartoonId }) {
  const defaultDescription = "Try the EU Compliant Meme Generator for yourself"
  const defaultTitle = "Make ANY Meme EU Compliant!"
  const defaultImage = "https://i.ibb.co/mNMWtZD/Meme-Generator-AD-01.jpg"
  const cartoonImage = `https://api.compliantmemegenerator.eu/fetch/img/compliant/${cartoonId}`

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta charSet="UTF-8" />
      <meta
        property="og:url"
        content={
          cartoonId
            ? `https://compliantmemegenerator.eu/cartoon?cartoonId=${cartoonId}&fromIndex=false`
            : "https://compliantmemegenerator.eu"
        }
      />
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="og:image"
        content={cartoonId ? cartoonImage : defaultImage}
      />
      <meta name="og:image:type" property="og:image:type" content="image/png" />
      <meta property="og:image:height" content={cartoonId ? "1080" : "675"} />
      <meta property="og:image:width" content={cartoonId ? "1080" : "1200"} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="fb:app_id" content="372460910220545" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          window.twttr = (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0],t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function(f) {t._e.push(f);
            }; 
          return t;
        }(document, "script", "twitter-wjs"));`,
        }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {
          FB.init({
            appId            : 372460910220545,
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v3.2'
          });
        };
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = 'https://connect.facebook.net/en_US/sdk.js';
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));`,
        }}
      />
    </Head>
  )
}

export default SEO
