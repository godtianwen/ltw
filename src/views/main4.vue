<template>
    <div class="mapbox">
        <Map></Map>
        <div class="map_box">
            <div class="map_li">
                <div class='titles'>辽宁地图</div>
            </div>
            <div class="map_li">2</div>
            <div class="map_li">3</div>
            <div class="map_li">4</div>
            <div class="map_li">5</div>
            <div class="map_li">6</div>

            <div class="map_li">1</div>
            <div class="map_li">2</div>
            <div class="map_li">3</div>
            <div class="map_li">4</div>
            <div class="map_li">5</div>
            <div class="map_li">6</div>

            <div class="map_li">1</div>
            <div class="map_li">2</div>
            <div class="map_li">3</div>
            <div class="map_li">4</div>
            <div class="map_li">5</div>
            <div class="map_li">6</div>
        </div>
    </div>
</template>

<script>
import Map from '../components/map.vue'
    export default {
        components:{
            Map
        }
    }
</script>

<style scoped>
.mapbox{
    width: 100%;
    height: 1000px;
    margin: 0px auto;
    border: 1px solid #ccc;
}


.map_box{
    width: 100%;
    overflow: hidden;
    background: linear-gradient(to right,#011c17,#03312c);
}
.map_li{
    width: 20%;
    float: left;
    border: 2px solid #fff;
    height: 480px;
    color: #fff;
    border-radius: 24px;
    margin-top: 16px;
    position: relative;
}
.titles{
    position: absolute;
    top: 0px;
    left: 10%;
    display: inline-block;
    
}
</style>