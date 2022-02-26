<template>
   <div class="filters">
        <h5>Колличество комнат</h5>
        <div class="filters__room">
            <span class="filters__item-room">C</span>
            <span class="filters__item-room">1</span>
            <span class="filters__item-room">1+</span>
            <span class="filters__item-room">2</span>
            <span class="filters__item-room">2+</span>
            <span class="filters__item-room">3</span>
            <span class="filters__item-room">3+</span>
            <span class="filters__item-room">4..</span>
        </div>
        <div class="filters__features">
            <h5>Особенности планировки</h5> 
            <span class="filters__item-features">
                <input type="checkbox" id="" name="">2 и более санузла
            </span>
            <span class="filters__item-features">
                <input type="checkbox" id="" name="">Большая лоджия
            </span>
            <span class="filters__item-features">
                <input type="checkbox" id="" name="">Гардеробная
            </span>
            <span class="filters__item-features">
                <input type="checkbox" id="" name="">Кухня-гостиная
            </span>
            <span class="filters__item-features">
                <input type="checkbox" id="" name="">Лоджия
            </span>
            <span class="filters__features-more">Показать все</span>
            <img src="../assets/more.svg" alt="more">
        </div>
    </div>      
</template>

<script>
export default {
  name: 'filters',
  data () {
    return {
      msg: 'Мои фильтры'
    }
  }
}
</script>

<style>

</style>
