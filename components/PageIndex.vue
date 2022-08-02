<template>
    <div>
    </div>
</template>
<script>
export default {
    props: {
        pageIndex: {
            type: String,
            default: ''
        }
    },
	async asyncData ({ $content, route, params }) {
        console.log($content);
        console.log(route);
        console.log(params);
	},
	watch: {
		search () {
			this.$router.replace({ 
				query: this.search ? { q: this.search } : undefined 
			}).catch(() => { })
		}
	},
	watchQuery: true
}
</script>
