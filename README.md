# Städ och service AB

Svensk webbplats för Städ och service AB i Jönköping, med blått tema och responsiv layout.

## Förhandsvisa lokalt

Webbplatsen använder HTML, CSS och JavaScript utan byggsteg eller databas.

Starta en lokal server från repots rot:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Öppna sedan http://127.0.0.1:4173 i webbläsaren. Avsluta servern med Ctrl+C.

## Filer

- `index.html`: sidans innehåll, tjänster och kontaktformulär.
- `style.css`: blått färgtema och mobilanpassning.
- `app.js`: mobilmeny, tjänstedialoger och offertunderlag.
- `assets/`: interiörbild och favicon.

## Kontakt och offert

Kontaktadresserna är micke@lofgren-olsen.se och Valbona.Doroci@bonnabygg.se. Telefon och gatuadress är markerade med — eftersom de ännu inte har angetts.

Formuläret förbereder ett mejl till Micke med Valbona som kopiemottagare. Besökaren granskar och skickar mejlet själv i sitt e-postprogram. Underlaget kan också laddas ned som en textfil. Sidan skickar inte formulärdata till någon server.

## Ändringar

Redigera innehåll och kontaktuppgifter i `index.html`. Mottagarna för offertmejlet finns även i `app.js`. Färgerna definieras som CSS-variabler i början av `style.css`.

Google Fonts laddas externt; lokala reservtypsnitt används om de inte kan hämtas. Interiörbilden kommer från [Unsplash](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0) och finns sparad i `assets/home.jpg`.

## Verifiering

JavaScript-syntax, interna sidlänkar, unika HTML-id:n, lokala tillgångar och kontaktadresser har kontrollerats. Sidan och dess tillgångar har svarat med HTTP 200 i lokal förhandsvisning. Visuell webbläsargranskning är inte genomförd.

Detta repo lagrar webbplatsens källfiler. GitHub Pages och automatisk publicering är inte konfigurerade.

## Arbetsrutin för ändringar

`main` är webbplatsens aktuella huvudversion. När vi ändrar webbplatsen med assistenten sparas och laddas ändringarna upp till denna gren efter relevanta kontroller. Pull requests används bara när de efterfrågas eller krävs av repots regler.

Detta är en arbetsrutin för ändringar som görs med assistenten, inte en bakgrundssynkronisering av filer som redigeras på annat håll.
