document.addEventListener('DOMContentLoaded', function() {
    const categoryData = {
        "Electronics & Gadgets": {
            subcategories: {
                "Smartphones & Tablets": {
                    brands: {
                        "Apple": { averageRating: 8.5, goodReviews: ["Excellent performance"], badReviews: ["Very expensive"], improvementSuggestions: ["More affordable models"] },
                        "Samsung": { averageRating: 8.0, goodReviews: ["Vibrant displays"], badReviews: ["Bloated software"], improvementSuggestions: ["Simplify software"] },
                        "Xiaomi": { averageRating: 7.8, goodReviews: ["Feature-packed"], badReviews: ["Ads in UI"], improvementSuggestions: ["Remove ads"] },
                        "OnePlus": { averageRating: 8.3, goodReviews: ["Fast performance"], badReviews: ["Price increase"], improvementSuggestions: ["Competitive pricing"] },
                        "Lava": { averageRating: 6.5, goodReviews: ["Affordable"], badReviews: ["Basic performance"], improvementSuggestions: ["Improve performance"] },
                        "Lenovo": { averageRating: 8.1, goodReviews: ["Versatile Tablets"], badReviews: ["Software Updates"], improvementSuggestions: ["Improve Software Support"] },
                        "iBall": { averageRating: 7.0, goodReviews: ["Budget Tablets"], badReviews: ["Performance"], improvementSuggestions: ["Enhance Performance"] },
                        "Micromax": { averageRating: 6.8, goodReviews: ["Entry-Level Tablets"], badReviews: ["Basic Features"], improvementSuggestions: ["Add More Features"] }
                    }
                },
                "Computers & Laptops": {
                    brands: {
                        "Dell": { averageRating: 8.4, goodReviews: ["Wide range"], badReviews: ["Generic design"], improvementSuggestions: ["Innovative designs"] },
                        "HP": { averageRating: 8.3, goodReviews: ["Balanced performance"], badReviews: ["Bloatware"], improvementSuggestions: ["Reduce bloatware"] },
                        "Lenovo": { averageRating: 8.5, goodReviews: ["Reliable Laptops"], badReviews: ["Customer Service"], improvementSuggestions: ["Improve support"] },
                        "Acer": { averageRating: 7.9, goodReviews: ["Affordable Laptops"], badReviews: ["Build Quality"], improvementSuggestions: ["Enhance Build Quality"] },
                        "Reliance Digital": { averageRating: 7.5, goodReviews: ["Retailer's Choice"], badReviews: ["Limited Brand"], improvementSuggestions: ["Expand Brand Selection"] },
                        "Asus": { averageRating: 8.2, goodReviews: ["Gaming Laptops"], badReviews: ["Pricey Gaming Models"], improvementSuggestions: ["More affordable gaming options"] },
                        "assembled PCs": { averageRating: 7.7, goodReviews: ["Customizable"], badReviews: ["Support Issues"], improvementSuggestions: ["Improve support for custom PCs"] },
                        "HCL": { averageRating: 7.0, goodReviews: ["Indian Brand"], badReviews: ["Outdated Designs"], improvementSuggestions: ["Modernize Designs"] }
                    }
                },
                "Peripherals": {
                    brands: {
                        "Logitech": { averageRating: 8.7, goodReviews: ["Reliable Peripherals"], badReviews: ["Pricey for some"], improvementSuggestions: ["More budget options"] },
                        "HP": { averageRating: 8.0, goodReviews: ["Good Value Peripherals"], badReviews: ["Basic Features"], improvementSuggestions: ["Add advanced features"] },
                        "Zebronics": { averageRating: 7.5, goodReviews: ["Affordable Peripherals"], badReviews: ["Durability"], improvementSuggestions: ["Improve Durability"] },
                        "Cosmic Byte": { averageRating: 7.8, goodReviews: ["Gaming Peripherals (Budget)"], badReviews: ["Build Quality (Budget)"], improvementSuggestions: ["Enhance build for gaming line"] },
                        "boAt": { averageRating: 8.2, goodReviews: ["Stylish Peripherals"], badReviews: ["Sound Quality (basic)"], improvementSuggestions: ["Improve sound quality in peripherals"] }
                    }
                },
                "Audio & Headphones": {
                    brands: {
                        "Sony": { averageRating: 8.9, goodReviews: ["Noise Cancellation"], badReviews: ["Pricey Headphones"], improvementSuggestions: ["More affordable NC headphones"] },
                        "Bose": { averageRating: 8.8, goodReviews: ["Industry-leading NC"], badReviews: ["Very Premium Price"], improvementSuggestions: ["More mid-range NC headphones"] },
                        "JBL": { averageRating: 8.6, goodReviews: ["Powerful Bass"], badReviews: ["Bass-heavy sound"], improvementSuggestions: ["Balanced sound profiles"] },
                        "boAt": { averageRating: 8.1, goodReviews: ["Trendy Audio"], badReviews: ["Durability (some products)"], improvementSuggestions: ["Improve durability"] },
                        "Boult Audio": { averageRating: 7.9, goodReviews: ["Affordable Audio"], badReviews: ["Sound Quality (entry-level)"], improvementSuggestions: ["Enhance sound quality"] },
                        "Philips": { averageRating: 8.3, goodReviews: ["Reliable Audio"], badReviews: ["Design (sometimes basic)"], improvementSuggestions: ["Modernize designs"] },
                        "F&D": { averageRating: 7.7, goodReviews: ["Budget Speakers"], badReviews: ["Sound Clarity"], improvementSuggestions: ["Improve sound clarity"] },
                        "Mivi": { averageRating: 7.6, goodReviews: ["Indian Audio Brand"], badReviews: ["Brand Recognition"], improvementSuggestions: ["Increase brand awareness"] },
                        "Zebronics": { averageRating: 7.4, goodReviews: ["Value Speakers/Soundbars"], badReviews: ["Sound Quality (basic)"], improvementSuggestions: ["Enhance audio quality"] }
                    }
                },
                "Wearables": {
                    brands: {
                        "Apple Watch": { averageRating: 9.1, goodReviews: ["iOS Integration"], badReviews: ["Expensive"], improvementSuggestions: ["More affordable options"] },
                        "Samsung Galaxy Watch": { averageRating: 8.6, goodReviews: ["Health Features"], badReviews: ["Battery Life"], improvementSuggestions: ["Improve battery life"] },
                        "Fitbit": { averageRating: 8.4, goodReviews: ["Fitness Tracking"], badReviews: ["Subscription Model"], improvementSuggestions: ["Re-evaluate subscription"] },
                        "Noise": { averageRating: 7.9, goodReviews: ["Affordable Smartwatches"], badReviews: ["Accuracy (fitness)"], improvementSuggestions: ["Improve fitness tracking accuracy"] },
                        "Fire-Boltt": { averageRating: 7.7, goodReviews: ["Budget Wearables"], badReviews: ["Software (basic)"], improvementSuggestions: ["Enhance software features"] },
                        "Garmin": { averageRating: 8.8, goodReviews: ["Advanced Fitness"], badReviews: ["Pricey Fitness Trackers"], improvementSuggestions: ["More affordable fitness trackers"] },
                        "Mi": { averageRating: 8.2, goodReviews: ["Value Fitness"], badReviews: ["Features (basic)"], improvementSuggestions: ["Add advanced features to Mi Band"] },
                        "Fastrack": { averageRating: 8.0, goodReviews: ["Trendy Wearables"], badReviews: ["Durability (some models)"], improvementSuggestions: ["Improve durability"] },
                        "GOQii": { averageRating: 7.6, goodReviews: ["Health Coaching"], badReviews: ["Wearable Design"], improvementSuggestions: ["Improve wearable design"] }
                    }
                },
                "Cameras": {
                    brands: {
                        "Canon": { averageRating: 9.0, goodReviews: ["Image Quality (DSLR)"], badReviews: ["DSLR becoming outdated"], improvementSuggestions: ["Focus on mirrorless innovation"] },
                        "Nikon": { averageRating: 8.8, goodReviews: ["Lens Selection (DSLR)"], badReviews: ["Mirrorless adoption"], improvementSuggestions: ["Accelerate mirrorless development"] },
                        "Sony": { averageRating: 8.8, goodReviews: ["High-Resolution Sensors"], badReviews: ["Menu System"], improvementSuggestions: ["Simplify menu"] },
                        "Fujifilm": { averageRating: 8.6, goodReviews: ["Retro Designs"], badReviews: ["Video Features (compared to Sony)"], improvementSuggestions: ["Enhance video capabilities"] },
                        "GoPro": { averageRating: 8.7, goodReviews: ["Action Camera Leader"], badReviews: ["Battery Life (Action Cams)"], improvementSuggestions: ["Improve action cam battery life"] },
                        "SJCAM": { averageRating: 7.9, goodReviews: ["Affordable Action Cams"], badReviews: ["Image Quality (vs GoPro)"], improvementSuggestions: ["Enhance image quality in action cams"] },
                        "Insta360": { averageRating: 8.5, goodReviews: ["360 Innovation"], badReviews: ["Editing Software"], improvementSuggestions: ["Improve editing software usability"] }
                    }
                }
            }
        },
        "Fashion & Apparel": {
            subcategories: {
                "Men's Clothing": {
                    brands: {
                        "Raymond": { averageRating: 8.6, goodReviews: ["Formal Fabrics"], badReviews: ["Formal Styles"], improvementSuggestions: ["Casual Line"] },
                        "Van Heusen": { averageRating: 8.4, goodReviews: ["Office Wear"], badReviews: ["Pricey Formals"], improvementSuggestions: ["More value formals"] },
                        "Arrow": { averageRating: 8.3, goodReviews: ["Classic Formals"], badReviews: ["Outdated Styles"], improvementSuggestions: ["Modernize Formals"] },
                        "Peter England": { averageRating: 8.2, goodReviews: ["Affordable Formals"], badReviews: ["Basic Designs"], improvementSuggestions: ["Improve designs"] },
                        "Blackberrys": { averageRating: 8.5, goodReviews: ["Premium Formals"], badReviews: ["Very Expensive"], improvementSuggestions: ["More accessible premium options"] },
                        "Levi's": { averageRating: 8.3, goodReviews: ["Iconic Denim"], badReviews: ["Jeans Price"], improvementSuggestions: ["More affordable denim"] },
                        "Nike": { averageRating: 8.7, goodReviews: ["Sportswear Quality"], badReviews: ["Premium Sportswear Price"], improvementSuggestions: ["More affordable sportswear"] },
                        "Adidas": { averageRating: 8.5, goodReviews: ["Classic Sportswear"], badReviews: ["High Sportswear Price"], improvementSuggestions: ["More accessible sportswear prices"] },
                        "Puma": { averageRating: 8.0, goodReviews: ["Trendy Sportswear"], badReviews: ["Quality Consistency"], improvementSuggestions: ["Improve quality consistency"] },
                        "Roadster": { averageRating: 7.8, goodReviews: ["Fashionable Casuals"], badReviews: ["Durability (casuals)"], improvementSuggestions: ["Enhance durability of casual wear"] },
                        "Manyavar": { averageRating: 8.4, goodReviews: ["Ethnic Wear Range (Men)"], badReviews: ["Ethnic Wear Price"], improvementSuggestions: ["More affordable ethnic wear"] },
                        "Peter England Ethnic": { averageRating: 8.1, goodReviews: ["Ethnic Formals"], badReviews: ["Limited Ethnic Styles"], improvementSuggestions: ["Expand ethnic styles"] },
                        "Fabindia": { averageRating: 8.6, goodReviews: ["Authentic Ethnic"], badReviews: ["Pricey Ethnic (Handloom)"], improvementSuggestions: ["More accessible handloom prices"] },
                        "Sojanya": { averageRating: 7.9, goodReviews: ["Affordable Ethnic (Men)"], badReviews: ["Design (ethnic)"], improvementSuggestions: ["Improve ethnic designs"] },
                        "Raymond Ethnic": { averageRating: 8.3, goodReviews: ["Premium Ethnic Fabrics"], badReviews: ["Expensive Ethnic Wear"], improvementSuggestions: ["More value ethnic options"] }
                    }
                },
                "Women's Clothing": {
                    brands: {
                        "Zara": { averageRating: 7.9, goodReviews: ["Trendy Fashion"], badReviews: ["Quality (fast fashion)"], improvementSuggestions: ["Improve garment quality"] },
                        "H&M": { averageRating: 7.7, goodReviews: ["Accessible Fashion"], badReviews: ["Sustainability"], improvementSuggestions: ["Sustainable practices"] },
                        "Mango": { averageRating: 8.1, goodReviews: ["Stylish Women's Wear"], badReviews: ["Pricey Western Wear"], improvementSuggestions: ["More value western wear"] },
                        "Vero Moda": { averageRating: 7.8, goodReviews: ["Trendy Western"], badReviews: ["Durability (western wear)"], improvementSuggestions: ["Enhance durability of western wear"] },
                        "AND": { averageRating: 8.0, goodReviews: ["Contemporary Western"], badReviews: ["Price (contemporary)"], improvementSuggestions: ["More competitive pricing"] },
                        "Biba": { averageRating: 8.3, goodReviews: ["Ethnic Wear Range (Women)"], badReviews: ["Ethnic Price"], improvementSuggestions: ["More affordable ethnic wear"] },
                        "W for Woman": { averageRating: 8.2, goodReviews: ["Trendy Ethnic (Women)"], badReviews: ["Design (ethnic)"], improvementSuggestions: ["Improve ethnic designs"] },
                        "Aurelia": { averageRating: 8.1, goodReviews: ["Affordable Ethnic (Women)"], badReviews: ["Material Quality (ethnic)"], improvementSuggestions: ["Enhance ethnic material quality"] },
                        "Fabindia": { averageRating: 8.6, goodReviews: ["Authentic Ethnic (Women)"], badReviews: ["Pricey Ethnic (Handloom)"], improvementSuggestions: ["More accessible handloom prices"] },
                        "Global Desi": { averageRating: 8.2, goodReviews: ["Bohemian Ethnic"], badReviews: ["Pricey Bohemian Ethnic"], improvementSuggestions: ["More value bohemian ethnic options"] }
                    }
                },
                "Lingerie": {
                    brands: {
                        "Jockey": { averageRating: 8.5, goodReviews: ["Comfortable Lingerie"], badReviews: ["Pricey Lingerie"], improvementSuggestions: ["More affordable lingerie options"] },
                        "Triumph": { averageRating: 8.3, goodReviews: ["Supportive Lingerie"], badReviews: ["Design (lingerie)"], improvementSuggestions: ["Modernize lingerie designs"] },
                        "Enamor": { averageRating: 8.2, goodReviews: ["Stylish Lingerie"], badReviews: ["Pricey Stylish Lingerie"], improvementSuggestions: ["More value stylish lingerie"] },
                        "Zivame": { averageRating: 8.4, goodReviews: ["Wide Lingerie Range (Online)"], badReviews: ["Online Fit Issues"], improvementSuggestions: ["Improve fit guidance online"] },
                        "Clovia": { averageRating: 8.1, goodReviews: ["Trendy Lingerie (Online)"], badReviews: ["Quality (online lingerie)"], improvementSuggestions: ["Enhance quality of online lingerie"] }
                    }
                },
                "Footwear": {
                    brands: {
                        "Nike": { averageRating: 8.7, goodReviews: ["Sports Shoes Performance"], badReviews: ["Sports Shoe Price"], improvementSuggestions: ["More affordable sports shoes"] },
                        "Adidas": { averageRating: 8.5, goodReviews: ["Classic Sports Shoes"], badReviews: ["High Sports Shoe Price"], improvementSuggestions: ["More accessible sports shoe prices"] },
                        "Puma": { averageRating: 8.0, goodReviews: ["Trendy Sports Shoes"], badReviews: ["Quality Consistency (shoes)"], improvementSuggestions: ["Improve shoe quality consistency"] },
                        "Campus": { averageRating: 7.9, goodReviews: ["Affordable Sports Shoes"], badReviews: ["Durability (budget shoes)"], improvementSuggestions: ["Enhance durability of budget shoes"] },
                        "Asian Shoes": { averageRating: 7.6, goodReviews: ["Value Sports Shoes"], badReviews: ["Design (value shoes)"], improvementSuggestions: ["Improve designs of value shoes"] },
                        "Clarks": { averageRating: 8.5, goodReviews: ["Comfortable Formal Shoes"], badReviews: ["Formal Shoe Design (conservative)"], improvementSuggestions: ["Modernize formal shoe designs"] },
                        "Hush Puppies": { averageRating: 8.4, goodReviews: ["Classic Formal Shoes"], badReviews: ["Pricey Formal Shoes"], improvementSuggestions: ["More value formal shoes"] },
                        "Bata": { averageRating: 8.2, goodReviews: ["Reliable Shoes"], badReviews: ["Design (Bata)"], improvementSuggestions: ["Modernize Bata shoe designs"] },
                        "Red Tape": { averageRating: 8.3, goodReviews: ["Stylish Formal Shoes"], badReviews: ["Durability (formal shoes)"], improvementSuggestions: ["Enhance durability of formal shoes"] },
                        "Metro Shoes": { averageRating: 8.1, goodReviews: ["Wide Shoe Range"], badReviews: ["Quality Varies"], improvementSuggestions: ["Improve quality control for shoes"] },
                        "Skechers": { averageRating: 8.6, goodReviews: ["Comfortable Casual Shoes"], badReviews: ["Casual Shoe Design (sometimes bulky)"], improvementSuggestions: ["Refine casual shoe designs"] },
                        "Crocs": { averageRating: 8.0, goodReviews: ["Unique Casual Shoes"], badReviews: ["Style (Crocs)"], improvementSuggestions: ["Expand Crocs style appeal"] },
                        "Liberty": { averageRating: 7.8, goodReviews: ["Affordable Shoes"], badReviews: ["Design (Liberty)"], improvementSuggestions: ["Improve Liberty shoe designs"] },
                        "Relaxo": { averageRating: 7.7, goodReviews: ["Value Footwear"], badReviews: ["Durability (value footwear)"], improvementSuggestions: ["Enhance durability of value footwear"] },
                        "Paragon": { averageRating: 7.5, goodReviews: ["Budget Footwear"], badReviews: ["Design (budget footwear)"], improvementSuggestions: ["Improve designs of budget footwear"] }
                    }
                },
                "Accessories": {
                    brands: {
                        "Fossil": { averageRating: 8.2, goodReviews: ["Fashionable Watches"], badReviews: ["Durability (fashion watches)"], improvementSuggestions: ["Improve durability of fashion watches"] },
                        "Casio": { averageRating: 8.8, goodReviews: ["Reliable Watches"], badReviews: ["Design (Casio - sometimes basic)"], improvementSuggestions: ["Offer more stylish Casio designs"] },
                        "Titan": { averageRating: 8.7, goodReviews: ["Trusted Watch Brand"], badReviews: ["Pricey Premium Watches"], improvementSuggestions: ["More value premium watch options"] },
                        "Fastrack": { averageRating: 8.0, goodReviews: ["Trendy Watches"], badReviews: ["Durability (trendy watches)"], improvementSuggestions: ["Improve durability of trendy watches"] },
                        "Sonata": { averageRating: 7.9, goodReviews: ["Affordable Watches"], badReviews: ["Design (Sonata)"], improvementSuggestions: ["Improve Sonata watch designs"] },
                        "Michael Kors": { averageRating: 8.0, goodReviews: ["Trendy Handbags"], badReviews: ["Pricey Handbags"], improvementSuggestions: ["More affordable handbag options"] },
                        "Baggit": { averageRating: 7.8, goodReviews: ["Affordable Bags"], badReviews: ["Design (Baggit)"], improvementSuggestions: ["Improve Baggit bag designs"] },
                        "American Tourister": { averageRating: 8.4, goodReviews: ["Travel Bags"], badReviews: ["Design (travel bags)"], improvementSuggestions: ["Modernize travel bag designs"] },
                        "Wildcraft": { averageRating: 8.3, goodReviews: ["Outdoor Bags"], badReviews: ["Pricey Outdoor Bags"], improvementSuggestions: ["More value outdoor bags"] },
                        "Lavie": { averageRating: 7.7, goodReviews: ["Stylish Handbags"], badReviews: ["Durability (stylish handbags)"], improvementSuggestions: ["Enhance durability of stylish handbags"] },
                        "Swarovski": { averageRating: 8.6, goodReviews: ["Sparkling Jewellery"], badReviews: ["Pricey Crystal Jewellery"], improvementSuggestions: ["More affordable crystal jewellery"] },
                        "Tanishq": { averageRating: 8.8, goodReviews: ["Trusted Jewellery Brand"], badReviews: ["Pricey Gold Jewellery"], improvementSuggestions: ["More value gold jewellery options"] },
                        "Malabar Gold": { averageRating: 8.7, goodReviews: ["Wide Gold Jewellery Range"], badReviews: ["Gold Jewellery Price"], improvementSuggestions: ["More competitive gold pricing"] },
                        "Voylla": { averageRating: 7.9, goodReviews: ["Trendy Jewellery (Artificial)"], badReviews: ["Durability (artificial jewellery)"], improvementSuggestions: ["Improve durability of artificial jewellery"] },
                        "Bluestone": { averageRating: 8.1, goodReviews: ["Online Jewellery Range"], badReviews: ["Online Jewellery Price"], improvementSuggestions: ["More competitive online jewellery pricing"] }
                    }
                }
            }
        },
        "Beauty & Personal Care": {
            subcategories: {
                "Skincare": {
                    brands: {
                        "L'Oréal": { averageRating: 8.5, goodReviews: ["Wide Skincare Range"], badReviews: ["Ingredient Concerns"], improvementSuggestions: ["More natural ingredients"] },
                        "Neutrogena": { averageRating: 8.3, goodReviews: ["Acne Care"], badReviews: ["Ingredient Concerns (some products)"], improvementSuggestions: ["More natural options for acne care"] },
                        "Mamaearth": { averageRating: 8.6, goodReviews: ["Natural Skincare"], badReviews: ["Pricey Naturals"], improvementSuggestions: ["More affordable natural skincare"] },
                        "Biotique": { averageRating: 8.0, goodReviews: ["Ayurvedic Skincare"], badReviews: ["Efficacy (Ayurvedic claims)"], improvementSuggestions: ["Scientific backing for Ayurvedic claims"] },
                        "Plum": { averageRating: 8.2, goodReviews: ["Vegan Skincare"], badReviews: ["Pricey Vegan"], improvementSuggestions: ["More value vegan skincare"] },
                        "The Body Shop": { averageRating: 8.4, goodReviews: ["Ethical Body Care"], badReviews: ["Pricey Ethical"], improvementSuggestions: ["More affordable ethical body care"] },
                        "Dove": { averageRating: 8.3, goodReviews: ["Gentle Body Care"], badReviews: ["Scent (Dove - sometimes strong)"], improvementSuggestions: ["Unscented options"] },
                        "Nivea": { averageRating: 8.1, goodReviews: ["Moisturizing Body Care"], badReviews: ["Ingredient List (Nivea - sometimes basic)"], improvementSuggestions: ["More natural ingredient options"] },
                        "Himalaya": { averageRating: 7.9, goodReviews: ["Ayurvedic Body Care"], badReviews: ["Efficacy (Ayurvedic body claims)"], improvementSuggestions: ["Scientific backing for Ayurvedic body claims"] },
                        "Lotus Herbals": { averageRating: 7.8, goodReviews: ["Herbal Body Care"], badReviews: ["Efficacy (herbal claims)"], improvementSuggestions: ["Scientific backing for herbal body claims"] }
                    }
                },
                "Cosmetics": {
                    brands: {
                        "Maybelline": { averageRating: 8.2, goodReviews: ["Affordable Makeup"], badReviews: ["Ingredient Concerns (makeup)"], improvementSuggestions: ["More natural makeup options"] },
                        "MAC Cosmetics": { averageRating: 8.7, goodReviews: ["Professional Makeup"], badReviews: ["Pricey Professional Makeup"], improvementSuggestions: ["More value professional makeup"] },
                        "Lakme": { averageRating: 8.4, goodReviews: ["Indian Makeup Brand"], badReviews: ["Ingredient List (Lakme - sometimes basic)"], improvementSuggestions: ["More natural ingredient options"] },
                        "Nykaa Cosmetics": { averageRating: 8.5, goodReviews: ["Trendy Makeup (Indian)"], badReviews: ["Pricey Trendy Makeup"], improvementSuggestions: ["More affordable trendy makeup"] },
                        "Colorbar": { averageRating: 8.3, goodReviews: ["Vibrant Makeup"], badReviews: ["Pricey Vibrant Makeup"], improvementSuggestions: ["More value vibrant makeup options"] }
                    }
                },
                "Fragrances": {
                    brands: {
                        "Dior": { averageRating: 9.0, goodReviews: ["Luxury Fragrances"], badReviews: ["Very Expensive Fragrances"], improvementSuggestions: ["More accessible luxury fragrance lines"] },
                        "Calvin Klein": { averageRating: 8.8, goodReviews: ["Classic Fragrances"], badReviews: ["Pricey Classic Fragrances"], improvementSuggestions: ["More value classic fragrance options"] },
                        "Engage": { averageRating: 8.0, goodReviews: ["Affordable Fragrances (Indian)"], badReviews: ["Longevity (Engage)"], improvementSuggestions: ["Improve fragrance longevity"] },
                        "Skinn by Titan": { averageRating: 8.2, goodReviews: ["Premium Indian Fragrances"], badReviews: ["Pricey Premium Indian Fragrances"], improvementSuggestions: ["More value premium Indian fragrance options"] },
                        "Wild Stone": { averageRating: 7.9, goodReviews: ["Mass-Market Fragrances (Men)"], badReviews: ["Scent Complexity"], improvementSuggestions: ["Improve scent complexity for mass market"] }
                    }
                },
                "Hair Care": {
                    brands: {
                        "Dove": { averageRating: 8.3, goodReviews: ["Gentle Shampoos"], badReviews: ["Heavy Formulas (Dove shampoo)"], improvementSuggestions: ["Lighter shampoo formulas"] },
                        "Pantene": { averageRating: 8.1, goodReviews: ["Wide Shampoo Range"], badReviews: ["Ingredient List (Pantene - sometimes basic)"], improvementSuggestions: ["More natural ingredient options"] },
                        "L'Oréal Paris": { averageRating: 8.6, goodReviews: ["Hair Care Innovation"], badReviews: ["Pricey Hair Care"], improvementSuggestions: ["More affordable hair care lines"] },
                        "Head & Shoulders": { averageRating: 8.4, goodReviews: ["Anti-Dandruff"], badReviews: ["Ingredient List (H&S - strong chemicals)"], improvementSuggestions: ["Gentler anti-dandruff options"] },
                        "Khadi Natural": { averageRating: 7.9, goodReviews: ["Natural Hair Care (Indian)"], badReviews: ["Efficacy (Khadi - hair care)"], improvementSuggestions: ["Improve efficacy of natural hair care"] }
                    }
                },
                "Personal Grooming": {
                    brands: {
                        "Philips": { averageRating: 8.7, goodReviews: ["Shavers Reliability"], badReviews: ["Blade Replacement Cost"], improvementSuggestions: ["Reduce blade replacement cost"] },
                        "Braun": { averageRating: 8.5, goodReviews: ["Precise Trimmers"], badReviews: ["Trimmer Attachments"], improvementSuggestions: ["Improve trimmer attachment system"] },
                        "Syska": { averageRating: 7.8, goodReviews: ["Affordable Grooming"], badReviews: ["Durability (Syska grooming)"], improvementSuggestions: ["Improve durability of grooming products"] },
                        "Vega": { averageRating: 7.6, goodReviews: ["Value Grooming Tools"], badReviews: ["Quality (Vega grooming tools)"], improvementSuggestions: ["Enhance quality of grooming tools"] },
                        "Nova": { averageRating: 7.5, goodReviews: ["Budget Grooming"], badReviews: ["Performance (budget grooming)"], improvementSuggestions: ["Improve performance of budget grooming products"] }
                    }
                }
            }
        },
        "Home & Kitchen": {
            subcategories: {
                "Furniture": {
                    brands: {
                        "IKEA": { averageRating: 8.6, goodReviews: ["Affordable Furniture"], badReviews: ["Assembly Required"], improvementSuggestions: ["Simplify assembly"] },
                        "Godrej Interio": { averageRating: 8.3, goodReviews: ["Trusted Furniture Brand (India)"], badReviews: ["Design (Godrej - sometimes conservative)"], improvementSuggestions: ["Modernize furniture designs"] },
                        "Nilkamal": { averageRating: 7.9, goodReviews: ["Plastic Furniture"], badReviews: ["Style (plastic furniture)"], improvementSuggestions: ["Improve style of plastic furniture"] },
                        "Hometown": { averageRating: 7.5, goodReviews: ["Wide Furniture Range (Retail)"], badReviews: ["Quality Varies (Hometown)"], improvementSuggestions: ["Improve quality control for furniture"] },
                        "Pepperfry": { averageRating: 8.1, goodReviews: ["Online Furniture Range"], badReviews: ["Online Furniture Quality (variable)"], improvementSuggestions: ["Improve quality assurance for online furniture"] },
                        "Wakefit": { averageRating: 8.4, goodReviews: ["Mattresses (Online)"], badReviews: ["Mattress Firmness (online selection)"], improvementSuggestions: ["Better online firmness guidance for mattresses"] },
                        "Sleepwell": { averageRating: 8.3, goodReviews: ["Mattress Brand (India)"], badReviews: ["Pricey Premium Mattresses"], improvementSuggestions: ["More value premium mattress options"] },
                        "Kurl-on": { averageRating: 8.2, goodReviews: ["Mattress Brand (India - Traditional)"], badReviews: ["Design (Kurl-on - traditional)"], improvementSuggestions: ["Modernize mattress designs"] },
                        "Cello": { averageRating: 7.7, goodReviews: ["Plastic Furniture (Cello)"], badReviews: ["Style (Cello plastic furniture)"], improvementSuggestions: ["Improve style of Cello plastic furniture"] },
                        "Supreme": { averageRating: 7.6, goodReviews: ["Plastic Furniture (Supreme)"], badReviews: ["Design (Supreme plastic furniture)"], improvementSuggestions: ["Improve style of Supreme plastic furniture"] }
                    }
                },
                "Kitchen Appliances": {
                    brands: {
                        "Philips": { averageRating: 8.4, goodReviews: ["Reliable Appliances"], badReviews: ["Design (Philips appliances - sometimes basic)"], improvementSuggestions: ["Modernize appliance designs"] },
                        "Prestige": { averageRating: 8.2, goodReviews: ["Trusted Kitchen Brand (India)"], badReviews: ["Design (Prestige - traditional)"], improvementSuggestions: ["Modernize kitchen appliance designs"] },
                        "Bajaj": { averageRating: 8.1, goodReviews: ["Value Appliances"], badReviews: ["Durability (Bajaj appliances - sometimes basic)"], improvementSuggestions: ["Improve durability of appliances"] },
                        "Bosch": { averageRating: 8.8, goodReviews: ["Premium Appliances"], badReviews: ["Pricey Premium Appliances"], improvementSuggestions: ["More value premium appliance options"] },
                        "TTK Prestige": { averageRating: 8.0, goodReviews: ["Traditional Kitchenware (India)"], badReviews: ["Design (TTK - traditional)"], improvementSuggestions: ["Modernize traditional kitchenware designs"] },
                        "Morphy Richards": { averageRating: 8.5, goodReviews: ["Stylish Appliances"], badReviews: ["Pricey Stylish Appliances"], improvementSuggestions: ["More value stylish appliance options"] },
                        "Butterfly": { averageRating: 7.8, goodReviews: ["Affordable Kitchenware (India)"], badReviews: ["Quality (Butterfly - sometimes basic)"], improvementSuggestions: ["Improve quality of kitchenware"] }
                    }
                },
                "Home Décor": {
                    brands: {
                        "D'Decor": { averageRating: 8.1, goodReviews: ["Textile Quality"], badReviews: ["Design (D'Decor - sometimes traditional)"], improvementSuggestions: ["Modernize textile designs"] },
                        "Bombay Dyeing": { averageRating: 7.9, goodReviews: ["Traditional Textiles (India)"], badReviews: ["Design (Bombay Dyeing - traditional)"], improvementSuggestions: ["Modernize textile designs"] },
                        "Raymond Home": { averageRating: 8.0, goodReviews: ["Premium Home Textiles"], badReviews: ["Pricey Premium Textiles"], improvementSuggestions: ["More value premium textile options"] },
                        "Spaces": { averageRating: 7.8, goodReviews: ["Trendy Home Textiles"], badReviews: ["Durability (Spaces textiles - sometimes basic)"], improvementSuggestions: ["Improve durability of textiles"] },
                        "Portico New York": { averageRating: 8.3, goodReviews: ["Stylish Home Textiles (International Style)"], badReviews: ["Pricey Stylish Textiles"], improvementSuggestions: ["More value stylish textile options"] },
                        "Home Centre": { averageRating: 7.9, goodReviews: ["Wide Decor Range (Retail)"], badReviews: ["Quality Varies (Home Centre decor)"], improvementSuggestions: ["Improve quality control for decor items"] },
                        "Chumbak": { averageRating: 8.4, goodReviews: ["Quirky Decor"], badReviews: ["Pricey Quirky Decor"], improvementSuggestions: ["More affordable quirky decor options"] },
                        "ExclusiveLane": { averageRating: 8.2, goodReviews: ["Handicraft Decor (India)"], badReviews: ["Pricey Handicrafts"], improvementSuggestions: ["More value handicraft decor"] },
                        "Ellementry": { averageRating: 8.3, goodReviews: ["Artisan Decor"], badReviews: ["Pricey Artisan Decor"], improvementSuggestions: ["More value artisan decor options"] },
                        "Nestasia": { averageRating: 8.1, goodReviews: ["Modern Decor (Asian Style)"], badReviews: ["Pricey Modern Decor"], improvementSuggestions: ["More value modern decor options"] }
                    }
                }
            }
        },
        "Groceries & Food": {
            subcategories: {
                "Packaged Foods": {
                    brands: {
                        "Nestlé": { averageRating: 8.6, goodReviews: ["Wide Food Range"], badReviews: ["Health Concerns (processed foods)"], improvementSuggestions: ["Healthier options"] },
                        "Cadbury": { averageRating: 8.8, goodReviews: ["Chocolate Brand"], badReviews: ["Health Concerns (sugar)"], improvementSuggestions: ["Lower sugar options"] },
                        "Haldiram's": { averageRating: 8.7, goodReviews: ["Indian Snacks"], badReviews: ["Health Concerns (sodium, fat)"], improvementSuggestions: ["Lower sodium/fat snacks"] },
                        "Britannia": { averageRating: 8.5, goodReviews: ["Biscuit Brand"], badReviews: ["Health Concerns (sugar, refined flour)"], improvementSuggestions: ["Healthier biscuit options"] },
                        "Parle": { averageRating: 8.7, goodReviews: ["Iconic Biscuit Brand"], badReviews: ["Health Concerns (sugar, refined flour - Parle-G)"], improvementSuggestions: ["Healthier Parle-G options"] },
                        "Tata Sampann": { averageRating: 8.2, goodReviews: ["Staples Quality"], badReviews: ["Pricey Staples"], improvementSuggestions: ["More value staple options"] },
                        "Aashirvaad": { averageRating: 8.1, goodReviews: ["Trusted Staples Brand (India)"], badReviews: ["Pricey Aashirvaad Staples"], improvementSuggestions: ["More value Aashirvaad staple options"] },
                        "Saffola": { averageRating: 8.3, goodReviews: ["Health Oils"], badReviews: ["Pricey Health Oils"], improvementSuggestions: ["More affordable health oil options"] },
                        "Fortune": { averageRating: 7.9, goodReviews: ["Cooking Oil Range"], badReviews: ["Oil Quality (Fortune - variable)"], improvementSuggestions: ["Improve oil quality"] },
                        "India Gate": { averageRating: 8.0, goodReviews: ["Basmati Rice Brand"], badReviews: ["Pricey Basmati"], improvementSuggestions: ["More value basmati rice options"] }
                    }
                },
                "Beverages": {
                    brands: {
                        "Coca-Cola": { averageRating: 8.4, goodReviews: ["Soft Drink Icon"], badReviews: ["Health Concerns (sugar - Coke)"], improvementSuggestions: ["Lower sugar soft drinks"] },
                        "PepsiCo": { averageRating: 8.1, goodReviews: ["Wide Beverage Range"], badReviews: ["Health Concerns (sugary drinks - Pepsi)"], improvementSuggestions: ["Healthier beverage options"] },
                        "Thums Up": { averageRating: 8.3, goodReviews: ["Strong Cola Flavor (India)"], badReviews: ["Health Concerns (sugar - Thums Up)"], improvementSuggestions: ["Lower sugar cola options"] },
                        "Limca": { averageRating: 8.0, goodReviews: ["Lime Drink (India)"], badReviews: ["Health Concerns (sugar - Limca)"], improvementSuggestions: ["Lower sugar lime drink options"] },
                        "Frooti": { averageRating: 7.9, goodReviews: ["Mango Drink (India)"], badReviews: ["Health Concerns (sugar - Frooti)"], improvementSuggestions: ["Lower sugar mango drink options"] },
                        "Tata Tea": { averageRating: 8.5, goodReviews: ["Tea Brand (India)"], badReviews: ["Packaging (Tata Tea - less eco-friendly)"], improvementSuggestions: ["Sustainable packaging"] },
                        "Nescafe": { averageRating: 8.7, goodReviews: ["Coffee Brand"], badReviews: ["Instant Coffee (Nescafe)"], improvementSuggestions: ["More premium coffee options"] },
                        "Bru": { averageRating: 8.4, goodReviews: ["Coffee Brand (India)"], badReviews: ["Instant Coffee (Bru)"], improvementSuggestions: ["More premium coffee options"] },
                        "Lipton": { averageRating: 8.2, goodReviews: ["Tea Brand (International)"], badReviews: ["Packaging (Lipton - less eco-friendly)"], improvementSuggestions: ["Sustainable packaging"] },
                        "Wagh Bakri": { averageRating: 8.3, goodReviews: ["Tea Brand (India - Strong Tea)"], badReviews: ["Limited International Recognition"], improvementSuggestions: ["Increase international brand awareness"] }
                    }
                }
            }
        },
        "Books & Media": {
            subcategories: {
                "Books": {
                    brands: {
                        "Penguin Random House": { averageRating: 8.9, goodReviews: ["Fiction Publishing"], badReviews: ["Pricey Books"], improvementSuggestions: ["More affordable books"] },
                        "HarperCollins": { averageRating: 8.7, goodReviews: ["Non-Fiction Publishing"], badReviews: ["Book Discoverability"], improvementSuggestions: ["Improve online book discovery"] },
                        "Rupa Publications": { averageRating: 8.1, goodReviews: ["Indian Literature"], badReviews: ["Book Quality (variable)"], improvementSuggestions: ["Improve book quality control"] },
                        "Westland Publications": { averageRating: 8.3, goodReviews: ["Indian Authors"], badReviews: ["Marketing Reach"], improvementSuggestions: ["Expand marketing reach"] },
                        "Juggernaut Books": { averageRating: 8.2, goodReviews: ["Digital Publishing (India)"], badReviews: ["Digital Book Pricing"], improvementSuggestions: ["More competitive digital book pricing"] },
                        "Manjul Publishing House": { averageRating: 7.9, goodReviews: ["Hindi Publishing"], badReviews: ["Limited English Titles"], improvementSuggestions: ["Expand English titles"] },
                        "Bloomsbury India": { averageRating: 8.4, goodReviews: ["Academic Publishing (India)"], badReviews: ["Academic Book Pricing"], improvementSuggestions: ["More affordable academic books"] },
                        "Aleph Book Company": { averageRating: 8.5, goodReviews: ["Literary Publishing (India)"], badReviews: ["Niche Market"], improvementSuggestions: ["Wider market appeal"] }
                    }
                },
                "Movies & Music (Digital)": {
                    brands: {
                        "Netflix": { averageRating: 9.1, goodReviews: ["Video Streaming Leader"], badReviews: ["Price Increases (Netflix)"], improvementSuggestions: ["Maintain competitive pricing"] },
                        "Amazon Prime Video": { averageRating: 8.9, goodReviews: ["Prime Video Library"], badReviews: ["UI (Prime Video)"], improvementSuggestions: ["Improve UI"] },
                        "Hotstar": { averageRating: 8.6, goodReviews: ["Indian Streaming Content"], badReviews: ["International Content (Hotstar)"], improvementSuggestions: ["Expand international content"] },
                        "SonyLiv": { averageRating: 8.4, goodReviews: ["Sports Streaming (India)"], badReviews: ["Content Library (SonyLiv - beyond sports)"], improvementSuggestions: ["Expand non-sports content"] },
                        "Zee5": { averageRating: 8.3, goodReviews: ["Regional Content (India)"], badReviews: ["Tech Platform (Zee5)"], improvementSuggestions: ["Improve tech platform"] },
                        "Apple Music": { averageRating: 8.7, goodReviews: ["Audio Quality (Apple Music)"], badReviews: ["Discovery (Apple Music)"], improvementSuggestions: ["Improve music discovery"] },
                        "Spotify": { averageRating: 8.9, goodReviews: ["Music Discovery (Spotify)"], badReviews: ["Audio Quality (Spotify - vs Apple Music)"], improvementSuggestions: ["Improve audio quality to match competitors"] }
                    }
                }
            }
        },
        "Baby & Kids": {
            subcategories: {
                "Baby Care": {
                    brands: {
                        "Pampers": { averageRating: 8.8, goodReviews: ["Diaper Absorbency"], badReviews: ["Diaper Price"], improvementSuggestions: ["More affordable diapers"] },
                        "Huggies": { averageRating: 8.6, goodReviews: ["Diaper Comfort"], badReviews: ["Diaper Sustainability"], improvementSuggestions: ["Sustainable diaper options"] },
                        "MamyPoko Pants": { averageRating: 8.5, goodReviews: ["Pants Diapers (India)"], badReviews: ["Diaper Ingredient Concerns"], improvementSuggestions: ["Ingredient transparency for diapers"] },
                        "Supples": { averageRating: 7.9, goodReviews: ["Affordable Diapers (India)"], badReviews: ["Diaper Quality (Supples)"], improvementSuggestions: ["Improve quality of budget diapers"] },
                        "Little's": { averageRating: 7.7, goodReviews: ["Value Diapers (India)"], badReviews: ["Design (Little's diapers)"], improvementSuggestions: ["Improve diaper designs"] },
                        "Nestle Cerelac": { averageRating: 8.6, goodReviews: ["Baby Food Brand"], badReviews: ["Ingredient Concerns (baby food - processed)"], improvementSuggestions: ["More natural baby food options"] },
                        "Gerber": { averageRating: 8.4, goodReviews: ["International Baby Food"], badReviews: ["Pricey Baby Food"], improvementSuggestions: ["More affordable baby food"] },
                        "Farex": { averageRating: 8.0, goodReviews: ["Traditional Baby Food (India)"], badReviews: ["Ingredient List (Farex - sometimes basic)"], improvementSuggestions: ["More natural ingredient options for baby food"] },
                        "Slurrp Farm": { averageRating: 8.2, goodReviews: ["Organic Baby Food (India)"], badReviews: ["Pricey Organic Baby Food"], improvementSuggestions: ["More value organic baby food"] },
                        "Timios": { averageRating: 7.8, goodReviews: ["Snack Baby Food (India)"], badReviews: ["Snack Baby Food (less meal replacement)"], improvementSuggestions: ["More meal replacement baby food options"] },
                        "Mee Mee": { averageRating: 8.1, goodReviews: ["Baby Accessories Range (India)"], badReviews: ["Quality Varies (Mee Mee)"], improvementSuggestions: ["Improve quality control for baby accessories"] },
                        "Chicco": { averageRating: 8.5, goodReviews: ["Trusted Baby Brand"], badReviews: ["Pricey Baby Accessories"], improvementSuggestions: ["More affordable baby accessory options"] },
                        "LuvLap": { averageRating: 7.9, goodReviews: ["Affordable Baby Gear (India)"], badReviews: ["Durability (LuvLap baby gear)"], improvementSuggestions: ["Improve durability of baby gear"] },
                        "R for Rabbit": { averageRating: 8.0, goodReviews: ["Trendy Baby Gear (India)"], badReviews: ["Pricey Trendy Baby Gear"], improvementSuggestions: ["More value trendy baby gear"] },
                        "Fisher-Price": { averageRating: 8.3, goodReviews: ["Educational Baby Toys"], badReviews: ["Pricey Educational Toys"], improvementSuggestions: ["More affordable educational toy options"] }
                    }
                },
                "Toys & Games": {
                    brands: {
                        "Lego": { averageRating: 9.2, goodReviews: ["Creative Toys"], badReviews: ["Pricey Lego"], improvementSuggestions: ["More affordable Lego sets"] },
                        "Mattel": { averageRating: 7.8, goodReviews: ["Iconic Toy Brands"], badReviews: ["Durability (some Mattel toys)"], improvementSuggestions: ["Improve toy durability"] },
                        "Funskool": { averageRating: 8.0, goodReviews: ["Indian Toy Brand"], badReviews: ["Design (Funskool - sometimes basic)"], improvementSuggestions: ["Improve toy designs"] },
                        "Smartivity": { averageRating: 8.4, goodReviews: ["STEM Toys (India)"], badReviews: ["Pricey STEM Toys"], improvementSuggestions: ["More value STEM toy options"] },
                        "Skillmatics": { averageRating: 8.3, goodReviews: ["Educational Games (India)"], badReviews: ["Pricey Educational Games"], improvementSuggestions: ["More affordable educational game options"] },
                        "Hasbro": { averageRating: 8.4, goodReviews: ["Classic Games"], badReviews: ["Pricey Classic Games"], improvementSuggestions: ["More affordable classic game options"] },
                        "Nerf": { averageRating: 8.1, goodReviews: ["Outdoor Toys (Nerf)"], badReviews: ["Durability (Nerf - sometimes)"], improvementSuggestions: ["Improve durability of Nerf toys"] },
                        "Intex": { averageRating: 7.7, goodReviews: ["Inflatable Toys"], badReviews: ["Durability (inflatable toys)"], improvementSuggestions: ["Enhance durability of inflatable toys"] },
                        "Stag": { averageRating: 7.6, goodReviews: ["Sports Equipment (India)"], badReviews: ["Quality (Stag - sometimes basic)"], improvementSuggestions: ["Improve quality of sports equipment"] },
                        "Nivia": { averageRating: 7.5, goodReviews: ["Sports Equipment (India - Value)"], badReviews: ["Design (Nivia sports equipment)"], improvementSuggestions: ["Improve designs of sports equipment"] }
                    }
                }
            }
        },
        "Pet Products": {
            subcategories: {
                "Pet Food": {
                    brands: {
                        "Purina": { averageRating: 8.6, goodReviews: ["Trusted Pet Food"], badReviews: ["Pricey Pet Food (Purina - some lines)"], improvementSuggestions: ["More mid-range pet food lines"] },
                        "Hill's Pet Nutrition": { averageRating: 8.8, goodReviews: ["Veterinarian Recommended"], badReviews: ["Very Expensive Pet Food"], improvementSuggestions: ["More affordable veterinarian-recommended pet food"] },
                        "Pedigree": { averageRating: 8.2, goodReviews: ["Affordable Pet Food"], badReviews: ["Ingredient Quality (Pedigree)"], improvementSuggestions: ["Improve ingredient quality in affordable pet food"] },
                        "Royal Canin": { averageRating: 8.7, goodReviews: ["Specialized Pet Food"], badReviews: ["Pricey Specialized Pet Food"], improvementSuggestions: ["More value specialized pet food"] },
                        "Drools": { averageRating: 7.9, goodReviews: ["Indian Pet Food Brand"], badReviews: ["Brand Recognition (Drools - less international)"], improvementSuggestions: ["Increase international brand recognition"] }
                    }
                },
                "Pet Accessories": {
                    brands: {
                        "Heads Up For Tails": { averageRating: 8.3, goodReviews: ["Stylish Pet Accessories (India)"], badReviews: ["Pricey Stylish Pet Accessories"], improvementSuggestions: ["More affordable stylish pet accessories"] },
                        "Captain Zack": { averageRating: 8.1, goodReviews: ["Pet Grooming (India)"], badReviews: ["Pricey Pet Grooming"], improvementSuggestions: ["More affordable pet grooming options"] },
                        "Trixie": { averageRating: 8.5, goodReviews: ["Wide Pet Accessory Range"], badReviews: ["Pricey Pet Accessories (Trixie)"], improvementSuggestions: ["More value pet accessory options"] },
                        "Kong": { averageRating: 8.7, goodReviews: ["Durable Pet Toys"], badReviews: ["Pricey Durable Pet Toys"], improvementSuggestions: ["More affordable durable pet toy options"] },
                        "DogSpot": { averageRating: 7.8, goodReviews: ["Indian Pet Supply Retailer"], badReviews: ["Price (DogSpot - retail)"], improvementSuggestions: ["More competitive retail pricing"] }
                    }
                }
            }
        },
        "Sports & Outdoors": {
            subcategories: {
                "Sporting Goods": {
                    brands: {
                        "Nike": { averageRating: 8.7, goodReviews: ["Sports Performance Gear"], badReviews: ["Pricey Sports Gear"], improvementSuggestions: ["More affordable sports gear lines"] },
                        "Adidas": { averageRating: 8.5, goodReviews: ["Classic Sportswear"], badReviews: ["High Sportswear Price"], improvementSuggestions: ["More accessible sportswear prices"] },
                        "Decathlon": { averageRating: 9.0, goodReviews: ["Affordable Sports Gear"], badReviews: ["Quality (Decathlon - sometimes less than top brands)"], improvementSuggestions: ["Improve quality in some lines"] },
                        "Puma": { averageRating: 8.0, goodReviews: ["Trendy Sportswear"], badReviews: ["Quality Consistency (sportswear)"], improvementSuggestions: ["Improve quality consistency of sportswear"] },
                        "Reebok": { averageRating: 8.2, goodReviews: ["Fitness Gear"], badReviews: ["Brand Recognition (Reebok - less than Nike/Adidas)"], improvementSuggestions: ["Increase brand awareness"] },
                        "Cosco": { averageRating: 7.9, goodReviews: ["Sports Equipment (India)"], badReviews: ["Design (Cosco sports equipment)"], improvementSuggestions: ["Improve designs of sports equipment"] },
                        "SS": { averageRating: 7.7, goodReviews: ["Cricket Equipment (India)"], badReviews: ["Quality (SS - sometimes variable)"], improvementSuggestions: ["Improve quality control for cricket equipment"] },
                        "SG": { averageRating: 7.6, goodReviews: ["Cricket Bats (India)"], badReviews: ["Price (SG cricket bats - premium)"], improvementSuggestions: ["More value cricket bat options"] },
                        "Nivia": { averageRating: 7.5, goodReviews: ["Value Sports Equipment (India)"], badReviews: ["Durability (Nivia sports equipment - sometimes basic)"], improvementSuggestions: ["Enhance durability of sports equipment"] }
                    }
                },
                "Outdoor Equipment": {
                    brands: {
                        "Decathlon": { averageRating: 9.0, goodReviews: ["Affordable Outdoor Gear"], badReviews: ["Quality (Decathlon outdoor - sometimes less than top brands)"], improvementSuggestions: ["Improve quality in some outdoor lines"] },
                        "Wildcraft": { averageRating: 8.3, goodReviews: ["Outdoor Gear Brand (India)"], badReviews: ["Pricey Outdoor Gear (Wildcraft)"], improvementSuggestions: ["More value outdoor gear options"] },
                        "Quechua": { averageRating: 8.4, goodReviews: ["Camping Gear (Decathlon Brand)"], badReviews: ["Design (Quechua - functional but basic)"], improvementSuggestions: ["Improve designs of camping gear"] },
                        "Columbia": { averageRating: 8.6, goodReviews: ["Outdoor Apparel"], badReviews: ["Pricey Outdoor Apparel"], improvementSuggestions: ["More affordable outdoor apparel lines"] },
                        "The North Face": { averageRating: 8.8, goodReviews: ["Premium Outdoor Gear"], badReviews: ["Very Expensive Outdoor Gear"], improvementSuggestions: ["More accessible premium outdoor gear lines"] },
                        "Coleman": { averageRating: 8.1, goodReviews: ["Camping Equipment (Coleman)"], badReviews: ["Durability (Coleman - mid-range)"], improvementSuggestions: ["Improve durability of camping equipment"] },
                        "Intex": { averageRating: 7.7, goodReviews: ["Inflatable Outdoor Gear"], badReviews: ["Durability (inflatable outdoor gear)"], improvementSuggestions: ["Enhance durability of inflatable outdoor gear"] },
                        "Stag": { averageRating: 7.6, goodReviews: ["Sports Equipment (India - Outdoor)"], badReviews: ["Quality (Stag outdoor equipment - sometimes basic)"], improvementSuggestions: ["Improve quality of outdoor sports equipment"] }
                    }
                }
            }
        }
        // ... (Add more categories and subcategories as needed)
    };

    // --- Get DOM Elements ---
    const categorySelect = document.getElementById('category-select');
    const subcategorySelect = document.getElementById('subcategory-select');
    const brandSelect = document.getElementById('brand-select');
    const analyzeButton = document.getElementById('analyze-button');
    const analysisResultsDiv = document.getElementById('analysis-results');
    const noDataMessageDiv = document.getElementById('no-data-message');
    const selectedBrandNameSpan = document.getElementById('selected-brand-name');
    const averageRatingValueSpan = document.getElementById('average-rating-value');
    const goodReviewsListUl = document.getElementById('good-reviews-list');
    const badReviewsListUl = document.getElementById('bad-reviews-list');
    const improvementListUl = document.getElementById('improvement-list');

    // --- Function to Populate Subcategory Dropdown based on Category ---
    function populateSubcategories() {
        const selectedCategory = categorySelect.value;
        subcategorySelect.innerHTML = '<option value="">-- Select Subcategory --</option>'; // Reset subcategory options
        subcategorySelect.disabled = true; // Disable subcategory dropdown initially
        brandSelect.innerHTML = '<option value="">-- Select Brand --</option>'; // Reset brand options
        brandSelect.disabled = true; // Disable brand dropdown initially
        analyzeButton.disabled = true; // Disable Analyze button initially

        if (selectedCategory && categoryData[selectedCategory] && categoryData[selectedCategory].subcategories) {
            subcategorySelect.disabled = false; // Enable subcategory dropdown
            for (const subcategoryName in categoryData[selectedCategory].subcategories) {
                const option = document.createElement('option');
                option.value = subcategoryName;
                option.textContent = subcategoryName;
                subcategorySelect.appendChild(option);
            }
        }
    }

    // --- Function to Populate Brand Dropdown based on Subcategory ---
    function populateBrands() {
        const selectedCategory = categorySelect.value;
        const selectedSubcategory = subcategorySelect.value;
        brandSelect.innerHTML = '<option value="">-- Select Brand --</option>'; // Reset brand options
        brandSelect.disabled = true; // Disable brand dropdown initially
        analyzeButton.disabled = true; // Disable Analyze button initially

        if (selectedCategory && selectedSubcategory && categoryData[selectedCategory].subcategories[selectedSubcategory] && categoryData[selectedCategory].subcategories[selectedSubcategory].brands) {
            brandSelect.disabled = false; // Enable brand dropdown
            for (const brandName in categoryData[selectedCategory].subcategories[selectedSubcategory].brands) {
                const option = document.createElement('option');
                option.value = brandName;
                option.textContent = brandName;
                brandSelect.appendChild(option);
            }
        }
    }

    // --- Event Listener for Category Change ---
    categorySelect.addEventListener('change', populateSubcategories);

    // --- Event Listener for Subcategory Change ---
    subcategorySelect.addEventListener('change', populateBrands);

    // --- Event Listener for Brand Change ---
    brandSelect.addEventListener('change', function() {
        analyzeButton.disabled = !brandSelect.value; // Enable Analyze button only if a brand is selected
    });

    // --- Event Listener for Analyze Button Click ---
    analyzeButton.addEventListener('click', function() {
        const selectedCategory = categorySelect.value;
        const selectedSubcategory = subcategorySelect.value;
        const selectedBrand = brandSelect.value;

        analysisResultsDiv.style.display = 'none'; // Hide results initially
        noDataMessageDiv.style.display = 'none';   // Hide no data message initially
        goodReviewsListUl.innerHTML = '';          // Clear previous lists
        badReviewsListUl.innerHTML = '';
        improvementListUl.innerHTML = '';

        if (categoryData[selectedCategory] && categoryData[selectedCategory].subcategories[selectedSubcategory] && categoryData[selectedCategory].subcategories[selectedSubcategory].brands[selectedBrand]) {
            const brandAnalysis = categoryData[selectedCategory].subcategories[selectedSubcategory].brands[selectedBrand];

            selectedBrandNameSpan.textContent = selectedBrand;
            averageRatingValueSpan.textContent = brandAnalysis.averageRating.toFixed(1); // Display rating with 1 decimal

            brandAnalysis.goodReviews.forEach(review => {
                const li = document.createElement('li');
                li.textContent = review;
                goodReviewsListUl.appendChild(li);
            });

            brandAnalysis.badReviews.forEach(review => {
                const li = document.createElement('li');
                li.textContent = review;
                badReviewsListUl.appendChild(li);
            });

            brandAnalysis.improvementSuggestions.forEach(suggestion => {
                const li = document.createElement('li');
                li.textContent = suggestion;
                improvementListUl.appendChild(li);
            });

            analysisResultsDiv.style.display = 'block'; // Show results section
        } else {
            noDataMessageDiv.style.display = 'block'; // Show "No data" message
        }
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        // Store dark mode preference in localStorage (optional, for persistence)
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // Event listener for dark mode toggle button
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Check for dark mode preference in localStorage on page load (optional persistence)
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});