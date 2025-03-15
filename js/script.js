        // Comprehensive pricing data from PDFs
        const pricingData = {
            Traditional: {
                base: 5000,
                depth: {
                    "8'": 0,
                    "10'": 500,
                    "12'": 1000,
                    "14'": 1500,
                    "16'": 2000
                },
                width: {
                    "8'": 0,
                    "10'": 500,
                    "12'": 1000,
                    "14'": 1500,
                    "16'": 2000,
                    "18'": 2000,
                    "20'": 2500,
                    "24'": 3000,
                    "28'": 3500,
                    "32'": 4000
                },
                posts: {
                    "5in sqr post x 10'": {
                        White: 303.26,
                        Tan: 350.00,
                        Black: 22.05
                    },
                    "7in Sqr Column x 10'": {
                        White: 980.17,
                        Tan: 32.20,
                        Black: 40.50
                    },
                    "10in Round Column x 10'": {
                        White: 1200.00,
                        Tan: 1300.00,
                        Black: 1400.00
                    }
                },
                roof: {
                    "8'": { unit: 14.04, qty: 6 },
                    "10'": { unit: 18.72, qty: 6 },
                    "12'": { unit: 18.72, qty: 6 },
                    "14'": { unit: 21.04, qty: 6 },
                    "16'": { unit: 23.40, qty: 6 }
                },
                trim: 182.01,
                caps: {
                    "Standard Cap (Scroll)": 150.00,
                    "Flat Cap": 50.00,
                    "Bevel Cap": 100.00
                },
                accessories: {
                    "Hurricane Clips": 0.25,
                    "Beam Attach Brackets": 0.90,
                    "Fan Mount": 100.00,
                    "Crate": 250.00,
                    "Pallet": 10.00
                }
            },
            Modern: {
                base: 6000,
                // Add Modern-specific pricing here
            },
            Elements: {
                base: 7000,
                // Add Elements-specific pricing here
            }
        };

        // Calculator function
        function calculateQuote() {
            const selectedModel = document.querySelector('.model-option.selected')?.dataset.model;
            const depth = document.getElementById('depth').value;
            const width = document.getElementById('width').value;
            const color = document.getElementById('color').value;
            const postType = document.getElementById('postType').value;
            const purlinSpacing = parseFloat(document.getElementById('purlinSpacing').value);
            const capStyle = document.getElementById('capStyle').value;
            const fanMounts = parseInt(document.getElementById('fanMounts').value);
            const hurricaneClips = document.getElementById('hurricaneClips').value === 'Yes';
            const beamBrackets = document.getElementById('beamBrackets').value === 'Yes';

            if (!selectedModel) {
                alert('Please select a model first');
                return;
            }

            // Structural calculations
            const beamCount = 4; // Default for freestanding
            const rafterCount = 6;
            const postCount = beamCount;
            const purlinCount = Math.ceil(rafterCount * purlinSpacing);
            const monsterPosts = postType.includes('Round');

            // Pricing calculations
            let total = pricingData[selectedModel].base;
            total += pricingData[selectedModel].depth[depth] || 0;
            total += pricingData[selectedModel].width[width] || 0;

            // Post costs
            const postUnit = pricingData[selectedModel].posts[postType]?.[color] || 0;
            total += postUnit * postCount;

            // Roof costs
            const roofUnit = pricingData[selectedModel].roof[depth.replace("'", "") + "'"]?.unit || 0;
            const roofQty = pricingData[selectedModel].roof[depth]?.qty || 0;
            total += roofUnit * roofQty;

            // Trim costs
            total += pricingData[selectedModel].trim || 0;

            // Cap costs
            total += pricingData[selectedModel].caps[capStyle] || 0;

            // Accessories
            if (hurricaneClips) total += pricingData[selectedModel].accessories["Hurricane Clips"];
            if (beamBrackets) total += pricingData[selectedModel].accessories["Beam Attach Brackets"];
            total += fanMounts * pricingData[selectedModel].accessories["Fan Mount"];
            total += pricingData[selectedModel].accessories["Crate"];
            total += pricingData[selectedModel].accessories["Pallet"];

            // Tax (default IA for demo)
            const tax = total * 0.07;
            const grandTotal = total + tax;

            // Populate results
            document.getElementById('componentsTable').innerHTML = `
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td data-label="Category">Base Model</td>
                    <td data-label="Description">${selectedModel}</td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Unit Price">$${pricingData[selectedModel].base.toFixed(2)}</td>
                    <td data-label="Total">$${pricingData[selectedModel].base.toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Depth</td>
                    <td data-label="Description">${depth}</td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Unit Price">$${(pricingData[selectedModel].depth[depth] || 0).toFixed(2)}</td>
                    <td data-label="Total">$${(pricingData[selectedModel].depth[depth] || 0).toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Width</td>
                    <td data-label="Description">${width}</td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Unit Price">$${(pricingData[selectedModel].width[width] || 0).toFixed(2)}</td>
                    <td data-label="Total">$${(pricingData[selectedModel].width[width] || 0).toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Posts</td>
                    <td data-label="Description">${postType} (${color})</td>
                    <td data-label="Quantity">${postCount}</td>
                    <td data-label="Unit Price">$${postUnit.toFixed(2)}</td>
                    <td data-label="Total">$${(postUnit * postCount).toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Roof</td>
                    <td data-label="Description">1.675 x 5.675 Tube (${depth})</td>
                    <td data-label="Quantity">${roofQty}</td>
                    <td data-label="Unit Price">$${roofUnit.toFixed(2)}</td>
                    <td data-label="Total">$${(roofUnit * roofQty).toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Trim</td>
                    <td data-label="Description">Azek Trim + PVC Cement</td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Unit Price">$${pricingData[selectedModel].trim.toFixed(2)}</td>
                    <td data-label="Total">$${pricingData[selectedModel].trim.toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Caps</td>
                    <td data-label="Description">${capStyle}</td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Unit Price">$${(pricingData[selectedModel].caps[capStyle] || 0).toFixed(2)}</td>
                    <td data-label="Total">$${(pricingData[selectedModel].caps[capStyle] || 0).toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Accessories</td>
                    <td data-label="Description">Hurricane Clips</td>
                    <td data-label="Quantity">${hurricaneClips ? 1 : 0}</td>
                    <td data-label="Unit Price">$${pricingData[selectedModel].accessories["Hurricane Clips"].toFixed(2)}</td>
                    <td data-label="Total">$${(hurricaneClips ? pricingData[selectedModel].accessories["Hurricane Clips"] : 0).toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Accessories</td>
                    <td data-label="Description">Beam Brackets</td>
                    <td data-label="Quantity">${beamBrackets ? 1 : 0}</td>
                    <td data-label="Unit Price">$${pricingData[selectedModel].accessories["Beam Attach Brackets"].toFixed(2)}</td>
                    <td data-label="Total">$${(beamBrackets ? pricingData[selectedModel].accessories["Beam Attach Brackets"] : 0).toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Accessories</td>
                    <td data-label="Description">Fan Mounts</td>
                    <td data-label="Quantity">${fanMounts}</td>
                    <td data-label="Unit Price">$${pricingData[selectedModel].accessories["Fan Mount"].toFixed(2)}</td>
                    <td data-label="Total">$${(fanMounts * pricingData[selectedModel].accessories["Fan Mount"]).toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Packaging</td>
                    <td data-label="Description">Crate + Pallet</td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Unit Price">$${(pricingData[selectedModel].accessories.Crate + pricingData[selectedModel].accessories.Pallet).toFixed(2)}</td>
                    <td data-label="Total">$${(pricingData[selectedModel].accessories.Crate + pricingData[selectedModel].accessories.Pallet).toFixed(2)}</td>
                </tr>
            `;

            document.getElementById('pricingTable').innerHTML = `
                <tr>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td data-label="Category">Subtotal</td>
                    <td data-label="Amount">$${total.toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Tax (7%)</td>
                    <td data-label="Amount">$${tax.toFixed(2)}</td>
                </tr>
                <tr class="total-row">
                    <td data-label="Category">Grand Total</td>
                    <td data-label="Amount">$${grandTotal.toFixed(2)}</td>
                </tr>
            `;

            document.getElementById('quoteSummary').style.display = 'block';
            document.getElementById('exportBtn').disabled = false;
        }

        // CSV Export
        function exportToCSV() {
            const rows = [];
            const componentsTable = document.getElementById('componentsTable');
            const pricingTable = document.getElementById('pricingTable');

            // Get component rows
            componentsTable.querySelectorAll('tr').forEach(row => {
                if (row.querySelectorAll('td').length > 0) {
                    rows.push([
                        row.querySelector('td:nth-child(1)').textContent,
                        row.querySelector('td:nth-child(2)').textContent,
                        row.querySelector('td:nth-child(3)').textContent,
                        row.querySelector('td:nth-child(4)').textContent,
                        row.querySelector('td:nth-child(5)').textContent
                    ]);
                }
            });

            // Get pricing rows
            pricingTable.querySelectorAll('tr').forEach(row => {
                if (row.querySelectorAll('td').length > 0) {
                    rows.push([
                        row.querySelector('td:nth-child(1)').textContent,
                        '',
                        '',
                        '',
                        row.querySelector('td:nth-child(2)').textContent
                    ]);
                }
            });

            // Create CSV content
            const csvContent = "data:text/csv;charset=utf-8," 
                + "Pergola Quote Calculator\n"
                + `Model: ${document.querySelector('.model-option.selected').dataset.model}\n`
                + `Date: ${new Date().toLocaleDateString()}\n\n`
                + "Category,Description,Quantity,Unit Price,Total\n"
                + rows.map(row => row.join(",")).join("\n");

            // Create download link
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `Pergola_Quote_${Date.now()}.csv`);
            document.body.appendChild(link);
            link.click();
        }

        // Event listeners
        document.querySelectorAll('.model-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.model-option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                document.getElementById('optionsContainer').style.display = 'block';
                document.getElementById('quoteSummary').style.display = 'none';
                document.getElementById('exportBtn').disabled = true;
            });
        });

        document.getElementById('calculateBtn').addEventListener('click', (e) => {
            e.preventDefault();
            calculateQuote();
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
            document.querySelectorAll('.model-option').forEach(opt => opt.classList.remove('selected'));
            document.getElementById('optionsContainer').style.display = 'none';
            document.getElementById('quoteSummary').style.display = 'none';
            document.getElementById('exportBtn').disabled = true;
        });

        document.getElementById('exportBtn').addEventListener('click', exportToCSV);