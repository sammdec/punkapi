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

## Libraries

These are user contributed wrappers for the API

* C - [apfohl/punkapi](https://github.com/apfohl/punkapi)
* Ruby - [samjbmason/punkapi-ruby](https://github.com/samjbmason/punkapi-ruby)
* PHP - [billythekid/PunkApi](https://github.com/billythekid/PunkApi)
* JavaScript - [mikefrancis/brewdog.js](https://github.com/mikefrancis/brewdog.js)
* Swift/iOS - [Oni-zerone/PunkAPI](https://github.com/Oni-zerone/PunkAPI)
* Vue.JS - [yoohahn/VueDogs-API](https://github.com/yoohahn/VueDogs-API)
* Docker - [yoohahn/brewdog-recipe](https://hub.docker.com/r/yoohahn/brewdog-recipe/)
* R - [phillc73/brewdogr](https://github.com/phillc73/brewdogr)

## The Beers

> Status: 325 of 325 completed

If you find an issue with a recipe, please feel free to submit an [issue](https://github.com/samjbmason/punkapi-db/issues)

* [x] 001 - Punk IPA 2007 – 2010
* [x] 002 - Punk IPA 2010 – current
* [x] 003 - The Physics
* [x] 004 - Riptide
* [x] 005 - Hop Rocker  
* [x] 006 - Paradox Islay
* [x] 007 - Paradox Jura
* [x] 008 - Peroxide Punk
* [x] 009 - Hype
* [x] 010 - Buzz
* [x] 011 - Edge
* [x] 012 - Storm
* [x] 013 - Cult Lager
* [x] 014 - Trashy Blonde
* [x] 015 - Original Dogma (Née Speedball)
* [x] 016 - AB:03
* [x] 017 - Zeitgeist
* [x] 018 - Bad Pixie
* [x] 019 - Chaos Theory
* [x] 020 - Zephyr
* [x] 021 - Coffee Imperial Stout
* [x] 022 - Devine Rebel
* [x] 023 - 77 Lager
* [x] 024 - Atlantic IPA
* [x] 025 - How To Disappear Completely
* [x] 026 - 5AM Saint
* [x] 027 - Tokyo Rising Sun Highland
* [x] 028 - Tokyo Rising Sun Lowland
* [x] 029 - Tokyo*
* [x] 030 - Punk Monk
* [x] 031 - Bashah
* [x] 032 - Nanny State
* [x] 033 - Tactical Nuclear Penguin
* [x] 034 - Eurotrash
* [x] 035 - Movember
* [x] 036 - Black Dog
* [x] 037 - Hardcore IPA
* [x] 038 - Sink The Bismarck!
* [x] 039 - Alpha Dog
* [x] 040 - Skull Candy
* [x] 041 - AB:01
* [x] 042 - AB:07
* [x] 043 - Prototype 27
* [x] 044 - TM10
* [x] 045 - AB:02
* [x] 046 - Hardkogt IPA
* [x] 047 - AB:04
* [x] 048 - Alice Porter
* [x] 049 - Santa Paws
* [x] 050 - AB:09
* [x] 051 - Black Tokyo Horizon
* [x] 052 - AB:05
* [x] 053 - Hello My Name Is Ingrid
* [x] 054 - IPA Is Dead: Bramling X
* [x] 055 - IPA Is Dead: Citra
* [x] 056 - IPA Is Dead: Nelson Sauvin
* [x] 057 - IPA Is Dead: Sorachi Ace
* [x] 058 - Avery Brown Dredge
* [x] 059 - Growler
* [x] 060 - Rabiator
* [x] 061 - AB:06
* [x] 062 - Juniper Wheat Beer
* [x] 063 - The End Of History
* [x] 064 - Hops Kill Nazis
* [x] 065 - Mr. Miyagi's Wasabi Stout
* [x] 066 - Sunk Punk
* [x] 067 - AB:10
* [x] 068 - AB:18
* [x] 069 - Old World India Pale Ale
* [x] 070 - Old World Russian Imperial Stout
* [x] 071 - Lost Dog
* [x] 072 - AB:08
* [x] 073 - Sunmaid Stout
* [x] 074 - Shareholder Brew: Black IPA
* [x] 075 - AB:13
* [x] 076 - IPA Is Dead: Simcoe
* [x] 077 - Libertine Porter
* [x] 078 - Mixtape 8
* [x] 079 - Bitch Please
* [x] 080 - IPA Is Dead: Challenger
* [x] 081 - IPA Is Dead: Galaxy
* [x] 082 - IPA Is Dead: HBC 369
* [x] 083 - IPA Is Dead: Motueka
* [x] 084 - Dead Pony Club
* [x] 085 - Libertine Black Ale
* [x] 086 - Anarchist Alchemist
* [x] 087 - Dog A
* [x] 088 - Hunter Foundation Pale Ale
* [x] 089 - AB:19
* [x] 090 - Jack Hammer
* [x] 091 - Never Mind The Anabolics
* [x] 092 - San Diego Scotch Ale
* [x] 093 - AB:12
* [x] 094 - White Noise
* [x] 095 - International Arms Race
* [x] 096 - AB:11
* [x] 097 - Hello My Name Is Beastie
* [x] 098 - Dog Fight
* [x] 099 - Hoppy Christmas
* [x] 100 - Black Eyed King Imp
* [x] 101 - Cocoa Psycho
* [x] 102 - Nuns With Guns
* [x] 103 - Catherine's Pony
* [x] 104 - IPA Is Dead: Amarillo
* [x] 105 - Lichtenstein Pale Ale
* [x] 106 - AB:14
* [x] 107 - IPA Is Dead: Dana
* [x] 108 - IPA Is Dead: El Dorado
* [x] 109 - IPA Is Dead: Goldings
* [x] 110 - IPA Is Dead: Waimea
* [x] 111 - Vagabond Pilsner
* [x] 112 - AB:15
* [x] 113 - Bracken's Porter
* [x] 114 - Fake Lager
* [x] 115 - 10 Heads High
* [x] 116 - Vice Bier
* [x] 117 - Misspent Youth
* [x] 118 - #Mashtag 2013
* [x] 119 - Dog B
* [x] 120 - Electric India
* [x] 121 - Dog Wired
* [x] 122 - Hello My Name Is Mette-Marit
* [x] 123 - Everyday Anarchy
* [x] 124 - Black Jacques
* [x] 125 - Blitz Berliner Weisse
* [x] 126 - Dogma
* [x] 127 - Hello My Name Is Sonja
* [x] 128 - Shipwrecker Circus
* [x] 129 - Dead Metaphor
* [x] 130 - Baby Dogma
* [x] 131 - Unleash The Yeast: American Ale
* [x] 132 - Unleash The Yeast: Bavarian Weizen
* [x] 133 - Unleash The Yeast: Belgian Trappist
* [x] 134 - Unleash The Yeast: Pilsen Lager
* [x] 135 - IPA Is Dead: Vic Secret
* [x] 136 - Brixton Porter
* [x] 137 - Prototype Challenge: Hobo Pop
* [x] 138 - Prototype Challenge: Interstellar
* [x] 139 - Prototype Challenge: Moshi Moshi 15
* [x] 140 - Black Eye Joe
* [x] 141 - Lumberjack Stout
* [x] 142 - Clown King
* [x] 143 - Hello My Name Is Vladimir
* [x] 144 - Bourbon Baby
* [x] 145 - AB:16
* [x] 146 - Comet
* [x] 147 - HBC 366 IPA
* [x] 148 - Kohatu
* [x] 149 - Hello My Name Is Zé
* [x] 150 - Alpha Pop
* [x] 151 - Jasmine IPA
* [x] 152 - #Mashtag 2014
* [x] 153 - Dog C
* [x] 154 - Hello My Name Is Päivi
* [x] 155 - Vote Sepp
* [x] 156 - Magic Stone Dog
* [x] 157 - Russian Doll: Barley Wine
* [x] 158 - Sub Hop
* [x] 159 - U-Boat
* [x] 160 - American Wheat
* [x] 161 - Cap Dog
* [x] 162 - Russian Doll: Double IPA
* [x] 163 - Russian Doll: India Pale Ale
* [x] 164 - Russian Doll: Pale
* [x] 165 - This.Is.Lager.
* [x] 166 - India Pale Weizen
* [x] 167 - AB:17
* [x] 168 - Konnichiwa Kitsune
* [x] 169 - Prototype Challenge: All Day Long
* [x] 170 - Prototype Challenge: Hop Fiction
* [x] 171 - Prototype Challenge: Vagabond Pale Ale
* [x] 172 - Black Eyed King Imp Vietnamese Coffee Edition
* [x] 173 - Shareholder Brew: Bounty
* [x] 174 - Restorative Beverage For Invalids And Convalescents
* [x] 175 - Stereo Wolf Stout
* [x] 176 - B-Sides: Sunshine On Rye
* [x] 177 - B-Sides: Bowman’s Beard
* [x] 178 - Hello My Name Is Little Ingrid
* [x] 179 - IPA Is Dead: Chinook
* [x] 180 - IPA Is Dead: Ella
* [x] 181 - IPA Is Dead: Mandarina Bavaria
* [x] 182 - IPA Is Dead: Pioneer
* [x] 183 - Born To Die
* [x] 184 - B-Sides: Melon And Cucumber
* [x] 185 - B-Sides: Sorachi Bitter
* [x] 186 - B-Sides: Truffle And Chocolate Stout
* [x] 187 - B-Sides: Hoppy Saison
* [x] 188 - B-Sides: Whisky Sour
* [x] 189 - B-Sides: Spiced Cherry Sour
* [x] 190 - B-Sides: Deaf Mermaid
* [x] 191 - #Mashtag 2015
* [x] 192 - Dog D
* [x] 193 - Hinterland
* [x] 194 - Peach Therapy
* [x] 195 - Hello My Name Is Holy Moose
* [x] 196 - Lizard Bride
* [x] 197 - B-Sides: Mango Gose
* [x] 198 - Candy Kaiser
* [x] 199 - Pumpkin King
* [x] 200 - B-Sides: Baby Saison
* [x] 201 - B-Sides: Morag's Mojito
* [x] 202 - B-Sides: Orange Blossom
* [x] 203 - Doodlebug
* [x] 204 - No Label
* [x] 205 - B-Sides: Rhubarb Saison
* [x] 206 - Prototype Challenge: India Session Lager
* [x] 207 - Prototype Challenge: Hopped-Up Brown Ale
* [x] 208 - Albino Squid Assassin
* [x] 209 - B-Sides: Berliner Weisse With Raspberries And Rhubarb
* [x] 210 - Arcade Nation
* [x] 211 - Elvis Juice
* [x] 212 - B-Sides: Berliner Weisse With Hunter Yuzu
* [x] 213 - B-Sides: Cascade, Centennial & Willamette IPA
* [x] 214 - B-Sides: Single Hop Enigma IPA
* [x] 215 - Jet Black Heart
* [x] 216 - Ace Of Simcoe
* [x] 217 - Ship Wreck
* [x] 218 - Monk Hammer
* [x] 219 - Prototype Pils 2.0
* [x] 220 - Blitz Series
* [x] 221 - Dog E
* [x] 222 - Barrel Aged Hinterland
* [x] 223 - AB:20
* [x] 224 - Barrel Aged Albino Squid Assassin
* [x] 225 - Kingpin
* [x] 226 - Paradox Islay
* [x] 227 - Ace Of Chinook
* [x] 228 - Mashtag 2016
* [x] 229 - Neon Overlord
* [x] 230 - Black Hammer
* [x] 231 - Ace Of Citra
* [x] 232 - Chili Hammer
* [x] 233 - Ace Of Equinox
* [x] 234 - Rye Hammer
* [x] 235 - BrewDog Vs Beavertown
* [x] 236 - Prototype Helles
* [x] 237 - Mango And Chili Barley Wine
* [x] 238 - Science IPA
* [x] 239 - Honey And Lemon Blitz
* [x] 240 - Blitz Saison
* [x] 241 - Hello My Name Is Ingrid 2016
* [x] 242 - Crew Brew
* [x] 243 - Gin Blitz
* [x] 244 - AB:21
* [x] 245 - Beatnik
* [x] 246 - Casino Rye Ale
* [x] 247 - Self Assembly Pope
* [x] 248 - Twin Atlantic
* [x] 249 - Hop Shot
* [x] 250 - Small Batch: Rye IPA
* [x] 251 - Small Batch: Sorachi Ace Session
* [x] 252 - Small Batch: Dortmunder
* [x] 253 - Small Batch: 90 Shilling
* [x] 254 - Small Batch: Kellerbier
* [x] 255 - Small Batch: Tripel
* [x] 256 - Small Batch: Vermont IPA
* [x] 257 - Semi Skimmed Occultist
* [x] 258 - Paradox Rye
* [x] 259 - Tropic Thunder
* [x] 260 - New England IPA
* [x] 261 - Small Batch: Nitro Breakfast Stout
* [x] 262 - Small Batch: Vermont IPA V2.0
* [x] 263 - Small Batch: Mandarina Lager 
* [x] 264 - Small Batch: East Coast Crush
* [x] 265 - Pump Action Poet
* [x] 266 - Small Batch: Lemon Meringue Pie 
* [x] 267 - AB:22
* [x] 268 - Hazy Jane
* [x] 269 - Small Batch: Imperial Pale Weizen
* [x] 270 - Blonde Export Stout
* [x] 271 - Small Batch: Cranachan Cream Ale
* [x] 272 - Small Batch: Spelt & Honey Saison
* [x] 273 - Prototype Double IPA
* [x] 274 - Prototype Black Rye IPA
* [x] 275 - Sidewalk Shark
* [x] 276 - Nine To Five Wizard
* [x] 277 - Prototype Blonde Ale
* [x] 278 - AB:23
* [x] 279 - Slot Machine
* [x] 280 - Make Earth Great Again
* [x] 281 - Homicidal Puppet Help Desk
* [x] 282 - Pina Colada Sidewalk Shark
* [x] 283 - AB:24
* [x] 284 - Hello My Name Is Helga
* [x] 285 - Hello My Name Is Sari
* [x] 286 - Hello My Name Is Aune
* [x] 287 - Hello My Name Is Marianne
* [x] 288 - Hello My Name Is Agnetha
* [x] 289 - Hello My Name Is Lieke
* [x] 290 - Hello My Name Is Niamh
* [x] 291 - Hello My Name Is Sofia
* [x] 292 - Hello My Name Is Maria
* [x] 293 - I Wanna Be Your Dog
* [x] 294 - Opaque Jake
* [x] 295 - Choco Libre
* [x] 296 - Off-Duty Alien
* [x] 297 - East Of Vermont
* [x] 298 - Declassified Demi-God
* [x] 299 - Raspberry Popsicle Parade
* [x] 300 - Indie Pale Ale
* [x] 301 - Small Batch: Dry-Hopped Pilsner
* [x] 302 - Hazy Jane Bourbon Barrel Aged
* [x] 303 - Hazy Jane Rye Barrel Aged
* [x] 304 - Karma Cloud
* [x] 305 - Native Son
* [x] 306 - AB:25
* [x] 307 - Kamikaze Knitting Club
* [x] 308 - Very Big Moose
* [x] 309 - Paradox Grain 2018
* [x] 310 - Clockwork Tangerine
* [x] 311 - Sonic Boom
* [x] 312 - Dog G
* [x] 313 - Mallow Mafia BrewDog Vs Amundsen
* [x] 314 - Manic Mango BrewDog Vs Brewski
* [x] 315 - Baltic Fleet BrewDog Vs Bevog
* [x] 316 - SOS (May Day!) BrewDog Vs Brlo
* [x] 317 - Al Adjore! BrewDog Vs Lapir Ata
* [x] 318 - Neverland BrewDog Vs Oedipus
* [x] 319 - Grano Giusto BrewDog Vs Birrificio Italiano
* [x] 320 - King Of Eights
* [x] 321 - Jinx Pale Ale
* [x] 322 - Jet Trash
* [x] 323 - Interstate Vienna Lager
* [x] 324 - Fools Gold Dortmunder Lager
* [x] 325 - Zipcode

## License

Please see [License](LICENSE)
