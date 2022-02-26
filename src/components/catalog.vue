<template>
<div class="catalog" id="catalog">
  <div class="catalog__header">
      <h1 class="catalog__title">Найдено {{ PRODUCTS.length }} планировок</h1>
      <div class="catalog__status-filter">
          <span class="catalog__filter-number">{{ counter }}</span>
          <span class="catalog__filter-text">Фильтр</span>
          <span class="catalog__filter-reset">Сбросить все</span>
      </div>
  </div>
  <div class="catalog__filter">
      <span class="catalog__filter-item" :class="{activ: activearea}" @click="sortbyarea">До 50 м<sup>2</sup></span>
      <span class="catalog__filter-item">Готовое жилье</span>
      <span class="catalog__filter-item">Два санузла</span>
      <span class="catalog__filter-item">Балкон</span>
      <span class="catalog__filter-item">Дом сдан</span>
  </div>
  <div class="catalog__sort">
      <div class="catalog__sort-item" :class="{active: activeprice}" @click="sortbyprice">
          <span>{{ sortprice }}</span>
          <img src="../assets/marker.svg" alt="marker">
      </div>
      <div class="catalog__sort-item">
          <img class="catalog__sort-view" src="../assets/union.svg" alt="union">
          <img class="catalog__sort-view" src="../assets/bar.svg" alt="bar">
      </div> 
  </div>
  <div class="catalog__items">
      <catalogItem
        v-for="product in PRODUCTS"
        :key="product.id"
        v-bind:product_data="product"
       />
  </div>
</div>
</template>


<script>
import catalogItem from './catalog-item'
import {mapActions, mapGetters} from 'Vuex'

export default {
  name: 'catalog',
  data() {
    return{
      sortprice: "Сначала дороже",
      activeprice: false,
      activearea: false,
      counter: 0,
      sortedProducts: []
    }
  },
  components: {
    catalogItem
  },
  computed:{
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    sortbyprice(){
      if (this.activeprice = !this.activeprice){
      this.counter++
      this.sortprice = "Сначала дешевле"
      this.PRODUCTS.sort((a,b) => a.minPrice - b.minPrice)
      }
      else{
      this.counter--
      this.sortprice = "Сначала дороже"
      this.PRODUCTS.sort((a,b) => b.minPrice - a.minPrice)
      }
    },
    sortbyarea(){
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style scoped>

</style>
