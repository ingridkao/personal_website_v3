<template>
    <CIconButton
        mr="3"
        :icon="colorMode === 'light' ? 'moon' : 'sun'"
        :aria-label="`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
        } mode`"
        @click="toggleColorMode"
    />
</template>

<script>
import {
    CIconButton
} from '@chakra-ui/vue'
export default {
    name: 'ColorToogle',
    inject: ['$chakraColorMode', '$toggleColorMode'],
    components: {
        CIconButton
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        },
        toggleColorMode () {
            return this.$toggleColorMode
        }
    }
}
</script>