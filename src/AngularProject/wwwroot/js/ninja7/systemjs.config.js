(function (global) {
    System.config({
        //transpiler: false,
        paths: {
            // псевдоним для пути к модулям
            'npm:': '/node_modules/'
        },
        // указываем загрузчику System, где искать модули
        map: {
            // наше приложение будет находиться в папке app
            //src: '/js',        
            app: '/js/ninja7/',
            // пакеты angular
            '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
            //'@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.min.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',

            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
            // остальные пакеты
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },
        packages: {
            app: {
                main: './main.js', // js/ninja7/main.js
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);