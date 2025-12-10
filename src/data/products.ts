export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description?: string;
  count?: number;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  products: string[];
  description: string;
}

export const categories: Category[] = [
  {
    id: "abrasives",
    name: "Abrasives",
    count: 3359,
    description: "Complete range of abrasive tools and materials for grinding, cutting, and finishing applications.",
    products: [
      "Abrasive Cloth Rolls", "Abrasive Flap Disc", "Abrasive Paper Rolls", "Control Wheels", 
      "Finish Sticks", "Sand Paper Sheets", "Slitting Saws", "Wood and Marble Cutting Wheels", 
      "Abrasive Tools", "Abrasive Cloth Sheets", "Abrasive Flap Wheels", "Bench Wheels", 
      "Cut-Off Wheels", "Flexible Grinding Discs", "Saw Gumming / 'C' Face Wheels", 
      "Taper Edge Wheels", "Abrasive Belts For Sanders", "Abrasive Cut-Off Wheels", 
      "Abrasive Non-Woven Discs", "Brown Aluminium Oxide Wheels", "Diamond Lapping Paste", 
      "Mounted Points", "Sharpening Stones", "Toolroom Wheels", "Abrasive Chopsaw", 
      "Abrasive Depressed Center Discs", "Abrasive Non-Woven Hand Pads", "Circular Saw Adda", 
      "Dressers & Cutters", "Oil Stone", "Silicon Carbide Wheels", "Wet/Dry Sheet", 
      "Abrasive Cloth Narrow Belts", "Abrasive Fibre Disc", "Abrasive Non-Woven Unified Polishing Wheels", 
      "Contact Wheels", "Emery Paste", "Resin Bond Diamond Wheel", "Single Point Diamond Dressers", "White Wheel"
    ]
  },
  {
    id: "adhesives-sealants",
    name: "Adhesives & Sealants", 
    count: 3893,
    description: "Comprehensive selection of adhesives, sealants, and surface preparation materials.",
    products: [
      "Tapes", "Plaster Boards & Plasters", "Gasketing Compounds", "Rubber & Contact Adhesives", 
      "Surface Preparation", "Threadlockers", "Sealants", "Adhesive Activators", 
      "Primers & Debonders", "Glue spreader Roller", "Sealant Spray", "Surface Preparation sealants", 
      "Waterproofing", "Adhesives & Glues", "Cements Concrete & Asphalts", "Jointing Sheets", 
      "Self Adhesives Protective Products", "Synthetic Resin Adhesives", "Wood Preservative", 
      "Paints", "Chemical Fixing And Mortars", "Packaging Tapes", "Special Paper", 
      "Tapcrete And Thermoseal", "Adhesive, Sealant & Tape Dispensers", "Cyanoacrylate Adhesives", 
      "Retaining Compounds", "Stationary accessories", "Thread Sealants"
    ]
  },
  {
    id: "automotive-mro",
    name: "Automotive MRO & Accessories",
    count: 22165,
    description: "Extensive automotive maintenance, repair, and operational supplies for vehicles.",
    products: [
      "Engine Spares And Parts", "Automobile Electronics", "Tyres & Wheels", "Auto Body Parts", 
      "Car Care", "Automobile Electricals", "Vehicle Tools", "Automotive Cleaning & Detailing", 
      "Automotive Bearings", "Clutch Plate", "Auto Replacement", "Automotive Exterior", 
      "Motorcycle Accessories", "Automotive Lubricants", "Gear Oils", "Automobile Oil & Lubricants", 
      "Motorcycle Parts", "Motorcycle Electrical System", "Automotive Maintenance", "Vehicle Equipment", 
      "Automotive Interior", "Automobile Accessories", "Motorcycle Engine", "Car Ac Compressor"
    ]
  },
  {
    id: "bearings",
    name: "Bearings",
    count: 20714,
    description: "Wide range of precision bearings for industrial and automotive applications.",
    products: [
      "Bearings Accessories", "Miniature Ball Bearings", "Self-Aligning Ball Bearings", 
      "Thrust Roller Bearings", "Angular Contact Ball Bearings", "Needle Roller Bearings", 
      "Special Bearing", "Universal Joint Cross Bearing", "Cylindrical Roller Bearings", 
      "Pillow Block Bearing", "Spherical Roller Bearings", "Deep Groove Ball Bearings", 
      "Plastic Bearings", "Tapered Roller Bearings", "Drac Hub Bearing", "Radial Ball Bearing", 
      "Thrust Ball Bearings"
    ]
  },
  {
    id: "cleaning",
    name: "Cleaning",
    count: 2734,
    description: "Professional cleaning supplies and equipment for industrial and commercial use.",
    products: [
      "Acetone", "Brooms, Brushes, and Dust Pans", "Janitorial Carts and Supply Holders", "Absorbents", 
      "Filter bags", "Kitchen Care", "Room Care", "Sweepers", "Dust Mops, Dusters, and Cleaning Pads", 
      "Paper & Cloth Wipes", "Accessories", "Garbage Bag", "Laundry care", "Shoe Shine Machine", 
      "Water Softening & Treatment", "Equipments", "Waste & Recycling", "Cleaner & Polish", 
      "Hand Dryers", "Micro Fiber Cloth", "Sign Boards", "Windows & Glass Cleaning Tools", 
      "Wet Mops, Squeegees, And Buckets", "Paint, Wire & Wire Cup Brushes", "Cleaning Liquids", 
      "Home & Car Washer", "Odor Care", "Spill Kits", "Wipers", "Vacuum Cleaners & Accessories", 
      "Restroom Supplies", "Dispenser", "Industrial Cleaners", "Personal Care", "Surface Care"
    ]
  },
  {
    id: "cutting-tools",
    name: "Cutting Tools",
    count: 38553,
    description: "Professional cutting tools and machining accessories for precision work.",
    products: [
      "Chucks", "Cutting Blades", "Reamers", "Carbide Drills", "Boring Heads And Sets", 
      "Masonry Drills", "Standard Carbide Burrs", "Taps", "Holesaws", "Hammer Drill Bits and Chisels", 
      "Carbide End Mills", "Solid Carbide Ball Nose Endmills", "Collets And Adaptors", "End Mills", 
      "Toolbit", "Machine Accessories", "Diamond Core Drills", "Tungsten Carbide Tipped Tools", 
      "Indexable Tool Holders", "Dies", "Annular Cutter", "Drill Bit Sharpener", "Milling Cutter", 
      "Drills", "Inserts & Carrier Bodies", "Bimetal bandsaw blades", "Jewellery Tools"
    ]
  },
  {
    id: "electricals",
    name: "Electricals",
    count: 23761,
    description: "Complete electrical components and systems for industrial and commercial applications.",
    products: [
      "Switchgear & Protection", "Wire Connector & Terminals", "Air Conditioning Units", 
      "Conduit and Accessories", "Cable Accessories", "Extension cord & Power Strip", 
      "Industrial Plugs Sockets And Connectors", "PVC Insulation Tape", "Stabilizer", 
      "Transformer", "Switches & wiring Accessories", "Junction Boxes", "Cable Entry System", 
      "Batteries", "Cable Drums", "Fuse Mountable Kit", "Insulators", "Poles and Accessories", 
      "Surge or Lightning Arresters", "Wall Cable Clips", "Cables And Wires", 
      "Industrial Button & Switches", "Electrician Tools", "Bus Bar Chamber System", 
      "Cable Route Marker", "Heat Shrink", "Inverter & Ups", "Rectifier Cards", 
      "Switch Disconnector", "Fans", "Changeover Switches", "Air Conditioners", 
      "Flameproof Electrical Devices", "Cable Ties", "Heat Transfer Machines", 
      "Leakage Detector", "Shunt", "Switch Disconnector Fuse", "Distribution Board", 
      "Electrical Appliances", "Power Generation", "AMF Panel", "Current Transformer (CT)", 
      "Industrial & Domestic Air Cooler", "PVC Cable Duct", "Spares & Accessories", "Terminal Blocks"
    ]
  },
  {
    id: "electronics",
    name: "Electronics",
    count: 26143,
    description: "Electronic components and modules for various industrial applications.",
    products: [
      "Connecting Headers", "Modules", "Terminals and Terminal", "Connector Components", 
      "Displays", "Motors", "Relay & Accessories", "Transistor", "Adapter", 
      "Connector Tools And Accessories", "Resistors", "Transmitter & Receiver", 
      "Batteries", "Connectors & Cables", "Sensors", "Capacitors", "Switches"
    ]
  },
  {
    id: "fasteners",
    name: "Fasteners",
    count: 26280,
    description: "Comprehensive range of fastening solutions for all industrial needs.",
    products: [
      "Nuts", "Clamps", "Cylindrical Pins", "Components", "Rivets", "Washers", "Anchors", 
      "Nailer & Stapler Accessories", "Dowel Pin", "Set Screws", "Screws", "Pins", "E-Clips", 
      "Setting Tools", "Bolts", "Assortments And Kits", "Hex Wrench Sets", "Taper Pins", 
      "Sockets", "Circlip", "Hexagon Wrenches", "Threaded Rod", "Industrial Fasteners"
    ]
  },
  {
    id: "hand-tools",
    name: "Hand Tools",
    count: 22433,
    description: "Professional hand tools for maintenance, repair, and assembly operations.",
    products: [
      "Clamping and Positioning", "Non Sparking Tools", "Tool Storage & Organizer", "Benders", 
      "Hammer & Hand Tackers", "Pincers", "Screwdriver Bits", "Pliers", "Spanners", 
      "Allen Key & Torx Key", "Chisels", "Hand Drill", "Punches", "Tool Set", "Wrenches", 
      "Cutting Tools", "Crimping Tools & Pliers", "Cold Chisels", "Handles Joints And Bars", 
      "Ratchet Pipe Threader", "Trim Bits", "Magnetic Products", "Hammers", 
      "Screwdriver & Nut Driver", "Glue Gun", "Hydraulic Bottle Jack", "Riveter", 
      "Tweezers", "Tool Kits Sets & Storage", "Puller & Scrapper", "Socket Sets and Accessories", 
      "Grease Gun", "Packing Tools", "Saws"
    ]
  },
  {
    id: "hospitality",
    name: "Hospitality",
    count: 4588,
    description: "Hotel and hospitality equipment, furniture, and supplies.",
    products: [
      "Food Wrapping Paper", "Tea Coffee & Beverages", "Food Service Appliances and Equipment", 
      "Kitchen Appliances", "Garden & Outdoor Furnitures", "Wardrobe & Almirah", 
      "Hardware & Furniture Fixing", "Bedsheets & Mattresses", "Humidifier & Dehumidifier", 
      "Water Dispensers", "Bed Bath And Table Linens", "Dishwashers", "Pillows", "Purifiers", 
      "Food Service Storage and Transportation", "Swimming Pool Equipments and Accessories"
    ]
  },
  {
    id: "hydraulics",
    name: "Hydraulics",
    count: 4939,
    description: "Hydraulic systems, components, and accessories for industrial applications.",
    products: [
      "Hydraulic Valves", "Hydraulic Accumulators", "Hydraulic Breather", "Hydraulic Hacksaw Machine", 
      "Hydraulic Power Pack", "Hydraulic Reel", "Water Meter", "Hydraulic Pumps", "Dump Truck Control Valve", 
      "Hydraulic Coupler", "Hydraulic Hand Pump", "Hydraulic Press", "Hydraulic Shock Absorber", 
      "Hydraulic Filters", "Hydraulic Air Fan", "Hydraulic Crimping Tool", "Hydraulic Hoses", 
      "Hydraulic Press Brake", "Hydro Control Valve", "Hydraulic Jack", "Hydraulic Bar Cutter", 
      "Hydraulic Cylinder", "Hydraulic Industrial Filtration System", "Hydraulic Pressure Switch", 
      "Mobile Control", "Hydraulics Special Product", "Hydraulic Bending Machine", 
      "Hydraulic Die Clamping System", "Hydraulic Motors", "Hydraulic Punch Press", "Tapping Machine"
    ]
  },
  {
    id: "industrial-automation",
    name: "Industrial Automation",
    count: 9482,
    description: "Automation equipment, sensors, and control systems for industrial processes.",
    products: [
      "Push Button & Accessories", "Digital Counters", "Human Machine Interface (HMI)", 
      "Light Curtain or Area Sensors", "PLC Expansion Cards & Accessories", 
      "Programmable Logic controllers (PLC)", "Sensor Controller & Operating Unit", 
      "Temperature Scanner", "Water Over-Flow Sensor", "Contactors & its Accessories", 
      "Earth Leakage Relays & Accessories", "Industrial RO Controller", "Limit Switches", 
      "PhotoSensors", "Proximity Sensors & its Connectors", "Socket For Relays & Timers", 
      "Temperature or PID Controllers", "Ac Controller", "Encoders", "Insulating Mats", 
      "Linear Guide", "Position Transducers", "Relay Cards", "Solid State Relays & Modules", 
      "Time Switch", "Alarm Annunciator", "Flow Sensor (Switch)", "Latching Relay & Its Accessories", 
      "Magnetic Cylinder Sensor", "Power Controller", "Relays", "Switched Mode Power Supply", 
      "Timers", "Current Sensor", "Gas Sensor", "Level Sensor or Controller", 
      "Overload Protection Relay and Accessories", "Pressure Sensor", "Rotating & Flashing Lights", 
      "Temperature Indicators", "Tower Lights & Accessories"
    ]
  },
  {
    id: "it-consumables",
    name: "IT Consumables",
    count: 6498,
    description: "Computer hardware, accessories, and IT infrastructure components.",
    products: [
      "Network Components", "Camera accessories", "Mobile", "Cabinet", "Conference Phones", 
      "Electronic Aerosol", "Label Printer", "Laptops", "POS Terminals", "Scanner", "Tablets", 
      "Mobile Accessories", "Digital Accessories", "Tablet Accessories", "Card Printer", 
      "Controller", "Fingerprint Scanner", "Landline Phone", "Monitors", "Pen Drive", "Servers", 
      "UPS", "Projectors And Accessories", "Headphones", "3D Printer & Accessories", "Card Reader", 
      "Desksets Combo", "Hdd Cases", "Laptop Batteries", "Mouse", "Plug And Sockets", 
      "Solid State Drive", "Usb Hubs", "Network Accessories", "Label Printers Accessories", 
      "Bags & Sleeves", "Cash Drawer", "Desktop", "Hard Disks", "Laptop Power Adapter", 
      "Multimedia Player", "Power Supply", "Spike Busters & Surge Protectors", "Webcam", 
      "Speakers", "Laptop series", "Blank Media", "Cleaning Kits", "Docking Station", 
      "Keyboard", "Laptop cooling pads/stands", "Network Attached Storage", "Ram", "TV TUNER"
    ]
  },
  {
    id: "safety",
    name: "Safety",
    count: 5417,
    description: "Personal protective equipment and workplace safety solutions.",
    products: [
      "Safety Gloves", "Fall Protection", "Hearing Protection", "Convex Mirrors", "Safety Goggles", 
      "Fire Extinguishers", "Fire Protection", "Safety Helmets", "Emergency Eyewash and Shower Equipment", 
      "Safety Shoes", "Respiratory Protection", "Public Address Systems", "Face Protection", 
      "Gas Detector", "Safety Signages", "Road Safety Equipments", "Anti-Static & Esd Equipment", 
      "First Aid", "Industrial Workwear", "Smoke Detector", "Lockout Tagout (LOTO)", 
      "Fire Alarm Systems", "Warning Lights", "Reflective Jackets"
    ]
  },
  // Adding remaining major categories
  {
    id: "paints-coatings",
    name: "Paints & Coatings",
    count: 94200,
    description: "Industrial paints, coatings, chemicals, and surface protection materials.",
    products: ["Chemicals", "Painting Tools", "Paints", "Surface Protection & Additives"]
  },
  {
    id: "plumbing", 
    name: "Plumbing",
    count: 20154,
    description: "Plumbing supplies, pipes, fittings, and bathroom accessories.",
    products: [
      "CPVC Pipes & Fittings", "Faucets", "Flush Valve", "Strainers", "Valves", 
      "Plumbing Accessories", "Gasket", "Vent Cowl", "Metal Fittings", "Kitchen Accessories", 
      "Geyser Spares", "W C Connector", "Pp-R Pipes And Fittings", "Bathroom Accessories", 
      "Reducer", "Hoses", "Butterfly Valve", "Showers"
    ]
  },
  {
    id: "pneumatics",
    name: "Pneumatics", 
    count: 20330,
    description: "Pneumatic systems, air tools, and compressed air equipment.",
    products: [
      "Pneumatic Control Valve", "Pneumatic Fitting", "Vacuum", "Air Motor", "MAL and CDJ2B Cylinders", 
      "Pneumatic Dispensers", "Pneumatics Filter Regulator", "Quick Release Coupling", 
      "Wika Ammonia Gauge", "Pneumatic Tool", "Special Solenoid Valve", "Special Purpose Valve", 
      "Die Grinders", "Moisture Separator", "Pneumatic Grease Pump", 
      "Pneumatics Proportional Pressure Control Valve", "Ratchet Wrenches", 
      "Wika Commercial Bourdon Tube Pressure Gauge", "Pneumatic Cylinder", "Spray Gun & Air Gun", 
      "Air Composite Pneumatic", "Hose Reel", "Pneumatic Actuators", "Pneumatic Nailers & Staplers", 
      "Pneumatic Vibrator", "Saw & Hammer", "Air Compressors", "Couplers", "Air Hammers", 
      "Impact Wrench", "Pneumatic Angle Grinder", "Pneumatic Press", "Pressure Sensor", 
      "Spring Balancers", "Air Treatment", "Pneumatic Tubing & Accessories", "Air Line Hoses", 
      "Industrial Pneumatic Filter & Accessories", "Pneumatic Buffing Machine", 
      "Pneumatic Tool Accessories", "Pressure Switches", "Vacuum Pumps"
    ]
  },
  {
    id: "welding",
    name: "Welding",
    count: 3204,
    description: "Welding equipment, consumables, and accessories for metal fabrication.",
    products: [
      "Gas Cutting Accessories", "Flame Arrestors", "Gouging Rectifier", "Welding Accessories", 
      "Gas Adapters", "Non Return Valve", "Welding Electrodes", "Gas Filter", "Tig Rod", 
      "Welding Machine", "Gas Pressure Regulator", "Welding Wire", "Gas Valve"
    ]
  },
  {
    id: "motors",
    name: "Motors",
    count: 4484,
    description: "Electric motors and motor accessories for industrial applications.",
    products: [
      "Flame Proof Motors", "Single Phase Motor", "Special Purpose Motor", "Crane Duty and Brake Motors", 
      "Geared Motor", "Vibration Motors", "Hvac Motor", "General Purpose Motor", "Dc Motors", 
      "Motor Starter", "Motor Spares & Accessories", "Servo Motor"
    ]
  }
];

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return [];
  
  const results: Product[] = [];
  const searchTerm = query.toLowerCase();
  
  categories.forEach(category => {
    category.products.forEach((product, index) => {
      if (product.toLowerCase().includes(searchTerm) || 
          category.name.toLowerCase().includes(searchTerm)) {
        results.push({
          id: `${category.id}-${index}`,
          name: product,
          category: category.name,
          description: `Professional ${product.toLowerCase()} for industrial applications`
        });
      }
    });
  });
  
  return results.slice(0, 50); // Limit results
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};