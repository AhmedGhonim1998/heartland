        // Data extracted from PDFs
        const pricingData = {
            reinforcement: { unitPrice: 770.05 },
            posts: [
                { type: "5in sqr post x 10'", price: 303.26 },
                { type: "5in sqr post w trim ring x 10'", price: 350.00 },
                { type: "7in Sqr Column x 10'", price: 980.17 },
                { type: "10in Round Column x 10'", price: 1200.00 },
                { type: "8in Sqr Column x 10'", price: 1100.00 },
                { type: "8in Sqr Column x 10' w/ trim ring", price: 1300.00 }
            ],
            roof: { unitPrice: 1493.17 },
            trimFasteners: { unitPrice: 182.01 },
            capsAccessories: { unitPrice: 187.23 }
        };

        document.getElementById('pergolaForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const attachmentType = document.getElementById('attachmentType').value;
            const depth = parseInt(document.getElementById('depth').value.replace("'", ""));
            const width = parseInt(document.getElementById('width').value.replace("'", ""));
            const color = document.getElementById('color').value;
            const postType = document.getElementById('postType').value;
            const purlinSpacing = parseFloat(document.getElementById('purlinSpacing').value);
            const capStyle = document.getElementById('capStyle').value;
            const fanMount = parseInt(document.getElementById('fanMount').value);
            const hurricaneClips = document.getElementById('hurricaneClips').value === 'Yes';
            const beamAttachBrackets = document.getElementById('beamAttachBrackets').value === 'Yes';

            // Calculate structure details
            const beamCount = attachmentType === 'Attached' ? 2 : 4;
            const rafterCount = 6; // Fixed for simplicity
            const purlinCount = purlinSpacing !== '' ? Math.ceil(rafterCount * purlinSpacing) : 0;
            const postCount = attachmentType === 'Attached' ? 2 : 4;
            const monsterPostsRequired = postType.includes('Round') ? 'Yes' : 'No';

            // Populate structure details
            document.getElementById('beamCount').textContent = beamCount;
            document.getElementById('beamLength').textContent = `${width}'`;
            document.getElementById('rafterCount').textContent = rafterCount;
            document.getElementById('rafterLength').textContent = `${depth}'`;
            document.getElementById('purlinCount').textContent = purlinCount;
            document.getElementById('purlinLength').textContent = `${depth}'`;
            document.getElementById('postCount').textContent = postCount;
            document.getElementById('monsterPosts').textContent = monsterPostsRequired;

            // Calculate pricing
            const reinforcementPrice = pricingData.reinforcement.unitPrice;
            const selectedPost = pricingData.posts.find(post => post.type === postType).price;
            const columnsPrice = selectedPost * postCount;
            const roofPrice = pricingData.roof.unitPrice;
            const trimFastenersPrice = pricingData.trimFasteners.unitPrice;
            const capsAccessoriesPrice = pricingData.capsAccessories.unitPrice;

            const subtotal = reinforcementPrice + columnsPrice + roofPrice + trimFastenersPrice + capsAccessoriesPrice;
            const tax = subtotal * 0.07;
            const grandTotal = subtotal + tax;

            // Populate pricing summary
            document.getElementById('reinforcementListPrice').textContent = `$${reinforcementPrice.toFixed(2)}`;
            document.getElementById('reinforcementUnitPrice').textContent = `$${reinforcementPrice.toFixed(2)}`;
            document.getElementById('postsListPrice').textContent = `$${columnsPrice.toFixed(2)}`;
            document.getElementById('postsUnitPrice').textContent = `$${selectedPost.toFixed(2)}`;
            document.getElementById('columnsListPrice').textContent = `$${columnsPrice.toFixed(2)}`;
            document.getElementById('columnsUnitPrice').textContent = `$${selectedPost.toFixed(2)}`;
            document.getElementById('roofListPrice').textContent = `$${roofPrice.toFixed(2)}`;
            document.getElementById('roofUnitPrice').textContent = `$${roofPrice.toFixed(2)}`;
            document.getElementById('trimFastenersListPrice').textContent = `$${trimFastenersPrice.toFixed(2)}`;
            document.getElementById('trimFastenersUnitPrice').textContent = `$${trimFastenersPrice.toFixed(2)}`;
            document.getElementById('capsAccessoriesListPrice').textContent = `$${capsAccessoriesPrice.toFixed(2)}`;
            document.getElementById('capsAccessoriesUnitPrice').textContent = `$${capsAccessoriesPrice.toFixed(2)}`;
            document.getElementById('subtotalList').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('subtotalUnit').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('taxList').textContent = `$${tax.toFixed(2)}`;
            document.getElementById('taxUnit').textContent = `$${tax.toFixed(2)}`;
            document.getElementById('grandTotalList').textContent = `$${grandTotal.toFixed(2)}`;
            document.getElementById('grandTotalUnit').textContent = `$${grandTotal.toFixed(2)}`;

            document.getElementById('resultsSection').style.display = 'block';
        });