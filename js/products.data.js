const NEW_IMAGES = [
  'images/photo_2025-01-28_10-45-03 (1).jpg',
  'images/photo_2025-01-28_10-45-05 (1).jpg',
  'images/photo_2025-01-28_10-45-07 (1).jpg',
  'images/photo_2025-01-28_10-45-08 (1).jpg',
  'images/photo_2025-01-28_10-45-06 (1).jpg'
];

const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'RONA COLLAGEN CREAM',
    price: 18,
    image: NEW_IMAGES[0],
overview: `Description:
RONA COLLAGEN CREAM is a deeply nourishing and rejuvenating skincare solution designed to restore skin elasticity, smooth wrinkles, and provide intense hydration. Its powerful formula combines hydrolyzed collagen, peptides, botanical extracts, and essential oils to support skin regeneration and deliver a youthful, radiant glow.

Key Ingredients:
✅ Hydrolyzed Collagen – improves skin elasticity, reduces wrinkles, and enhances hydration.
✅ SYN®-AKE (Dipeptide Venom Peptide) – mimics the effects of snake venom to relax facial muscles and smooth expression lines.
✅ Ceramide III & Beta-Glucan – strengthen the skin barrier, preventing moisture loss and enhancing protection.
✅ Centella Asiatica & Chamomile Extracts – soothe irritated skin, reduce redness, and promote healing.
✅ Shea Butter & Glycerin – deeply nourish and moisturize, preventing dryness and roughness.
✅ Camellia Seed & Argan Oils – rich in antioxidants, they protect against environmental damage and improve skin texture.
✅ Lavender & Licorice Extracts – brighten the skin, reduce pigmentation, and promote an even complexion.

How to Use:
Apply a small amount of cream to cleansed face and neck using gentle circular motions until fully absorbed. Use daily in the morning and evening for best results.

Who is it for?
Perfect for all skin types, especially those experiencing dryness, loss of elasticity, and visible signs of aging.

✨ Results: Plumper, firmer, and deeply hydrated skin with a youthful glow! ✨

👉 Order RONA COLLAGEN CREAM today and give your skin the care it deserves!`,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 2,
    name: 'Boa Egg White & Collagen Soap',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit',
    image: NEW_IMAGES[1],
overview: `Description:
Boa Egg White & Collagen Soap is a unique facial cleanser formulated to deeply cleanse, reduce acne, and improve skin texture. Enriched with boa egg white extract, collagen, and herbal ingredients, this soap effectively removes impurities, tightens pores, and promotes a smooth, radiant complexion.

Key Ingredients:
✅ Boa Egg White Extract – rich in proteins that help tighten and firm the skin.
✅ Collagen – enhances skin elasticity and reduces fine lines and wrinkles.
✅ Snake Egg & Herbal Extracts – work as natural acne treatments, soothing irritation and reducing breakouts.

How to Use:
Lather the soap with water and gently massage onto damp skin. Rinse thoroughly with water. Use daily for best results.

Who is it for?
Ideal for all skin types, especially those struggling with acne, excess oil, and enlarged pores.

✨ Results: Clean, refreshed, and smoother skin with improved texture and reduced blemishes! ✨

👉 Order Boa Egg White & Collagen Soap today and enjoy clear, healthy skin!
`,
  },
  {
    id: 3,
    image: NEW_IMAGES[2],
    overview: `RONA AMPOULE SECRET KEY – Intensive Anti-Aging Serum with SYN®-AKE 4%
Description:
RONA AMPOULE SECRET KEY is a powerful rejuvenating ampoule serum designed for effective wrinkle correction and deep skin nourishment. Its advanced formula, enriched with SYN®-AKE 4% peptide and a blend of active ingredients, helps smooth fine lines, reduce expression wrinkles, eliminate puffiness and dark circles under the eyes, and restore skin elasticity and radiance.

Key Ingredients:
✅ SYN®-AKE 4% – a biomimetic peptide that mimics snake venom, relaxing facial muscles and reducing wrinkle depth.
✅ Naja Snake Oil – deeply nourishes and hydrates the skin while stimulating collagen production to slow down aging.
✅ Hyaluronic Acid – provides intense hydration, preventing dryness and flaking.
✅ Aloe Vera & Algae Extracts – soothe and refresh the skin, reducing redness and irritation.
✅ Niacinamide – brightens the complexion and evens out skin tone for a youthful glow.
✅ Olive & Rosemary Oils – protect against environmental damage and support skin regeneration.

How to Use:
Apply a small amount of serum to cleansed face and neck using gentle massage movements. Use daily in the morning and evening before applying your moisturizer.

📦 Volume: 30 ml

Who is it for?
Perfect for all skin types, especially mature skin showing signs of wrinkles, fine lines, and loss of firmness.

✨ Results: Smoother, firmer, and more radiant skin with visibly reduced wrinkles! ✨

👉 Order RONA AMPOULE SECRET KEY today and unlock the secret to youthful skin!`,
    name: 'Intensive Anti-Aging Serum',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 4,
    image: NEW_IMAGES[3],
    overview: `Description:
This intensive ampoule serum is designed for effective wrinkle correction and skin rejuvenation. With a unique formula containing Naja Snake Peptide and a complex of active ingredients, it deeply nourishes the skin, reduces fine lines and expression wrinkles, eliminates puffiness and dark circles under the eyes, and improves skin elasticity and tone.

Key Ingredients:

Naja Snake Peptide 4% – a peptide that mimics snake venom, helping to relax facial muscles and reduce wrinkle depth.
Hyaluronic Acid – provides deep hydration, preventing dryness and flaking.
Aloe Vera & Algae Extracts – soothe the skin, reduce inflammation, and supply essential nutrients.
Niacinamide – evens out skin tone, giving a radiant and healthy glow.
Olive & Rosemary Oils – nourish the skin, protect against environmental damage, and support regeneration.
How to Use:
Apply a small amount of serum to cleansed face and neck with light massage movements. Use daily in the morning and evening before applying cream.

Who is it for?
Suitable for all skin types, especially mature skin with visible wrinkles and loss of firmness.

✨ Results: Smooth, firm, and radiant skin with reduced wrinkles! ✨`,
    name: 'Serum with Naja Snake Peptide',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 5,
    image: NEW_IMAGES[4],

name: 'Propolis & Herbal Extract Soap',
overview: `Description:
Propolis & Herbal Extract Soap is a premium skincare solution designed to cleanse, nourish, and protect the skin. Infused with the natural benefits of propolis, honey, and herbal extracts, this soap helps to soothe irritation, fight bacteria, and maintain a healthy complexion. Its antioxidant-rich formula supports skin regeneration, leaving it soft, smooth, and refreshed.

Key Ingredients:
✅ Propolis Extract – known for its antibacterial and anti-inflammatory properties, it helps heal and protect the skin.
✅ Honey Extract – deeply hydrates and nourishes, promoting a radiant complexion.
✅ Ginseng Extract – revitalizes the skin and improves its elasticity.
✅ Coconut & Olive Oils – provide deep moisturization and enhance skin softness.
✅ Zinc Oxide & Herbal Extracts – help reduce acne, soothe irritation, and protect against environmental damage.

How to Use:
Lather the soap with water and gently apply to damp skin. Massage in circular motions, then rinse thoroughly. Use daily for best results.

Who is it for?
Perfect for all skin types, especially those with sensitive, acne-prone, or dry skin.

✨ Results: Hydrated, protected, and rejuvenated skin with a healthy glow! ✨

👉 Order Propolis & Herbal Extract Soap today and experience the power of natural skincare!`,
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  }
];

