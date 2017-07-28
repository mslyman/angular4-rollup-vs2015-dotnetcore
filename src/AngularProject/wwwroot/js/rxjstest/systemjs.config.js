(function (global) {
    System.config({
        paths: {
            'npm:': '/node_modules/'
        },
        map: {
            src: '/js',
            app: '/js/rxjstest/',
            //'rxjs': '/node_modules/@reactivex/rxjs/dist/cjs'
            'rxjs': '/node_modules/rxjs'
        },
        packages: {
            src:{
                defaultExtension: 'js'
            },
            app: {
                main: './main.js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);

//   // js/rxjstest/main.js