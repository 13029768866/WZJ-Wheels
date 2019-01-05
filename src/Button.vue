<template>
    <button
            class="wzj-button"
            :class="{[`wzj-icon-position-${iconposition}`]:true}"
            @click="$emit('click')"
    >
        <wzj-icon v-if="!loadding" :buttonIconName="icon"></wzj-icon>
        <wzj-icon v-else class="icon loadding" buttonIconName="lodding"></wzj-icon>
        <div class="buttonContent">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
            loadding: {
                type: Boolean,
                default: false
            },
            iconposition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right')
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .wzj-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-siez);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: middle;
        cursor: pointer;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
    }

    /*iconPosition*/
    .wzj-icon-position-left {
        .icon {
            order: 1;
            margin-right: 3px;
        }

        .buttonContent {
            order: 2;
        }
    }

    .wzj-icon-position-right {
        .icon {
            order: 2;
            margin-left: 3px;
        }

        .buttonContent {
            order: 1;
        }
    }

    /*lodding*/
    .loadding {
        animation: spin infinite 1s linear
    }
</style>