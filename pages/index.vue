<template>
  <div class="container">
    <header>
      <div class="top-content">
        <h1>Meble na wymiar Radom</h1>
        <p>Produkujemy meble na wymiar na terenie Radomia.</p>
        <p>
          W naszej ofercie znajdziesz szerokiej maści meble, zaczynająć od
          prostych stolików, kończąc na pełnoprawnych zabudowach kuchennych.
        </p>
      </div>
      <div class="overlay">
        <div class="upper"></div>
        <video src="bg.mp4" muted loop autoplay></video>
      </div>
      <div class="bottom-content">
        <svg-check :width="66" :height="36" /><a>Nasze realizacje</a>
      </div>
    </header>
    <section class="realisations">
      <h1>Jak wygląda proces realizacji?</h1>
      <client-only>
        <Flicking class="boxes">
          <div
            v-for="box in boxes"
            :key="box.id"
            class="single-box"
            v-bind:style="{ backgroundColor: box.color }"
          >
            <component
              :is="`svg-${box.icon.name}`"
              v-bind="{
                color: box.icon.color,
                width: box.icon.width,
                height: box.icon.height,
              }"
            />
            <h4 v-bind:style="{ color: box.icon.color }">{{ box.name }}</h4>
            <p v-bind:style="{ color: box.icon.color }">{{ box.content }}</p>
          </div>
        </Flicking>
      </client-only>
      <p class="text">
        Do produkcji naszych mebli wykorzystujemy systemy renomowanych
        producentów.
      </p>
      <client-only>
        <Flicking class="producers" circural="true">
          <img
            v-for="producer in producers"
            :key="producer.id"
            :src="require(`~/assets/${producer.name}.jpg`)"
            :alt="`${producer.name} logo`"
            class="producer"
          />
          -->
        </Flicking>
      </client-only>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      boxes: [
        {
          id: 0,
          name: 'Kontakt',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          color: '#E9D8A6',
          icon: {
            name: 'phone',
            color: '#3D3D3D',
            width: 36,
            height: 36,
          },
        },
        {
          id: 1,
          name: 'Pomiar',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          color: '#94D2BD',
          icon: {
            name: 'ruler',
            color: '#3D3D3D',
            width: 36,
            height: 36,
          },
        },
        {
          id: 2,
          name: 'Realizacja',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          color: '#F09F4B',
          icon: {
            name: 'box',
            color: '#EDEDED',
            width: 36,
            height: 36,
          },
        },
        {
          id: 3,
          name: 'Dostawa i montaż',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          color: '#E56659',
          icon: {
            name: 'truck',
            color: '#EDEDED',
            width: 36,
            height: 36,
          },
        },
      ],
      producers: [
        {
          id: 0,
          name: 'gamet',
        },
        {
          id: 1,
          name: 'siro',
        },
        {
          id: 2,
          name: 'schwinn',
        },
        {
          id: 3,
          name: 'blum',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.overlay {
  overflow: hidden;
  position: relative;
  .upper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.6;
  }
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
  }
}
.top-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  // width: 330px;
  top: 220px;
  margin: 24px;
  z-index: 1;
  left: 0;
  h1 {
    color: white;
    line-height: 52px;
    font-size: 60px;
  }
  p {
    color: white;
    font-size: 16px;
    &:nth-child(2) {
      margin-top: 24px;
    }
  }
}
.bottom-content {
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-left: 16px;
  }
}
.realisations {
  margin-top: 140px;
  padding: 0 24px;
  h1 {
    font-size: 36px;
    color: #3d3d3d;
    font-weight: bold;
    width: 265px;
    line-height: 34px;
  }
}
.boxes {
  margin: 60px 0;
}
.single-box {
  width: 240px;
  height: 240px;
  padding: 24px;
  display: flex;
  margin: 0 12px;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  h4 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
  svg {
    margin: 8px 0;
    width: 80px;
    margin-left: -24px;
  }
}
.text {
  font-size: 24px;
  font-weight: bold;
}
.producers {
  margin: 60px 0;
}
.producer {
  min-width: 120px;
  min-height: 30px;
  margin: 0 12px;
}
</style>
