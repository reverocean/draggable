module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/underscore/underscore.js',
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

//        browsers: ['PhantomJS'],
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            "karma-html-reporter"
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        reporters: ['progress', 'html', 'unit'],
        htmlReporter: {
            outputDir: 'karma_html',
            templatePath: __dirname+'/jasmine_template.html'
        }

    });
};
