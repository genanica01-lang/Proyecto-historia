"""Genera dist/index.html (un solo archivo con CSS y JS incluidos)."""
h = open('index.html', encoding='utf8').read()
css = open('styles.css', encoding='utf8').read().replace('@charset "UTF-8";', '')
h = h.replace('<link rel="stylesheet" href="styles.css">', '<style>\n' + css + '\n</style>')
for f in ['data', 'media', 'quizdata', 'app', 'eras', 'quiz']:
    h = h.replace(f'<script src="{f}.js"></script>', '<script>\n' + open(f + '.js', encoding='utf8').read() + '\n</script>')
open('dist/index.html', 'w', encoding='utf8').write(h)
print('dist/index.html listo')
