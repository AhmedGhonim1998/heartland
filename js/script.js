document.getElementById('pergolaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const attachmentType = document.getElementById('attachmentType').value;
    const depth = document.getElementById('depth').value;
    const width = document.getElementById('width').value;
    const color = document.getElementById('color').value;
    const postType = document.getElementById('postType').value;
    const purlinSpacing = parseFloat(document.getElementById('purlinSpacing').value);
    const capStyle = document.getElementById('capStyle').value;
    const fanMount = parseInt(document.getElementById('fanMount').value);
    const hurricaneClips = document.getElementById('hurricaneClips').value === 'Yes';
    const beamAttachBrackets = document.getElementById('beamAttachBrackets').value === 'Yes';

    // Basic pricing logic based on selections
    let basePrice = 5000; // Base price for Traditional model

    if (depth === "10'") basePrice += 500;
    if (depth === "12'") basePrice += 1000;
    if (depth === "14'") basePrice += 1500;
    if (depth === "16'") basePrice += 2000;

    if (width === "10'") basePrice += 500;
    if (width === "12'") basePrice += 1000;
    if (width === "14'") basePrice += 1500;
    if (width === "16'") basePrice += 2000;

    if (color === 'Tan') basePrice += 200;
    if (color === 'Black') basePrice += 400;

    if (postType === '5in sqr post w trim ring x 10\'') basePrice += 100;
    if (postType === '7in Sqr Column x 10\'') basePrice += 200;
    if (postType === '10in Round Column x 10\'') basePrice += 300;
    if (postType === '8in Sqr Column x 10\'') basePrice += 150;
    if (postType === '8in Sqr Column x 10\' w/ trim ring') basePrice += 250;

    if (purlinSpacing === 0.9) basePrice += 300;
    if (purlinSpacing === 0.75) basePrice += 200;
    if (purlinSpacing === 0.5) basePrice += 100;

    if (capStyle === 'Flat Cap') basePrice += 50;
    if (capStyle === 'Bevel Cap') basePrice += 100;

    basePrice += fanMount * 100;
    if (hurricaneClips) basePrice += 50;
    if (beamAttachBrackets) basePrice += 75;

    // Populate results
    document.getElementById('beamCount').textContent = attachmentType === 'Attached' ? '2' : '4';
    document.getElementById('beamLength').textContent = width;
    document.getElementById('rafterCount').textContent = '6';
    document.getElementById('rafterLength').textContent = depth;
    document.getElementById('purlinCount').textContent = purlinSpacing !== '' ? 'Yes' : 'No';
    document.getElementById('purlinLength').textContent = depth;
    document.getElementById('postCount').textContent = attachmentType === 'Attached' ? '2' : '4';
    document.getElementById('monsterPosts').textContent = postType.includes('Round') ? 'Yes' : 'No';

    document.getElementById('reinforcementListPrice').textContent = '$1000';
    document.getElementById('reinforcementUnitPrice').textContent = '$1000';
    document.getElementById('postsListPrice').textContent = '$500';
    document.getElementById('postsUnitPrice').textContent = '$500';
    document.getElementById('columnsListPrice').textContent = '$300';
    document.getElementById('columnsUnitPrice').textContent = '$300';
    document.getElementById('roofListPrice').textContent = '$1200';
    document.getElementById('roofUnitPrice').textContent = '$1200';
    document.getElementById('trimFastenersListPrice').textContent = '$200';
    document.getElementById('trimFastenersUnitPrice').textContent = '$200';
    document.getElementById('capsAccessoriesListPrice').textContent = '$150';
    document.getElementById('capsAccessoriesUnitPrice').textContent = '$150';

    const subtotal = basePrice + 3050; // Base price + component costs
    document.getElementById('subtotalList').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('subtotalUnit').textContent = `$${subtotal.toFixed(2)}`;

    const tax = subtotal * 0.07;
    document.getElementById('taxList').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('taxUnit').textContent = `$${tax.toFixed(2)}`;

    const grandTotal = subtotal + tax;
    document.getElementById('grandTotalList').textContent = `$${grandTotal.toFixed(2)}`;
    document.getElementById('grandTotalUnit').textContent = `$${grandTotal.toFixed(2)}`;

    document.getElementById('resultsSection').style.display = 'block';
});