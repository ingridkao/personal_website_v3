<template>
    <div class="container">
        <CThemeProvider>
            <CColorModeProvider v-slot="{ colorMode }">
                <CBox 
                    font-family="body" 
                    as="main"
                    :bg="colorMode === 'light' ? 'white' : 'gray.800'"
                    :color="colorMode === 'light' ? 'black' : 'whiteAlpha.900'"
                >
                    <CReset />
                    <MainHeader/>
                    <CFlex
                        w="100vw"
                        max-w="1440px"
                        h="calc(100vh - 60px)"
                        mx="auto"
                    >
                        <Nuxt />
                    </CFlex>
                </CBox>
            </CColorModeProvider>
        </CThemeProvider>
    </div>
</template>
<script>
import {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CFlex
} from '@chakra-ui/vue'
export default {
    name: 'DefaultLayout',
    inject: ['$chakraColorMode'],
    components: {
        CThemeProvider,
        CColorModeProvider,
        CReset,
        CBox,
        CFlex
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