const FRUITS_AND_VEGES = [
  {
    id: 11,
    name: 'RONA COLLAGEN CREAM',
    price: 18,
    image: NEW_IMAGES[0],
overview: `Description:
RONA COLLAGEN CREAM is a deeply nourishing and rejuvenating skincare solution designed to restore skin elasticity, smooth wrinkles, and provide intense hydration. Its powerful formula combines hydrolyzed collagen, peptides, botanical extracts, and essential oils to support skin regeneration and deliver a youthful, radiant glow.

Key Ingredients:
✅ Hydrolyzed Collagen – improves skin elasticity, reduces wrinkles, and enhances hydration.
✅ SYN®-AKE (Dipeptide Venom Peptide) – mimics the effects of snake venom to relax facial muscles and smooth expression lines.
✅ Ceramide III & Beta-Glucan – strengthen the skin barrier, preventing moisture loss and enhancing protection.
✅ Centella Asiatica & Chamomile Extracts – soothe irritated skin, reduce redness, and promote healing.
✅ Shea Butter & Glycerin – deeply nourish and moisturize, preventing dryness and roughness.
✅ Camellia Seed & Argan Oils – rich in antioxidants, they protect against environmental damage and improve skin texture.
✅ Lavender & Licorice Extracts – brighten the skin, reduce pigmentation, and promote an even complexion.

How to Use:
Apply a small amount of cream to cleansed face and neck using gentle circular motions until fully absorbed. Use daily in the morning and evening for best results.

Who is it for?
Perfect for all skin types, especially those experiencing dryness, loss of elasticity, and visible signs of aging.

✨ Results: Plumper, firmer, and deeply hydrated skin with a youthful glow! ✨

👉 Order RONA COLLAGEN CREAM today and give your skin the care it deserves!`,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 12,
    name: 'Boa Egg White & Collagen Soap',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit',
    image: NEW_IMAGES[1],
overview: `Description:
Boa Egg White & Collagen Soap is a unique facial cleanser formulated to deeply cleanse, reduce acne, and improve skin texture. Enriched with boa egg white extract, collagen, and herbal ingredients, this soap effectively removes impurities, tightens pores, and promotes a smooth, radiant complexion.

Key Ingredients:
✅ Boa Egg White Extract – rich in proteins that help tighten and firm the skin.
✅ Collagen – enhances skin elasticity and reduces fine lines and wrinkles.
✅ Snake Egg & Herbal Extracts – work as natural acne treatments, soothing irritation and reducing breakouts.

How to Use:
Lather the soap with water and gently massage onto damp skin. Rinse thoroughly with water. Use daily for best results.

Who is it for?
Ideal for all skin types, especially those struggling with acne, excess oil, and enlarged pores.

✨ Results: Clean, refreshed, and smoother skin with improved texture and reduced blemishes! ✨

👉 Order Boa Egg White & Collagen Soap today and enjoy clear, healthy skin!
`,
  },
  {
    id: 13,
    image: NEW_IMAGES[2],
    overview: `RONA AMPOULE SECRET KEY – Intensive Anti-Aging Serum with SYN®-AKE 4%
Description:
RONA AMPOULE SECRET KEY is a powerful rejuvenating ampoule serum designed for effective wrinkle correction and deep skin nourishment. Its advanced formula, enriched with SYN®-AKE 4% peptide and a blend of active ingredients, helps smooth fine lines, reduce expression wrinkles, eliminate puffiness and dark circles under the eyes, and restore skin elasticity and radiance.

Key Ingredients:
✅ SYN®-AKE 4% – a biomimetic peptide that mimics snake venom, relaxing facial muscles and reducing wrinkle depth.
✅ Naja Snake Oil – deeply nourishes and hydrates the skin while stimulating collagen production to slow down aging.
✅ Hyaluronic Acid – provides intense hydration, preventing dryness and flaking.
✅ Aloe Vera & Algae Extracts – soothe and refresh the skin, reducing redness and irritation.
✅ Niacinamide – brightens the complexion and evens out skin tone for a youthful glow.
✅ Olive & Rosemary Oils – protect against environmental damage and support skin regeneration.

How to Use:
Apply a small amount of serum to cleansed face and neck using gentle massage movements. Use daily in the morning and evening before applying your moisturizer.

📦 Volume: 30 ml

Who is it for?
Perfect for all skin types, especially mature skin showing signs of wrinkles, fine lines, and loss of firmness.

✨ Results: Smoother, firmer, and more radiant skin with visibly reduced wrinkles! ✨

👉 Order RONA AMPOULE SECRET KEY today and unlock the secret to youthful skin!`,
    name: 'Intensive Anti-Aging Serum',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 14,
    image: NEW_IMAGES[3],
    overview: `Description:
This intensive ampoule serum is designed for effective wrinkle correction and skin rejuvenation. With a unique formula containing Naja Snake Peptide and a complex of active ingredients, it deeply nourishes the skin, reduces fine lines and expression wrinkles, eliminates puffiness and dark circles under the eyes, and improves skin elasticity and tone.

Key Ingredients:

Naja Snake Peptide 4% – a peptide that mimics snake venom, helping to relax facial muscles and reduce wrinkle depth.
Hyaluronic Acid – provides deep hydration, preventing dryness and flaking.
Aloe Vera & Algae Extracts – soothe the skin, reduce inflammation, and supply essential nutrients.
Niacinamide – evens out skin tone, giving a radiant and healthy glow.
Olive & Rosemary Oils – nourish the skin, protect against environmental damage, and support regeneration.
How to Use:
Apply a small amount of serum to cleansed face and neck with light massage movements. Use daily in the morning and evening before applying cream.

Who is it for?
Suitable for all skin types, especially mature skin with visible wrinkles and loss of firmness.

✨ Results: Smooth, firm, and radiant skin with reduced wrinkles! ✨`,
    name: 'Serum with Naja Snake Peptide',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 15,
    image: NEW_IMAGES[4],

name: 'Propolis & Herbal Extract Soap',
overview: `Description:
Propolis & Herbal Extract Soap is a premium skincare solution designed to cleanse, nourish, and protect the skin. Infused with the natural benefits of propolis, honey, and herbal extracts, this soap helps to soothe irritation, fight bacteria, and maintain a healthy complexion. Its antioxidant-rich formula supports skin regeneration, leaving it soft, smooth, and refreshed.

Key Ingredients:
✅ Propolis Extract – known for its antibacterial and anti-inflammatory properties, it helps heal and protect the skin.
✅ Honey Extract – deeply hydrates and nourishes, promoting a radiant complexion.
✅ Ginseng Extract – revitalizes the skin and improves its elasticity.
✅ Coconut & Olive Oils – provide deep moisturization and enhance skin softness.
✅ Zinc Oxide & Herbal Extracts – help reduce acne, soothe irritation, and protect against environmental damage.

How to Use:
Lather the soap with water and gently apply to damp skin. Massage in circular motions, then rinse thoroughly. Use daily for best results.

Who is it for?
Perfect for all skin types, especially those with sensitive, acne-prone, or dry skin.

✨ Results: Hydrated, protected, and rejuvenated skin with a healthy glow! ✨

👉 Order Propolis & Herbal Extract Soap today and experience the power of natural skincare!`,
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  }
];

