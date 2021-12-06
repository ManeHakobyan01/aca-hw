function showImage(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      const imag = document.getElementById("img-p");
      imag.src = src;
      imag.style.display = "block";
    }
  }