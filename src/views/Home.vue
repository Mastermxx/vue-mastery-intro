<template>
	<div class="product">
		
		<div class="product-image">
			<img :src="image" alt="">
		</div>

		<div class="product-info">
			<h1>{{ product }}</h1>
			<p v-if="inventory > 10">In Stock</p>
			<p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
			<p v-else>Out of Stock</p>

			<ul>
				<li v-for="detail in details">{{ detail }}</li>
			</ul>

			<div v-for="variant in variants" :key="variant.variantId">
				<p @mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor }}</p>
			</div>

			<button v-on:click="addToCart">Add to Cart</button>

			<div class="cart">
				<p>Cart ({{ cart }})</p>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Home',
	data: () => {
		return {
			product: 'Socks',
			image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
			inventory: 8,
			details: ["80% cotton", "20% polyester"],
			variants: [
				{
					variantId: 2234,
					variantColor: 'green',
					variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
				},
				{
					variantId: 2235,
					variantColor: 'blue',
					variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
				}
			],
			cart: 0,
		}
	},
	methods: {
		addToCart() {
			this.cart += 1;
		},
		updateProduct(variantImage) {
			this.image = variantImage;
		}
	}
}
</script>
