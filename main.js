
  const selected = document.getElementById("answer").value;
  const result = document.getElementById("result");
  
  if (selected === "orange"){
    result.innerHTML = "✅ correct!! Orange is a citrus fruit";
    document.body.style.backgroundColor="lightgreen";
  }
  else if (selected ==="select") {
    result.innerHTML="⚠ please select an option️";
    document.body.style.backgroundColor= "white";
  }
  else {
    result.innerHTML= "❌ thats not a citrus fruit";
    document.body.style.backgroundColor="red";
  }
