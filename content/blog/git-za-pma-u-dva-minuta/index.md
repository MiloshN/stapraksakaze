---
title: Git za PMa - Objašnjeno u 2 minuta!
date: 2024-06-02
tags: ["pm", "git"]
author: Milos N.
---

Kucanje komandi unutar terminala može biti poprilično stresna stvar čak i za developere kojima je to sastavni deo posla, a kamoli tek projekt menadžerima koji se i ne susreću toliko sa terminalom.

*E, da, terminal je glavna i osnovna alatka za upravljanje git-om.*

Ovaj članak je upravo kreiran da ukratko objasni osnove terminala i Git-a za menadžere kojima nemaju previše iskustva sa tim.


## Šta je Git i kako se koristi?

Git, ukratko, bez fensi termina: Znaš ono kada za svaku novu verziju napraviš novi folder i tamo smestiš sve što treba pa prebacuješ iz jednog foldera u drugi, praviš treći…

E to ti je git.

Ali teško da će bilo koji developer tako opisivati stvari, već će biti priče o pull, push, commit, pull reqest, origin, branch, add i ostalim fensi terminima.

A kako se koristi? Idemo redom.

Kada se git instalira i inicijalizuje unutar foldera, tada kreće da vodi računa o promenama unutar fajla, sve detektuje, stara verzija, nova verzija, šta je promenjeno, razlike, i sve to se može čitati kroz terminal.


Za inicijalizaciju gita dovoljno je kucati git init - PS. Ima raznih GUIa za praćenje git-a, ali terminal je zaista dobar, kada znaš kako i šta treba kucati.

Pre nego sto developer pređe na rad na novoj verziji on mora nekako sačuvati staru verziju, i pripremiti fajlove za *“save”*.

### Komanda broj 1:

Prva komanda je:

> Git add (ime fajla ili fajlova), a može i “git add”.

*Note za sve: Pažljivo sa tačkom, jednom sam snimio maltene ceo drajv sa tom tačkom 🤣*

Ova komanda priprema fajl ili fajlove za snimanje, odnosno čuvanje trenutnog stanja.

### Komanda broj 2:

Kada se pripremi fajl ili fajlovi, svako stanje treba sačuvati iliti snimiti uz poruku koristeći komandu:

> git commit -m “ime poruke”

Ovo će koristiti kasnije ako je potrebno vratiti stanje na neko od pređašnjih, tako da budite kreativni prilikom pisanja poruke, da znate tačno šta je tu snimljeno.


### Komanda broj 3:

Treća komanda je:

> git push

Ako imamo origin - odnosno neki remote repozitorijum (folder?) push komanda pomaže da se trenutno stanje “gurne” na cloud, da može i neki kolega preuzeti projekat, i raditi na njemu.

### Komanda broj 4:

Kada rade dvojica, ili više nas na projektu, često bude izmena koje moram ažurirati kod sebe, a koje je kolega radio, e tu koristimo:

> git pull

Primer: Ažurirao sam, ali ako kolega je izmenio isti fajl, i to na istoj liniji, dolazi do konflikata. To već ume da boli, ako se kodovi ne spoje lepo, nešto neće raditi 100%.


### Pravljenje nove grane

Da bi izbegli, koliko toliko, to mešanje, često je poželjno praviti nove grane:

> git checkout -b ime_grane ili bez -b za postojeću

To znači da ću se iz trenutne grane, i trenutnog stanja “odvojiti” i nastaviti sa svojim radom.

Kada završim posao na svojoj grani, red je da spojim kod sa kolegom, koristim gotovo sve komande iznad i pravimo pull request sa moje na npr. prod granu. 


Opet konflikti, a može i bez njih. Valjda?

## Zaključak

Generalno, git je cela filozofija, ima tu da se priča i teoretiše jako puno. Ima i komandi koje nisu ovde na listi, ima i skraćenica komandi iznad.

Ali smatram da je za prosečnog PMa ovo više nego dovoljno.

Sada, na sastancima sigurno neće prevrtati očima kada čuje da ima negde neki konflikt, a da to nije “pravi” konflikt, ili da neko je negde omašio granu na kojoj je pravio PR i spajao kod i slično….

Hvala na pažnji.
