<template>
    <div class="catalog__item">
        <img :src="require('../assets/' + product_data.photos)" alt="plan">
        <div class="catalog__item-head">
          <h4 class="catalog__item-name">{{product_data.name}}, {{product_data.area}}м<sup>2</sup></h4>
          <img class="catalog__item-like" src="../assets/like.svg" alt="like">
        </div>
        <span class="catalog__item-complex">{{product_data.housingComplexName}}</span>
        <span class="catalog__item-total">{{product_data.sameLayoutFlatCount}} квартир · от {{product_data.minPrice}} млн ₽</span>
        <div class="catalog__item-containerbtn">
          <button class="catalog__item-btn">Выбери свою</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'catalogItem',
  props: {
    product_data: {
      type: Object,
      default(){
        return {
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
