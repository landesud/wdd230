// Date Formatter into the US standard date and time
function formatDateTime(date) {
  let options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

// Gets the current year
const currentYear = new Date().getFullYear();

// Gets the last Modified time of the current document and formats it
const lastModif = formatDateTime(new Date(document.lastModified));

// First paragraph in the footer
document.querySelector(
  "#footer-copy"
).innerHTML = `&copy;${currentYear} - Emmanuel Landeros - Mexico &nbsp; <img width="48" height="48" src="../images/mexico-icon.png" alt="mexico" />`;

// Second paragraph in the footer
document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification: ${lastModif}`;
