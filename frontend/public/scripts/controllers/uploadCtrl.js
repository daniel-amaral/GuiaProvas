var app = angular.module('app');

app.controller('UploadCtrl', ['$scope', 'Upload', function($scope, Upload){


    $scope.opcoes = [
        {
        nome: 'UFRJ',
        cursos: ['Ciência da Computação', 'Ciências Atuariais']
        },
        {
            nome: 'UFF',
            cursos: ['Medicina']
        },
        {
            nome: 'UERJ',
            cursos: ['Medicina', 'Direito']
        }
    ];

    $scope.listaDeAnos = [];
    var preencherListaAnos = function(){
        var ano = new Date().getFullYear();
        var anoAtual = new Date().getFullYear();

        for(; ano >= anoAtual-10; ano--) {
            var item = "" + ano;
            $scope.listaDeAnos.push(item);
        }
    }()

    $scope.universidadeSelecionada = 'selecione';
    $scope.cursoSelecionado = 'selecione curso';
    $scope.anoSelecionado = '';
    $scope.periodoSelecionado = '';
    $scope.nomeDoProfessor = '';
    $scope.listaDeCursos = [];

    $scope.selecionaUniversidade = function(index){
        $scope.universidadeSelecionada = $scope.opcoes[index].nome;
        $scope.listaDeCursos = $scope.opcoes[index].cursos;
    }

    $scope.selecionaCurso = function(curso){
        $scope.cursoSelecionado = curso;
    }

    $scope.selecionaAno = function(ano){
        $scope.anoSelecionado = ano;
    }

    $scope.uploadFile = function(file) {
        console.log("aqui")
        file.upload = Upload.upload({
            url: 'localhost:80/guiaprovas/backend/public/prova',
            data: {
                faculdade: $scope.universidadeSelecionada,
                curso: $scope.cursoSelecionado,
                disciplina: 'qualquer coisa',
                ano: $scope.anoSelecionado,
                periodo: $scope.periodoSelecionado,
                professor: $scope.nomeDoProfessor,
                file: file
            }
        });

        file.upload.then(function (response) {
            $timeout(function () {
                console.log("foi o arquivo")
                file.result = response.data;
            });
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    }
}]);