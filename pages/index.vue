<template>
    <CBox
        v-bind="mainStyles[colorMode]"
        d="flex"
        flex-dir="column"
        justify-content="center"
        w="100%"
    >
        <CHeading text-align="center" mb="4">
            ⚡️ Hello chakra-ui/vue
        </CHeading>
        <CFlex justify="center" direction="column" align="center">
            <CBox mb="3">
                <CButton
                    left-icon="info"
                    variant-color="blue"
                    @click="showToast"
                >
                    Show Toast
                </CButton>
            </CBox>
            <!-- <CButton
            left-icon="close"
            variant-color="red"
            mt="3"
            @click="showModal = true"
            >
            Delete Account
            </CButton> -->
            <!-- <CModal :is-open="showModal">
                <CModalOverlay />
                <CModalContent>
                    <CModalHeader>Are you sure?</CModalHeader>
                    <CModalBody>Deleting user cannot be undone</CModalBody>
                    <CModalFooter>
                    <CButton @click="showModal = false">
                        Cancel
                    </CButton>
                    <CButton
                        margin-left="3"
                        variant-color="red"
                        @click="showModal = false"
                    >
                        Delete User
                    </CButton>
                    </CModalFooter>
                    <CModalCloseButton @click="showModal = false" />
                </CModalContent>
            </CModal> -->
        </CFlex>
    </CBox>
</template>

<script lang="js">
import {
    CBox,
    CButton,
    CAvatarGroup,
    CAvatar,
    CAvatarBadge,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CFlex,
    CHeading
} from '@chakra-ui/vue'

export default {
    name: 'IndexPage',
    inject: ['$chakraColorMode'],
    components: {
        CBox,
        CButton,
        CAvatarGroup,
        CAvatar,
        CAvatarBadge,
        CModal,
        CModalContent,
        CModalOverlay,
        CModalHeader,
        CModalFooter,
        CModalBody,
        CModalCloseButton,
        CFlex,
        CHeading
    },
    data () {
        return {
            showModal: false,
            mainStyles: {
                dark: {
                    bg: 'gray.700',
                    color: 'whiteAlpha.900'
                },
                light: {
                    bg: 'white',
                    color: 'gray.900'
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
