<template>
    <div class="container">
        <CThemeProvider>
            <CColorModeProvider>
                <CBox font-family="body" as="main">
					<h1 v-if="error.statusCode">{{error.statusCode}}</h1>
					<h6>{{ title }}</h6>
					<NuxtLink to="/">Home page</NuxtLink>
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
    CBox
} from '@chakra-ui/vue'

//https://mavrickmaster.medium.com/custom-error-pages-with-nuxt-js-3c70e6c51aff
export default {
    name: 'ErrorLayout',
	layout:'error', // you can set a custom layout for the error page,
	props: ['error'],
    components: {
        CThemeProvider,
        CColorModeProvider,
        CReset,
        CBox
    },
	computed: {
		title() {
			if(this.error.message){
				return this.error.message
			}else{
				return this.error.statusCode === 404? 'Page not found': 'An error occurred'
			}
		}
	}

}
</script>