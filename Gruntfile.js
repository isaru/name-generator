module.exports = function(grunt) {
    grunt.initConfig({
        jsonify: {
            female: {
                src: ['data/female.txt'],
                dest: 'dist/female.json'
            },
            male: {
                src: ['data/male.txt'],
                dest: 'dist/male.json'
            },
            surname: {
                src: ['data/surname.txt'],
                dest: 'dist/surname.json'
            }
        }
    });
    grunt.registerMultiTask('jsonify', 'Lines to json', function() {
        this.files.forEach(function(f) {
            var data = f.src.filter(function(filepath) {
                return true;
            }).map(function(filepath) {
                return grunt.file.read(filepath);
            }).join('\n');
            var json = '[' + data.split('\n').filter(function(line) {
                return line.length !== 0 && line.trim() != '';
            }).map(function(line) {
                return '"' + line + '"';
            }).join(',') + ']';
            grunt.file.write(f.dest, json);
            console.log('File "' + f.dest + '" created.');
        });
    });
    grunt.registerTask('default', ['jsonify']);
};
