window.addEventListener("load", function() {
  const h1 = document.querySelector("h1");
  const h1Two = document.querySelector("h1");
  const h2 = document.querySelector("h2");
  const p = document.querySelector("p"); 
  const imgElement = document.querySelector("img");
  const ulElement = document.querySelector("ul");

  const H1Element = document.createElement("h1");
  const H1Element2 = document.createElement("h1");
  const li1Element = document.createElement("li");
  const li2Element = document.createElement("li");
  const pElement = document.createElement("p");
  const H2Element = document.createAttribute("h2");
  const aElement = document.createElement("a");

  H1Element.append("Webpage Recreation Practice");
  h1.append(H1Element);

  pElement.append("The HTML of this webpage was created with JavaScript.");
  p.append(pElement);
  p.after(imgElement);

  imgElement.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";

  H1Element2.append("test");
  h1Two.append(H1Element2);
  h1Two.before(imgElement);

  ulElement.setAttribute("id", "ulList");
  li1Element.append("It is endemic to the mountains of Colombia.");
  li2Element.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  document.getElementById("ulList").append(li1Element, li2Element);

  
})
