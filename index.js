/* Tentang program */
// const program = {
// 	nama     : 'Ratain',
// 	versi    : '1.0.0',
// 	bahasa   : 'Javascript',
// 	deskripsi: 'Program ini dibuat untuk mengubah object menjadi string yang diformat sisi, posisi, dan sekat antara kunci dan nilai',
// 	penyusun : {
// 		nama   : 'Kintaro Azura Chaniago',
// 		contact: [{ facebook : 'kintaro.azura' }, { instagram: 'kintaro_azura' }, { telegram : 'kintaroazura' }, { whatsapp : '+62 896 3394 8126' }]
// 	}
// }

/* Meratakan kunci dan nilai dari objek */
const ratain = (objek, sisi='kiri', posisi='kiri', perata=':') => {
	/* Menentukan kunci dan nilai terpanjang */
	let [kunci, kunciTerpanjang, nilaiTerpanjang, text] = [Object.keys(objek), 0, 0, '']
	kunci.forEach( k => {
		let nilai = objek[k].toString()
		kunciTerpanjang = k.length > kunciTerpanjang ? k.length : kunciTerpanjang
		nilaiTerpanjang = nilai.length > nilaiTerpanjang ? nilai.length : nilaiTerpanjang
	})

	/* Menyusun spasi dan perata */
	kunci.forEach( k => {
		/* Lebar jendela terminal */
		const lebarJendela = process.stdout.columns

		/* Menyiapkan beberapa variable yang akan digunakan */
		let [
			spasiKunci, /* text spasi */
			spasiNilai, /* text spasi */
			nilai, /* text nilai dari objek */
			sisaLebarJendela, /* jumlah area terminal yang tidak ditimpa karakter per baris */
			baris, /* setiap baris terminal */
			sisaJendelaKiriKanan, /* text spasi */
			x, /* angka penghitung 0 */
			setengahSisaLebarJendela /* text spasi */
		] = ['', '', objek[k].toString(), '', '', 0, 0, '']

		/* Menyiapkan spasi untuk kunci dan nilai */
		while (x < lebarJendela) {
			/* Mengisi spasiKunci dengan spasi */
			spasiKunci += x < kunciTerpanjang - k.length ? ' ' : ''
			/* Mengisi spasiNilai dengan spasi */
			spasiNilai += x < nilaiTerpanjang - nilai.length ? ' ' : ''
			x++
		}

		baris
		/* Meratakan baris ke sisi kanan */
		+= sisi === 'kanan'
		? spasiKunci + k + ' ' + perata + ' ' + spasiNilai + nilai + ' ' + perata

		/* Meratakan baris ke tengah */
		: sisi === 'tengah'
		? spasiKunci + k + ' ' + perata + ' ' + nilai + spasiNilai

		/* Meratakan baris ke sisi kiri */
		: perata + ' ' + k + spasiKunci + ' ' + perata + ' ' + nilai + spasiNilai

		/* Mengisi sisa lebar jendela dengan spasi */
		for ( let x = baris.length; x < lebarJendela; x++ ) sisaLebarJendela += ' '

		/* Membagi sisa lebar jendela kiri kanan untuk penggunaan posisi tengah */	
		sisaJendelaKiriKanan     = Math.floor(lebarJendela / 2 - baris.length / 2)
		sisaJendelaKiriKanan    -= sisaJendelaKiriKanan % 2 === 0 ? 0 : 1
		setengahSisaLebarJendela = sisaLebarJendela
			.slice(0, sisaJendelaKiriKanan)

		baris
		/* Memposisikan text ke sisi kanan */
		= posisi === 'kanan'
		? sisaLebarJendela + baris + '\n'

		/* Memposisikan text ke tengah */
		: posisi === 'tengah'
		? setengahSisaLebarJendela + baris + setengahSisaLebarJendela + '\n'

		/* Memposisikan text ke sisi kiri */
		: baris + sisaLebarJendela + '\n'

		text += baris
	})

	return text
}

module.exports = ratain

// const [asean1, asean2, note] = [
//	{ /* Data tester [0] */
// 		Indonesia: 'Jakarta',
// 		Malaysia : 'Kuala Lumpur',
// 		Singapura: 'Singapura',
// 		Thailand : 'Bangkok',
// 		Filipina : 'Manila',
// 		Kamboja  : 'Phomn Phen',
// 		Vietnam  : 'Hanoi',
// 		Myanmar  : 'Naypyidaw',
// 		Laos     : 'Vientiane'
// 	},
// 	{ /* Data tester [1] */
// 		'Brunei Darusalam': 'Bandar seri Begawan',
// 		'Timor Leste'     : 'Dili'
// 	},
// 	{ '' : '', 'Most Loved' : 'Indonesia' } /* Data tester [2] */
// ]

// console.clear()

// const objekDigabungin = Object.assign(asean1, asean2, note)
// const diratain        = ratain(objekDigabungin, 'tengah', 'tengah')

// console.log(diratain)