const JUICES = [
  {
    id: 17,
    name: 'RONA COLLAGEN CREAM',
    price: 18,
    image: NEW_IMAGES[0],
overview: `Description:
RONA COLLAGEN CREAM is a deeply nourishing and rejuvenating skincare solution designed to restore skin elasticity, smooth wrinkles, and provide intense hydration. Its powerful formula combines hydrolyzed collagen, peptides, botanical extracts, and essential oils to support skin regeneration and deliver a youthful, radiant glow.

Key Ingredients:
✅ Hydrolyzed Collagen – improves skin elasticity, reduces wrinkles, and enhances hydration.
✅ SYN®-AKE (Dipeptide Venom Peptide) – mimics the effects of snake venom to relax facial muscles and smooth expression lines.
✅ Ceramide III & Beta-Glucan – strengthen the skin barrier, preventing moisture loss and enhancing protection.
✅ Centella Asiatica & Chamomile Extracts – soothe irritated skin, reduce redness, and promote healing.
✅ Shea Butter & Glycerin – deeply nourish and moisturize, preventing dryness and roughness.
✅ Camellia Seed & Argan Oils – rich in antioxidants, they protect against environmental damage and improve skin texture.
✅ Lavender & Licorice Extracts – brighten the skin, reduce pigmentation, and promote an even complexion.

How to Use:
Apply a small amount of cream to cleansed face and neck using gentle circular motions until fully absorbed. Use daily in the morning and evening for best results.

Who is it for?
Perfect for all skin types, especially those experiencing dryness, loss of elasticity, and visible signs of aging.

✨ Results: Plumper, firmer, and deeply hydrated skin with a youthful glow! ✨

👉 Order RONA COLLAGEN CREAM today and give your skin the care it deserves!`,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 18,
    name: 'Boa Egg White & Collagen Soap',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit',
    image: NEW_IMAGES[1],
overview: `Description:
Boa Egg White & Collagen Soap is a unique facial cleanser formulated to deeply cleanse, reduce acne, and improve skin texture. Enriched with boa egg white extract, collagen, and herbal ingredients, this soap effectively removes impurities, tightens pores, and promotes a smooth, radiant complexion.

Key Ingredients:
✅ Boa Egg White Extract – rich in proteins that help tighten and firm the skin.
✅ Collagen – enhances skin elasticity and reduces fine lines and wrinkles.
✅ Snake Egg & Herbal Extracts – work as natural acne treatments, soothing irritation and reducing breakouts.

How to Use:
Lather the soap with water and gently massage onto damp skin. Rinse thoroughly with water. Use daily for best results.

Who is it for?
Ideal for all skin types, especially those struggling with acne, excess oil, and enlarged pores.

✨ Results: Clean, refreshed, and smoother skin with improved texture and reduced blemishes! ✨

👉 Order Boa Egg White & Collagen Soap today and enjoy clear, healthy skin!
`,
  },
  {
    id: 19,
    image: NEW_IMAGES[2],
    overview: `RONA AMPOULE SECRET KEY – Intensive Anti-Aging Serum with SYN®-AKE 4%
Description:
RONA AMPOULE SECRET KEY is a powerful rejuvenating ampoule serum designed for effective wrinkle correction and deep skin nourishment. Its advanced formula, enriched with SYN®-AKE 4% peptide and a blend of active ingredients, helps smooth fine lines, reduce expression wrinkles, eliminate puffiness and dark circles under the eyes, and restore skin elasticity and radiance.

Key Ingredients:
✅ SYN®-AKE 4% – a biomimetic peptide that mimics snake venom, relaxing facial muscles and reducing wrinkle depth.
✅ Naja Snake Oil – deeply nourishes and hydrates the skin while stimulating collagen production to slow down aging.
✅ Hyaluronic Acid – provides intense hydration, preventing dryness and flaking.
✅ Aloe Vera & Algae Extracts – soothe and refresh the skin, reducing redness and irritation.
✅ Niacinamide – brightens the complexion and evens out skin tone for a youthful glow.
✅ Olive & Rosemary Oils – protect against environmental damage and support skin regeneration.

How to Use:
Apply a small amount of serum to cleansed face and neck using gentle massage movements. Use daily in the morning and evening before applying your moisturizer.

📦 Volume: 30 ml

Who is it for?
Perfect for all skin types, especially mature skin showing signs of wrinkles, fine lines, and loss of firmness.

✨ Results: Smoother, firmer, and more radiant skin with visibly reduced wrinkles! ✨

👉 Order RONA AMPOULE SECRET KEY today and unlock the secret to youthful skin!`,
    name: 'Intensive Anti-Aging Serum',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 20,
    image: NEW_IMAGES[3],
    overview: `Description:
This intensive ampoule serum is designed for effective wrinkle correction and skin rejuvenation. With a unique formula containing Naja Snake Peptide and a complex of active ingredients, it deeply nourishes the skin, reduces fine lines and expression wrinkles, eliminates puffiness and dark circles under the eyes, and improves skin elasticity and tone.

Key Ingredients:

Naja Snake Peptide 4% – a peptide that mimics snake venom, helping to relax facial muscles and reduce wrinkle depth.
Hyaluronic Acid – provides deep hydration, preventing dryness and flaking.
Aloe Vera & Algae Extracts – soothe the skin, reduce inflammation, and supply essential nutrients.
Niacinamide – evens out skin tone, giving a radiant and healthy glow.
Olive & Rosemary Oils – nourish the skin, protect against environmental damage, and support regeneration.
How to Use:
Apply a small amount of serum to cleansed face and neck with light massage movements. Use daily in the morning and evening before applying cream.

Who is it for?
Suitable for all skin types, especially mature skin with visible wrinkles and loss of firmness.

✨ Results: Smooth, firm, and radiant skin with reduced wrinkles! ✨`,
    name: 'Serum with Naja Snake Peptide',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 21,
    image: NEW_IMAGES[4],

name: 'Propolis & Herbal Extract Soap',
overview: `Description:
Propolis & Herbal Extract Soap is a premium skincare solution designed to cleanse, nourish, and protect the skin. Infused with the natural benefits of propolis, honey, and herbal extracts, this soap helps to soothe irritation, fight bacteria, and maintain a healthy complexion. Its antioxidant-rich formula supports skin regeneration, leaving it soft, smooth, and refreshed.

Key Ingredients:
✅ Propolis Extract – known for its antibacterial and anti-inflammatory properties, it helps heal and protect the skin.
✅ Honey Extract – deeply hydrates and nourishes, promoting a radiant complexion.
✅ Ginseng Extract – revitalizes the skin and improves its elasticity.
✅ Coconut & Olive Oils – provide deep moisturization and enhance skin softness.
✅ Zinc Oxide & Herbal Extracts – help reduce acne, soothe irritation, and protect against environmental damage.

How to Use:
Lather the soap with water and gently apply to damp skin. Massage in circular motions, then rinse thoroughly. Use daily for best results.

Who is it for?
Perfect for all skin types, especially those with sensitive, acne-prone, or dry skin.

✨ Results: Hydrated, protected, and rejuvenated skin with a healthy glow! ✨

👉 Order Propolis & Herbal Extract Soap today and experience the power of natural skincare!`,
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  }
];

