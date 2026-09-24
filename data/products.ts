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
    id: '32',
    slug: 'fix-humic-fulvic',
    name: 'Fix — Humic & Fulvic Acid',
    category: 'Soil Amendment',
    tagline: 'Gazette-Approved Humic & Fulvic Acid Liquid Formulation',
    description: 'A gazette-approved liquid formulation of Humic and Fulvic acid registered under Government of India Gazette Notification CG-DL-E-14082025-265412.',
    longDescription: 'Fix is a premium liquid formulation of Humic and Fulvic acid by Shiv Biotech, registered under Government of India Extraordinary Gazette Notification CG-DL-E-14082025-265412 dated 13/08/2025 (Part II—Sec. 3(ii)). It improves soil organic carbon, enhances cation exchange capacity, stimulates root development, and ensures better nutrient absorption. The synergistic action of humic and fulvic acids works at the soil-root interface to unlock bound nutrients and deliver them directly to plants.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265412)',
      'Premium combination of humic and fulvic acid',
      'Improves soil organic carbon and structure',
      'Enhances cation exchange capacity (CEC)',
      'Stimulates root development and nutrient uptake',
      'Balances soil pH and promotes microbial activity'
    ],
    dosage: {
      spray: '2 to 3 ml per liter',
      drip: '500 ml to 1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/Humicandfulvic.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265412 | 13/08/2025',
  },
  {
    id: '31',
    slug: 'amino-gold-protein-hydrolysate',
    name: 'Amino Gold — Protein Hydrolysate Amino Acid',
    category: 'Bio Stimulant',
    tagline: 'Gazette-Approved Protein Hydrolysate Amino Acid Bio-Stimulant',
    description: 'A gazette-approved protein hydrolysate amino acid formulation registered under Government of India Gazette Notification CG-DL-E-14082025-265413.',
    longDescription: 'Amino Gold is a premium protein hydrolysate amino acid bio-stimulant registered under Government of India Extraordinary Gazette Notification dated 13/08/2025. Derived from enzymatic hydrolysis of plant proteins, it provides crops with a complete spectrum of readily absorbable amino acids. These amino acids act as chelating agents for micronutrients, stimulate enzyme activity, enhance chlorophyll synthesis, and improve overall plant metabolism — resulting in faster growth, better flowering, and improved crop quality.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265413)',
      'Complete spectrum of protein hydrolysate amino acids',
      'Acts as natural chelating agent for micronutrients',
      'Stimulates enzyme activity and chlorophyll synthesis',
      'Enhances flowering, fruiting, and crop quality',
      'Improves nutrient uptake and plant metabolism'
    ],
    dosage: {
      spray: '2 to 3 ml per liter',
      drip: '500 ml to 1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/ProteinhydrolysateAminoacid.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265413 | 13/08/2025',
  },
  {
    id: '30',
    slug: 'shiv-amrut-seaweed-18',
    name: 'Shiv Amrut — Seaweed Extract 18.4%',
    category: 'Bio Stimulant',
    tagline: 'Gazette-Approved Seaweed (Ascophyllum nodosum) Extract 18.4%',
    description: 'A gazette-approved bio-stimulant with 18.4% Seaweed (Ascophyllum nodosum) extract, registered under Government of India Gazette Notification CG-DL-E-14082025-265414.',
    longDescription: 'Shiv Amrut Seaweed Extract 18.4% is a premium bio-stimulant derived from Ascophyllum nodosum seaweed, registered under Government of India Extraordinary Gazette Notification dated 13/08/2025. With 18.4% concentrated seaweed extract, it delivers a rich supply of natural cytokinins, auxins, gibberellins, betaines, mannitol, and essential micronutrients. It drives rapid plant cell division, accelerates overall crop development, enhances chlorophyll production, and significantly improves crop quality and yield.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265414)',
      '18.4% Ascophyllum nodosum seaweed extract',
      'Rich in natural cytokinins, auxins and gibberellins',
      'Stimulates rapid plant cell division',
      'Accelerates crop development and chlorophyll production',
      'Improves crop quality, yield and stress tolerance'
    ],
    dosage: {
      spray: '1 to 2 ml per liter',
      drip: '1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/Seaweed(Ascophyllumnodosum)extract18.4%.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265414 | 13/08/2025',
  },
  {
    id: '29',
    slug: 'gloss-green-seaweed-humate',
    name: 'Gloss Green — Seaweed, Potassium Humate & Protein Hydrolysate',
    category: 'Crop Quality',
    tagline: 'Gazette-Approved Seaweed, Potassium Humate & Protein Hydrolysate for Crop Shine',
    description: 'A gazette-approved liquid formulation combining Seaweed extract, Potassium Humate, and Protein Hydrolysate, registered under Government of India Gazette Notification CG-DL-E-14082025-265414.',
    longDescription: 'Gloss Green is a premium liquid formulation combining Seaweed extract, Potassium Humate, and Protein Hydrolysate, registered under Government of India Extraordinary Gazette Notification dated 13/08/2025. Specially formulated to enhance the visual quality and marketability of crops, it improves greening, glossiness, and firmness of produce. The seaweed extract stimulates natural growth hormones, potassium humate improves potassium availability for fruit development, and protein hydrolysate provides amino acids that enhance pigmentation and shine.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265414)',
      'Seaweed, Potassium Humate & Protein Hydrolysate blend',
      'Enhances greening and glossy shine of produce',
      'Improves potassium availability for fruit development',
      'Amino acids from protein hydrolysate boost pigmentation',
      'Controls premature fruit drop and promotes new flush'
    ],
    dosage: {
      spray: '2 to 2.5 ml per liter',
      drip: '500 ml to 1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/potassiumHumayeantproteinhydrolysate.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265414 | 13/08/2025',
  },
  {
    id: '28',
    slug: 'bloom-seaweed-liquid',
    name: 'Bloom — Seaweed, Humic, Fulvic, Amino & Vitamins',
    category: 'Crop Quality',
    tagline: 'Gazette-Approved Complete Liquid Tonic for Flowering & Fruiting',
    description: 'A gazette-approved liquid formulation combining Seaweed extract, Humic acid, Fulvic acid, Amino acids, and Vitamins, registered under Government of India Gazette Notification CG-DL-E-28052025-263422.',
    longDescription: 'Bloom is a premium complete liquid tonic combining Seaweed extract, Humic acid, Fulvic acid, Amino acids, and Vitamins, registered under Government of India Extraordinary Gazette Notification dated 26/05/2025. Specially designed to enhance flowering and fruiting stages, Bloom provides crops with a complete nutritional package that stimulates flower initiation, prevents premature drop, and improves fruit size and quality. The synergistic blend of all five active components ensures maximum absorption and visible results within days of application.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-28052025-263422)',
      'Complete 5-in-1 liquid tonic for flowering stage',
      'Stimulates flower initiation and retention',
      'Prevents premature flower and fruit drop',
      'Improves fruit size, colour, and quality',
      'Rapid absorption via fulvic acid carrier'
    ],
    dosage: {
      spray: '1 to 2.5 ml per liter',
      drip: '1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/HumicFulvicacidAminoacidsVitamins.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-28052025-263422 | 26/05/2025',
  },
  {
    id: '27',
    slug: 'sanjivani-seaweed-liquid',
    name: 'Sanjivani — Seaweed, Humic, Fulvic, Amino & Vitamins',
    category: 'Soil Amendment',
    tagline: 'Gazette-Approved Complete Liquid Tonic with Seaweed, Humic, Fulvic, Amino & Vitamins',
    description: 'A gazette-approved liquid formulation combining Seaweed extract, Humic acid, Fulvic acid, Amino acids, and Vitamins, registered under Government of India Gazette Notification CG-DL-E-28052025-263422.',
    longDescription: 'Sanjivani is a comprehensive liquid formulation combining Seaweed extract, Humic acid, Fulvic acid, Amino acids, and Vitamins, registered under Government of India Extraordinary Gazette Notification dated 26/05/2025. It comprehensively improves soil quality, replenishes nutrient deficiencies in plants, and helps crops grow vigorously. The seaweed component provides natural growth hormones, humic and fulvic acids restore soil health, amino acids accelerate plant metabolism, and vitamins boost immunity and stress tolerance.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-28052025-263422)',
      'Complete 5-in-1 liquid tonic formulation',
      'Seaweed extract provides natural growth hormones',
      'Humic & fulvic acids restore soil health',
      'Amino acids accelerate plant metabolism',
      'Vitamins boost immunity and stress tolerance'
    ],
    dosage: {
      spray: '1 to 2.5 ml per liter',
      drip: '1 to 2 liters per acre'
    },
    packaging: ['2 Liter', '5 Liter'],
    image: '/images/gallery/HumicandFulvicacidAminocidsVitamins.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-28052025-263422 | 26/05/2025',
  },
  {
    id: '26',
    slug: 'carbon-rich-humic-45',
    name: 'Carbon Rich — Humic & Fulvic Acid 45.1%',
    category: 'Soil Amendment',
    tagline: 'Gazette-Approved High-Concentration Humic & Fulvic Acid 45.1%',
    description: 'A gazette-approved premium formulation with 45.1% combined Humic and Fulvic acid content, registered under Government of India Gazette Notification CG-DL-E-14082025-265414.',
    longDescription: 'Carbon Rich Humic & Fulvic Acid 45.1% is a high-concentration soil amendment registered under Government of India Extraordinary Gazette Notification dated 13/08/2025. With 45.1% active humic and fulvic acid content, it delivers exceptional soil conditioning results — developing deeper and wider root systems, improving soil porosity, and making NPK readily available to crops. The high carbon content significantly enhances soil organic matter, water retention capacity, and long-term soil health.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265414)',
      '45.1% high-concentration humic & fulvic acid',
      'Develops deeper and wider root system',
      'Makes NPK readily available to plants',
      'Improves soil porosity and water retention',
      'Significantly boosts soil organic carbon'
    ],
    dosage: {
      spray: '1 gram per liter',
      drip: '500 grams to 1 kg per acre'
    },
    packaging: ['500 gm', '1 Kg'],
    image: '/images/gallery/Humicacidandfulvicacid45.1%.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265414 | 13/08/2025',
  },
  {
    id: '25',
    slug: 'brix-plus-seaweed-liquid',
    name: 'Brix Plus — Seaweed, Humic, Fulvic, Amino & Vitamins',
    category: 'Crop Quality',
    tagline: 'Gazette-Approved Complete Liquid Tonic with Seaweed, Humic, Fulvic, Amino & Vitamins',
    description: 'A gazette-approved liquid formulation combining Seaweed extract, Humic acid, Fulvic acid, Amino acids, and Vitamins, registered under Government of India Gazette Notification CG-DL-E-28052025-263422.',
    longDescription: 'Brix Plus is a comprehensive liquid tonic combining Seaweed extract, Humic acid, Fulvic acid, Amino acids, and Vitamins in a single premium formulation, registered under Government of India Extraordinary Gazette Notification dated 26/05/2025. This complete blend provides crops with everything needed for superior growth, quality, and yield. The seaweed extract supplies natural growth hormones, humic and fulvic acids condition the soil and enhance nutrient uptake, amino acids support protein synthesis, and vitamins boost plant metabolism and stress tolerance.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-28052025-263422)',
      'Complete 5-in-1 liquid tonic formulation',
      'Seaweed extract supplies natural growth hormones',
      'Humic & fulvic acids enhance nutrient uptake',
      'Amino acids support protein synthesis',
      'Vitamins boost metabolism and stress tolerance'
    ],
    dosage: {
      spray: '1 to 2.5 ml per liter',
      drip: '1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/HumicFulvicacidAminoacidsandVitamins(Liquid).png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-28052025-263422 | 26/05/2025',
  },
  {
    id: '24',
    slug: 'armor-protein-amino-20',
    name: 'Armor — Protein Hydrolysate Amino Acid 20%',
    category: 'Bio Stimulant',
    tagline: 'Gazette-Approved Protein Hydrolysate Amino Acid 20% Formulation',
    description: 'A gazette-approved protein hydrolysate amino acid formulation with 20% active content, registered under Government of India Gazette Notification CG-DL-E-28052025-263422.',
    longDescription: 'Armor Protein Hydrolysate Amino Acid 20% is a premium bio-stimulant derived from enzymatic hydrolysis of plant proteins, registered under Government of India Extraordinary Gazette Notification dated 26/05/2025. With 20% amino acid content from protein hydrolysate, it provides crops with readily absorbable nitrogen and stress-protective compounds. It helps crops withstand extreme temperature changes, heat stress, drought, and cold conditions while increasing resistance against insect and mite attacks.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-28052025-263422)',
      '20% protein hydrolysate amino acid content',
      'Derived from enzymatic protein hydrolysis',
      'Protects crops from heat, drought, and cold stress',
      'Increases resistance to insects and mites',
      'Improves overall crop quality and yield'
    ],
    dosage: {
      spray: '2 to 3 ml per liter',
      drip: '1 to 2 liters per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/ProteinhydrolysateAminoacid20%.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-28052025-263422 | 26/05/2025',
  },
  {
    id: '23',
    slug: 'sudarshan-adhatoda',
    name: 'Sudarshan — Adhatoda vasica 2%',
    category: 'Bio Pesticide',
    tagline: 'Gazette-Approved Adhatoda vasica Extract 2% Bio-Pesticide',
    description: 'A gazette-approved botanical bio-pesticide with 2% Adhatoda vasica extract, registered under Government of India Gazette Notification CG-DL-E-28052025-263422.',
    longDescription: 'Sudarshan Adhatoda vasica 2% is a potent botanical bio-pesticide derived from Adhatoda vasica (Malabar nut) plant extract, registered under Government of India Extraordinary Gazette Notification dated 26/05/2025. The active alkaloids vasicine and vasicinone act as powerful anti-feedants and repellents, disrupting the feeding and reproductive cycles of plant-eating insects like aphids, semi-loopers, and grasshoppers. Its natural botanical origin ensures no harmful residues on produce and complete safety for beneficial insects and the environment.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-28052025-263422)',
      '2% Adhatoda vasica (Malabar nut) extract',
      'Powerful anti-feedant and repellent action',
      'Controls aphids, semi-looper, grasshoppers',
      'No harmful chemical residues on produce',
      'Safe for beneficial insects and environment'
    ],
    dosage: {
      spray: '2 to 2.5 ml per liter'
    },
    packaging: ['100 ml', '250 ml', '500 ml'],
    image: '/images/gallery/Adhatodavasicaextract2%.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-28052025-263422 | 26/05/2025',
  },
  {
    id: '22',
    slug: 'soya-maxx-humic-19',
    name: 'Soya MaXx — Humic & Fulvic 19.5%',
    category: 'Crop Specific',
    tagline: 'Gazette-Approved Humic & Fulvic Acid 19.5% for Soybean',
    description: 'A gazette-approved liquid formulation with 19.5% combined Humic and Fulvic acid content, registered under Government of India Gazette Notification CG-DL-E-14082025-265413.',
    longDescription: 'Soya MaXx Humic & Fulvic 19.5% is a high-concentration liquid formulation combining Humic acid and Fulvic acid at 19.5% active content, registered under Government of India Extraordinary Gazette Notification dated 13/08/2025. Specially formulated for soybean cultivation, it improves root architecture, enhances nutrient uptake, and controls premature flower drop. The fulvic acid component ensures rapid penetration into plant tissues while humic acid conditions the soil for optimal nutrient availability.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265413)',
      '19.5% combined humic & fulvic acid content',
      'Optimized for soybean crop performance',
      'Controls premature flower and pod drop',
      'Rapid penetration via fulvic acid carrier',
      'Improves root architecture and nutrient uptake'
    ],
    dosage: {
      spray: '2 to 2.5 ml per liter',
      drip: '1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/Humicacidandfulvicacid19.5% .png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265413 | 13/08/2025',
  },
  {
    id: '21',
    slug: 'matrix-9-amino-14',
    name: 'Matrix 9 — Amino Acid 14%',
    category: 'Bio Stimulant',
    tagline: 'Gazette-Approved Amino Acid 14% Liquid Formulation',
    description: 'A gazette-approved amino acid formulation with 14% active content, registered under Government of India Gazette Notification CG-DL-E-14082025-265414.',
    longDescription: 'Matrix 9 Amino Acid 14% is a concentrated amino acid liquid formulation registered under Government of India Extraordinary Gazette Notification dated 13/08/2025. With 14% amino acid content, it provides plants with readily available building blocks for protein synthesis, enzyme production, and stress response. It accelerates vegetative growth, improves photosynthesis efficiency, and enhances overall crop performance across all growth stages.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265414)',
      '14% concentrated amino acid content',
      'Ready-made protein building blocks for plants',
      'Accelerates vegetative growth and flowering',
      'Improves photosynthesis and enzyme activity',
      'Enhances crop performance under stress'
    ],
    dosage: {
      spray: '2 to 3 ml per liter',
      drip: '500 ml to 1 liter per acre'
    },
    packaging: ['1 Liter'],
    image: '/images/gallery/AminoAcid14%.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265414 | 13/08/2025',
  },
  {
    id: '20',
    slug: 'kavach-adhatoda',
    name: 'Kavach — Adhatoda vasica 2%',
    category: 'Bio Pesticide',
    tagline: 'Gazette-Approved Adhatoda vasica Extract 2% Bio-Pesticide',
    description: 'A gazette-approved botanical bio-pesticide with 2% Adhatoda vasica extract, registered under Government of India Gazette Notification CG-DL-E-14082025-265413.',
    longDescription: 'Kavach Adhatoda vasica 2% is a potent botanical bio-pesticide derived from Adhatoda vasica (Malabar nut) plant extract, registered under Government of India Extraordinary Gazette Notification dated 13/08/2025. Adhatoda vasica contains alkaloids like vasicine and vasicinone that disrupt the nervous and digestive systems of sucking and chewing insects. This natural formulation provides effective crop protection without harmful chemical residues, making it safe for humans, beneficial insects, and the environment.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265413)',
      '2% Adhatoda vasica (Malabar nut) extract',
      'Controls sucking and chewing insects naturally',
      'Contains vasicine and vasicinone alkaloids',
      'No harmful chemical residues on produce',
      'Safe for beneficial insects and environment'
    ],
    dosage: {
      spray: '1 to 2.5 ml per liter'
    },
    packaging: ['100 ml', '250 ml', '500 ml'],
    image: '/images/gallery/Adhatodavasicaextract2%.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265413 | 13/08/2025',
  },
  {
    id: '19',
    slug: 'humex-plus-granule',
    name: 'HumeX+ Granule',
    category: 'Soil Amendment',
    tagline: 'Gazette-Approved Humic & Fulvic Acid Granule Formulation',
    description: 'A granular mixture of Humic acid and Fulvic acid approved under Government of India Gazette Notification CG-DL-E-14082025-265414, ideal for soil application.',
    longDescription: 'HumeX+ Granule is a premium granular formulation combining Humic acid and Fulvic acid, registered under Government of India Extraordinary Gazette Notification dated 13/08/2025. The granule format allows for slow and uniform release of humic and fulvic acids into the soil, ensuring long-lasting improvement in soil structure, organic carbon levels, and nutrient availability. It enhances root development, improves cation exchange capacity, and supports sustainable crop productivity.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265414)',
      'Granule format for slow, uniform soil release',
      'Improves soil organic carbon and structure',
      'Enhances cation exchange capacity (CEC)',
      'Stimulates root development and proliferation',
      'Long-lasting soil health improvement'
    ],
    dosage: {
      soil: '10 kg per acre as soil application'
    },
    packaging: ['10 Kg'],
    image: '/images/gallery/fulvic.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265414 | 13/08/2025',
  },
  {
    id: '18',
    slug: 'humex-76',
    name: 'HumeX 76%',
    category: 'Soil Amendment',
    tagline: 'Gazette-Approved Humic & Fulvic Acid 76% Formulation',
    description: 'A premium humic and fulvic acid formulation with 76% active content, approved under Government of India Gazette Notification CG-DL-E-28052025-263422.',
    longDescription: 'HumeX 76% is a high-concentration humic and fulvic acid product registered under Government of India Extraordinary Gazette Notification dated 26/05/2025. With a combined active content of 76%, it delivers superior soil conditioning and nutrient mobilization compared to standard humic acid products. The synergistic blend of humic and fulvic acids enhances soil porosity, stimulates root proliferation, and makes locked soil nutrients readily available to crops.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-28052025-263422)',
      '76% combined humic & fulvic acid content',
      'Superior soil conditioning and nutrient mobilization',
      'Enhances root proliferation and soil porosity',
      'Unlocks soil-bound nutrients for plant uptake',
      'Improves water retention and soil structure'
    ],
    dosage: {
      spray: '1 to 2 grams per liter',
      drip: '500 grams to 1 kg per acre'
    },
    packaging: ['500 gm', '1 Kg'],
    image: '/images/gallery/Humicandfulvicacid76%.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-28052025-263422 | 26/05/2025',
  },
  {
    id: '17',
    slug: 'shiv-shakti-granule',
    name: 'Shiv Shakti Granule',
    category: 'Soil Amendment',
    tagline: 'Gazette-Approved Seaweed & Humic Acid Granule',
    description: 'A granular formulation of Seaweed (Ascophyllum nodosum) extract and Humic acid (Leonardite) approved under Government of India Gazette Notification CG-DL-E-14082025-265414.',
    longDescription: 'Shiv Shakti Granule is a premium soil amendment product combining Seaweed extract (Ascophyllum nodosum) and Humic acid sourced from Leonardite. Registered under Government of India Extraordinary Gazette Notification dated 13/08/2025, this granule formulation improves soil organic carbon, enhances root activity, and boosts crop yield for Paddy and Potato. The unique combination of seaweed-derived alginic acid and humic carbon creates a synergistic effect that unlocks soil nutrients and stimulates natural plant growth hormones.',
    benefits: [
      'Gazette-approved formulation (CG-DL-E-14082025-265414)',
      'Seaweed extract boosts natural growth hormones',
      'Humic acid from Leonardite improves soil carbon',
      'Alginic acid enhances root absorption',
      'Improves soil structure and water retention',
      'Recommended for Paddy and Potato crops'
    ],
    dosage: {
      soil: '10 kg per hectare — one soil application for Paddy and Potato'
    },
    packaging: ['10 Kg'],
    image: '/images/gallery/Humic.png',
    badge: 'Gazette Approved',
    gazetteNo: 'CG-DL-E-14082025-265414 | 13/08/2025',
    composition: [
      { sno: '(i)',   ingredient: 'Seaweed (Ascophyllum nodosum) extract per cent. by weight, minimum', content: '5' },
      { sno: '(ii)',  ingredient: 'Humic acid (Source: Leonardite) per cent. by weight, minimum',       content: '2' },
      { sno: '(iii)', ingredient: 'Polysorbate 80 per cent. by weight, minimum',                        content: '1' },
      { sno: '(iv)',  ingredient: 'Xanthum gum per cent. by weight, minimum',                           content: '1' },
      { sno: '(v)',   ingredient: 'Bentonite (Roasted) per cent. by weight, minimum',                   content: 'QS' },
      { sno: '(vi)',  ingredient: 'Total (per cent.)',                                                   content: '100' },
    ],
    specifications: [
      { sno: '(i)',   parameter: 'Alginic acid content per cent. by weight, minimum',  value: '0.50' },
      { sno: '(ii)',  parameter: 'Humic acid content per cent. by weight, minimum',    value: '0.40' },
      { sno: '(iii)', parameter: 'pH (1% aqueous solution)',                            value: '9.0 – 11.0' },
      { sno: '(iv)',  parameter: 'Solubility per cent. by weight, minimum',            value: '7' },
      { sno: '(v)',   parameter: 'Total organic carbon per cent. by weight, minimum',  value: '2' },
      { sno: '(vi)',  parameter: 'Bulk density (gram/cc)',                              value: '1.20 – 1.25' },
    ],
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
