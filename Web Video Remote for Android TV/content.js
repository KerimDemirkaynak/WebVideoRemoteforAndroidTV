// Sadece bu pencerede (frame) bir video varsa işlem yap
// Bu, uzantının gereksiz yere çalışmasını engeller.
if (document.querySelector('video')) {

  console.log('Video oynatici tespit edildi, kumanda dinleniyor.');

  // Sayfadaki herhangi bir tuşa basıldığında bu fonksiyon çalışır
  document.addEventListener('keydown', function(event) {
    
    // Aktif olan video oynatıcıyı bul
    const video = document.querySelector('video');

    // Video bulunamazsa hiçbir şey yapma (çok nadir bir durum)
    if (!video) return;

    // Basılan tuşa göre işlem yap
    switch (event.code) {
      case 'ArrowLeft': // Sol Yön Tuşu
        event.preventDefault(); 
        video.currentTime -= 10;
        break;

      case 'ArrowRight': // Sağ Yön Tuşu
        event.preventDefault();
        video.currentTime += 10;
        break;
      
      case 'ArrowUp': // Yukarı Yön Tuşu
        event.preventDefault();
        // Sesi %10 artır, ama 1'i geçmesin
        video.volume = Math.min(1, video.volume + 0.1);
        break;

      case 'ArrowDown': // Aşağı Yön Tuşu
        event.preventDefault();
        // Sesi %10 azalt, ama 0'ın altına inmesin
        video.volume = Math.max(0, video.volume - 0.1);
        break;

      case 'Space': // Boşluk (genellikle OK/Enter merkezi)
      case 'Enter':
      case 'NumpadEnter':
      case 'MediaPlayPause': // Kumandanın özel Oynat/Duraklat tuşu
        event.preventDefault();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
        break;
    }
  }, true); // 'true' kullanarak olayı daha erken yakalarız, bu da sayfanın varsayılan eylemlerini engellemeyi kolaylaştırır.
}