const BEST_SELL_PRODUCTS = [
  {
    id: 23,
    name: 'RONA COLLAGEN CREAM',
    price: 18,
    image: NEW_IMAGES[0],
overview: `Description:
RONA COLLAGEN CREAM is a deeply nourishing and rejuvenating skincare solution designed to restore skin elasticity, smooth wrinkles, and provide intense hydration. Its powerful formula combines hydrolyzed collagen, peptides, botanical extracts, and essential oils to support skin regeneration and deliver a youthful, radiant glow.

Key Ingredients:
✅ Hydrolyzed Collagen – improves skin elasticity, reduces wrinkles, and enhances hydration.
✅ SYN®-AKE (Dipeptide Venom Peptide) – mimics the effects of snake venom to relax facial muscles and smooth expression lines.
✅ Ceramide III & Beta-Glucan – strengthen the skin barrier, preventing moisture loss and enhancing protection.
✅ Centella Asiatica & Chamomile Extracts – soothe irritated skin, reduce redness, and promote healing.
✅ Shea Butter & Glycerin – deeply nourish and moisturize, preventing dryness and roughness.
✅ Camellia Seed & Argan Oils – rich in antioxidants, they protect against environmental damage and improve skin texture.
✅ Lavender & Licorice Extracts – brighten the skin, reduce pigmentation, and promote an even complexion.

How to Use:
Apply a small amount of cream to cleansed face and neck using gentle circular motions until fully absorbed. Use daily in the morning and evening for best results.

Who is it for?
Perfect for all skin types, especially those experiencing dryness, loss of elasticity, and visible signs of aging.

✨ Results: Plumper, firmer, and deeply hydrated skin with a youthful glow! ✨

👉 Order RONA COLLAGEN CREAM today and give your skin the care it deserves!`,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 24,
    name: 'Boa Egg White & Collagen Soap',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit',
    image: NEW_IMAGES[1],
overview: `Description:
Boa Egg White & Collagen Soap is a unique facial cleanser formulated to deeply cleanse, reduce acne, and improve skin texture. Enriched with boa egg white extract, collagen, and herbal ingredients, this soap effectively removes impurities, tightens pores, and promotes a smooth, radiant complexion.

Key Ingredients:
✅ Boa Egg White Extract – rich in proteins that help tighten and firm the skin.
✅ Collagen – enhances skin elasticity and reduces fine lines and wrinkles.
✅ Snake Egg & Herbal Extracts – work as natural acne treatments, soothing irritation and reducing breakouts.

How to Use:
Lather the soap with water and gently massage onto damp skin. Rinse thoroughly with water. Use daily for best results.

Who is it for?
Ideal for all skin types, especially those struggling with acne, excess oil, and enlarged pores.

✨ Results: Clean, refreshed, and smoother skin with improved texture and reduced blemishes! ✨

👉 Order Boa Egg White & Collagen Soap today and enjoy clear, healthy skin!
`,
  },
  {
    id: 25,
    image: NEW_IMAGES[2],
    overview: `RONA AMPOULE SECRET KEY – Intensive Anti-Aging Serum with SYN®-AKE 4%
Description:
RONA AMPOULE SECRET KEY is a powerful rejuvenating ampoule serum designed for effective wrinkle correction and deep skin nourishment. Its advanced formula, enriched with SYN®-AKE 4% peptide and a blend of active ingredients, helps smooth fine lines, reduce expression wrinkles, eliminate puffiness and dark circles under the eyes, and restore skin elasticity and radiance.

Key Ingredients:
✅ SYN®-AKE 4% – a biomimetic peptide that mimics snake venom, relaxing facial muscles and reducing wrinkle depth.
✅ Naja Snake Oil – deeply nourishes and hydrates the skin while stimulating collagen production to slow down aging.
✅ Hyaluronic Acid – provides intense hydration, preventing dryness and flaking.
✅ Aloe Vera & Algae Extracts – soothe and refresh the skin, reducing redness and irritation.
✅ Niacinamide – brightens the complexion and evens out skin tone for a youthful glow.
✅ Olive & Rosemary Oils – protect against environmental damage and support skin regeneration.

How to Use:
Apply a small amount of serum to cleansed face and neck using gentle massage movements. Use daily in the morning and evening before applying your moisturizer.

📦 Volume: 30 ml

Who is it for?
Perfect for all skin types, especially mature skin showing signs of wrinkles, fine lines, and loss of firmness.

✨ Results: Smoother, firmer, and more radiant skin with visibly reduced wrinkles! ✨

👉 Order RONA AMPOULE SECRET KEY today and unlock the secret to youthful skin!`,
    name: 'Intensive Anti-Aging Serum',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 26,
    image: NEW_IMAGES[3],
    overview: `Description:
This intensive ampoule serum is designed for effective wrinkle correction and skin rejuvenation. With a unique formula containing Naja Snake Peptide and a complex of active ingredients, it deeply nourishes the skin, reduces fine lines and expression wrinkles, eliminates puffiness and dark circles under the eyes, and improves skin elasticity and tone.

Key Ingredients:

Naja Snake Peptide 4% – a peptide that mimics snake venom, helping to relax facial muscles and reduce wrinkle depth.
Hyaluronic Acid – provides deep hydration, preventing dryness and flaking.
Aloe Vera & Algae Extracts – soothe the skin, reduce inflammation, and supply essential nutrients.
Niacinamide – evens out skin tone, giving a radiant and healthy glow.
Olive & Rosemary Oils – nourish the skin, protect against environmental damage, and support regeneration.
How to Use:
Apply a small amount of serum to cleansed face and neck with light massage movements. Use daily in the morning and evening before applying cream.

Who is it for?
Suitable for all skin types, especially mature skin with visible wrinkles and loss of firmness.

✨ Results: Smooth, firm, and radiant skin with reduced wrinkles! ✨`,
    name: 'Serum with Naja Snake Peptide',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 27,
    image: NEW_IMAGES[4],

name: 'Propolis & Herbal Extract Soap',
overview: `Description:
Propolis & Herbal Extract Soap is a premium skincare solution designed to cleanse, nourish, and protect the skin. Infused with the natural benefits of propolis, honey, and herbal extracts, this soap helps to soothe irritation, fight bacteria, and maintain a healthy complexion. Its antioxidant-rich formula supports skin regeneration, leaving it soft, smooth, and refreshed.

Key Ingredients:
✅ Propolis Extract – known for its antibacterial and anti-inflammatory properties, it helps heal and protect the skin.
✅ Honey Extract – deeply hydrates and nourishes, promoting a radiant complexion.
✅ Ginseng Extract – revitalizes the skin and improves its elasticity.
✅ Coconut & Olive Oils – provide deep moisturization and enhance skin softness.
✅ Zinc Oxide & Herbal Extracts – help reduce acne, soothe irritation, and protect against environmental damage.

How to Use:
Lather the soap with water and gently apply to damp skin. Massage in circular motions, then rinse thoroughly. Use daily for best results.

Who is it for?
Perfect for all skin types, especially those with sensitive, acne-prone, or dry skin.

✨ Results: Hydrated, protected, and rejuvenated skin with a healthy glow! ✨

👉 Order Propolis & Herbal Extract Soap today and experience the power of natural skincare!`,
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  }
];

