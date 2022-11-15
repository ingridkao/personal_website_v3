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
            :w="{ base: '25rem', md: '100%'}"
            h="100%"
            direction="column"
            justify="space-around"
            align="start"
        >
            <CHeading>
                Ingrid Kao
            </CHeading>
            <CText>
                Vue is amazing, don't you think?Vue is amazing, don't you think?Vue is amazing, don't you think?Vue is amazing, don't you think?Vue is amazing, don't you think?
            </CText>
        </CFlex>
        <CBox 
            :w="{ base: 'auto', md: '100%'}"
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
    CButton,
    CImage,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CFlex,
    CHeading,
    CText
} from '@chakra-ui/vue'
export default {
    name: 'IndexPage',
    inject: ['$chakraColorMode'],
    components: {
        CBox,
        CButton,
        CImage,
        CModal,
        CModalContent,
        CModalOverlay,
        CModalHeader,
        CModalFooter,
        CModalBody,
        CModalCloseButton,
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
