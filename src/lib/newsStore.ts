// News data store with localStorage persistence

export interface NewsContentBlock {
  type: 'paragraph' | 'heading' | 'list';
  text?: string;
  items?: string[];
}

export interface NewsArticle {
  id: number;
  date: string;
  title: string;
  image: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  content: NewsContentBlock[];
}

const STORAGE_KEY = 'gic_news_articles';
const STORAGE_VERSION = 'v2';
const VERSION_KEY = 'gic_news_version';

const defaultArticles: NewsArticle[] = [
  {
    id: 1,
    date: '19 August 2025',
    title: 'Engineering Excellence: A Smart Solution for Modern Projects',
    image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D',
    excerpt: 'Discover how our innovative engineering approaches are transforming complex industrial challenges into streamlined, cost-effective solutions.',
    category: 'Engineering',
    readTime: '5 min read',
    author: 'GIC Engineering Team',
    content: [
      { type: 'paragraph', text: 'In today\'s rapidly evolving industrial landscape, engineering excellence is no longer just about technical proficiency—it\'s about delivering intelligent solutions that address complex challenges while optimizing cost, time, and resources. At GIC Oil & Gas Services Limited, we have consistently demonstrated our commitment to engineering innovation that drives measurable results for our clients.' },
      { type: 'heading', text: 'The Challenge of Modern Industrial Projects' },
      { type: 'paragraph', text: 'Modern oil and gas projects face unprecedented challenges: stringent environmental regulations, volatile market conditions, aging infrastructure, and the need for rapid deployment. Traditional engineering approaches often struggle to adapt to these dynamic requirements, resulting in cost overruns, schedule delays, and compromised safety standards.' },
      { type: 'paragraph', text: 'Our engineering team recognized that a paradigm shift was necessary. We needed to move beyond conventional methodologies and embrace a holistic, technology-enabled approach that could anticipate challenges before they materialized and adapt solutions in real-time.' },
      { type: 'heading', text: 'Our Smart Engineering Approach' },
      { type: 'paragraph', text: 'Our smart engineering solutions integrate advanced modeling techniques, predictive analytics, and collaborative digital platforms to create a comprehensive project ecosystem. Key elements include:' },
      { type: 'list', items: ['Digital twin technology for real-time project visualization and simulation', 'AI-powered risk assessment and mitigation strategies', 'Integrated design and construction planning using BIM (Building Information Modeling)', 'Sustainable engineering practices that minimize environmental impact', 'Modular design approaches that reduce construction time by up to 30%'] },
      { type: 'heading', text: 'Real-World Impact' },
      { type: 'paragraph', text: 'A recent offshore platform modernization project exemplifies our approach. By implementing digital twin simulations, we identified potential structural weaknesses before construction began, saving our client over $2.3 million in remediation costs and reducing the project timeline by 12 weeks.' },
      { type: 'paragraph', text: 'Our engineering team worked collaboratively with procurement, construction, and commissioning teams to ensure seamless execution. The result: a project delivered 8% under budget and three weeks ahead of schedule, with zero safety incidents.' },
      { type: 'heading', text: 'Looking Forward' },
      { type: 'paragraph', text: 'As we continue to invest in advanced engineering capabilities, we remain committed to delivering solutions that not only meet current needs but anticipate future challenges. Our engineering excellence is built on a foundation of continuous learning, technological innovation, and unwavering commitment to our clients\' success.' }
    ]
  },
  {
    id: 2,
    date: '19 August 2025',
    title: 'Affordable EPC Solutions Now Within Reach',
    image: 'https://plus.unsplash.com/premium_photo-1661963032306-91ef5261511d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5naW5lZXJpbmclMjBvcGVyYXRpb25zfGVufDB8fDB8fHww',
    excerpt: 'Learn about our comprehensive EPC services that deliver exceptional value without compromising on quality or safety standards.',
    category: 'EPC Solutions',
    readTime: '6 min read',
    author: 'GIC Project Management',
    content: [
      { type: 'paragraph', text: 'Engineering, Procurement, and Construction (EPC) projects have traditionally been associated with substantial capital investment and extended timelines. However, GIC Oil & Gas Services Limited is revolutionizing the EPC landscape by delivering comprehensive solutions that maintain the highest quality standards while significantly reducing costs and accelerating project delivery.' },
      { type: 'heading', text: 'The Traditional EPC Challenge' },
      { type: 'paragraph', text: 'Historically, EPC projects have suffered from several pain points: fragmented workflows between engineering, procurement, and construction teams; inefficient resource allocation; extended lead times for specialized equipment; and unpredictable cost escalations. These challenges have made EPC solutions appear out of reach for many mid-sized operators.' },
      { type: 'heading', text: 'Our Integrated Approach' },
      { type: 'paragraph', text: 'We\'ve developed an integrated EPC methodology that breaks down traditional silos and creates a unified project delivery framework. Our approach includes:' },
      { type: 'list', items: ['Concurrent engineering and procurement planning to eliminate waiting periods', 'Strategic supplier partnerships that guarantee competitive pricing and reliable delivery', 'Prefabrication and modular construction techniques that reduce on-site work by 40%', 'Risk-sharing commercial models that align our success with client outcomes', 'Value engineering workshops that identify cost optimization opportunities without compromising quality'] },
      { type: 'heading', text: 'Cost Optimization Without Compromise' },
      { type: 'paragraph', text: 'Our recent gas processing facility project demonstrates the power of our approach. By optimizing the procurement sequence and implementing modular construction, we delivered a turnkey facility for 23% less than the initial estimate, while maintaining ISO 9001 quality standards and achieving commissioning two months ahead of schedule.' },
      { type: 'paragraph', text: 'We achieved these results through meticulous planning, strategic sourcing, and leveraging our extensive network of pre-qualified suppliers and subcontractors. Our procurement team negotiated volume discounts and favorable payment terms that translated directly into client savings.' },
      { type: 'heading', text: 'Making EPC Accessible' },
      { type: 'paragraph', text: 'Today, our affordable EPC solutions are accessible to a broader range of clients, from independent operators to established multinationals. We offer flexible commercial structures, including fixed-price turnkey contracts, cost-plus arrangements, and hybrid models that distribute risk appropriately.' },
      { type: 'paragraph', text: 'Our commitment is clear: delivering exceptional EPC value that empowers our clients to execute their projects with confidence, knowing they have a partner dedicated to quality, safety, and fiscal responsibility.' }
    ]
  },
  {
    id: 3,
    date: '19 August 2025',
    title: 'How Engineering Innovation Shapes a Sustainable Future',
    image: 'https://images.unsplash.com/photo-1515344905723-babc01aac23d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1c3RhaW5hYmlsaXR5fGVufDB8fDB8fHww',
    excerpt: 'Explore our commitment to sustainable practices and how we integrate environmental responsibility into every project phase.',
    category: 'Sustainability',
    readTime: '7 min read',
    author: 'GIC Sustainability Team',
    content: [
      { type: 'paragraph', text: 'The oil and gas industry stands at a critical juncture. As global pressure mounts to reduce carbon emissions and transition toward cleaner energy, companies must balance operational excellence with environmental responsibility. At GIC Oil & Gas Services Limited, we believe that engineering innovation is the key to creating a sustainable future without compromising operational performance.' },
      { type: 'heading', text: 'Sustainability as a Core Engineering Principle' },
      { type: 'paragraph', text: 'We have integrated sustainability into every phase of our engineering process—from initial concept design through decommissioning. This holistic approach ensures that environmental considerations are not afterthoughts but fundamental design criteria that drive innovation.' },
      { type: 'paragraph', text: 'Our sustainability framework encompasses energy efficiency, emissions reduction, waste minimization, water conservation, and biodiversity protection. We apply life-cycle assessment methodologies to evaluate the environmental impact of every project decision.' },
      { type: 'heading', text: 'Innovative Technologies Driving Change' },
      { type: 'list', items: ['Advanced flare gas recovery systems that capture 98% of previously wasted gas', 'Solar-powered monitoring and control systems for remote facilities', 'Water recycling technologies that reduce freshwater consumption by 60%', 'Biodegradable drilling fluids and environmentally-friendly completion chemicals', 'Carbon capture and utilization systems integrated into processing facilities', 'Drone-based inspection systems that minimize helicopter emissions'] },
      { type: 'heading', text: 'Case Study: Green Field Development' },
      { type: 'paragraph', text: 'Our recent greenfield development project in West Africa showcases our commitment to sustainable engineering. From the outset, we designed the facility to minimize environmental footprint while maximizing operational efficiency.' },
      { type: 'paragraph', text: 'Key achievements include: 45% reduction in greenhouse gas emissions compared to conventional designs; zero routine flaring from day one of operations; 70% of construction materials sourced locally, reducing transportation emissions; comprehensive biodiversity management plan protecting local ecosystems; and community engagement programs that created 200 local jobs.' },
      { type: 'heading', text: 'Measuring Impact' },
      { type: 'paragraph', text: 'We believe that what gets measured gets managed. Our sustainability dashboard tracks key performance indicators across all projects: carbon intensity, water usage, waste recycling rates, local content percentages, and community investment. This transparency ensures accountability and drives continuous improvement.' },
      { type: 'paragraph', text: 'Our commitment to sustainability extends beyond regulatory compliance. We are actively working toward net-zero operations by 2040 and are investing in renewable energy integration, carbon offset programs, and next-generation green technologies.' }
    ]
  },
  {
    id: 4,
    date: '19 August 2025',
    title: 'Projects that Define the Impact of Innovation',
    image: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D',
    excerpt: 'A closer look at landmark projects showcasing cutting-edge technology and exceptional execution standards.',
    category: 'Projects',
    readTime: '8 min read',
    author: 'GIC Project Delivery',
    content: [
      { type: 'paragraph', text: 'Throughout our history, GIC Oil & Gas Services Limited has delivered landmark projects that have redefined industry standards and demonstrated the transformative power of innovation. These projects represent more than technical achievements—they embody our commitment to excellence, safety, and client success.' },
      { type: 'heading', text: 'Offshore Platform Expansion: Pushing Boundaries' },
      { type: 'paragraph', text: 'One of our most challenging projects involved expanding production capacity on an aging offshore platform while maintaining continuous operations. The technical complexity was significant: structural reinforcement in a harsh marine environment, integration of new processing equipment with legacy systems, and strict safety protocols due to ongoing production.' },
      { type: 'paragraph', text: 'Our solution combined innovative engineering with meticulous planning. We utilized advanced structural modeling to design reinforcements that added minimal weight while providing necessary support. Modular construction techniques allowed us to prefabricate 80% of new equipment onshore, reducing offshore installation time by 60%.' },
      { type: 'paragraph', text: 'Results: 35% production increase, zero safety incidents over 12,000 work hours, project completed within budget and two weeks ahead of schedule, and platform life extended by 15 years.' },
      { type: 'heading', text: 'Pipeline Network Modernization: Smart Infrastructure' },
      { type: 'paragraph', text: 'A national oil company approached us to modernize their aging pipeline network spanning 450 kilometers. The challenge was not just replacing infrastructure but transforming it into a smart, monitored system capable of predictive maintenance and leak detection.' },
      { type: 'paragraph', text: 'We deployed fiber-optic sensing technology along the entire network, providing real-time monitoring of temperature, pressure, and vibration. Advanced analytics algorithms detect anomalies and predict potential failures before they occur. The system has already prevented three potential leaks and reduced maintenance costs by 40%.' },
      { type: 'heading', text: 'Gas Processing Facility: Modular Excellence' },
      { type: 'paragraph', text: 'Our fast-track gas processing facility project demonstrated the power of modular construction and integrated project delivery. With an aggressive 18-month timeline from contract award to first gas, conventional construction methods would have been impossible.' },
      { type: 'paragraph', text: 'We designed the facility as eight major modules fabricated simultaneously at three different yards. Advanced 3D modeling ensured perfect fit-up when modules arrived on site. The result: first gas achieved 17 months after contract award, processing capacity 15% above design specification, and construction costs 22% below industry benchmark.' },
      { type: 'heading', text: 'Innovation as Standard Practice' },
      { type: 'paragraph', text: 'These landmark projects share common themes: early adoption of innovative technologies, integrated multidisciplinary teams, rigorous planning and risk management, commitment to safety and environmental protection, and focus on delivering measurable client value.' },
      { type: 'paragraph', text: 'As we look to the future, we continue to push boundaries, embrace new technologies, and deliver projects that set new standards for the industry. Innovation is not an occasional achievement—it\'s our standard operating procedure.' }
    ]
  },
  {
    id: 5,
    date: '15 August 2025',
    title: 'Advancing Marine Operations with Next-Gen Equipment',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    excerpt: 'Our latest marine and offshore equipment solutions are setting new benchmarks for safety and operational efficiency.',
    category: 'Marine',
    readTime: '5 min read',
    author: 'GIC Marine Division',
    content: [
      { type: 'paragraph', text: 'The marine and offshore sector demands equipment that can withstand harsh environmental conditions while delivering reliable performance and ensuring crew safety. GIC Oil & Gas Services Limited is at the forefront of marine equipment innovation, providing next-generation solutions that set new benchmarks for safety, efficiency, and operational excellence.' },
      { type: 'heading', text: 'The Evolution of Marine Equipment' },
      { type: 'paragraph', text: 'Traditional marine equipment has served the industry well, but evolving operational requirements demand more sophisticated solutions. Modern offshore operations require equipment that integrates seamlessly with digital monitoring systems, operates efficiently in extreme conditions, and provides real-time performance data.' },
      { type: 'heading', text: 'Our Next-Generation Portfolio' },
      { type: 'list', items: ['Smart winch systems with automated load monitoring and overload protection', 'Advanced mooring systems with dynamic positioning integration', 'Subsea equipment with extended maintenance intervals and remote diagnostics', 'Deck machinery with IoT sensors providing predictive maintenance alerts', 'Personnel transfer systems meeting the highest safety standards', 'Emergency response equipment with enhanced reliability in harsh conditions'] },
      { type: 'heading', text: 'Safety First, Always' },
      { type: 'paragraph', text: 'Safety is non-negotiable in marine operations. Every piece of equipment we supply undergoes rigorous testing and certification. Our equipment includes multiple redundant safety systems, fail-safe mechanisms, and comprehensive monitoring capabilities that provide early warning of potential issues.' },
      { type: 'paragraph', text: 'We work closely with classification societies and regulatory bodies to ensure our equipment not only meets but exceeds international safety standards. Our commitment to safety has resulted in an exemplary track record across thousands of operational hours.' },
      { type: 'heading', text: 'Operational Efficiency' },
      { type: 'paragraph', text: 'Next-generation marine equipment delivers significant operational benefits. Automated systems reduce manual handling and crew fatigue. Predictive maintenance capabilities minimize unplanned downtime. Energy-efficient designs reduce fuel consumption and emissions.' },
      { type: 'paragraph', text: 'A recent vessel upgrade project demonstrated these benefits: 30% reduction in maintenance requirements, 25% improvement in operational efficiency, zero safety incidents during the upgrade period, and return on investment achieved within 14 months.' },
      { type: 'paragraph', text: 'As we continue to advance marine equipment technology, our focus remains on delivering solutions that enhance safety, improve operational performance, and provide lasting value to our clients in the demanding offshore environment.' }
    ]
  },
  {
    id: 6,
    date: '12 August 2025',
    title: 'Strategic Procurement for Oil & Gas Excellence',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    excerpt: 'How strategic procurement planning reduces costs and ensures timely delivery of critical materials and equipment.',
    category: 'Procurement',
    readTime: '6 min read',
    author: 'GIC Procurement Team',
    content: [
      { type: 'paragraph', text: 'In the complex world of oil and gas projects, procurement is far more than purchasing equipment and materials. Strategic procurement is a critical success factor that can make the difference between project success and costly delays. At GIC Oil & Gas Services Limited, we have developed a procurement methodology that delivers exceptional value through strategic sourcing, rigorous supplier management, and innovative contracting approaches.' },
      { type: 'heading', text: 'The Strategic Procurement Advantage' },
      { type: 'paragraph', text: 'Our approach to procurement begins long before purchase orders are issued. We integrate procurement planning into the earliest stages of project development, ensuring that supply chain considerations influence design decisions, construction planning, and scheduling.' },
      { type: 'paragraph', text: 'This early involvement allows us to identify long-lead items, evaluate alternative suppliers, negotiate favorable terms, and structure procurement packages that optimize cost and schedule. The result is a procurement strategy fully aligned with project objectives.' },
      { type: 'heading', text: 'Supplier Partnership Excellence' },
      { type: 'paragraph', text: 'We have cultivated a global network of pre-qualified suppliers spanning critical equipment, materials, and services. These relationships are built on mutual trust, performance excellence, and shared commitment to quality and safety.' },
      { type: 'list', items: ['Rigorous supplier qualification process assessing technical capability, financial stability, and track record', 'Performance monitoring and continuous improvement programs', 'Strategic volume agreements that provide competitive pricing', 'Collaborative relationship management that addresses challenges proactively', 'Supplier development programs that build capability and capacity'] },
      { type: 'heading', text: 'Delivering Measurable Results' },
      { type: 'paragraph', text: 'Our strategic procurement approach delivers tangible benefits. A recent major project demonstrated procurement excellence: 18% cost savings through strategic sourcing, critical equipment delivered 20% faster than industry average, zero late deliveries impacting construction schedule, quality defect rate 60% below industry benchmark, and local content exceeding regulatory requirements by 15%.' },
      { type: 'paragraph', text: 'Strategic procurement is not about finding the lowest price—it\'s about optimizing total cost of ownership, managing risk, ensuring quality, and delivering materials and equipment that enable project success. Our track record demonstrates our commitment to procurement excellence that drives client value.' }
    ]
  },
  {
    id: 7,
    date: '10 August 2025',
    title: 'Construction Safety: Setting Industry Standards',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80',
    excerpt: 'Our rigorous safety protocols and training programs ensure zero-incident construction sites across all operations.',
    category: 'Safety',
    readTime: '7 min read',
    author: 'GIC Safety & Compliance',
    content: [
      { type: 'paragraph', text: 'In the oil and gas industry, there is no acceptable compromise on safety. Every worker deserves to return home safely at the end of their shift. At GIC Oil & Gas Services Limited, we have built a safety culture that goes beyond compliance—we set industry standards through rigorous protocols, comprehensive training, and unwavering leadership commitment.' },
      { type: 'heading', text: 'Our Safety Philosophy' },
      { type: 'paragraph', text: 'Our safety philosophy is simple yet comprehensive: all incidents are preventable. This belief drives our approach to risk management, training, supervision, and continuous improvement. We don\'t accept that accidents are inevitable—we work tirelessly to identify and eliminate hazards before they result in incidents.' },
      { type: 'paragraph', text: 'Safety is everyone\'s responsibility, from our CEO to frontline workers. We empower every team member to stop work if they observe unsafe conditions. This stop-work authority has prevented numerous potential incidents and demonstrates our commitment to safety over schedule or cost.' },
      { type: 'heading', text: 'Comprehensive Safety Management System' },
      { type: 'paragraph', text: 'Our safety management system is certified to ISO 45001 and incorporates industry best practices from international oil companies and leading contractors. Key elements include:' },
      { type: 'list', items: ['Detailed risk assessments for every work activity', 'Permit-to-work systems ensuring proper authorization and control', 'Daily safety briefings and toolbox talks', 'Behavioral safety observation programs', 'Incident investigation and learning processes', 'Safety leadership training for all supervisors', 'Regular safety audits and inspections', 'Emergency response planning and drills'] },
      { type: 'heading', text: 'Training That Saves Lives' },
      { type: 'paragraph', text: 'We invest heavily in safety training because we know that knowledgeable, well-trained workers are our best defense against incidents. Every worker receives comprehensive safety induction before starting work. Specialized training is provided for high-risk activities including working at height, confined space entry, hot work, lifting operations, and electrical work.' },
      { type: 'paragraph', text: 'Our training programs combine classroom instruction, hands-on practice, and realistic simulations. We regularly refresh training to ensure skills remain current. Supervisors receive enhanced training in hazard recognition, risk assessment, and safety leadership.' },
      { type: 'heading', text: 'Our Safety Record' },
      { type: 'paragraph', text: 'We measure safety performance rigorously. Over the past three years, we have achieved: zero fatalities across all operations, total recordable incident rate 75% better than industry average, over 5 million work hours without lost-time injury on major projects, and 100% participation in safety observation programs.' },
      { type: 'paragraph', text: 'These results reflect our commitment to safety excellence. But we are not complacent. We continue to invest in safety improvements, learn from every incident and near-miss, and strive for our ultimate goal: zero incidents, every day, on every project. Because every worker deserves to return home safely—without exception.' }
    ]
  },
  {
    id: 8,
    date: '8 August 2025',
    title: 'Digital Transformation in Industrial Services',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    excerpt: 'Leveraging digital tools and IoT solutions to enhance operational visibility and project management efficiency.',
    category: 'Technology',
    readTime: '6 min read',
    author: 'GIC Digital Innovation',
    content: [
      { type: 'paragraph', text: 'The oil and gas industry is undergoing a profound digital transformation. Advanced technologies including artificial intelligence, Internet of Things (IoT), cloud computing, and data analytics are revolutionizing how industrial services are delivered. At GIC Oil & Gas Services Limited, we are leading this transformation, leveraging digital tools to enhance operational visibility, improve decision-making, and deliver superior project outcomes.' },
      { type: 'heading', text: 'Why Digital Transformation Matters' },
      { type: 'paragraph', text: 'Traditional industrial project management relied on periodic reporting, manual data collection, and reactive problem-solving. This approach created information delays, reduced transparency, and limited the ability to anticipate and prevent problems.' },
      { type: 'paragraph', text: 'Digital transformation changes this paradigm entirely. Real-time data from IoT sensors provides instant visibility into equipment performance, environmental conditions, and work progress. Advanced analytics transform data into actionable insights. Cloud platforms enable seamless collaboration across dispersed teams. The result is faster, better-informed decision-making that drives project success.' },
      { type: 'heading', text: 'Our Digital Ecosystem' },
      { type: 'list', items: ['Cloud-based project management platform accessible from any location', 'IoT sensors monitoring equipment performance, environmental conditions, and safety parameters', 'Mobile applications enabling field workers to report progress, issues, and observations in real-time', 'AI-powered predictive analytics identifying potential delays and cost overruns before they occur', 'Digital twin technology creating virtual replicas of facilities for simulation and optimization', 'Blockchain-based supply chain tracking ensuring transparency and authenticity', 'Virtual and augmented reality for training, design review, and remote assistance'] },
      { type: 'heading', text: 'Real-World Impact' },
      { type: 'paragraph', text: 'Our digital transformation initiatives deliver measurable benefits. On a recent offshore platform project, IoT sensors detected an anomaly in crane hydraulics three days before conventional inspection would have identified the issue. This early detection prevented a potential equipment failure that would have caused a two-week delay and significant cost overruns.' },
      { type: 'paragraph', text: 'Our AI-powered scheduling system analyzes thousands of variables to optimize resource allocation and task sequencing. On a major EPC project, this system identified optimization opportunities that reduced overall project duration by 18 days while improving resource utilization by 23%.' },
      { type: 'heading', text: 'The Human Element' },
      { type: 'paragraph', text: 'While we embrace technology, we recognize that people remain at the heart of project success. Digital tools empower our teams by eliminating repetitive tasks, providing better information for decision-making, and enabling focus on high-value activities that require human judgment and creativity.' },
      { type: 'paragraph', text: 'Digital transformation is not a destination—it\'s a continuous journey of improvement and innovation. We remain committed to exploring emerging technologies, adapting best practices, and leveraging digital capabilities to deliver exceptional value to our clients in an increasingly connected industrial world.' }
    ]
  },
  {
    id: 9,
    date: '5 August 2025',
    title: 'Expanding Our Global Partner Network',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    excerpt: 'New strategic partnerships strengthen our capabilities and extend our reach across key international markets.',
    category: 'Partnerships',
    readTime: '5 min read',
    author: 'GIC Business Development',
    content: [
      { type: 'paragraph', text: 'In today\'s interconnected global economy, strategic partnerships are essential for delivering comprehensive solutions and accessing new markets. GIC Oil & Gas Services Limited has built a robust network of international partners spanning equipment manufacturers, technology providers, engineering firms, and specialist contractors. These partnerships enhance our capabilities, extend our reach, and enable us to deliver superior value to clients worldwide.' },
      { type: 'heading', text: 'Strategic Partnership Philosophy' },
      { type: 'paragraph', text: 'We approach partnerships strategically, seeking organizations that complement our capabilities, share our values, and demonstrate commitment to excellence. Our partnerships are built on mutual benefit, transparency, and shared success. We don\'t just seek partnerships—we cultivate long-term relationships that create lasting value for all stakeholders.' },
      { type: 'heading', text: 'Recent Partnership Milestones' },
      { type: 'paragraph', text: 'This quarter, we announced several strategic partnerships that significantly enhance our service portfolio and geographic reach:' },
      { type: 'list', items: ['Technology partnership with a leading European engineering software company, providing access to advanced simulation and modeling tools', 'Manufacturing alliance with a premier Asian equipment manufacturer, securing competitive pricing and priority delivery for critical machinery', 'Joint venture with a West African fabrication specialist, creating local construction capacity and enhancing our competitive position', 'Service agreement with a global inspection and certification company, strengthening our quality assurance capabilities', 'Research collaboration with two international universities, advancing innovation in sustainable energy technologies'] },
      { type: 'heading', text: 'Geographic Expansion' },
      { type: 'paragraph', text: 'Our partnership strategy is enabling geographic expansion into high-growth markets. Recent partnerships have established our presence in Southeast Asia, the Middle East, and additional West African markets. These partnerships provide local market knowledge, regulatory expertise, and established relationships that would take years to develop independently.' },
      { type: 'paragraph', text: 'We maintain a disciplined approach to expansion, ensuring that each new market entry is supported by strong local partnerships, adequate resources, and clear competitive advantages. This measured approach has resulted in successful market entry with minimal risk.' },
      { type: 'heading', text: 'Looking Forward' },
      { type: 'paragraph', text: 'We continue to actively pursue strategic partnerships that enhance capabilities, extend market reach, provide access to innovative technologies, strengthen our supply chain resilience, and create value for our clients and stakeholders.' },
      { type: 'paragraph', text: 'Our expanding partner network is a testament to our reputation, our commitment to collaboration, and our vision for growth. As we continue to build strategic relationships worldwide, we remain focused on our core mission: delivering exceptional oil and gas services that exceed client expectations and drive industry progress.' }
    ]
  }
];

