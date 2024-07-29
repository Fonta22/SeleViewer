function getUrl() {
    const assignatura = document.getElementById('assignatura').value;
    const any = document.getElementById('any').value;
    const mes = document.getElementById('mes').value;
    const solucions = document.getElementById('solucions').value;

    const pdfViewer = document.getElementById('pdfViewer');

    const pdfUrl = 'https://selecat.cat/pau/pau_' + assignatura + any.slice(-2) + mes + solucions + '.pdf';

    pdfViewer.src = pdfUrl;
}

const assignatures = [
    {
        nom: "Català",
        pre: "llca"
    },
    {
        nom: "Castellà",
        pre: "lles"
    },
    {
        nom: "Anglès",
        pre: "angl"
    },
    {
        nom: "Història",
        pre: "hist"
    },
    {
        nom: "",
        pre: ""
    },
];

const select = document.getElementById("assignatura");

for (const assignatura of assignatures) {
    const option = document.createElement("option");
    option.value = assignatura.pre;
    option.innerText = assignatura.nom;
    select.appendChild(option);
}
