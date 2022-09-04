# Ratain
Fungsi yang bisa mengubah object menjadi string yang diratain, diposisiin, dan di sekatin. Cobain dahh :)

## Penggunaan

> Misal nya kita punya data berikut ini

```Javascript
const [asean1, asean2, note] = [
	{ /* Data tester [0] */
		Indonesia: 'Jakarta',
		Malaysia : 'Kuala Lumpur',
		Singapura: 'Singapura',
		Thailand : 'Bangkok',
		Filipina : 'Manila',
		Kamboja  : 'Phomn Phen',
		Vietnam  : 'Hanoi',
		Myanmar  : 'Naypyidaw',
		Laos     : 'Vientiane'
	},
	{ /* Data tester [1] */
		'Brunei Darusalam': 'Bandar seri Begawan',
		'Timor Leste'     : 'Dili'
	},
	{ '' : '', 'Most Loved' : 'Indonesia' } /* Data tester [2] */
]
```

Kita bisa ratain ketiga objet diatas pake fungsi ratain.

> ratain(data, sisi, posisi, sekat)

- data harus objek
- sisi harus string 'kiri' atau 'tengah' atau 'kanan'
- posisi harus string 'kiri' atau 'tengah' atau 'kanan'
- sekat harus string
- Rata kiri

**Code**

```Javascript
console.clear()

const objekDigabungin = Object.assign(asean1, asean2, note)
const diratain        = ratain(objekDigabungin, 'kiri', 'kiri', ':')

console.log(diratain)
```

**Output**

```
: Indonesia        : Jakarta
: Malaysia         : Kuala Lumpur
: Singapura        : Singapura
: Thailand         : Bangkok
: Filipina         : Manila
: Kamboja          : Phomn Phen
: Vietnam          : Hanoi
: Myanmar          : Naypyidaw
: Laos             : Vientiane
: Brunei Darusalam : Bandar seri Begawan
: Timor Leste      : Dili
:                  :
: Most Loved       : Indonesia
```

> Rata tengah

**Code**

```Javascript
console.clear()

const objekDigabungin = Object.assign(asean1, asean2, note)
const diratain        = ratain(objekDigabungin, 'tengah', 'tengah', ':')

console.log(diratain)
```

**Output**

```
                       Indonesia : Jakarta
                        Malaysia : Kuala Lumpur
                       Singapura : Singapura
                        Thailand : Bangkok
                        Filipina : Manila
                         Kamboja : Phomn Phen
                         Vietnam : Hanoi
                         Myanmar : Naypyidaw
                            Laos : Vientiane
                Brunei Darusalam : Bandar seri Begawan
                     Timor Leste : Dili
                                 :
                      Most Loved : Indonesia
```

> Rata kanan

**Code**

```Javascript
console.clear()

const objekDigabungin = Object.assign(asean1, asean2, note)
const diratain        = ratain(objekDigabungin, 'kanan', 'kanan', ':')

console.log(diratain)
```

**Output**

```
                                      Indonesia :             Jakarta :
                                       Malaysia :        Kuala Lumpur :
                                      Singapura :           Singapura :
                                       Thailand :             Bangkok :
                                       Filipina :              Manila :
                                        Kamboja :          Phomn Phen :
                                        Vietnam :               Hanoi :
                                        Myanmar :           Naypyidaw :
                                           Laos :           Vientiane :
                               Brunei Darusalam : Bandar seri Begawan :
                                    Timor Leste :                Dili :
                                                :                     :
                                     Most Loved :           Indonesia :
```

#Terimakasi sudah mampir kemari :)
