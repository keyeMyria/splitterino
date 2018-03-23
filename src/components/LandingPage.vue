<template>
    <div class="landing-page">
        <div class="loading" v-if="loading">
            <ui-progress-circular class="spinner" color="multi-color"></ui-progress-circular>
        </div>

        <template v-else>
            <component v-if="splitsLoaded" :is="component"></component>
            <template v-else>
                <ui-button color="primary" type="primary" size="normal" @click="loadSplits">Load Splits ...</ui-button>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        component: {
            type: [String, Object],
            default: 'default-template'
        },
    },
    created() {
    },
    data() {
        return {
            loading: false,
            splitsLoaded: false,
            splits: [],
        };
    }
};
</script>

<style lang="scss">
.landing-page {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;

    .spinner {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -16px;
        margin-left: -16px;
    }
}
</style>
