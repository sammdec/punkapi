# punkapi-db [![Build Status](https://travis-ci.org/samjbmason/punkapi-db.svg?branch=master)](https://travis-ci.org/samjbmason/punkapi-db)
> Crowd Sourcing an API from BrewDog's hugely generous [DIY Dog](https://www.brewdog.com/diydog)

In the spirit of DIY & giving back I thought I would attempt to collect all the BrewDog Recipes from their DIY Dog pdf and create an api from it!

You can find the API at https://punkapi.com and it's completely free!

If you are looking for the source code for the server that powers https://punkapi.com head over to [samjbmason/punkapi-server](https://github.com/samjbmason/punkapi-server)

## What's the deal?
This repo contains all the individual files for each recipe in the DIY Dog pdf ([`data`](data/)). It also contains a singular JSON file [`data.json`](data.json) that contains all the recipes in one single file.

It's the `data.json` file that actually powers the punkapi API.

## Installation
```
$ npm i --save punkapi-db
```

## Usage
```
const punkapi = require('punkapi-db')
```

If you find an issue with a recipe, please feel free to submit an [issue](https://github.com/samjbmason/punkapi-db/issues)

## Libraries
These are user contributed wrappers for the API

- C - [apfohl/punkapi](https://github.com/apfohl/punkapi)
- Ruby - [samjbmason/punkapi-ruby](https://github.com/samjbmason/punkapi-ruby)
- PHP - [billythekid/PunkApi](https://github.com/billythekid/PunkApi)
- JavaScript - [mikefrancis/brewdog.js](https://github.com/mikefrancis/brewdog.js)
- Vue.JS - [yoohahn/VueDogs-API](https://github.com/yoohahn/VueDogs-API)
- Docker - [yoohahn/brewdog-recipe](https://hub.docker.com/r/yoohahn/brewdog-recipe/)

**Status: 234 of 234 completed**

## The Beers

- [x] PUNK IPA 2007 - 2010
- [x] PUNK IPA 2010 - CURRENT
- [x] THE PHYSICS
- [x] RIPTIDE
- [x] HOP ROCKER
- [x] PARADOX ISLAY
- [x] PARADOX JURA
- [x] PEROXIDE PUNK
- [x] HYPE
- [x] BUZZ
- [x] EDGE
- [x] STORM
- [x] CULT LAGER
- [x] TRASHY BLONDE
- [x] ORIGINAL DOGMA (NÉE SPEEDBALL)
- [x] AB:03
- [x] ZEITGEIST
- [x] BAD PIXIE
- [x] CHAOS THEORY
- [x] ZEPHYR
- [x] COFFEE IMPERIAL STOUT
- [x] DEVINE REBEL (W/MIKKELLER)
- [x] 77 LAGER
- [x] ATLANTIC IPA ALE
- [x] HOW TO DISAPPEAR COMPLETELY
- [x] 5AM SAINT
- [x] TOKYO RISING SUN - HIGHLAND
- [x] TOKYO RISING SUN - LOWLAND
- [x] TOKYO*
- [x] PUNK MONK
- [x] BASHAH (W/STONE BREWING CO)
- [x] NANNY STATE
- [x] TACTICAL NUCLEAR PENGUIN
- [x] EUROTRASH
- [x] MOVEMBER
- [x] BLACK DOG
- [x] HARDCORE IPA
- [x] SINK THE BISMARCK!
- [x] ALPHA DOG
- [x] SKULL CANDY
- [x] AB:01
- [x] AB:07
- [x] PROTOTYPE 27
- [x] TM10
- [x] AB:02
- [x] HARDKOGT IPA
- [x] AB:04
- [x] ALICE PORTER
- [x] SANTA PAWS
- [x] AB:09
- [x] BLACK TOKYO HORIZON (W/NØGNE Ø & MIKKELLER)
- [x] AB:05
- [x] HELLO MY NAME IS INGRID
- [x] BRAMLING X
- [x] CITRA
- [x] NELSON SAUVIN
- [x] SORACHI ACE
- [x] AVERY BROWN DREDGE
- [x] GROWLER
- [x] RABIATOR
- [x] AB:06
- [x] JUNIPER WHEAT BEER
- [x] THE END OF HISTORY
- [x] HOPS KILL NAZIS
- [x] MR. MIYAGI'S WASABI STOUT
- [x] SUNK PUNK
- [x] AB:10
- [x] AB:18
- [x] OLD WORLD INDIA PALE ALE
- [x] OLD WORLD RUSSIAN IMPERIAL STOUT
- [x] LOST DOG (W/LOST ABBEY)
- [x] AB:08
- [x] SUNMAID STOUT
- [x] SHAREHOLDER BLACK IPA 2011
- [x] AB:13
- [x] SIMCOE
- [x] LIBERTINE PORTER
- [x] MIXTAPE 8
- [x] BITCH PLEASE (W/3 FLOYDS)
- [x] CHALLENGER
- [x] GALAXY
- [x] HBC 369
- [x] MOTUEKA
- [x] DEAD PONY CLUB
- [x] LIBERTINE BLACK ALE
- [x] ANARCHIST ALCHEMIST
- [x] DOG A
- [x] HUNTER FOUNDATION PALE ALE
- [x] AB:19
- [x] JACK HAMMER
- [x] NEVER MIND THE ANABOLICS
- [x] SAN DIEGO SCOTCH ALE (W/BALLAST POINT)
- [x] AB:12
- [x] WHITE NOISE
- [x] INTERNATIONAL ARMS RACE (W/FLYING DOG)
- [x] AB:11
- [x] HELLO MY NAME IS BEASTIE
- [x] DOG FIGHT (W/FLYING DOG)
- [x] HOPPY CHRISTMAS
- [x] BLACK EYED KING IMP
- [x] COCOA PSYCHO
- [x] NUNS WITH GUNS
- [x] CATHERINE'S PONY (W/BEAVERTOWN)
- [x] AMARILLO
- [x] LICHTENSTEIN PALE ALE
- [x] AB:14
- [x] IPA IS DEAD - DANA
- [x] IPA IS DEAD - EL DORADO
- [x] IPA IS DEAD - GOLDINGS
- [x] IPA IS DEAD - WAIMEA
- [x] VAGABOND PILSNER
- [x] AB:15
- [x] BRACKEN'S PORTER
- [x] FAKE LAGER
- [x] 10 HEADS HIGH
- [x] VICE BIER
- [x] MISSPENT YOUTH
- [x] #MASHTAG 2013
- [x] DOG B
- [x] ELECTRIC INDIA
- [x] DOG WIRED (W/8 WIRED)
- [x] HELLO MY NAME IS METTE-MARIT
- [x] EVERYDAY ANARCHY
- [x] BLACK JACQUES
- [x] BLITZ BERLINER WEISSE
- [x] DOGMA
- [x] HELLO MY NAME IS SONJA (W/EVIL TWIN)
- [x] SHIPWRECKER CIRCUS (W/OSKAR BLUES)
- [x] DEAD METAPHOR
- [x] BABY DOGMA
- [x] UNLEASH THE YEAST - AMERICAN ALE
- [x] UNLEASH THE YEAST - BAVARIAN WEIZEN
- [x] UNLEASH THE YEAST - BELGIAN TRAPPIST
- [x] UNLEASH THE YEAST -PILSEN LAGER
- [x] VIC SECRET
- [x] BRIXTON PORTER
- [x] PROTOTYPE CHALLENGE - HOBO POP
- [x] PROTOTYPE CHALLENGE - INTERSTELLAR
- [x] PROTOTYPE CHALLENGE - MOSHI MOSHI 15
- [x] BLACK EYE JOE (W/STONE BREWING CO)
- [x] LUMBERJACK STOUT
- [x] CLOWN KING
- [x] HELLO MY NAME IS VLADIMIR
- [x] BOURBON BABY
- [x] AB:16
- [x] COMET
- [x] HBC 366
- [x] KOHATU
- [x] HELLO MY NAME IS ZÉ (W/2CABEÇAS)
- [x] ALPHA POP
- [x] JASMINE IPA
- [x] #MASHTAG 2014
- [x] DOG C
- [x] HELLO MY NAME IS PÄIVI
- [x] VOTE SEPP
- [x] MAGIC STONE DOG (W/MAGIC ROCK & BREWING CO.)
- [x] RUSSIAN DOLL – BARLEY WINE
- [x] SUB HOP
- [x] U-BOAT (W/VICTORY BREWING)
- [x] AMERICAN WHEAT
- [x] CAP DOG (W/CAP BREWERY)
- [x] RUSSIAN DOLL – DOUBLE IPA
- [x] RUSSIAN DOLL – INDIA PALE ALE
- [x] RUSSIAN DOLL – PALE
- [x] THIS.IS.LAGER.
- [x] INDIA PALE WEIZEN (W/WEIHENSTEPHAN)
- [x] AB:17
- [x] KONNICHIWA KITSUNE
- [x] PROTOTYPE CHALLENGE - ALL DAY LONG
- [x] PROTOTYPE CHALLENGE - HOP FICTION
- [x] PROTOTYPE CHALLENGE - VAGABOND PALE ALE
- [x] BLACK EYED KING IMP - VIETNAMESE COFFEE EDITION
- [x] SHAREHOLDER BREW – BOUNTY HUNTER
- [x] RESTORATIVE BEVERAGE FOR INVALIDS AND CONVALESCENTS
- [x] STEREO WOLF STOUT
- [x] B-SIDES – SUNSHINE ON RYE
- [x] B-SIDES – BOWMAN’S BEARD
- [x] HELLO MY NAME IS LITTLE INGRID
- [x] IPA IS DEAD - CHINOOK
- [x] IPA IS DEAD - ELLA
- [x] IPA IS DEAD - MANDARINA BAVARIA
- [x] IPA IS DEAD - PIONEER
- [x] BORN TO DIE
- [x] B-SIDES – MELON AND CUCUMBER IPA
- [x] B-SIDES – SORACHI BITTER
- [x] B-SIDES – TRUFFLE AND CHOCOLATE STOUT
- [x] B-SIDES – HOPPY SAISON
- [x] B-SIDES – WHISKY SOUR
- [x] B-SIDES – SPICED CHERRY SOUR
- [x] B-SIDES – DEAF MERMAID
- [x] #MASHTAG 2015
- [x] DOG D
- [x] HINTERLAND
- [x] PEACH THERAPY
- [x] HELLO MY NAME IS HOLY MOOSE
- [x] LIZARD BRIDE
- [x] B-SIDES – MANGO GOSE
- [x] CANDY KAISER
- [x] PUMPKIN KING
- [x] B-SIDES – BABY SAISON
- [x] B-SIDES – MORAG'S MOJITO
- [x] B-SIDES – ORANGE BLOSSOM
- [x] DOODLEBUG
- [x] NO LABEL
- [x] B-SIDES – RHUBARB SAISON
- [x] INDIA SESSION LAGER PROTOTYPE CHALLENGE
- [x] HOPPED-UP BROWN ALE PROTOTYPE CHALLENGE
- [x] ALBINO SQUID ASSASSIN
- [x] B-SIDES – BERLINER WEISSE WITH RASPBERRIES AND RHUBARB
- [x] ARCADE NATION
- [x] ELVIS JUICE V2.0
- [x] BERLINER WEISSE WITH YUZU
- [x] B-SIDES – CASCADE, CENTENNIAL & WILLAMETTE IPA
- [x] B-SIDES – SINGLE HOP ENIGMA IPA
- [x] JET BLACK HEART
- [x] ACE OF SIMCOE
- [x] SHIP WRECK
- [x] MONK HAMMER
- [x] PROTOTYPE PILS 2.0
- [x] BLITZ SERIES
- [x] DOG E
- [x] BARREL AGED HINTERLAND
- [x] AB:20
- [x] BARREL AGED ALBINO SQUID ASSASSIN
- [x] PARADOX ISLAY
- [x] ACE OF CHINOOK
- [x] NEON OVERLORD
- [x] BLACK HAMMER
- [x] ACE OF CITRA
- [x] CHILI HAMMER
- [x] ACE OF EQUINOX
- [x] RYE HAMMER
- [x] BREWDOG VS BEAVERTOWN
- [x] PROTOTYPE HELLES

## License
Please see [License](LICENSE)
