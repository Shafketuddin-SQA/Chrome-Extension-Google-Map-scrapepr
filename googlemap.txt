let results = [];
document.querySelectorAll('.Nv2PK').forEach(el => {
    let name = el.querySelector('.qBF1Pd')?.innerText || "N/A"; // 1. Business Name

    // Get All Text Lines
    let lines = el.innerText.split("\n");

    // Ensure we have enough lines to extract info
    let businessTypeAndAddress = "Unknown";
    if (lines.length > 2) {
        businessTypeAndAddress = lines[2].split("Open")[0].split("Closed")[0].trim(); // Remove "Open" or "Closed"
    }

    // Extract Phone Number
    let phone = el.innerText.match(/\d{4,}-\d{4,}|\+\d{1,3} \d{4,}-\d{4,}/)?.[0] || "No phone";

    // Extract Website if available
    let website = "No website";
    let websiteElement = Array.from(el.querySelectorAll('a')).find(a => a.innerText.includes("Website"));
    if (websiteElement) {
        website = websiteElement.href;
    }

    results.push({ name, businessTypeAndAddress, website, phone });
});

console.log(JSON.stringify(results, null, 2));
