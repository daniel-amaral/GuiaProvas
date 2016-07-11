'use strict'

var app = angular.module('app', [
	'ngRoute',
	'ngAnimate',
	'ngFileUpload'
	]);

app.controller('MainCtrl', function($scope){
	$scope.message = 'Controller loaded!';

});

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
	.when('/home', {
		templateUrl: 'public/views/home.html',
		controller: 'HomeCrtl'
	})
	.when('/sobre', {
		templateUrl: 'public/views/sobre.html',
		controller: 'SobreCtrl'
	})
	.when('/upload', {
		templateUrl: 'public/views/upload.html',
		controller: 'UploadCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	});
}]);

app.controller('HomeCrtl', function($scope){
	
	
	$scope.instituicoes = [
	{
		instituicao: "Universidade Federal do Rio de Janeiro (UFRJ)",
		expanded: false,
		cursos: 
		[
		{
			curso: "Ciência da Computação (DCC)",
			expanded: false,
			disciplinas: 
			[{
				disciplina:"Computação Gráfica",
				expanded: false,
				semestres: 
							[
							{
								semestre: "2010.2",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2010-2-P1.jpg"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2010-2-P2.jpg"
								},{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2010-2-P3.jpg"
								}
								]
							},
							{
								semestre: "2011.2",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2011-2-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2011-2-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2011-2-P3.pdf"
								}
								]
							},
							{
								semestre: "2012.1",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2012-1-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2012-1-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2012-1-P3.pdf"
								}
								]
							},
							{
								semestre: "2012.2",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2012-2-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2012-2-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2012-2-P3.pdf"
								}
								]
							},
							{
								semestre: "2013.1",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2013-1-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2013-1-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2013-1-P3.pdf"
								}
								]
							},
							{
								semestre: "2013.2",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2013-2-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2013-2-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2013-2-P3.pdf"
								}
								]
							},
							{
								semestre: "2014.1",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2014-1-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2014-1-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2014-1-P3.pdf"
								}
								]
							},
							{
								semestre: "2014.2",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2014-2-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2014-2-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2014-2-P3.pdf"
								}
								]
							},
							{
								semestre: "2015.1",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2015-1-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2015-1-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2015-1-P3.pdf"
								}
								]
							},
							{
								semestre: "2015.2",
								expanded: false,
								provas: [
								{
									titulo: "P1",
									href: "public/resources/files/UFRJ/DCC/CG/2015-2-P1.pdf"
								},
								{
									titulo: "P2",
									href: "public/resources/files/UFRJ/DCC/CG/2015-2-P2.pdf"
								},
								{
									titulo: "P3",
									href: "public/resources/files/UFRJ/DCC/CG/2015-2-P3.pdf"
								}
								]
							}
							]
			}]

		},
		{
			curso: "Instituto de Matemática (IM)",
			expanded: false,
			disciplinas: [
			{
				disciplina: "Cálculo I",
				expanded: false,
				semestres: [
				{
					semestre: "2015.2",
					expanded: false,
					provas: [
					{
						titulo: "P1",
						href: "public/resources/files/UFRJ/IM/CALCULO1/2015-2-P1.pdf"
					},
					{
						titulo: "P2",
						href: "public/resources/files/UFRJ/IM/CALCULO1/2015-2-P2.pdf"
					},{
						titulo: "P3",
						href: "public/resources/files/UFRJ/IM/CALCULO1/2015-2-PF.pdf"
					}
					]
				},
				{
					semestre: "2014.1",
					expanded: false,
					provas: [
					{
						titulo: "P1",
						href: "public/resources/files/UFRJ/IM/CALCULO1/2014-1-P1.pdf"
					}
					]
				}
				]
			},
			{
				disciplina: "Cálculo II",
				expanded: false,
				semestres: [
				{
					semestre: "2015.1",
					expanded: false,
					provas: [
					{
						titulo: "P1",
						href: "public/resources/files/UFRJ/IM/CALCULO2/2015-1-P1.pdf"
					}
					]
				},
				{
					semestre: "2014.2",
					expanded: false,
					provas: [
					{
						titulo: "P1",
						href: "public/resources/files/UFRJ/IM/CALCULO2/2014-2-P1.pdf"
					},
					{
						titulo: "P2",
						href: "public/resources/files/UFRJ/IM/CALCULO2/2014-2-P2.pdf"
					},
					{
						titulo: "PF",
						href: "public/resources/files/UFRJ/IM/CALCULO2/2014-2-PF.pdf"
					}
					]
				}
				]
			}
			]				
		}
		]
	}
	];
})