<template>
    <div id="app">
        <title-bar></title-bar>
        <div class="app-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    created() {}
};
</script>

<style lang="scss">
@import './styles/styles';

// Fix Position
html,
body {
    height: 100%;
}

body {
    overflow: hidden;
    position: relative;
    background: $color-dark-gray;
}

#app {
    overflow: auto;

    .app-content {
        padding-top: 20px;
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
    }
}
</style>
