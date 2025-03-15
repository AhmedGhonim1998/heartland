        // Pricing data from PDFs
        const pricingData = {
            Traditional: {
                base: 5000,
                tax: {
                    IA: 0.07,
                    IL: 0.0625,
                    TX: 0.0625
                },
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
                // Add Modern-specific pricing here
            },
            Elements: {
                base: 7000,
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
                // Add Elements-specific pricing here
            }

        };

        // Calculator function
        function calculateQuote() {
            const selectedModel = document.querySelector('.model-option.selected')?.dataset.model;
            const deliveryLocation = document.getElementById('deliveryLocation').value;
            const saleType = document.getElementById('saleType').value;
            const depth = document.getElementById('depth').value;
            const width = document.getElementById('width').value;
            const color = document.getElementById('color').value;
            const postType = document.getElementById('postType').value;
            const purlinSpacing = parseFloat(document.getElementById('purlinSpacing').value);
            const capStyle = document.getElementById('capStyle').value;

            // Force fan mounts to 0 when color is Black
            const fanMounts = color === 'Black' ? 0 : parseInt(document.getElementById('fanMounts')?.value || 0);

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
            total += fanMounts * pricingData[selectedModel].accessories["Fan Mount"];
            total += pricingData[selectedModel].accessories["Crate"];
            total += pricingData[selectedModel].accessories["Pallet"];

            // Apply discount
            const discount = saleType === 'Internet' ? total * 0.05 : 0;
            const taxableAmount = total - discount;

            // Calculate tax
            const taxRate = pricingData[selectedModel].tax[deliveryLocation];
            const tax = taxableAmount * taxRate;
            const grandTotal = taxableAmount + tax;

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
                    <td data-label="Unit Price">$5000.00</td>
                    <td data-label="Total">$5000.00</td>
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
                    <td data-label="Description">Fan Mounts</td>
                    <td data-label="Quantity">${color === 'Black' ? '0 (Disabled)' : fanMounts}</td>
                    <td data-label="Unit Price">$${color === 'Black' ? '0.00' : pricingData[selectedModel].accessories["Fan Mount"].toFixed(2)}</td>
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
                    <td data-label="Category">Discount</td>
                    <td data-label="Amount">$${discount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td data-label="Category">Tax (${(taxRate*100).toFixed(2)}%)</td>
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

        // Export to CSV Function
        function exportToCSV() {
            // Gather quote summary data
            const selectedModel = document.querySelector('.model-option.selected')?.dataset.model;
            const deliveryLocation = document.getElementById('deliveryLocation').value;
            const saleType = document.getElementById('saleType').value;
            const depth = document.getElementById('depth').value;
            const width = document.getElementById('width').value;
            const color = document.getElementById('color').value;
            const postType = document.getElementById('postType').value;
            const purlinSpacing = parseFloat(document.getElementById('purlinSpacing').value);
            const capStyle = document.getElementById('capStyle').value;
            const fanMounts = color === 'Black' ? 0 : parseInt(document.getElementById('fanMounts')?.value || 0);

            // Build CSV rows
            const rows = [
                ["Pergola Quote Summary", new Date().toLocaleDateString()],
                ["Model", selectedModel],
                ["Delivery Location", deliveryLocation],
                ["Sale Type", saleType],
                ["Depth", depth],
                ["Width", width],
                ["Color", color],
                ["Post Type", postType],
                ["Purlin Spacing", purlinSpacing],
                ["Cap Style", capStyle],
                ["Fan Mounts", fanMounts],
                [],
                ["Component Pricing"],
                ["Category", "Description", "Quantity", "Unit Price", "Total"],
                ...Array.from(document.querySelectorAll('#componentsTable tr')).slice(1).map(row => {
                    return Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim());
                }),
                [],
                ["Final Pricing"],
                ["Category", "Amount"],
                ...Array.from(document.querySelectorAll('#pricingTable tr')).slice(1).map(row => {
                    return Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim());
                })
            ];

            // Create CSV content
            const csvContent = "data:text/csv;charset=utf-8," 
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
                document.getElementById('deliverySaleSection').style.display = 'block';
                document.getElementById('optionsContainer').style.display = 'block';
                document.getElementById('calculateBtn').disabled = false;
            });
        });

        document.getElementById('color').addEventListener('change', function() {
            if (this.value === 'Black') {
                document.getElementById('fanMounts').value = '0';
                document.getElementById('fanMounts').disabled = true;
            } else {
                document.getElementById('fanMounts').disabled = false;
            }
        });

        document.getElementById('calculateBtn').addEventListener('click', (e) => {
            e.preventDefault();
            calculateQuote();
        });

        document.getElementById('color').addEventListener('change', function() {
            const fanMountsSelect = document.getElementById('fanMounts');
            if (this.value === 'Black') {
                fanMountsSelect.value = '0'; // Force fan mounts to 0
                fanMountsSelect.disabled = true; // Disable the dropdown
            } else {
                fanMountsSelect.disabled = false; // Re-enable the dropdown
            }
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
            document.querySelectorAll('.model-option').forEach(opt => opt.classList.remove('selected'));
            document.getElementById('deliverySaleSection').style.display = 'none';
            document.getElementById('optionsContainer').style.display = 'none';
            document.getElementById('quoteSummary').style.display = 'none';
            document.getElementById('exportBtn').disabled = true;
            document.getElementById('calculateBtn').disabled = true;
            document.getElementById('fanMounts').disabled = false;
        });

        document.getElementById('exportBtn').addEventListener('click', exportToCSV);