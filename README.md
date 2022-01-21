# React app with 2 routes

## Introduction

J'ai implementé cette application en utilisant l'exigence ci-dessous. Si vous voulez, vous pouvez checker si cela fonctionne bien dans le site(https://voicihojun.github.io/register_neolegal).

## Requirements

Deux routes doivent être comme ci-dessous.
/inscription
/merci/{name}

1. Quand on arrive sur `/inscription`, on a un formulaire avec un bouton enregistrer :

L’idée est de partir du json(`.json_form` file in the src) et produire un formulaire à remplir. En temps normal, on vas recevoir le json d’un API endpoint mais pour cet exercice on pourra simuler une fonction qui retourne ce Json.

Quand on clique sur le bouton enregistrer :

- Envoyer un POST en JSON à cette url ( https://enovode7uq1r.x.pipedream.net/ qui retourne json comme `{result: 'success'}` )
- Stocker le JSON dans le localstorage (en simulant une fonction de stockage).
- Le phone doit être sous format (xxx) xxx-xxxx

2. Quand on POST ce formulaire on doit arriver sur la page /merci/{name} en remplacant le name par la value du champ first_name.

Sur cette page tu dois créer un message de remerciement ( Merci {name} pour votre inscription ), {name} doit venir de l’URL.

Ajouter un champ INPUT qui lorsqu’on écrit dedans modifie la valeur {name} dans le texte de remerciement ( pas besoin de modifier l’URL ).

IMPORTANT!!
Le UI doit être beau, moderne et créé en utilisant bootstrap, une attention particulière va être donnée au UI et UX pour cet exercice.
Une attention particulière sera donnée aux ajouts de fonctionnalité de validation d’erreurs.
