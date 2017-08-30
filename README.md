[TOC]

---

# Instalacja projektu

``` bash
git clone git@github.com:jan-dolata/stylus-overview.git
cd stylus-overview
npm install
```

## Uruchamianie

``` bash
# Nasłuchiwanie zmian
npm run watch

# Jednorazowa kompilacja
npm run dev
```

Dodatkowe skrypty w `package.json`.

Ustawienia skryptów w pliku `webpack.mix.js` (dokumentacja [mix]).
Pliki `assets/scss/scss.scss` jest kompilowany do `public/css/scss.css`.
Pliki `assets/styl/stylus.styl` jest kompilowany do `public/css/stylus.css`.

---

# Materiał

W katalogu `assets/styl/partials` znajdują się pliki zawierające przykłady prezentujące składnie i funkcjonalności stylusa. Treść jest podzielona tematycznie. Część wklejonych przykładów pochodzi z dokumentacji stylusa [Dokumentacja].

# Linki i wtyczki

## Dokumentacja

* [Dokumentacja] - dokumentacja
* [Ściągawka] - krótki opis składni i najważniejszych funkcjonalności

## Dodatki

* [nib] - baza mixinów, resety i inne
* [axis] - duża baza mixinów, framework
* [rupture] - mixiny do media
* [jeet] - mixiny do budowania grida (też dla scss)

## Artykuły

* [Stylus Best Practices] - zbiór zasad pomagających przy pracy, propozycja nazewnictwa itp.
* [Sass vs. LESS vs. Stylus] - porównanie trzech preprocesorów

## Konvertery online

* [Scss do stylus] - Scss do Stylus online
* [Css do Stylus] - Css do Stylus online
* [Atom Css do Stylus] - Css do Stylus, wtyczka do Atom

## Wtyczki do Visual Studio Code

* language-stylus - kolorowanie składni
* vscode-css-to-stylus - konwerter Css do Stylus
* manta's stylus supremacy - poprawianie składni, dokumentacja [Stylus supremacy]

---

[Stylus supremacy]: <https://thisismanta.github.io/stylus-supremacy>
[mix]: <https://laravel.com/docs/5.4/mix>

[Dokumentacja]: <http://stylus-lang.com/>
[Ściągawka]: <http://ricostacruz.com/cheatsheets/stylus.html>

[nib]: <http://tj.github.io/nib/>
[axis]: <http://axis.netlify.com/>
[rupture]: <https://github.com/jescalan/rupture>
[jeet]: <https://github.com/mojotech/jeet>

[Scss do stylus]: <http://sass2stylus.com/>
[Css do Stylus]: <http://beautifytools.com/css-to-stylus-converter.php>
[Atom Css do Stylus]: <https://atom.io/packages/css-to-stylus>

[Stylus Best Practices]: <https://gist.github.com/declandewet/7220997>
[Sass vs. LESS vs. Stylus]: <https://code.tutsplus.com/tutorials/sass-vs-less-vs-stylus-preprocessor-shootout--net-24320>
