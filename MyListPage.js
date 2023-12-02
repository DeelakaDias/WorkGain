//function to show an empty table when hide table clicked
function closeTable(){
  var table ="<tr><th></th><th></th><th></th></tr>";
  document.getElementById("demo").innerHTML = table;
}

//function to load the XML file
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };

    xmlhttp.open("GET", "leaderboard.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Poisition</th><th>Name</th><th>Points</th></tr>";
    var x = xmlDoc.getElementsByTagName("PLAYER");
    for (i = 0; i <3; i++) { 
      table += "<tr class='hi'><td>" +
      x[i].getElementsByTagName("RANK")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("POINTS")[0].childNodes[0].nodeValue +
      "</td></tr>";

    }
    for (i = 3; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("RANK")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("POINTS")[0].childNodes[0].nodeValue +
      "</td></tr>";

    }
    table += "<br><button class='buttons' type='button' onclick='closeTable()'> Hide Leaderboard </button>"
    document.getElementById("demo").innerHTML = table;
    
  }


//function to load xml file data using DOMpraser
function myTest() {
    var testing = `<LEADERBOARD>
    <PLAYER>
      <RANK>01</RANK>
      <NAME>Lana Ray</NAME>
      <POINTS>95</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>02</RANK>
      <NAME>Roman Rollins</NAME>
      <POINTS>90</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>03</RANK>
      <NAME>Jhonny Cena</NAME>
      <POINTS>89</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>04</RANK>
      <NAME>Mohamed Ali</NAME>
      <POINTS>86</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>05</RANK>
      <NAME>Smol Dickinson</NAME>
      <POINTS>83</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>06</RANK>
      <NAME>Vin Petrol</NAME>
      <POINTS>79</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>07</RANK>
      <NAME>Ryan Mamoa</NAME>
      <POINTS>72</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>08</RANK>
      <NAME>Jason Ranolds</NAME>
      <POINTS>60</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>09</RANK>
      <NAME>Juliet Lokaste</NAME>
      <POINTS>51</POINTS>
    </PLAYER>
    <PLAYER>
      <RANK>10</RANK>
      <NAME>Tychon Lewis</NAME>
      <POINTS>45</POINTS>
    </PLAYER>
  </LEADERBOARD>`
    parser = new DOMParser();
    var table = "<tr><th>Poisition</th><th>Name</th><th>Points</th></tr>"
    xmlDoc = parser.parseFromString(testing,"text/xml");
    var x = xmlDoc.getElementsByTagName("PLAYER");
    for (i = 0; i <3; i++) { 
      table += "<tr class='hi'><td>" +
      x[i].getElementsByTagName("RANK")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("POINTS")[0].childNodes[0].nodeValue +
      "</td></tr>";

    }
    for (i = 3; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("RANK")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("POINTS")[0].childNodes[0].nodeValue +
      "</td></tr>";

    }
    table += "<br><button class='buttons' type='button' onclick='closeTable()'> Hide Leaderboard </button>"
    document.getElementById("demo").innerHTML = table;
  }