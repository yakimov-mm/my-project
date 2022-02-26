<template>
<div id="app">
  <main class="main">
    <div class="container">
        <div class="content">
          <catalog />
          <filters />
        </div>
    </div>
</main>
</div>
</template>


<script>
import catalog from './components/catalog'
import filters from './components/filters'

export default {
  name: 'app',
    components: {
    catalog,
    filters
  }
}
</script>

<style lang="sass">
.content
    width: 100%
    display: flex
.catalog
    width: 1019px
    height: fit-content
    padding: 30px 16px 300px 30px
    background: #F5F6F7
    border-radius: 8px 0 0 8px
    box-shadow: 0px -6px 20px rgba(0, 19, 35, 0.4)
    &__header
        display: flex
        justify-content: space-between
        align-items: center
    &__status-filter
        font-size: 16px
        line-height: 20px
    &__filter-number
        width: 14px
        padding: 2px 4px
        font-size: 9px
        border-radius: 50%
        background: #D6DCE1
    &__filter-reset
        font-size: 14px
        cursor: pointer
        color: #0060AF
        margin-left: 10px
    &__filter
        display: flex
        font-size: 12px
        margin-top: 15px
        gap: 4px
        &-item
            padding: 8px 10px
            cursor: pointer
            background: #FFFFFF
            border: 1px solid #E4E7EA
            border-radius: 2px
    &__sort
        display: flex
        justify-content: space-between
        margin-top: 26px
        &-item
            display: flex
            align-items: center
            gap: 8px
            font-size: 14px
            cursor: pointer
        &-view
            width: 30px
            padding: 3px
            background: #FFFFFF
            box-shadow: 0px 4px 10px rgba(0, 19, 35, 0.1)
            border-radius: 3px
            cursor: pointer
    &__items
        display: grid
        width: 100%
        grid-template-columns: repeat(3, 319px)
        gap: 8px
        margin-top: 15px
    &__item
        position: relative
        display: flex
        height: fit-content
        flex-direction: column
        background: #FFFFFF
        border-radius: 4px
        padding: 15px 36px
        cursor: pointer
        &-containerbtn
          position: absolute
          display: none
          width: 100%
          height: fit-content
          background: #FFFFFF 
          z-index: 1
          bottom: -74px
          left: 0
          padding: 0px 0 20px 0
          border-radius: 4px
        &:hover &-containerbtn
          display: flex
          justify-content: center
        &-btn
          padding: 18px 70px
          background: #B7DFFF
          font-weight: 500
          font-size: 12px
          line-height: 15px
          text-transform: uppercase
          margin-top: 20px
          &:hover
              background: #5fb8ff
              transition: all 1s ease  
        &-complex,&-total
            font-size: 14px
            line-height: 20px 
        &-total
            margin-top: 7px
        &-head
            display: flex
            margin-top: 45px
            justify-content: space-between
            align-items: center  
        &-like
            display: none
            &:hover
              transition: all 0.5s ease 
              filter: invert(30%) sepia(91%) saturate(7031%) hue-rotate(355deg) brightness(94%) contrast(120%)
        &:hover &-like
            display: block
.activ
    background: #0060AF
    color: #fff
                       

            
            
            
.filters
    width: 341px
    padding: 39px 33px 100px 15px
    background: #FFFFFF
    box-shadow: 0px -6px 20px rgba(0, 19, 35, 0.4)
    border-radius: 0 8px 8px 0
    &__room
        display: flex
        flex-wrap: wrap
        margin: 8px 0 34px 0
        gap: 4px
    &__item-room
        width: 33px
        height: 33px
        padding: 7px
        border: 1px solid #E4E7EA
        border-radius: 2px
        text-align: center
        font-size: 12px
        line-height: 17px
    &__item-features
        display: flex
        align-items: center
        margin-top: 9px
        font-size: 12px
        line-height: 15px
    &__features-more
        font-size: 12px
        line-height: 15px
        color: #0060AF
        margin-top: 10px
    &__area
        margin-top: 27px
    &__area-range
        display: flex
        gap: 4px
    &__range-item
        width: 49%
        max-width: 144px
        margin-top: 8px
        padding: 9px 8px
        border: 1px solid #D6DCE1
        border-radius: 2px
        font-size: 12px
        line-height: 15px
    &__area-slider
        width: 100%
        margin-top: 16px
</style>
