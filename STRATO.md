# Ladda upp webbplatsen till STRATO

Mappen `strato/` innehåller den färdiga webbplatsen. Ingen installation, databas eller byggprocess behövs på webbhotellet.

## Filer att ladda upp

```text
index.html
style.css
app.js
assets/
  favicon.svg
  home.jpg
```

1. Anslut till ditt STRATO-webbutrymme via SFTP med uppgifterna från kundinloggningen.
2. Öppna katalogen som din domän pekar på. Om du redan har en webbplats där, säkerhetskopiera den innan du ersätter dess filer.
3. Ladda upp **innehållet i `strato/`** till den katalogen. `index.html` ska ligga direkt i domänens målkatalog, med `style.css`, `app.js` och `assets/` bredvid.
4. Om du använder zip-filen, packa upp den på datorn först och ladda upp de uppackade filerna. En uppladdad zip-fil i sig visar inte hemsidan.
5. Öppna domänen och kontrollera sidan, bilderna, mobilmenyn och offertformuläret.

Du kan även ladda upp hela mappen `strato` och ställa in domänens interna målkatalog till den mappen i STRATO. Vilken katalog som är rätt beror på din domäninställning.

Exporten är avsedd för webbhotellets webbutrymme. Att enbart lagra filerna i ett molnlagringskonto är inte samma sak som att publicera en webbplats.

## Kontaktformuläret

Offertformuläret öppnar besökarens e-postprogram med ett förberett mejl. Besökaren skickar själv. Exporten innehåller ingen tjänst för automatisk mejlleverans.

## Uppdatera exporten

Webbplatsens originalfiler finns i repots rot. Efter en ändring körs:

```sh
node scripts/export-strato.mjs
```

Redigera originalfilerna och generera exporten igen. Om en fil tas bort eller byter namn i originalet ska den gamla kopian också tas bort ur `strato/` innan exporten körs. Exportkommandot kontrollerar att exportfilerna stämmer med originalen.

Ändringar sparas i GitHub enligt projektets arbetsrutin. Uppladdning till STRATO görs separat; ingen automatisk publicering har aktiverats.

## STRATOs egna instruktioner

- [SFTP/SSH: skapa och anslut säkert](https://www.strato.se/faq/webbhotell/saa-anvaender-du-din-sftp-ssh-aatkomst/)
- [Domänens målkatalog och intern omdirigering](https://www.strato.se/faq/domaen/all-viktig-information-om-omdirigering-av-domaener/)
