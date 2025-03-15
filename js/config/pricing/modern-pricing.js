/**
 * Modern Pricing Configuration
 * Pricing configuration for Modern pergola products
 */

/**
 * Modern pricing configuration
 */
const modernPricingConfig = {
    /**
     * Base price by attached type
     */
    basePrice: {
        'Attached': 9000,
        'Freestanding': 10000
    },
    
    /**
     * Dimension multipliers
     */
    dimensionMultipliers: {
        /**
         * Depth multipliers
         */
        depth: {
            '10': 1.0,
            '12': 1.1,
            '14': 1.2,
            '16': 1.3,
            '18': 1.4,
            '20': 1.5
        },
        
        /**
         * Width multipliers
         */
        width: {
            '10': 1.0,
            '12': 1.1,
            '14': 1.2,
            '16': 1.3,
            '18': 1.4,
            '20': 1.5,
            '24': 1.7,
            '28': 1.9,
            '32': 2.1
        }
    },
    
    /**
     * Color multipliers
     */
    colorMultipliers: {
        'White': 1.0,
        'Tan': 1.05,
        'Black': 1.1
    },
    
    /**
     * Column type adjustments by color and column type
     */
    columnTypeAdjustments: {
        'White': {
            'Square': 1.0,
            'Round Tapered': 1.2
        },
        'Tan': {
            'Square': 1.0,
            'Round Tapered': 1.2
        },
        'Black': {
            'Square': 1.0,
            'Round Tapered': 1.0 // Not available, but included for completeness
        }
    },
    
    /**
     * Roof style multipliers
     */
    roofStyleMultipliers: {
        'Flat': 1.0,
        'Pitched': 1.15
    },
    
    /**
     * Fan mount pricing
     */
    fanMountPricing: {
        'No': 0,
        '1': 100,
        '2': 200,
        '3': 300
    },
    
    /**
     * Hurricane clips pricing
     */
    hurricaneClipsPricing: {
        'No': 0,
        'Yes': 400
    },
    
    /**
     * Beam attach brackets pricing
     */
    beamAttachBracketsPricing: {
        'small': 200, // For smaller pergolas (depth <= 16 and width <= 20)
        'large': 300  // For larger pergolas
    },
    
    /**
     * Shipping cost multipliers
     */
    shippingMultipliers: {
        /**
         * Base shipping cost per pound
         */
        weightMultiplier: 0.5, // $0.50 per pound
        
        /**
         * Large pergola surcharge
         */
        largeSurcharge: 100, // $100 surcharge for large pergolas (depth > 16 or width > 16)
        
        /**
         * Very large pergola surcharge
         */
        veryLargeSurcharge: 150 // $150 surcharge for very large pergolas (depth > 20 or width > 20)
    },
    
    /**
     * Tax rates
     */
    taxRates: {
        'IA': 0.07, // 7% for Iowa
        'IL': 0.0625 // 6.25% for Illinois
    },
    
    /**
     * Discount rates
     */
    discountRates: {
        'standard': 0.05, // 5% standard discount
        'volume': 0.1, // 10% volume discount
        'special': 0.15 // 15% special discount
    },
    
    /**
     * Component pricing
     * These are the base prices for individual components
     */
    componentPricing: {
        /**
         * Structural components
         */
        structural: {
            /**
             * Columns
             */
            columns: {
                'White': {
                    'Square': [
                        {
                            name: 'Column Kit (7" Sq. x 10\'L) - VS',
                            price: 450.66,
                            weight: 36.5
                        },
                        {
                            name: 'Base/Collar (7" Sq.) - each',
                            price: 45.06,
                            weight: 2
                        }
                    ],
                    'Round Tapered': [
                        {
                            name: 'Column Kit (10" Rnd Tapered x 10\'L) - VS',
                            price: 1018.03,
                            weight: 38
                        }
                    ]
                },
                'Tan': {
                    'Square': [
                        {
                            name: 'Column Kit (7" Sq. x 10\'L) - VS',
                            price: 494.13,
                            weight: 36.5
                        },
                        {
                            name: 'Base/Collar (7" Sq.) - each',
                            price: 49.41,
                            weight: 2
                        }
                    ],
                    'Round Tapered': [
                        {
                            name: 'Column Kit (10" Rnd Tapered x 10\'L) - VS',
                            price: 1067.59,
                            weight: 38
                        }
                    ]
                },
                'Black': {
                    'Square': [
                        {
                            name: 'Column Sleeve (8" Sq. x 10\'L)',
                            price: 494.13,
                            weight: 40.5
                        },
                        {
                            name: 'Base/Collar (8" Sq.) - each',
                            price: 209.79,
                            weight: 2
                        }
                    ]
                }
            },
            
            /**
             * Beams
             */
            beams: {
                'White': {
                    'Flat': {
                        '2" x 8" Hollow Rail - 144"': 112.66,
                        '2" x 8" Hollow Rail - 192"': 112.66,
                        '2" x 8" Hollow Rail - 240"': 112.66,
                        '2" x 8" Hollow Rail - 288"': 135.20
                    },
                    'Pitched': {
                        '2" x 8" Hollow Rail - 144"': 112.66,
                        '2" x 8" Hollow Rail - 192"': 112.66,
                        '2" x 8" Hollow Rail - 240"': 112.66,
                        '2" x 8" Hollow Rail - 288"': 135.20
                    }
                },
                'Tan': {
                    'Flat': {
                        '2" x 8" Hollow Rail - 144"': 155.17,
                        '2" x 8" Hollow Rail - 192"': 155.17,
                        '2" x 8" Hollow Rail - 240"': 155.17,
                        '2" x 8" Hollow Rail - 288"': 155.17
                    },
                    'Pitched': {
                        '2" x 8" Hollow Rail - 144"': 155.17,
                        '2" x 8" Hollow Rail - 192"': 155.17,
                        '2" x 8" Hollow Rail - 240"': 155.17,
                        '2" x 8" Hollow Rail - 288"': 155.17
                    }
                },
                'Black': {
                    'Flat': {
                        '2" x 8" Hollow Rail - 144"': 133.41,
                        '2" x 8" Hollow Rail - 192"': 133.41,
                        '2" x 8" Hollow Rail - 288"': 180.02
                    }
                }
            },
            
            /**
             * Rafters
             */
            rafters: {
                'White': {
                    'Flat': {
                        '2" x 6" Hollow Rail - 120"': 47.71,
                        '2" x 6" Hollow Rail - 144"': 47.71,
                        '2" x 6" Hollow Rail - 168"': 55.83,
                        '2" x 6" Hollow Rail - 192"': 55.83,
                        '2" x 6" Hollow Rail - 216"': 69.78,
                        '2" x 6" Hollow Rail - 288"': 85.12
                    },
                    'Pitched': {
                        '2" x 6" Hollow Rail - 120"': 47.71,
                        '2" x 6" Hollow Rail - 144"': 47.71,
                        '2" x 6" Hollow Rail - 168"': 55.83,
                        '2" x 6" Hollow Rail - 192"': 55.83,
                        '2" x 6" Hollow Rail - 216"': 69.78,
                        '2" x 6" Hollow Rail - 288"': 85.12
                    }
                },
                'Tan': {
                    'Flat': {
                        '2" x 6" Hollow Rail - 120"': 51.55,
                        '2" x 6" Hollow Rail - 144"': 51.55,
                        '2" x 6" Hollow Rail - 168"': 70.04,
                        '2" x 6" Hollow Rail - 192"': 70.04,
                        '2" x 6" Hollow Rail - 216"': 92.70,
                        '2" x 6" Hollow Rail - 240"': 76.17,
                        '2" x 6" Hollow Rail - 288"': 89.53
                    },
                    'Pitched': {
                        '2" x 6" Hollow Rail - 120"': 51.55,
                        '2" x 6" Hollow Rail - 144"': 51.55,
                        '2" x 6" Hollow Rail - 168"': 70.04,
                        '2" x 6" Hollow Rail - 192"': 70.04,
                        '2" x 6" Hollow Rail - 216"': 92.70,
                        '2" x 6" Hollow Rail - 240"': 76.17,
                        '2" x 6" Hollow Rail - 288"': 89.53
                    }
                },
                'Black': {
                    'Flat': {
                        '2" x 6" Hollow Rail - 120"': 46.76,
                        '2" x 6" Hollow Rail - 144"': 46.76,
                        '2" x 6" Hollow Rail - 168"': 85.21,
                        '2" x 6" Hollow Rail - 192"': 85.21
                    }
                }
            }
        },
        
        /**
         * Accessories
         */
        accessories: {
            /**
             * Caps
             */
            caps: {
                'White': {
                    'Standard Cap (Scroll)': {
                        '2" x 6" Pergola Cap': 26.50,
                        '2" x 8" Pergola Cap': 31.95
                    },
                    'Flat Cap': {
                        '2" x 6" Flat Cap': 26.50,
                        '2" x 8" Flat Cap': 31.95
                    },
                    'Bevel Cap': {
                        '2" x 6" Beveled Pergola Cap - Classic': 26.50,
                        '2" x 8" Beveled Pergola Cap - Classic': 31.95
                    }
                },
                'Tan': {
                    'Standard Cap (Scroll)': {
                        '2" x 6" Pergola Cap': 29.14,
                        '2" x 8" Pergola Cap': 35.15
                    },
                    'Flat Cap': {
                        '2" x 6" Flat Cap': 29.14,
                        '2" x 8" Flat Cap': 35.15
                    },
                    'Bevel Cap': {
                        '2" x 6" Beveled Pergola Cap - Classic': 29.14,
                        '2" x 8" Beveled Pergola Cap - Classic': 35.15
                    }
                },
                'Black': {
                    'Standard Cap (Scroll)': {
                        '2" x 6" Pergola Cap': 45.55,
                        '2" x 8" Pergola Cap': 65.00
                    },
                    'Flat Cap': {
                        '2" x 6" Flat Cap': 45.55,
                        '2" x 8" Flat Cap': 65.00
                    }
                }
            },
            
            /**
             * Other accessories
             */
            other: {
                'White': {
                    'Fan Mount': 68.59,
                    'Hurricane Clip w fasteners': 15.71,
                    'Beam Attachment Bracket - 2x6 (per pc) w fasteners': 21.50,
                    'Beam Attachment Bracket - 2x8 (per pc) w fasteners': 51.50,
                    'Post Mount Standoff - Modern Pergola': 31.23
                },
                'Tan': {
                    'Fan Mount': 75.61,
                    'Hurricane Clip w fasteners': 14.50,
                    'Beam Attachment Bracket - 2x6 (per pc) w fasteners': 39.50,
                    'Beam Attachment Bracket - 2x8 (per pc) w fasteners': 60.00,
                    'Post Mount Standoff - Modern Pergola': 34.58
                },
                'Black': {
                    'Hurricane Clip w fasteners': 13.21,
                    'Beam Attachment Bracket - 2x6 (per pc) w fasteners': 39.99,
                    'Beam Attachment Bracket - 2x8 (per pc) w fasteners': 58.71,
                    'Post Mount Standoff - Modern Pergola': 39.99
                }
            }
        },
        
        /**
         * Shipping components
         */
        shipping: {
            'Twelve ft Pallet Packaging': 101.39,
            'Sixteen ft Pallet Packaging': 135.20,
            'Twenty Four ft Pallet Packaging': 214.06,
            'Pallet - 18\'': 103.00,
            'Pallet - 25\'': 144.20,
            'Crate': 250.00
        }
    }
};

// Export the Modern pricing configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = modernPricingConfig;
}
