<template>
  <div class="title-bar">
        <span class="title">Splitterino</span>
        <button @click="minimize" class="minimize"><icon>remove</icon></button>
        <button v-if="showMaximize" @click="maximize" class="maximize"><icon>launch</icon></button>
        <button @click="close" class="close"><icon>close</icon></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMaximize: false
        };
    },
    created() {

    },
    methods: {
        minimize() {

        },
        maximize() {
        },
        close() {
        }
    }
};
</script>

<style lang="scss">
@import '../styles/config';

.title-bar {
    width: 100%;
    height: 20px;
    position: absolute;
    top: 0;
    z-index: 100;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    background: $color-black;

    // Making the app draggable
    -webkit-app-region: drag;

    .title {
        position: absolute;
        font-size: 12px;
        align-self: center;
        left: 10px;
    }

    > button {
        width: 20px;
        height: 20px;
        background: $color-black;
        border: none;
        padding: 0 5px;
        color: $color-white;
        cursor: pointer;
        box-sizing: content-box;
        -webkit-app-region: no-drag;

        .material-icons {
            font-size: 14px;
        }

        &:hover {
            background: lighten($color-black, 5%);
        }

        &:focus {
            outline: none;
        }
    }

    .close:hover {
        background: #981818;
    }
}
</style>
