<template>
    <CThemeProvider id="mainContainer">
        <CColorModeProvider v-slot="{ colorMode }">
            <CBox 
                font-family="body" 
                as="main"
                :bg="colorMode === 'light' ? 'white' : 'gray.800'"
                :color="colorMode === 'light' ? 'black' : 'whiteAlpha.900'"
            >
                <CReset />
                <MainHeader />
                <CFlex
                    w="100vw"
                    max-w="1440px"
                    h="calc(100vh - 4rem)"
                    mx="auto"
                >
                    <Nuxt />
                </CFlex>
            </CBox>
        </CColorModeProvider>
    </CThemeProvider>
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
<style lang="scss">
#mainContainer{
}
.imgShadowBox{
    box-shadow: rgb(50 50 93 / 20%) 0px 30px 60px -12px, rgb(0 0 0 / 28%) 0px 18px 36px -18px;
}
// https://css-tricks.com/grainy-gradients/
.noise {
    height: 100%;
    background: linear-gradient(20deg, rebeccapurple, transparent), url(https://grainy-gradients.vercel.app/noise.svg);   
    filter: contrast(170%) brightness(1000%);
}
a{
    box-shadow: inset 0 0 0 0 #54b3d6;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    &:hover{
        box-shadow: inset 100px 0 0 0 #54b3d6;
        color: white; 
    }
}
</style>
