<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio: `
					Je suis actuellement en 3ème année en Informatique à l'IUT de Blagnac. J'ai choisi la spécialité "Développement d'applications". 
					`,
				},
				{
					id: 2,
					bio: `
					
Au cours de mes études, j'ai travaillé sur un projet visant à développer une application de gestion des vacataires pour notre établissement.

Ce projet m'a permis d'acquérir des compétences techniques tout en respectant les délais et les consignes. Par ailleurs, mon expérience professionnelle m'a enseigné à être proactif et à maîtriser l'anglais.
					`,
				},
				{
					id: 3,
					bio: `
					
Pendant ma deuxième année à l'IUT de Blagnac, j'ai participé à divers projets, notamment la création d'une base de données, d'un site web et d'une interface utilisateur. Ces expériences m'ont permis de développer des compétences techniques et de travailler efficacement en équipe.

En dehors de mes études, j'ai effectué un stage de photographie pendant deux semaines. Cette expérience m'a aidé à résoudre des problèmes et à renforcer mes compétences en travail d'équipe.
					`,
				},
			],



		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
