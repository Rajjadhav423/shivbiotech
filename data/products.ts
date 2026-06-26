import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'humex-plus',
    name: 'Humex+',
    category: 'Plant Nutrition',
    tagline: 'Premium Humic & Fulvic Acid Liquid Formulation',
    description: 'High-grade liquid combination of humic and fulvic acid that improves soil fertility, nutrient absorption, and crop yield.',
    longDescription: 'Humex+ is a premium liquid formulation combining high-quality humic acid and fulvic acid. It significantly improves soil porosity and fertility, enhances nutrient absorption efficiency in plants, and promotes robust crop growth. The synergistic blend of humic and fulvic acids works at the root level to unlock soil-bound nutrients and make them readily available to plants.',
    benefits: [
      'Improves soil porosity and water retention',
      'Enhances nutrient absorption efficiency',
      'Promotes strong root development',
      'Increases crop yield significantly',
      'Balances soil pH naturally',
      'Stimulates beneficial microbial activity'
    ],
    dosage: {
      spray: '2 to 3 ml per liter',
    },
    packaging: ['1 Liter'],
    image: '/images/products/Humex+.jpeg',
    badge: 'Bestseller',
    featured: true
  },
  {
    id: '2',
    slug: 'matrix-9',
    name: 'Matrix 9',
    category: 'Bio Stimulant',
    tagline: 'Amino Acid Complex — Ready Made Food & Energy Booster',
    description: 'A powerful blend of amino acids including glutamic acid that acts as ready-made food and energy booster for crops.',
    longDescription: 'Matrix 9 is an amino acid complex containing glutamic acid and other vital components. It acts as a "ready-made food and energy booster" for plants, stimulating rapid growth and flowering. Matrix 9 increases photosynthesis activity, providing plants with the nutrition they need at every stage of growth. Its unique formulation ensures faster nutrient uptake and improved plant metabolism.',
    benefits: [
      'Acts as ready-made food for plants',
      'Boosts energy and growth rapidly',
      'Increases photosynthesis activity',
      'Enhances flowering and fruiting',
      'Improves nutrient utilization efficiency',
      'Strengthens plant immune response'
    ],
    dosage: {
      spray: '2 to 3 ml per liter',
      drip: '500 ml to 1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/products/matrix.jpeg',
    featured: true
  },
  {
    id: '3',
    slug: 'kavach',
    name: 'Kavach',
    category: 'Bio Pesticide',
    tagline: 'Powerful Botanical Bio-Insecticide',
    description: 'A powerful botanical bio-insecticide prepared from plant extracts that attacks sucking insects and provides complete crop protection.',
    longDescription: 'Kavach is a scientifically formulated botanical bio-insecticide prepared from potent plant extracts. It attacks the nervous and digestive systems of sucking insects, providing complete crop protection. Kavach controls all types of insects attacking crops without leaving harmful residues. Its natural formulation is safe for beneficial insects and the environment.',
    benefits: [
      'Complete protection from sucking insects',
      'Attacks nervous and digestive systems of pests',
      'Safe for beneficial insects and humans',
      'No harmful chemical residues',
      'Effective against multiple pest species',
      'Can be mixed with other bio-pesticides'
    ],
    dosage: {
      spray: '1 to 2.5 ml per liter'
    },
    packaging: ['100 ml', '200 ml', '500 ml'],
    image: '/images/products/kavach.jpeg',
    badge: 'New'
  },
  {
    id: '4',
    slug: 'myco-vam',
    name: 'Myco-VAM',
    category: 'Bio Fertilizer',
    tagline: 'Natural Mycorrhizal Biostimulant',
    description: 'A natural mycorrhizal biostimulant that increases root hair count and helps plants absorb water and minerals from soil.',
    longDescription: 'Myco-VAM contains natural mycorrhizal fungi that form a symbiotic relationship with plant roots. The fungal hyphae penetrate plant cell walls and create arbuscular structures that dramatically increase the surface area for water and mineral absorption. This natural process significantly enhances plant nutrient uptake, drought resistance, and overall growth performance.',
    benefits: [
      'Dramatically increases root surface area',
      'Enhances water and mineral absorption',
      'Improves drought tolerance',
      'Strengthens plant immune system',
      'Increases nutrient use efficiency',
      'Promotes sustainable soil health'
    ],
    dosage: {
      spray: '3 to 5 grams per liter'
    },
    packaging: ['1 Kg'],
    image: '/images/products/myco-vam.jpeg',
    featured: true
  },
  {
    id: '5',
    slug: 'shield',
    name: 'Shield',
    category: 'Bio Fungicide',
    tagline: 'Natural Source Botanical Fungicide',
    description: 'A natural source bio-fungicide made from plant extracts including neem, aloe vera, and lemongrass that eliminates crop fungi.',
    longDescription: 'Shield is a natural botanical fungicide formulated from powerful plant extracts including neem, aloe vera, and lemongrass. It effectively eliminates fungi attacking crops and significantly increases plant immunity. Shield\'s botanical formula works both preventively and curatively, creating a protective barrier while boosting the plant\'s natural defense mechanisms.',
    benefits: [
      'Eliminates fungi attacking crops naturally',
      'Increases plant immunity significantly',
      'Contains neem, aloe vera, and lemongrass extracts',
      'Works preventively and curatively',
      'No harmful chemical residues',
      'Safe for soil microbiome'
    ],
    dosage: {
      spray: '1 to 1.5 ml per liter'
    },
    packaging: ['100 ml', '250 ml', '500 ml'],
    image: '/images/products/shield.jpeg'
  },
  {
    id: '6',
    slug: 'soya-maxx',
    name: 'Soya Maxx',
    category: 'Crop Specific',
    tagline: 'Premium Support for Soybean Growth',
    description: 'A high-quality blend of humic acid, fulvic acid, and other vital components that provides premium support for soybean growth.',
    longDescription: 'Soya Maxx is specifically designed for soybean cultivation, containing a high-quality blend of humic acid, fulvic acid, and other essential components. It provides the perfect foundation for soybean growth by opening roots for better nutrient absorption. The fulvic acid component helps control premature flower drop and promotes abundant fruiting.',
    benefits: [
      'Optimized specifically for soybean crops',
      'Opens roots for better nutrient absorption',
      'Controls premature flower drop',
      'Promotes abundant pod formation',
      'Improves oil content and quality',
      'Enhances crop marketability'
    ],
    dosage: {
      spray: '2 to 2.5 ml per liter',
      drip: '1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/products/soya-max.jpeg',
    badge: 'Crop Specific'
  },
  {
    id: '7',
    slug: 'sudarshan',
    name: 'Sudarshan',
    category: 'Bio Pesticide',
    tagline: 'Effective Anti-Feedant & Repellent',
    description: 'An effective anti-feedant and repellent that destroys plant-eating insects like aphids, semi-looper, and grasshoppers naturally.',
    longDescription: 'Sudarshan is a powerful anti-feedant and repellent formulated from natural alkaloids. These alkaloids eliminate plant-eating insects\' ability to feed on leaves. It effectively controls aphids, semi-loopers, grasshoppers, and similar pests, resulting in excellent crop output. Sudarshan\'s natural formulation ensures no chemical residues on produce.',
    benefits: [
      'Powerful anti-feedant action',
      'Natural alkaloid formulation',
      'Controls aphids, semi-looper, grasshoppers',
      'Excellent crop protection results',
      'No harmful chemical residues',
      'Safe for beneficial insects'
    ],
    dosage: {
      spray: '2 to 2.5 ml per liter'
    },
    packaging: ['100 ml', '250 ml', '500 ml'],
    image: '/images/products/sudarshan.jpeg'
  },
  {
    id: '8',
    slug: 'armor',
    name: 'Armor',
    category: 'Bio Stimulant',
    tagline: 'Plant-Based Liquid Bio-Stimulant',
    description: 'A plant-based liquid bio-stimulant made from proteins and amino acids that helps crops withstand heat, drought, and biotic stress.',
    longDescription: 'Armor is a premium plant-based liquid bio-stimulant containing amino acids derived from proteins. It helps crops withstand extreme temperature changes, heat stress, drought, and cold conditions. Armor increases resistance against insect and mite attacks, making crops resilient under adverse conditions. Its unique formulation supports plant health throughout the growing season.',
    benefits: [
      'Withstands extreme temperature variations',
      'Improves drought and heat tolerance',
      'Increases resistance to insects and mites',
      'Strengthens crop immunity naturally',
      'Promotes steady growth under stress',
      'Improves overall crop quality'
    ],
    dosage: {
      spray: '2 to 3 ml per liter',
      drip: '1 to 2 liters per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/products/armor.jpeg',
    featured: true
  },
  {
    id: '9',
    slug: 'brix-plus',
    name: 'Brix Plus',
    category: 'Crop Quality',
    tagline: 'Complete Balanced Tonic for Sugarcane',
    description: 'A premium blend of seaweed, humic acid, fulvic acid, amino acids, and vitamins that serves as a perfect balanced tonic for sugarcane.',
    longDescription: 'Brix Plus is a comprehensive tonic specially formulated for sugarcane cultivation. It contains a premium mix of seaweed extracts, humic acid, fulvic acid, amino acids, and essential vitamins. This complete formula increases tiller count, ensures uniform growth, thickens stalk diameter, and increases stalk length, resulting in significantly improved sugarcane yield and quality.',
    benefits: [
      'Increases tiller count significantly',
      'Ensures uniform and even growth',
      'Thickens and lengthens stalks',
      'Improves sugar content (brix)',
      'Complete nutrition in one product',
      'Enhances marketable yield'
    ],
    dosage: {
      spray: '1 to 2.5 ml per liter',
      drip: '1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/products/brix-plus.jpeg',
    badge: 'Crop Specific'
  },
  {
    id: '10',
    slug: 'carbon-rich',
    name: 'Carbon Rich',
    category: 'Soil Amendment',
    tagline: 'Humic Acid Powder for Root Architecture',
    description: 'A premium humic acid powder that helps roots grow deeper and wider, making plants more rooted in soil for better water and nutrient access.',
    longDescription: 'Carbon Rich is a high-grade humic acid powder that fundamentally improves root architecture. It helps roots grow deeper and wider, anchoring plants more firmly in the soil and giving them access to more water and nutrients. Carbon Rich makes essential nutrients like nitrogen, phosphorus, and potassium readily available to crops while improving soil structure, porosity, and stress tolerance.',
    benefits: [
      'Develops deeper and wider root system',
      'Improves soil structure and porosity',
      'Makes NPK readily available to plants',
      'Increases stress tolerance significantly',
      'Enhances water retention capacity',
      'Boosts overall crop productivity'
    ],
    dosage: {
      spray: '1 gram per liter / 90 grams per liter for drip',
      drip: '500 grams to 1 kg per acre'
    },
    packaging: ['500 gm'],
    image: '/images/products/carbon-rich.jpeg'
  },
  {
    id: '11',
    slug: 'glass-green',
    name: 'Glass Green',
    category: 'Crop Quality',
    tagline: 'Premium Greening & Shine for Chilli',
    description: 'A premium blend of seaweed, protein hydrolysate, and humic acid specially formulated to improve greening and glossiness of chilli crops.',
    longDescription: 'Glass Green is specifically formulated for chilli cultivation, combining seaweed extracts, protein hydrolysate, and humic acid to enhance greening, glossiness, and overall quality. It stops premature fruit drop, promotes new flowering flushes, and dramatically improves the marketable appearance of chilli produce. Glass Green is the preferred choice for farmers focused on premium market quality.',
    benefits: [
      'Enhances greening and glossy appearance',
      'Controls premature fruit drop',
      'Promotes new flowering flushes',
      'Improves marketable crop quality',
      'Increases chilli weight and shine',
      'Compatible with other crop inputs'
    ],
    dosage: {
      spray: '2 to 2.5 ml per liter',
      drip: '500 ml to 1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/products/gloss-green.jpeg',
    badge: 'Crop Specific'
  },
  {
    id: '12',
    slug: 'humex',
    name: 'Humex',
    category: 'Soil Amendment',
    tagline: 'Premium Humic Acid Powder',
    description: 'High-grade humic acid powder prepared by organic methods that helps root proliferation, loosens hardened soil, and enhances nutrient absorption.',
    longDescription: 'Humex is a premium humic acid powder naturally prepared through organic processes. It dramatically increases root hair density, loosens heat-hardened soil to make it porous again, and significantly enhances plant nutrient absorption. Humex works at the soil microbiome level to create optimal conditions for plant growth and long-term soil health.',
    benefits: [
      'Increases root hair density significantly',
      'Loosens compacted and hardened soil',
      'Enhances nutrient absorption capacity',
      'Improves soil water retention',
      'Stimulates beneficial soil microbes',
      'Long-lasting soil health benefits'
    ],
    dosage: {
      spray: '2 grams per liter',
      drip: '1500 grams to 1 kg per acre'
    },
    packaging: ['500 gm', '1 Kg'],
    image: '/images/products/Humex.jpeg'
  },
  {
    id: '13',
    slug: 'shivshakti',
    name: 'Shivshakti',
    category: 'Bio Fertilizer',
    tagline: 'Advanced Bio-Stimulant with Natural Hormones',
    description: 'An advanced bio-stimulant containing natural hormones, amino acids, and organic carbon that fills nutrient deficiency and helps crops grow.',
    longDescription: 'Shivshakti is an advanced bio-stimulant packed with natural hormones, amino acids, and organic carbon components that address crop nutrient deficiency comprehensively. It improves soil structure and enhances nutrient-holding capacity. Shivshakti helps crops grow vigorously by providing a complete package of growth-promoting substances in one premium formulation.',
    benefits: [
      'Fills complete nutrient deficiency',
      'Contains natural growth hormones',
      'Improves soil structure significantly',
      'Enhances nutrient holding capacity',
      'Promotes vigorous crop growth',
      'Long-lasting soil health improvement'
    ],
    dosage: {
      soil: '10 kg per acre'
    },
    packaging: ['10 Kg'],
    image: '/images/products/shiv-shakti.jpeg'
  },
  {
    id: '14',
    slug: 'shiv-amrut',
    name: 'Shiv Amrut',
    category: 'Bio Stimulant',
    tagline: 'Natural Seaweed Extract Bio-Stimulant',
    description: 'A natural bio-stimulant based on seaweed extracts that stimulates plant growth, drives cell division, and accelerates crop development.',
    longDescription: 'Shiv Amrut is a premium bio-stimulant based on natural seaweed extracts. It drives plant growth by stimulating cell division and accelerating overall crop development. Shiv Amrut rapidly increases plant growth speed and helps in chlorophyll development. Its seaweed-based formula provides a rich source of natural growth factors, micronutrients, and amino acids.',
    benefits: [
      'Stimulates rapid plant cell division',
      'Accelerates overall crop development',
      'Rich in natural growth factors',
      'Enhances chlorophyll development',
      'Provides essential micronutrients',
      'Improves crop quality and yield'
    ],
    dosage: {
      spray: '1 to 2 ml per liter',
      drip: '1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/products/shiv-amrut.jpeg',
    featured: true
  },
  {
    id: '15',
    slug: 'sanjeevani',
    name: 'Sanjeevani',
    category: 'Soil Amendment',
    tagline: 'High-Grade Organic Soil Improver',
    description: 'A high-grade organic product that improves soil quality, fills nutrient deficiencies, and helps crops grow naturally through balanced soil nutrition.',
    longDescription: 'Sanjeevani is a premium organic product formulated to comprehensively improve soil quality. It replenishes nutrient deficiencies in plants, improves natural balance, and helps crops grow vigorously. Used as an effective soil improver, Sanjeevani works by restoring the natural ecosystem of the soil, promoting beneficial microbial life, and ensuring long-term sustainable crop productivity.',
    benefits: [
      'Comprehensive soil quality improvement',
      'Replenishes multiple nutrient deficiencies',
      'Improves natural soil balance',
      'Promotes beneficial microbial life',
      'Ensures sustainable crop productivity',
      'Effective as soil drench or spray'
    ],
    dosage: {
      spray: '1 to 2.5 ml per liter',
      drip: '1 to 2 liters per acre'
    },
    packaging: ['2 Liter', '5 Liter'],
    image: '/images/products/sajnivini.jpeg'
  },
  {
    id: '16',
    slug: 'active-360',
    name: 'Active 360',
    category: 'Adjuvant',
    tagline: 'Premium Silicone Sticker, Spreader & Wetting Agent',
    description: 'A silicone-based sticker, spreader, and wetting agent that improves the effectiveness of all pesticides and increases spray interval.',
    longDescription: 'Active 360 is a premium silicone-based adjuvant that acts as a sticker, spreader, and wetting agent. When mixed with other pesticides during spraying, Active 360 improves the coverage and adhesion of all crop inputs, reducing product waste while significantly increasing spray efficiency. It creates a uniform coating on plant surfaces and increases the interval between spray applications.',
    benefits: [
      'Improves coverage and adhesion of pesticides',
      'Reduces product wastage significantly',
      'Increases spray interval duration',
      'Uniform coating on plant surface',
      'Compatible with all crop inputs',
      'Cost-effective crop protection'
    ],
    dosage: {
      spray: '0.5 ml per liter'
    },
    packaging: ['100 ml', '250 ml'],
    image: '/images/products/ative-360.jpeg'
  },
];

export const featuredProducts = products.filter(p => p.featured);

export const productCategories = [...new Set(products.map(p => p.category))];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