const MOST_POPULAR_PRODUCTS = [
  {
    id: 31,
    name: 'RONA COLLAGEN CREAM',
    price: 18,
    image: NEW_IMAGES[0],
overview: `Description:
RONA COLLAGEN CREAM is a deeply nourishing and rejuvenating skincare solution designed to restore skin elasticity, smooth wrinkles, and provide intense hydration. Its powerful formula combines hydrolyzed collagen, peptides, botanical extracts, and essential oils to support skin regeneration and deliver a youthful, radiant glow.

Key Ingredients:
✅ Hydrolyzed Collagen – improves skin elasticity, reduces wrinkles, and enhances hydration.
✅ SYN®-AKE (Dipeptide Venom Peptide) – mimics the effects of snake venom to relax facial muscles and smooth expression lines.
✅ Ceramide III & Beta-Glucan – strengthen the skin barrier, preventing moisture loss and enhancing protection.
✅ Centella Asiatica & Chamomile Extracts – soothe irritated skin, reduce redness, and promote healing.
✅ Shea Butter & Glycerin – deeply nourish and moisturize, preventing dryness and roughness.
✅ Camellia Seed & Argan Oils – rich in antioxidants, they protect against environmental damage and improve skin texture.
✅ Lavender & Licorice Extracts – brighten the skin, reduce pigmentation, and promote an even complexion.

How to Use:
Apply a small amount of cream to cleansed face and neck using gentle circular motions until fully absorbed. Use daily in the morning and evening for best results.

Who is it for?
Perfect for all skin types, especially those experiencing dryness, loss of elasticity, and visible signs of aging.

✨ Results: Plumper, firmer, and deeply hydrated skin with a youthful glow! ✨

👉 Order RONA COLLAGEN CREAM today and give your skin the care it deserves!`,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 32,
    name: 'Boa Egg White & Collagen Soap',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit',
    image: NEW_IMAGES[1],
overview: `Description:
Boa Egg White & Collagen Soap is a unique facial cleanser formulated to deeply cleanse, reduce acne, and improve skin texture. Enriched with boa egg white extract, collagen, and herbal ingredients, this soap effectively removes impurities, tightens pores, and promotes a smooth, radiant complexion.

Key Ingredients:
✅ Boa Egg White Extract – rich in proteins that help tighten and firm the skin.
✅ Collagen – enhances skin elasticity and reduces fine lines and wrinkles.
✅ Snake Egg & Herbal Extracts – work as natural acne treatments, soothing irritation and reducing breakouts.

How to Use:
Lather the soap with water and gently massage onto damp skin. Rinse thoroughly with water. Use daily for best results.

Who is it for?
Ideal for all skin types, especially those struggling with acne, excess oil, and enlarged pores.

✨ Results: Clean, refreshed, and smoother skin with improved texture and reduced blemishes! ✨

👉 Order Boa Egg White & Collagen Soap today and enjoy clear, healthy skin!
`,
  },
  {
    id: 33,
    image: NEW_IMAGES[2],
    overview: `RONA AMPOULE SECRET KEY – Intensive Anti-Aging Serum with SYN®-AKE 4%
Description:
RONA AMPOULE SECRET KEY is a powerful rejuvenating ampoule serum designed for effective wrinkle correction and deep skin nourishment. Its advanced formula, enriched with SYN®-AKE 4% peptide and a blend of active ingredients, helps smooth fine lines, reduce expression wrinkles, eliminate puffiness and dark circles under the eyes, and restore skin elasticity and radiance.

Key Ingredients:
✅ SYN®-AKE 4% – a biomimetic peptide that mimics snake venom, relaxing facial muscles and reducing wrinkle depth.
✅ Naja Snake Oil – deeply nourishes and hydrates the skin while stimulating collagen production to slow down aging.
✅ Hyaluronic Acid – provides intense hydration, preventing dryness and flaking.
✅ Aloe Vera & Algae Extracts – soothe and refresh the skin, reducing redness and irritation.
✅ Niacinamide – brightens the complexion and evens out skin tone for a youthful glow.
✅ Olive & Rosemary Oils – protect against environmental damage and support skin regeneration.

How to Use:
Apply a small amount of serum to cleansed face and neck using gentle massage movements. Use daily in the morning and evening before applying your moisturizer.

📦 Volume: 30 ml

Who is it for?
Perfect for all skin types, especially mature skin showing signs of wrinkles, fine lines, and loss of firmness.

✨ Results: Smoother, firmer, and more radiant skin with visibly reduced wrinkles! ✨

👉 Order RONA AMPOULE SECRET KEY today and unlock the secret to youthful skin!`,
    name: 'Boa Egg White & Collagen Soap',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 34,
    image: NEW_IMAGES[3],
    overview: `Description:
This intensive ampoule serum is designed for effective wrinkle correction and skin rejuvenation. With a unique formula containing Naja Snake Peptide and a complex of active ingredients, it deeply nourishes the skin, reduces fine lines and expression wrinkles, eliminates puffiness and dark circles under the eyes, and improves skin elasticity and tone.

Key Ingredients:

Naja Snake Peptide 4% – a peptide that mimics snake venom, helping to relax facial muscles and reduce wrinkle depth.
Hyaluronic Acid – provides deep hydration, preventing dryness and flaking.
Aloe Vera & Algae Extracts – soothe the skin, reduce inflammation, and supply essential nutrients.
Niacinamide – evens out skin tone, giving a radiant and healthy glow.
Olive & Rosemary Oils – nourish the skin, protect against environmental damage, and support regeneration.
How to Use:
Apply a small amount of serum to cleansed face and neck with light massage movements. Use daily in the morning and evening before applying cream.

Who is it for?
Suitable for all skin types, especially mature skin with visible wrinkles and loss of firmness.

✨ Results: Smooth, firm, and radiant skin with reduced wrinkles! ✨`,
    name: 'Serum with Naja Snake Peptide',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 35,
    image: NEW_IMAGES[4],

name: 'Propolis & Herbal Extract Soap',
overview: `Description:
Propolis & Herbal Extract Soap is a premium skincare solution designed to cleanse, nourish, and protect the skin. Infused with the natural benefits of propolis, honey, and herbal extracts, this soap helps to soothe irritation, fight bacteria, and maintain a healthy complexion. Its antioxidant-rich formula supports skin regeneration, leaving it soft, smooth, and refreshed.

Key Ingredients:
✅ Propolis Extract – known for its antibacterial and anti-inflammatory properties, it helps heal and protect the skin.
✅ Honey Extract – deeply hydrates and nourishes, promoting a radiant complexion.
✅ Ginseng Extract – revitalizes the skin and improves its elasticity.
✅ Coconut & Olive Oils – provide deep moisturization and enhance skin softness.
✅ Zinc Oxide & Herbal Extracts – help reduce acne, soothe irritation, and protect against environmental damage.

How to Use:
Lather the soap with water and gently apply to damp skin. Massage in circular motions, then rinse thoroughly. Use daily for best results.

Who is it for?
Perfect for all skin types, especially those with sensitive, acne-prone, or dry skin.

✨ Results: Hydrated, protected, and rejuvenated skin with a healthy glow! ✨

👉 Order Propolis & Herbal Extract Soap today and experience the power of natural skincare!`,
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  }
];

