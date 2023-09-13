<template>
    <div>
        <div class="box"></div>
    </div>
</template>

<style scoped>
    .box{
        position: relative;
        width: 200px;
        height: 200px;
        background-color: #ccc;
        transform: skew(-30deg,-10deg);
        transform-origin: top left;
        transition: transform 0.5s ease;
    }
    .box:hover{
        transform: skewX(30deg);
    }
</style>