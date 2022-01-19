<template>
  <div id="app">
    <flowers-list
      v-for="flower in FlowersList"
      :key="flower.id"
      :photo="flower.Photo"
      :Name="flower.Name"
      :Price="flower.Price"
    />
  </div>
</template>

<script>
import FlowersList from "@components/FlowersList";
export default {
  name: "App",
  components: {
    FlowersList,
  },
  data() {
    return {
      FlowersList: [
        {
          photo:
            "https://www.google.com/search?q=rose&client=firefox-b-d&sxsrf=AOaemvJBHHQ07HPS_ONooQB5BSg9vOmL5A:1638347067497&tbm=isch&source=iu&ictx=1&fir=sYQRQrQE8fDkMM%252C0GMQW1IdH0WMYM%252C_%253B-uiLDsNiEiyhqM%252CdvgVZ-aEcdr1wM%252C_%253By1VQGKbsKrUWFM%252CoGE04s3xhOHckM%252C_%253B-KCfV8QWDc6vLM%252C4dVy5R8Lsl4_ZM%252C_%253B8xLJHk0nisr84M%252CKstNf9S1QZ3znM%252C_%253BnukHflU3q69mDM%252C3VHs86nNs58q8M%252C_%253BrDpCE_iXWGFP3M%252CE_mpJJR_ujOVkM%252C_%253BMJkeq8wOGXr6RM%252Cs8ic_Y3jcuXRMM%252C_%253BDOfaEV0J40RpuM%252CX06CMQZ6skdoQM%252C_%253BBFtJkUjfo2CndM%252CJDpzBjLPEdt1KM%252C_%253BLcmwDIHvzV7QdM%252CCOHH8Hxon84ttM%252C_%253BnFjBDDhocgsWNM%252CiZ3Ya4qsAqzY9M%252C_%253BIqdGAQ6XZ3YMRM%252CXpyTiHhpdADAfM%252C_%253BVNsTapflS3maLM%252CKzR4UMYAYFn0PM%252C_%253BWmbrGI6vrvaQJM%252CSExbt405xyxY7M%252C_%253BDAZFiB08JctweM%252CVJnUqVg5Kl3zVM%252C_&vet=1&usg=AI4_-kQLnlqCNpBlB3YWjn3wsHFUzNi8WA&sa=X&ved=2ahUKEwje1ue3lsL0AhUKKewKHfXYB4IQ9QF6BAgdEAE#imgrc=-uiLDsNiEiyhqM",
          Name: "rose",
          Price: 2,
        },
        {
          photo:
            "https://www.google.com/search?q=rose&client=firefox-b-d&sxsrf=AOaemvJBHHQ07HPS_ONooQB5BSg9vOmL5A:1638347067497&tbm=isch&source=iu&ictx=1&fir=sYQRQrQE8fDkMM%252C0GMQW1IdH0WMYM%252C_%253B-uiLDsNiEiyhqM%252CdvgVZ-aEcdr1wM%252C_%253By1VQGKbsKrUWFM%252CoGE04s3xhOHckM%252C_%253B-KCfV8QWDc6vLM%252C4dVy5R8Lsl4_ZM%252C_%253B8xLJHk0nisr84M%252CKstNf9S1QZ3znM%252C_%253BnukHflU3q69mDM%252C3VHs86nNs58q8M%252C_%253BrDpCE_iXWGFP3M%252CE_mpJJR_ujOVkM%252C_%253BMJkeq8wOGXr6RM%252Cs8ic_Y3jcuXRMM%252C_%253BDOfaEV0J40RpuM%252CX06CMQZ6skdoQM%252C_%253BBFtJkUjfo2CndM%252CJDpzBjLPEdt1KM%252C_%253BLcmwDIHvzV7QdM%252CCOHH8Hxon84ttM%252C_%253BnFjBDDhocgsWNM%252CiZ3Ya4qsAqzY9M%252C_%253BIqdGAQ6XZ3YMRM%252CXpyTiHhpdADAfM%252C_%253BVNsTapflS3maLM%252CKzR4UMYAYFn0PM%252C_%253BWmbrGI6vrvaQJM%252CSExbt405xyxY7M%252C_%253BDAZFiB08JctweM%252CVJnUqVg5Kl3zVM%252C_&vet=1&usg=AI4_-kQLnlqCNpBlB3YWjn3wsHFUzNi8WA&sa=X&ved=2ahUKEwje1ue3lsL0AhUKKewKHfXYB4IQ9QF6BAgdEAE#imgrc=-uiLDsNiEiyhqM",
          Name: "rose",
          Price: 2,
        },
        {
          photo:
            "https://www.google.com/search?q=rose&client=firefox-b-d&sxsrf=AOaemvJBHHQ07HPS_ONooQB5BSg9vOmL5A:1638347067497&tbm=isch&source=iu&ictx=1&fir=sYQRQrQE8fDkMM%252C0GMQW1IdH0WMYM%252C_%253B-uiLDsNiEiyhqM%252CdvgVZ-aEcdr1wM%252C_%253By1VQGKbsKrUWFM%252CoGE04s3xhOHckM%252C_%253B-KCfV8QWDc6vLM%252C4dVy5R8Lsl4_ZM%252C_%253B8xLJHk0nisr84M%252CKstNf9S1QZ3znM%252C_%253BnukHflU3q69mDM%252C3VHs86nNs58q8M%252C_%253BrDpCE_iXWGFP3M%252CE_mpJJR_ujOVkM%252C_%253BMJkeq8wOGXr6RM%252Cs8ic_Y3jcuXRMM%252C_%253BDOfaEV0J40RpuM%252CX06CMQZ6skdoQM%252C_%253BBFtJkUjfo2CndM%252CJDpzBjLPEdt1KM%252C_%253BLcmwDIHvzV7QdM%252CCOHH8Hxon84ttM%252C_%253BnFjBDDhocgsWNM%252CiZ3Ya4qsAqzY9M%252C_%253BIqdGAQ6XZ3YMRM%252CXpyTiHhpdADAfM%252C_%253BVNsTapflS3maLM%252CKzR4UMYAYFn0PM%252C_%253BWmbrGI6vrvaQJM%252CSExbt405xyxY7M%252C_%253BDAZFiB08JctweM%252CVJnUqVg5Kl3zVM%252C_&vet=1&usg=AI4_-kQLnlqCNpBlB3YWjn3wsHFUzNi8WA&sa=X&ved=2ahUKEwje1ue3lsL0AhUKKewKHfXYB4IQ9QF6BAgdEAE#imgrc=-uiLDsNiEiyhqM",
          Name: "rose",
          Price: 2,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
