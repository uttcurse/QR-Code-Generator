function generateQR() {
    let text = document.getElementById('url').value;
    if (text !== '') {
      let url = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
      let img = document.createElement('img');
      img.src = url;
      document.getElementById('qrcode').innerHTML = '';
      document.getElementById('qrcode').appendChild(img);
    } 
    else {
      alert('Please enter text or URL');
    }
}
  