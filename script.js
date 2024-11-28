function validarFecha() {
    const fechaInput = document.getElementById("fechaInput").value;
    const message = document.getElementById("message");
  
    // Expresión regular para validar la fecha en formato DD/MM/YYYY
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  
    if (regex.test(fechaInput)) {
      message.textContent = "Fecha válida. 🎉";
      message.className = "success";
    } else {
      message.textContent = "Fecha no válida. ❌";
      message.className = "error";
    }
  }
  