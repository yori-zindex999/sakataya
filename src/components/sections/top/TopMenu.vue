<script setup></script>

<template>
	<div class="lcl-osinagaki">
		<div class="lcl-osinagaki__index">
			<img
				src="./img/osinagaki/img_ttl.png"
				alt=""
				class="lcl-osinagaki_index-img"
			/>
		</div>
		<div class="lcl-osinagaki__inner">
			<div class="lcl-osinagaki__item">
				<div class="lcl-osinagaki__item-img-wrapper">
					<img
						src="./img/osinagaki/img_ramen1.png"
						alt="とんこつチャーシュー麺"
						class="lcl-osinagaki__item-img"
					/>
				</div>
				<p class="lcl-osinagaki__ttl f-index">
					とんこつ
					<br />
					チャーシュー麺
				</p>
				<p class="lcl-osinagaki__copy">
					豚骨スープにたっぷりの特製チャーシューを加えた
					<br />
					贅沢な一杯。ボリューム満点で食べ応え抜群。
				</p>
				<p class="lcl-osinagaki__price">¥1,100</p>
			</div>
			<div class="lcl-osinagaki__item lcl-osinagaki__item--top">
				<div class="lcl-osinagaki__item-img-wrapper">
					<img
						src="./img/osinagaki/img_ramen1.png"
						alt="とんこつチャーシュー麺"
						class="lcl-osinagaki__item-img"
					/>
				</div>
				<p class="lcl-osinagaki__ttl f-index">
					特製とんこつ
					<br />
					ラーメン
				</p>

				<p class="lcl-osinagaki__copy">
					濃厚な豚骨スープと自家製の細麺が自慢の一杯。
				</p>
				<p class="lcl-osinagaki__price">¥850</p>
			</div>
			<div class="lcl-osinagaki__item">
				<div class="lcl-osinagaki__item-img-wrapper">
					<img
						src="./img/osinagaki/img_ramen1.png"
						alt="とんこつチャーシュー麺"
						class="lcl-osinagaki__item-img"
					/>
				</div>
				<p class="lcl-osinagaki__ttl f-index">
					とんこつ
					<br />
					味玉ラーメン
				</p>
				<p class="lcl-osinagaki__copy">
					豚骨スープにたっぷりの特製チャーシューを加えた
					<br />
					贅沢な一杯。ボリューム満点で食べ応え抜群。
				</p>
				<p class="lcl-osinagaki__price">¥950</p>
			</div>
			<a href="#" class="lcl-osinagaki__more"></a>
		</div>
	</div>
</template>

<style scoped lang="scss">
.lcl-osinagaki {
	position: relative;
	margin-top: pcvw(439);
}

.lcl-osinagaki__index {
	position: absolute;
	top: pcvw(-126);
	left: pcvw(150);
	width: pcvw(87);
}

.lcl-osinagaki_index-img {
}

.lcl-osinagaki__inner {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	gap: pcvw(24);
	background: url(../img/osinagaki/img_bg.png);
	padding: pcvw(69) 0;
}

.lcl-osinagaki__item {
	width: pcvw(342);
	&--top {
		padding-bottom: pcvw(200);
	}
}

.lcl-osinagaki__item-img-wrapper {
}

.lcl-osinagaki__item-img {
}

.lcl-osinagaki__ttl {
	width: fit-content;
	margin: pcvw(22) auto 0;
	@include fz(34);
}

.lcl-osinagaki__copy {
	width: fit-content;
	margin: pcvw(19) auto;
	line-height: 1.5;
}

.lcl-osinagaki__price {
	width: fit-content;
	margin-top: pcvw(33);
	margin: 0 auto;
	@include fz(14);
}
</style>
