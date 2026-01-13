// function for translations
async function loadLang() {
  const lang = localStorage.getItem("lang") || "pt";
  const res = await fetch(`lang/${lang}.json`);
  const dict = await res.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerText = dict[key];
  });

  let langOptins = document.getElementById("id-lang-options");
  if (lang == "en") {
    langOptins.innerHTML = `
      <a class="lang-btn" onclick="setLang('pt')">
        <img class="flag-icon" src="svg/br.svg" alt="Brazilian Flag">
        PT-BR
      </a>
    `
  } else {
    langOptins.innerHTML = `
      <a class="lang-btn" onclick="setLang('en')">
        <img class="flag-icon" src="svg/us.svg" alt="United States of America Flag">
        EN-US
      </a>
    `
  };
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  loadLang();
}

loadLang();
