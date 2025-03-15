/**
 * Elements Product Configuration
 * Configuration for Elements pergola products
 */

/**
 * Elements product configuration
 */
const elementsConfig = {
    /**
     * Product options
     */
    options: {
        attachedType: {
            label: 'Attached or Freestanding',
            type: 'select',
            options: ['Attached', 'Freestanding'],
            default: 'Attached',
            required: true,
            group: 'Structure',
            description: 'Whether the pergola is attached to a building or freestanding'
        },
        depth: {
            label: 'Depth',
            type: 'select',
            options: ['10', '12', '14', '16', '18', '20'],
            default: '10',
            required: true,
            group: 'Dimensions',
            description: 'Depth of the pergola in feet'
        },
        width: {
            label: 'Width',
            type: 'select',
            options: ['10', '12', '14', '16', '18', '20', '24', '28', '32'],
            default: '10',
            required: true,
            group: 'Dimensions',
            description: 'Width of the pergola in feet'
        },
        color: {
            label: 'Color',
            type: 'select',
            options: ['White', 'Tan', 'Black'],
            default: 'White',
            required: true,
            group: 'Appearance',
            description: 'Color of the pergola'
        },
        post: {
            label: 'Post',
            type: 'select',
            options: ['5in sqr post x 10\'', '5in sqr post w trim ring x 10\''],
            default: '5in sqr post x 10\'',
            required: true,
            group: 'Structure',
            description: 'Post type for the pergola'
        },
        polySheetColor: {
            label: 'Polycarbonate Sheet Color',
            type: 'select',
            options: ['Glacier White', 'Sunset Bronze'],
            default: 'Glacier White',
            required: true,
            group: 'Appearance',
            description: 'Color of the polycarbonate sheets'
        },
        capStyle: {
            label: 'Cap Style',
            type: 'select',
            options: ['Standard Cap (Scroll)', 'Flat Cap', 'Bevel Cap'],
            default: 'Standard Cap (Scroll)',
            required: true,
            group: 'Appearance',
            description: 'Style of the caps on the pergola'
        },
        fanMount: {
            label: 'Fan Mount',
            type: 'select',
            options: ['No', '1', '2', '3'],
            default: 'No',
            required: true,
            group: 'Accessories',
            description: 'Number of fan mounts to include'
        },
        hurricaneClips: {
            label: 'Hurricane Clips',
            type: 'select',
            options: ['No', 'Yes'],
            default: 'No',
            required: true,
            group: 'Accessories',
            description: 'Whether to include hurricane clips'
        },
        beamAttachBrackets: {
            label: 'Beam Attach Brackets',
            type: 'select',
            options: ['No', 'Yes'],
            default: 'No',
            required: true,
            group: 'Accessories',
            description: 'Whether to include beam attachment brackets'
        }
    },
    
    /**
     * Product constraints
     */
    constraints: [
        {
            // Fan mount not possible with black color
            condition: (options) => options.color === 'Black',
            affects: 'fanMount',
            value: 'No',
            message: 'Fan mount is not available with Black color'
        },
        {
            // Certain width/depth combinations are not allowed
            condition: (options) => {
                const width = parseInt(options.width, 10);
                const depth = parseInt(options.depth, 10);
                
                // Check for invalid combinations
                return (width > 24 && depth > 16) || (width > 28 && depth > 14);
            },
            affects: 'width',
            value: '24',
            message: 'Width/depth combination exceeds maximum allowed size'
        },
        {
            // Post with trim ring not available in black
            condition: (options) => options.color === 'Black',
            affects: 'post',
            value: '5in sqr post x 10\'',
            message: 'Post with trim ring is not available in Black color'
        }
    ],
    
    /**
     * Product features
     */
    features: [
        {
            name: 'Polycarbonate Roof',
            description: 'Durable polycarbonate roof panels that allow light to pass through',
            included: true
        },
        {
            name: 'Aluminum Construction',
            description: 'Sturdy aluminum construction that is resistant to rust and weathering',
            included: true
        },
        {
            name: 'Custom Sizing',
            description: 'Available in a range of sizes to fit your space',
            included: true
        },
        {
            name: 'Multiple Color Options',
            description: 'Available in White, Tan, or Black to match your home',
            included: true
        },
        {
            name: 'Fan Mount Option',
            description: 'Optional fan mounts for adding ceiling fans',
            included: false
        },
        {
            name: 'Hurricane Clips',
            description: 'Optional hurricane clips for added stability in high winds',
            included: false
        },
        {
            name: 'Beam Attachment Brackets',
            description: 'Optional brackets for attaching to existing structures',
            included: false
        }
    ],
    
    /**
     * Product specifications
     */
    specifications: {
        material: 'Aluminum',
        roofMaterial: 'Polycarbonate',
        postSize: '5" x 5"',
        beamSize: '2" x 8"',
        rafterSize: '2" x 6"',
        warranty: '10 years',
        assembly: 'Professional installation recommended',
        maintenance: 'Low maintenance, occasional cleaning required'
    }
};

// Export the Elements product configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = elementsConfig;
}
