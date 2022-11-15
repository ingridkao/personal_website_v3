<template>
    <CFlex
        v-bind="mainStyles[colorMode]"
        w="calc(100% - 5rem)"
        m="auto"
        d="flex" 
        align="end"
        justify="space-around"
    >
        <CFlex 
            :w="{ base: '40vw', md: '100%'}"
            h="100%"
            direction="column"
            justify="space-around"
            align="start"
        >
            <CHeading>
                Preference
            </CHeading>
            <CText>
                Vue is amazing, don't you think?Vue is amazing, don't you think?Vue is amazing, don't you think?Vue is amazing, don't you think?Vue is amazing, don't you think?
            </CText>
        </CFlex>
        <CBox 
            :w="{ base: '60vw', md: '100%'}"
            ml="3"
        >
            <CBox>
                <CImage class="imgShadowBox" :src="require('@/assets/img/mainImage.png')" alt="Ingrid Kao"/>
            </CBox>
        </CBox>
    </CFlex>
</template>

<script>
import {
    CBox,
    CImage,
    CFlex,
    CHeading,
    CText
} from '@chakra-ui/vue'
export default {
    inject: ['$chakraColorMode'],
    components: {
        CBox,
        CImage,
        CFlex,
        CHeading,
        CText
    },
    data () {
        return {
            showModal: false,
            mainStyles: {
                dark: {
                    // bg: 'gray.700',
                    // color: 'whiteAlpha.900'
                },
                light: {
                    // bg: 'white',
                    // color: 'gray.900'
                }
            }
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    },
    methods: {
        showToast () {
            this.$toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 10000,
                isClosable: true
            })
        }
    }
}
</script>