const JUST_ARRIVED_PRODUCTS = [
  {
    id: 39,
    name: 'RONA COLLAGEN CREAM',
    price: 18,
    image: NEW_IMAGES[0],
overview: `Description:
RONA COLLAGEN CREAM is a deeply nourishing and rejuvenating skincare solution designed to restore skin elasticity, smooth wrinkles, and provide intense hydration. Its powerful formula combines hydrolyzed collagen, peptides, botanical extracts, and essential oils to support skin regeneration and deliver a youthful, radiant glow.

Key Ingredients:
✅ Hydrolyzed Collagen – improves skin elasticity, reduces wrinkles, and enhances hydration.
✅ SYN®-AKE (Dipeptide Venom Peptide) – mimics the effects of snake venom to relax facial muscles and smooth expression lines.
✅ Ceramide III & Beta-Glucan – strengthen the skin barrier, preventing moisture loss and enhancing protection.
✅ Centella Asiatica & Chamomile Extracts – soothe irritated skin, reduce redness, and promote healing.
✅ Shea Butter & Glycerin – deeply nourish and moisturize, preventing dryness and roughness.
✅ Camellia Seed & Argan Oils – rich in antioxidants, they protect against environmental damage and improve skin texture.
✅ Lavender & Licorice Extracts – brighten the skin, reduce pigmentation, and promote an even complexion.

How to Use:
Apply a small amount of cream to cleansed face and neck using gentle circular motions until fully absorbed. Use daily in the morning and evening for best results.

Who is it for?
Perfect for all skin types, especially those experiencing dryness, loss of elasticity, and visible signs of aging.

✨ Results: Plumper, firmer, and deeply hydrated skin with a youthful glow! ✨

👉 Order RONA COLLAGEN CREAM today and give your skin the care it deserves!`,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 40,
    name: 'Boa Egg White & Collagen Soap',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit',
    image: NEW_IMAGES[1],
overview: `Description:
Boa Egg White & Collagen Soap is a unique facial cleanser formulated to deeply cleanse, reduce acne, and improve skin texture. Enriched with boa egg white extract, collagen, and herbal ingredients, this soap effectively removes impurities, tightens pores, and promotes a smooth, radiant complexion.

Key Ingredients:
✅ Boa Egg White Extract – rich in proteins that help tighten and firm the skin.
✅ Collagen – enhances skin elasticity and reduces fine lines and wrinkles.
✅ Snake Egg & Herbal Extracts – work as natural acne treatments, soothing irritation and reducing breakouts.

How to Use:
Lather the soap with water and gently massage onto damp skin. Rinse thoroughly with water. Use daily for best results.

Who is it for?
Ideal for all skin types, especially those struggling with acne, excess oil, and enlarged pores.

✨ Results: Clean, refreshed, and smoother skin with improved texture and reduced blemishes! ✨

👉 Order Boa Egg White & Collagen Soap today and enjoy clear, healthy skin!
`,
  },
  {
    id: 41,
    image: NEW_IMAGES[2],
    overview: `RONA AMPOULE SECRET KEY – Intensive Anti-Aging Serum with SYN®-AKE 4%
Description:
RONA AMPOULE SECRET KEY is a powerful rejuvenating ampoule serum designed for effective wrinkle correction and deep skin nourishment. Its advanced formula, enriched with SYN®-AKE 4% peptide and a blend of active ingredients, helps smooth fine lines, reduce expression wrinkles, eliminate puffiness and dark circles under the eyes, and restore skin elasticity and radiance.

Key Ingredients:
✅ SYN®-AKE 4% – a biomimetic peptide that mimics snake venom, relaxing facial muscles and reducing wrinkle depth.
✅ Naja Snake Oil – deeply nourishes and hydrates the skin while stimulating collagen production to slow down aging.
✅ Hyaluronic Acid – provides intense hydration, preventing dryness and flaking.
✅ Aloe Vera & Algae Extracts – soothe and refresh the skin, reducing redness and irritation.
✅ Niacinamide – brightens the complexion and evens out skin tone for a youthful glow.
✅ Olive & Rosemary Oils – protect against environmental damage and support skin regeneration.

How to Use:
Apply a small amount of serum to cleansed face and neck using gentle massage movements. Use daily in the morning and evening before applying your moisturizer.

📦 Volume: 30 ml

Who is it for?
Perfect for all skin types, especially mature skin showing signs of wrinkles, fine lines, and loss of firmness.

✨ Results: Smoother, firmer, and more radiant skin with visibly reduced wrinkles! ✨

👉 Order RONA AMPOULE SECRET KEY today and unlock the secret to youthful skin!`,
    name: 'Intensive Anti-Aging Serum',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 42,
    image: NEW_IMAGES[3],
    overview: `Description:
This intensive ampoule serum is designed for effective wrinkle correction and skin rejuvenation. With a unique formula containing Naja Snake Peptide and a complex of active ingredients, it deeply nourishes the skin, reduces fine lines and expression wrinkles, eliminates puffiness and dark circles under the eyes, and improves skin elasticity and tone.

Key Ingredients:

Naja Snake Peptide 4% – a peptide that mimics snake venom, helping to relax facial muscles and reduce wrinkle depth.
Hyaluronic Acid – provides deep hydration, preventing dryness and flaking.
Aloe Vera & Algae Extracts – soothe the skin, reduce inflammation, and supply essential nutrients.
Niacinamide – evens out skin tone, giving a radiant and healthy glow.
Olive & Rosemary Oils – nourish the skin, protect against environmental damage, and support regeneration.
How to Use:
Apply a small amount of serum to cleansed face and neck with light massage movements. Use daily in the morning and evening before applying cream.

Who is it for?
Suitable for all skin types, especially mature skin with visible wrinkles and loss of firmness.

✨ Results: Smooth, firm, and radiant skin with reduced wrinkles! ✨`,
    name: 'Serum with Naja Snake Peptide',
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  },
  {
    id: 43,
    image: NEW_IMAGES[4],

name: 'Propolis & Herbal Extract Soap',
overview: `Description:
Propolis & Herbal Extract Soap is a premium skincare solution designed to cleanse, nourish, and protect the skin. Infused with the natural benefits of propolis, honey, and herbal extracts, this soap helps to soothe irritation, fight bacteria, and maintain a healthy complexion. Its antioxidant-rich formula supports skin regeneration, leaving it soft, smooth, and refreshed.

Key Ingredients:
✅ Propolis Extract – known for its antibacterial and anti-inflammatory properties, it helps heal and protect the skin.
✅ Honey Extract – deeply hydrates and nourishes, promoting a radiant complexion.
✅ Ginseng Extract – revitalizes the skin and improves its elasticity.
✅ Coconut & Olive Oils – provide deep moisturization and enhance skin softness.
✅ Zinc Oxide & Herbal Extracts – help reduce acne, soothe irritation, and protect against environmental damage.

How to Use:
Lather the soap with water and gently apply to damp skin. Massage in circular motions, then rinse thoroughly. Use daily for best results.

Who is it for?
Perfect for all skin types, especially those with sensitive, acne-prone, or dry skin.

✨ Results: Hydrated, protected, and rejuvenated skin with a healthy glow! ✨

👉 Order Propolis & Herbal Extract Soap today and experience the power of natural skincare!`,
    price: 18,
    discount: 30,
    rating: 4.5,
    unit: '1 Unit'
  }
];

export default { ALL_PRODUCTS, FRUITS_AND_VEGES, JUICES, BEST_SELL_PRODUCTS, MOST_POPULAR_PRODUCTS, JUST_ARRIVED_PRODUCTS };
