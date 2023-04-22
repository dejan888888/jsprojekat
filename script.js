
function promeniBoju(x, boja) 
{
    if (x === 1) 
    {
      document.getElementById("link1").style.color = boja;
    } 
    else if (x === 2) 
    {
      document.getElementById("link2").style.color = boja;
    } 
    else if (x === 3) 
    {
      document.getElementById("link3").style.color = boja;
    }
    else if (x === 5) 
    {
      document.getElementById("link5").style.color = boja;
    }
    else if (x===4)
    {
      document.getElementById("dugme1").style.color=boja;
    }
}
  
function zaobliSliku(x, radius) 
{
  if (x === 1) 
  {
    document.getElementById("slika-p1").style.borderRadius = radius + "px";
  }
  else
  {
    document.getElementById("slika-p2").style.borderRadius = radius + "px";
  }
}

function pretvoriSlova(text) 
{
  return text.toUpperCase();
}

function proveriFormu() 
{
  let ime = document.getElementById("ime1").value;
  let prezime = document.getElementById("prezime1").value;
  let telefon = document.getElementById("telefon1").value;
  let email = document.getElementById("email1").value;
  let poruka = document.getElementById("poruka1").value;

  ime = pretvoriSlova(ime);
  prezime = pretvoriSlova(prezime);

  const podaci = [ime, prezime, telefon, email, poruka];
  const obaveznaPolja = [];

  for (let i = 0; i < podaci.length; i++) 
  {
    if (podaci[0] === "" || podaci[1] === "" || podaci[3] === "") 
    {
      obaveznaPolja.push(i);
    }
  }

  if (obaveznaPolja.length > 0) 
  {
    alert("Molimo unesite podatke u sva obavezna polja!!!.");
    return;
  }

  let ispis = " Vasi uneti podaci su poslati:\nIme: " + podaci[0] + "\nPrezime: " + podaci[1] + "\nTelefon: " + podaci[2] + "\nEmail: " + podaci[3];

  if (poruka !== "" && poruka !== "Unesite vasu poruku...") 
  {
    ispis += "\nPoruka: " + podaci[4];
  }
  alert(ispis);
}

function obrisiPoruku()
{
   let poruka=document.getElementById("poruka1");
  poruka.value="";
  poruka.style.color="black"
  return;
}

document.addEventListener('DOMContentLoaded', function() {
  const cene = document.getElementById("cene");
  let elementi = "";
  elementi += "<table border='1' style='background-color: #4AA1FFFF; width: 40%;  margin-left: 30%; margin-right: 30%;'>";
  elementi+= "<caption style='border: 1px solid black; background-color:#4AA1FFFF;'>Cene proizvoda</caption>";
  elementi += "<tr><td>Naziv proizvoda</td> <td>Cena proizvoda</td></tr>";
  elementi += "<tr><td>Windows 10 Profesional</td> <td>10 0000 din</td></tr>";
  elementi += "<tr><td>Windows 11 Profesional</td> <td>18 0000 din </td></tr><tr>";
  elementi += "  <td>Microsoft Office 2019 pro plus</td> <td>25 0000 din </td></tr></table>";
  cene.innerHTML = elementi;
});








 
         