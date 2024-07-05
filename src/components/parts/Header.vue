<script setup></script>

<template>
	<header id="header">
		<nav class="nav">
			<ul class="nav-list">
				<li class="nav-list__item">
					<a href="" class="nav-list__link">最新情報</a>
				</li>
				<li class="nav-list__item">
					<a href="" class="nav-list__link">こだわり</a>
				</li>
				<li class="nav-list__item">
					<a href="" class="nav-list__link">お品書き</a>
				</li>
				<li class="nav-list__item">
					<a href="" class="nav-list__link">アプリ</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped lang="scss">
.nav {
}

.nav-list {
	position: fixed;
	top: 0;
	right: pcvw(65);
	z-index: 999;
	display: flex;
	gap: pcvw(40);
	padding: pcvw(20);
	width: fit-content;
}

.nav-list__item {
}

.nav-list__link {
	color: #ffffff;
}
</style>
