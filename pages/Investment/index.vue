<template>
	<main>
        <input id="search" v-model="Search" placeholder="Search..." />
        <ul>
            <li 
				v-for="(article) in articles" 
				:key="article.slug"
				class="articles-list"
			>
                <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
            </li>
        </ul>
	</main>
</template>

<script>
export default {
  	name: 'InvestmentIndex',
	head: {
		title: '投資Investment | IngridKao',
		meta: [
			{ hid: 'description', name: 'description', content: '投資筆記'}
		]
	},
	async asyncData ({ $content, route }) {
		//https://content.nuxtjs.org/v1/getting-started/fetching/
		const Search = (route && route.query && route.query.q)? route.query.q: null
		// console.log(Search);
		let query = $content('Investment', {
			 	deep: true 
			})
		if(Search){
			query = query.search('title', Search)
		}
		// .only(['title', 'description', 'image', 'path'])
		// .sortBy('date', 'desc')
		try {
			const Articles = await query.fetch()
			return {
				Search,
				articles: Articles? Articles: []
			}
		} catch(error) {
			error({
				statusCode: 403,
				message: `Error: ${error}`,
			})
		}
	},
	watch: {
		Search () {
			this.$router.replace({ 
				query: this.Search ? { q: this.Search } : undefined 
			}).catch(() => {})
		}
	},
	watchQuery: true
}
</script>

