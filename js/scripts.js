window.addEventListener("load", function() {
  const body = document.querySelector("body");

  const h1One = document.createElement("h1");
  const h1Two = document.createElement("h1");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const pText = document.createElement("p");
  const h2 = document.createElement("h2");
  const aElement = document.createElement("a");
  const ul = document.createElement("ul");
  const img = document.createElement("img");

  
  h1One.append("Webpage Recreation Practice");
  

  pText.append("The HTML of this webpage was created with JavaScript.");
  h1Two.append("Facts about the Multicolored Tanager");
  img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  img.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
  img.style.width = "50%";  
  h2.append("Source");
  aElement.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  aElement.append("Wikipedia");
  body.append(h1One,pText,img, h1Two,ul,h2,aElement);

  li1.append("It is endemic to the mountains of Colombia.");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  document.querySelector("ul").append(li1, li2);
  
  
})