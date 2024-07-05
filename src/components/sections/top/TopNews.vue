<script setup></script>

<template>
	<div class="lcl-news">
		<p class="lcl-news__txt">坂田家の最新情報をお知らせいたします。</p>
		<div class="lcl-news__inner">
			<ul class="lcl-news__list">
				<li
					v-for="(item, index) in [
						{
							date: '2024.07.02',
							cat: '営業情報',
							ttl: '７月になっちゃったーーなっちゃったーなっちゃったー',
						},
						{
							date: '2024.07.03',
							cat: '営業情報',
							ttl: '７月になっちゃったーーなっちゃったーなっちゃったー',
						},
						{
							date: '2024.07.04',
							cat: '営業情報',
							ttl: '７月になっちゃったーーなっちゃったーなっちゃったー',
						},
					]"
					:key="index"
					class="lcl-news__item"
				>
					<time class="lcl-news__date">{{ item.date }}</time>
					<p class="lcl-news__category">{{ item.cat }}</p>
					<p class="lcl-news__ttl">
						{{ item.ttl }}
					</p>
				</li>
			</ul>
			<h2 class="contents-name__ttl f-index">最新情報</h2>
		</div>
	</div>
</template>

<style scoped lang="scss">
.lcl-news {
	margin: 0 auto;
	width: fit-content;
	padding: pcvw(234) 0 pcvw(206) 0;
	.lcl-news__txt {
		width: fit-content;
		padding: pcvw(17);
		font-size: pcvw(14);
	}
	.lcl-news__inner {
		position: relative;
		display: flex;
		align-items: center;
		width: fit-content;
	}

	.lcl-news__list {
	}

	.lcl-news__item {
		display: flex;
		margin: pcvw(20);
		gap: pcvw(27);
	}

	.lcl-news__date {
		color: $c-red;
	}

	.lcl-news__category {
		width: pcvw(70);
	}

	.lcl-news__ttl {
		width: pcvw(400);
	}

	.contents-name__ttl {
		position: absolute;
		top: pcvw(-69);
		right: pcvw(-93);
		width: pcvw(50);
		writing-mode: vertical-rl;
		white-space: nowrap;
		font-size: pcvw(55);
		// letter-spacing: 0.01em;
		&::after {
			content: "";
			position: absolute;
			z-index: -1;
			top: pcvw(-1);
			right: pcvw(-8);
			height: pcvw(223);
			width: pcvw(21);
			background: $c-red;

			/*---------------- after */
		}
	}

	.contents-name__img {
		width: 100%;
	}
}
</style>
