(function (global) {
    System.config({
        paths: {
            'npm:': '/node_modules/'
        },
        map: {
            app: '/js/rxjstest/',
            //'rxjs': '/node_modules/@reactivex/rxjs/dist/cjs'
            'rxjs': '/node_modules/rxjs'  //ok
        },
        packages: {
            app: {
                main: './main.js', 
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);

//   // js/rxjstest/main.js