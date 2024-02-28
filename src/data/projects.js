// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Application bancaire',
		category: 'Application Java',
		img: require('@/assets/images/ui-project-1.jpg'),
		date: 'été 2022',
		tag: 'JavaFX / IHM',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'Création d\'une application bancaire en JAVA à l\'aide d\'Eclipse, Java FX et SceneBuilder. Cette application vise à administrer les comptes bancaires des clients. Le projet est géré sur GitHub, avec la rédaction de la documentation associée.',
		technologies: [
			'JAVA',
			'JavaFX',
			'SceneBuilder',
			'Github',
		],
		challenge: [
			'Cette application a été développée pendant notre première année de BUT informatique. Notre objectif était de créer une application appelée "DAILY BANK" afin de simuler les opérations bancaires réelles.',
			'La banque DailyBank a exprimé le besoin de remplacer plusieurs outils obsolètes par une application de gestion des comptes clients en JAVA-Oracle. Ce projet s\'inscrit dans le cadre de la restructuration de ses services bancaires et sera déployé dans ses 100 agences. Nous partirons de l\'application existante "Daily Bank" et nous l\'adapterons aux nouveaux besoins de la banque.',
			'L\'application devra gérer les comptes bancaires de dépôt pour les clients déjà créés. Elle permettra de réaliser des opérations telles que le débit et le crédit d\'un compte, que ce soit par virement entre deux comptes distincts domiciliés dans le réseau bancaire, ou par un client se présentant en personne devant un guichet.',
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/IUT-Blagnac/sae2022-bank-banqueroute-4A-03-',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 2,
		title: 'Application web de gestion de vacataires',
		category: 'Application Web',
		img: require('@/assets/images/web-project-2.jpg'),
		date: 'Automne 2023',
		tag: 'App de gestion Web / Angular',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'Avec la réforme du BUT, le nombre de vacataires a considérablement augmenté. Le département informatique envisage de nommer un responsable des vacataires. Ce responsable aura besoin d\'une interface de gestion pour les vacataires, intégrée à l\'embryon de base déjà existant dans Flop!Edt.',
		technologies: [
			'Typescript',
			'Angular',
			'MangoDB',
			'Docker',
			'Github',
		],
		challenge: [
			"La gestion actuelle des vacataires à l’IUT présente des lacunes en termes d'efficacité et d'optimisation. Elle repose sur des méthodes manuelles, avec chaque gestion consignée sur des fiches en papier. Afin d'améliorer cette situation, Jean-Michel Bruel a commencé le développement d'une application web dédiée. Cependant, en raison de contraintes de temps, ce projet nous a été confié, avec une maquette de base fournie. Notre mission consistait alors à poursuivre le développement de cette application en y apportant des améliorations significatives.",
			"Suite à la réforme du BUT, le nombre de vacataires employés par l’IUT a considérablement augmenté. Cette croissance a conduit à la décision de nommer un responsable des vacataires chargé de les affecter et de les désaffecter. Pour cela, ce responsable aura besoin d’une interface web facilitant la gestion des vacataires ainsi que des cours disponibles à l'affectation. Actuellement inexistante, cette interface sera développée par des étudiants en troisième année de la filière informatique dans le cadre des heures de SAE.",		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/SAE-IUT/sae5.01-gestion_vacataires/',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 3,
		title: 'Site web e-commerce',
		category: 'Site Web',
		img: require('@/assets/images/mobile-project-2.jpg'),
		date: 'hiver 2022-2023',
		tag: 'Website / IHM / PHP / e-commerce',
		client: {
			name: 'Royal bio (Fictif) - IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: "Le projet consiste à développer un site web de vente de produits biologiques en utilisant PHP, HTML et CSS, avec intégration à une base de données SQL. En parallèle, une application JAVAFX sera créée pour visualiser et configurer les données des capteurs, avec accès au fichier de configuration YML. La gestion du projet se fera sur GitHub, avec une documentation détaillée.",
		technologies: [
			'JAVA',
			'JavaFX',
			'PHP',
			'HTML/CSS',
		],
		challenge: [
			"Ce site web d’e-commerce a été réalisé lors de notre deuxième année de BUT informatique. Notre objectif était de créer un site web pour vendre les produits de notre client \"Royal Bio\", afin de simuler les actions que l'on retrouve dans une boutique en ligne.",
			"Le site web permet la vente des bonbons et d'autres produits proposés par notre client. Les produits et les données personnelles des clients sont stockés dans une base de données. Les fonctionnalités incluent la connexion/création de compte pour les clients, la consultation du catalogue des produits, l'ajout de produits au panier et la validation du panier pour procéder au paiement.",
			"Royal Bio souhaite re-conceptualiser son site internet pour le rendre plus attractif, afin d'augmenter le nombre de clients et d'améliorer les ventes en ligne. L'entreprise envisage également de se développer à l'international pour accroître sa notoriété et sa visibilité. Dans cette optique, Royal Bio vise à pénétrer les marchés allemand et américain. Cependant, le site internet actuel est obsolète et ne convient pas à une expansion internationale future. Par conséquent, une version anglaise du site sera créée pour attirer de nouveaux clients internationaux.",
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/IUT-Blagnac/sae3-01-devapp-g2b-11',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 4,
		title: 'Application web de gestion de la SAE "Koh-Lanta"',
		category: 'Application Web',
		img: require('@/assets/images/web-project-1.jpg'),
		date: 'hiver 2023',
		tag: 'App de gestion Web / Angular / Symfony',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: "Le projet consiste à développer une application web de gestion de la SAÉ 5 'Koh-Lanta' en utilisant Symfony (PHP) pour le backend et Angular (TypeScript) pour le frontend. L'objectif est d'automatiser les processus de constitution des équipes, la saisie des sujets et la gestion des évaluations.",
		technologies: [
			'PHP',
			'Symfony',
			'Typescript',
			'Angular',

		],
		challenge: [
			"Bienvenue dans l’application de gestion dédiée à la SAÉ 'Kho Lanta'. Conçue dans le but de simplifier et d’automatiser plusieurs aspects clés de la gestion de la SAÉ 5 'Kho Lanta', notre application vise à rendre le processus de gestion plus efficace en proposant des fonctionnalités automatisées pour la constitution des équipes, la saisie des sujets, la gestion des évaluations, et bien d'autres encore.",
			'Le principal objectif de notre application est de fournir une plateforme conviviale et efficace aux responsables de la SAÉ, facilitant ainsi la gestion des diverses tâches liées à l’événement "Kho Lanta". Nous nous efforçons de simplifier les processus administratifs, d’améliorer la communication entre les membres et les équipes, et de garantir une expérience fluide tout au long de la SAÉ.',
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/SAE-IUT/sae5.01-gestion_vacataires',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 5,
		title: 'Refactoring d\'une application existante',
		category: 'Application Java',
		img: require('@/assets/images/mobile-project-1.jpg'),
		date: 'été 2022',
		tag: 'JavaFX / IHM',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'L\'amélioration de l\'application de gestion de tournoi de Belote en Java avec Swing implique le refactoring du code existant. Cela comprend l\'intégration de patrons de conception, l\'application des principes SOLID et la mise en place de bonnes pratiques de conception orientée objet.',
		technologies: [
			'Java',
			'Swing',
			// Ajoutez d'autres technologies au besoin
		],
		challenge: [
			'Le projet initial, baptisé "belote2019", a été conçu par un ancien étudiant de l’IUT de Blagnac. Il repose sur l\'utilisation de Java avec Swing pour élaborer une application de gestion de tournoi de Belote.',
			'L\'objectif du refactoring est d\'intégrer des patrons de conception, d\'appliquer les principes SOLID et de mettre en place des bonnes pratiques de conception orientée objet. Cela englobe une analyse détaillée des fonctionnalités existantes, une amélioration de l\'organisation et de la lisibilité du code, ainsi que l\'ajout éventuel de nouvelles fonctionnalités facilitées par le refactoring.',
			'Le travail doit être effectué sur GitHub, en utilisant des commits bien documentés. Il est recommandé d\'utiliser les issues GitHub pour organiser les idées de refactoring. Le rapport final doit être inclus dans le README, expliquant chaque modification avec des extraits de code illustratifs et justifiant chaque choix de refactoring.'
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/IUT-Blagnac/sae4-01-2023-poireauentitane',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 6,
		title: 'Application web de gestion d\'une bibliothèque (en cours)',
		category: 'Application Web',
		img: require('@/assets/images/web-project-1.jpg'),
		date: 'début 2023',
		tag: 'App de gestion Web / API / Angular Symfony',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'Développer une appli web de gestion de bibliothèque avec Symfony, EasyAdmin, Angular et API REST.',
		technologies: [
			'Symfony',
			'EasyAdmin',
			'Angular',
			'API Platform'
		],
		challenge: [
			'Le défi consiste à développer une application web de gestion de bibliothèque en utilisant Symfony, EasyAdmin, Angular et une API REST. L\'objectif est d\'administrer les auteurs, les livres, les catégories, ainsi que de gérer les adhérents et leurs emprunts.',
			'Un Back-Office avec Symfony et EasyAdmin doit être implémenté pour permettre l\'ajout, la modification et la suppression des entités. Il faudra également créer une API REST avec Symfony pour fournir des informations sur les livres, auteurs, emprunts et adhérents.',
			'L\'objectif est de mettre en place un Front-Office avec Angular pour permettre aux internautes et adhérents de rechercher des livres, de réserver des livres et de gérer leur compte adhérent.',
			'Une partie du challenge consiste en l\'implémentation d\'un formulaire complexe dans EasyAdmin pour gérer les emprunts. Cela permettra à un adhérent de demander l\'emprunt de plusieurs livres, avec des vérifications telles que la disponibilité des livres et la limite d\'emprunt (maximum 5 emprunts en cours par adhérent).',
			'Il est nécessaire de mettre en place au moins un webservice REST complexe pour gérer la recherche de livres selon des caractéristiques de l\'auteur (période, nationalité, etc.) et/ou la recherche des emprunts associés à un livre donné.',
			'Le respect des cas d\'utilisation détaillés, notamment pour les internautes, les adhérents, les bibliothécaires et les responsables de la bibliothèque, est un élément essentiel du défi.',
			'L\'implémentation du diagramme de classes minimal est nécessaire pour créer les entités, avec une prévoyance pour les fixtures afin de peupler la base de données.',
			'Une utilisation efficace de Git est requise pour gérer le code source du projet, en suivant les instructions Git fournies.'
			],


		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/Zekoko/poc_bibliotheque',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 7,
		title: 'Site web Portfolio',
		category: 'Site Web',
		img: require('@/assets/images/web-project-2.jpg'),
		date: 'été 2022',
		tag: 'JavaFX / IHM',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'Réalisation d\'une application bancaire en JAVA sur Eclipse avec Java FX et SceneBuilder, permettant de gérer les comptes bancaires de clients. Gestion de ce projet sur GitHub et rédaction des documentations.',
		technologies: [
			'JAVA',
			'JavaFX',
			'SceneBuilder',
			'Github',
		],
		challenge: [
			'Cette application a été réalisée lors de notre première année de BUT informatique, nous avions pour but de réaliser une application nommée "DAILY BANK", celle-ci nous permettra de simuler des actions que l’on peut retrouver dans une banque du monde réel.',
			'La banque DailyBank souhaite développer une application JAVA-Oracle de gestion des comptes clients pour remplacer plusieurs outils obsolètes. Ce développement s’inscrit dans le cadre de la restructuration de ses services bancaires et l’application sera déployée dans les 100 agences que compte son réseau. Nous travaillerons à partir d’une application existante « Daily Bank » qu’il faudra adapter aux nouveaux besoins de la banque.',
			'L’application doit permettre de gérer des comptes bancaires de dépôt pour des clients préalablement créés. Elle devra permettre de débiter, créditer un compte soit par virement c’est à dire un échange d’argent entre deux comptes distincts mais domiciliés dans le réseau bancaire, soit par une personne physique se présentant devant un guichet.',
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/IUT-Blagnac/sae2022-bank-banqueroute-4A-03-',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
];

export default projects;
