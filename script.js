function zarAt() {
    let count = 0;
    const zarGorsel = document.getElementById('zarGorsel');
    const interval = setInterval(() => {
        const randomZar = Math.floor(Math.random() * 12) + 1;
        zarGorsel.innerText = randomZar;
        count++;
        if (count >= 10) {
            clearInterval(interval);
            const finalZar = Math.floor(Math.random() * 12) + 1;
            zarGorsel.innerText = finalZar;

            let yer = '';

            switch (finalZar) {
                case 1: yer = 'Brendenburg Kapısı'; break;
                case 2: yer = 'Neuschwanstein Şatosu'; break;
                case 3: yer = 'Köln Katedrali'; break;
                case 4: yer = 'Eyfel Kulesi'; break;
                case 5: yer = 'Louvre Müzesi'; break;
                case 6: yer = 'Mont Saint-Michel'; break;
                case 7: yer = 'Kolezyum'; break;
                case 8: yer = 'Pisa Kulesi'; break;
                case 9: yer = 'Venedik Kanalları'; break;
                case 10: yer = 'Ayasofya'; break;
                case 11: yer = 'Kapadokya'; break;
                case 12: yer = 'Pamukkale'; break;
            }
            document.getElementById('zarSonuc').innerText = `🎲 Zar: ${finalZar} — Bugünkü rotan: ${yer}!`;
        }
    }, 100);
}