// Initialize store with defaults if empty or version mismatch
function initializeStore(): NewsArticle[] {
  const storedVersion = localStorage.getItem(VERSION_KEY);
  if (storedVersion !== STORAGE_VERSION) {
    // New deployment - reset to latest defaults
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
    localStorage.setItem(VERSION_KEY, STORAGE_VERSION);
    return defaultArticles;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
    return defaultArticles;
  }
  try {
    return JSON.parse(stored);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
    return defaultArticles;
  }
}

// Event system for cross-component reactivity
const listeners: Set<() => void> = new Set();

function notifyListeners() {
  listeners.forEach((fn) => fn());
}

export function subscribeToNews(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getAllArticles(): NewsArticle[] {
  return initializeStore();
}

export function getArticleById(id: number): NewsArticle | undefined {
  const articles = initializeStore();
  return articles.find((a) => a.id === id);
}

export function addArticle(article: Omit<NewsArticle, 'id'>): NewsArticle {
  const articles = initializeStore();
  const maxId = articles.reduce((max, a) => Math.max(max, a.id), 0);
  const newArticle: NewsArticle = { ...article, id: maxId + 1 };
  articles.unshift(newArticle);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  notifyListeners();
  return newArticle;
}

export function updateArticle(id: number, updates: Partial<Omit<NewsArticle, 'id'>>): NewsArticle | null {
  const articles = initializeStore();
  const idx = articles.findIndex((a) => a.id === id);
  if (idx === -1) return null;
  articles[idx] = { ...articles[idx], ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  notifyListeners();
  return articles[idx];
}

export function deleteArticle(id: number): boolean {
  const articles = initializeStore();
  const filtered = articles.filter((a) => a.id !== id);
  if (filtered.length === articles.length) return false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  notifyListeners();
  return true;
}

export function resetToDefaults(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
  notifyListeners();
}
