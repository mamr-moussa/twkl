<template>
  <div class="home">
    <div class="overlay" @click="refreshDate"/>
    <svg viewBox="0 0 200 200" class="uncle-svg">
  <path d="   M12 2L188 2 
              Q 198,2 198,20 L 198 188 
              Q198,198 188,198 L12 198 
              Q2,198 2,188 L2 12 
              Q2,2 2,12z
              " stroke="white" stroke-width="10" fill="none"/>
</svg>
<div class="uncle-font" v-if="curDate" style="">
  {{ fromArabicToASCII(curDate) }}
</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "Uncle",
  components: {
  },
  data(){
    return{
      curDate: null
    };
  },
  mounted(){
    moment.locale('ar')
    this.curDate = moment().format('dddd D MMMM , HH:mm A')
    console.log()
  },
  methods:{
          fromArabicToASCII(arabic) {
         return arabic.replace(
          /[\u0660-\u0669\u06F0-\u06F9]/g,
          function(a) {
            return String.fromCharCode((a.charCodeAt(0)&15)+48);
            }
          );
        },
        refreshDate(){
           moment.locale('ar')
           this.curDate = moment().format('dddd D MMMM , HH:mm A')
        }
  }
};
</script>
<style lang="scss">
.uncle-svg {
  width: 96px;
  height: 96px;
  position: absolute;
  top: 362px;
  left: 252px;
}

svg path {
  animation: dash 2.5s linear 0s forwards infinite; 
}

svg path {
   stroke-dasharray: 770;
   stroke-dashoffset: 770;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
@font-face {
  font-family: myFirstFont;
  src: url(/TAWKLNA.ttf);
}

.uncle-font {
  font-family: myFirstFont;
   position: absolute;
  top: 435px;
  font-size: 13px;
  left: 60px;
  color: #d9ebe1e0;
}
.overlay {
 top: 0;
 left: 0;
 position: fixed;
 width: 100vw;
 height: 100vh;
 z-index: 99999999;
}
.uncle {
  background-image: url(/uncle.png);
  background-size: cover !important;
  background-repeat: no-repeat !important;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
