/* Dr. Saied El Saharty · Business scenarios + bilingual lead experience
 * Published portfolio enhancement. No website-side lead storage or tracking.
 */
(function(){
"use strict";
var language="en",chosen="growth",waNumber="201024335473";
var translations={
"Portfolio PDF":"ملف البورتفوليو",
"Degrees":"المؤهلات",
"Experience":"الخبرات",
"Credentials":"الشهادات",
"Clients":"الجهات",
"Resources":"الموارد",
"Cases":"الحالات",
"Solutions":"الحلول",
"WhatsApp the Team ↗":"واتساب الفريق ↗",
"STRATEGIC THINKING. PRACTICAL IMPACT.":"تفكير استراتيجي. تنفيذ عملي.",
"Welcome to my World":"أهلاً بيك في عالمي",
"Business Solutions & AI":"حلول الأعمال والذكاء الاصطناعي",
"Business Solutions. Strategy, Growth & Transformation.":"حلول متكاملة للأعمال، من الاستراتيجية للنمو والتحول.",
"Business Solutions Consultant, Strategic Advisor and Executive Trainer with 15+ years of cross-industry experience in Egypt and the GCC. Bridging business strategy, operations, marketing, financial performance, people development and AI-driven transformation to turn challenges into practical results.":"استشاري حلول أعمال ومدرب تنفيذي بخبرة تتجاوز 15 سنة في قطاعات مختلفة بمصر والخليج. بربط الاستراتيجية بالتشغيل والتسويق والأداء المالي وتطوير الناس والذكاء الاصطناعي علشان تتحول التحديات لقرارات وحلول قابلة للتطبيق.",
"Business Strategy & Growth":"استراتيجية ونمو الأعمال",
"Operations & Performance":"التشغيل وتحسين الأداء",
"Marketing & Business Development":"التسويق وتطوير الأعمال",
"AI & Digital Transformation":"الذكاء الاصطناعي والتحول الرقمي",
"HR & Organizational Solutions":"حلول الموارد البشرية والتنظيم",
"DBA & 2 MBA Degrees":"دكتوراه مهنية ودرجتا MBA",
"Explore Academic Qualifications":"استعرض المؤهلات الأكاديمية",
"View Executive Portfolio":"اطّلع على البورتفوليو الكامل",
"Winners Webinars":"ويبنارات Winners",
"AI Assistant Tools & Materials":"أدوات ومواد الذكاء الاصطناعي",
"Years of Experience":"سنة خبرة",
"Business strategy, growth, operations and transformation":"الاستراتيجية والنمو والتشغيل والتحول المؤسسي",
"Professionals Trained":"متخصص تم تدريبهم",
"Learning and capability development in Egypt and the GCC":"التعلم وبناء القدرات في مصر ودول الخليج",
"Employees Supported":"موظف تم دعمهم",
"HR systems and business partnership across organizations":"أنظمة الموارد البشرية ودعم الأعمال عبر المؤسسات",
"ACADEMIC QUALIFICATIONS":"المؤهلات الأكاديمية",
"Advanced business education.":"مؤهلات أكاديمية في إدارة الأعمال.",
"Doctoral and postgraduate qualifications underpinning a multidisciplinary approach to business consulting, strategic leadership and organizational transformation.":"مؤهلات في الدكتوراه والماجستير تدعم منهجي في الاستشارات والقيادة الاستراتيجية والتحول المؤسسي.",
"ACADEMIC MILESTONES":"محطات أكاديمية",
"DOCTORAL DEGREE":"الدكتوراه المهنية",
"Doctor of Business Administration":"دكتوراه إدارة الأعمال المهنية",
"MASTER'S DEGREE":"درجة الماجستير",
"Master of Business Administration":"ماجستير إدارة الأعمال",
"Faculty of Commerce":"كلية التجارة",
"Institution as provided":"وفق المسمى المقدم",
"PROFILE HIGHLIGHTS":"أبرز الإنجازات",
"Experience built on execution.":"الخبرة قيمتها في التنفيذ.",
"Integrated experience in business strategy, operational improvement, marketing, organizational transformation and capability development — supported by practical technology and measurable execution.":"خبرات متكاملة في الاستراتيجية وتحسين التشغيل والتسويق والتحول المؤسسي وتطوير القدرات، مع أدوات تقنية قابلة للقياس.",
"Business consulting in action":"الاستشارات على أرض الواقع",
"Professional Training":"تدريب مهني",
"HR Strategy, Governance & Auditing training — practical capability building for professionals at the Suez Canal Authority.":"برامج عملية في استراتيجية الموارد البشرية والحوكمة والتدقيق للعاملين بهيئة قناة السويس.",
"Certified SAP":"استشاري SAP معتمد",
"Professional Consultant":"استشاري محترف",
"Professional expertise connecting enterprise business processes, technology and measurable organizational transformation.":"خبرة تربط عمليات المؤسسات بالتقنية والتطوير التنظيمي القابل للقياس.",
"End-to-End":"حلول متكاملة",
"Business Solutions":"للأعمال",
"Business strategy, operational improvement, marketing and growth, organizational transformation, performance systems and AI-enabled execution.":"استراتيجية الأعمال وتحسين العمليات والتسويق والنمو والتحول المؤسسي وأنظمة الأداء والذكاء الاصطناعي.",
"EXECUTIVE PROFILE":"الملف المهني",
"Cross-industry business leadership.":"خبرة قيادية عبر قطاعات مختلفة.",
"A professional career spanning strategic management, business growth, operations, organizational transformation, consulting, executive training and business development.":"مسار مهني يجمع الإدارة الاستراتيجية والنمو والتشغيل والتحول التنظيمي والاستشارات والتدريب التنفيذي وتطوير الأعمال.",
"Leading with practical experience":"قيادة مبنية على الخبرة العملية",
"SELECTED LEADERSHIP & PROFESSIONAL ROLES":"أبرز الأدوار القيادية والمهنية",
"Group Business Partner Director":"مدير شراكة الأعمال للمجموعة",
"HR & Business Consultant":"استشاري موارد بشرية وأعمال",
"Business Administration Instructor":"محاضر إدارة أعمال",
"Founder":"مؤسس",
"HR Consultant":"استشاري موارد بشرية",
"HR Business Consultant":"استشاري أعمال وموارد بشرية",
"Cross-industry consulting engagements":"استشارات في قطاعات مختلفة",
"Earlier professional experience:":"خبرات مهنية سابقة:",
"Hotel-industry experience:":"خبرة في قطاع الفنادق:",
"SPECIALIZED FOCUS":"مجالات التخصص",
"Business strategy, growth and commercial execution":"الاستراتيجية والنمو والتطوير التجاري",
"Operations, organizational processes and efficiency":"التشغيل وتحسين العمليات والكفاءة",
"Marketing strategy and digital campaign performance":"التسويق وأداء الحملات الرقمية",
"AI automation and digital transformation":"الأتمتة بالذكاء الاصطناعي والتحول الرقمي",
"HR, organizational design and people strategy":"الموارد البشرية والتصميم التنظيمي",
"Management training and capability development":"التدريب الإداري وبناء القدرات",
"SYSTEMS EXPERIENCE":"خبرة في الأنظمة",
"REAL-WORLD LEARNING":"خبرات تدريبية واقعية",
"Training & Workshops in Action.":"ورش وتدريب على أرض الواقع.",
"Selected moments from professional workshops, executive sessions, educational programs and learning communities — connecting knowledge with hands-on practice.":"لقطات من الورش والجلسات التنفيذية والبرامج التعليمية التي تربط المعرفة بالتطبيق.",
"Executive Workshops":"ورش تنفيذية",
"Business discussions & facilitated learning":"نقاشات أعمال وتيسير التعلم",
"Management & HR Training":"تدريب الإدارة والموارد البشرية",
"Interactive instructor-led sessions":"جلسات عملية تفاعلية",
"Youth Development":"تطوير الشباب",
"Engagement & capability building":"مشاركة وبناء قدرات",
"Hands-on Learning":"تعلم تطبيقي",
"Knowledge applied in practice":"تحويل المعرفة لممارسة",
"Marketing & Business":"التسويق والأعمال",
"Applied digital learning":"تعلم رقمي تطبيقي",
"Professional Development":"التطوير المهني",
"Building practical business skills":"تنمية مهارات أعمال عملية",
"Training Communities":"مجتمعات التعلم",
"Sharing experience & outcomes":"تبادل الخبرات والتعلم",
"CORE EXPERTISE":"مجالات الخبرة",
"Strategy meets delivery.":"من الاستراتيجية إلى التنفيذ.",
"MORE THAN ONE FUNCTION":"أكثر من وظيفة واحدة",
"End-to-end":"متكاملة من البداية للنهاية",
"Business Solutions.":"حلول الأعمال.",
"Strategy • Operations • Marketing • Technology • People":"الاستراتيجية • التشغيل • التسويق • التقنية • الأفراد",
"Business Strategy & Strategic Planning":"استراتيجية الأعمال والتخطيط",
"Operations & Business Process Improvement":"التشغيل وتطوير العمليات",
"Marketing Strategy & Business Development":"استراتيجية التسويق وتطوير الأعمال",
"Digital Transformation & AI Solutions":"التحول الرقمي وحلول الذكاء الاصطناعي",
"Organizational Development & HR Strategy":"التطوير التنظيمي واستراتيجية الموارد البشرية",
"Talent, Recruitment & Workforce Solutions":"التوظيف وتخطيط القوى العاملة",
"Financial Performance & Business Analytics":"الأداء المالي وتحليلات الأعمال",
"Training & Capability Building":"التدريب وبناء القدرات",
"PROFESSIONAL CREDENTIALS":"الشهادات المهنية",
"Credentials that power business impact.":"تعلم مستمر يدعم نتائج الأعمال.",
"A curated record of professional certifications and continuing learning across SAP, HR, business, analytics and artificial intelligence.":"مجموعة من الشهادات المهنية وبرامج التعلم في SAP والموارد البشرية والأعمال والتحليلات والذكاء الاصطناعي.",
"PROFESSIONAL DEVELOPMENT":"التطوير المهني",
"Business knowledge.":"معرفة بالأعمال.",
"Global perspectives.":"ورؤية عالمية.",
"Selected providers and learning institutions":"جهات مختارة للتعلم والتطوير",
"All Credentials":"كل الشهادات",
"SAP & Enterprise":"SAP وأنظمة المؤسسات",
"HR & People":"الموارد البشرية",
"AI & Digital":"الذكاء الاصطناعي والرقمنة",
"Business & Analytics":"الأعمال والتحليلات",
"professional credentials & learning highlights":"شهادة وبرنامجًا تعليميًا",
"PROFESSIONAL CREDENTIAL":"اعتماد مهني",
"PROFESSIONAL LEARNING":"تعلم مهني",
"HR DEVELOPMENT":"تطوير الموارد البشرية",
"HR DIGITAL LEARNING":"تعلم رقمي للموارد البشرية",
"HR CERTIFICATION":"شهادة موارد بشرية",
"HR LEARNING":"تعلم موارد بشرية",
"GOVERNANCE":"الحوكمة",
"GENERATIVE AI":"الذكاء الاصطناعي التوليدي",
"BUSINESS PLANNING":"تخطيط الأعمال",
"FINANCIAL MANAGEMENT":"الإدارة المالية",
"DATA ANALYTICS":"تحليل البيانات",
"DIGITAL MARKETING":"التسويق الرقمي",
"SELECTED ORGANIZATIONS & BRANDS":"جهات ومؤسسات",
"Cross-industry exposure.":"خبرات عبر قطاعات متعددة.",
"Organizations and brands represented across business consulting, recruitment, training, industry partnerships and previous professional experience. Hotel-industry experience is labeled separately from business clients and partners.":"نماذج من جهات ارتبطت بخبراتي المهنية والاستشارية والتدريبية. خبرات العمل في الفنادق معروضة بصورة مستقلة عن العملاء والشركاء.",
"Cross-sector engagement":"خبرات متنوعة القطاعات",
"BANKING & FINANCE":"البنوك والتمويل",
"FMCG & FOOD":"السلع الاستهلاكية والغذاء",
"INDUSTRIAL & MANUFACTURING":"الصناعة والتصنيع",
"REAL ESTATE & CONSTRUCTION":"العقارات والتشييد",
"EDUCATION & SERVICES":"التعليم والخدمات",
"HOTELS, HOSPITALITY & LIFESTYLE":"الفنادق والضيافة",
"HOTEL INDUSTRY · PROFESSIONAL EXPERIENCE":"خبرة مهنية بقطاع الفنادق",
"OTHER HOSPITALITY & LIFESTYLE ENGAGEMENTS":"تعاونات أخرى في الضيافة",
"SELECTED MARKETING RESULTS":"نتائج مختارة من التسويق",
"Execution measured in outcomes.":"نتائج يمكن قياسها.",
"Seven historical messaging-campaign snapshots shown in the supplied executive portfolio. Each pair below refers to its own campaign.":"سبع لقطات تاريخية من حملات المراسلات المذكورة في البورتفوليو؛ كل رقم مرتبط بحملته.",
"Data-driven campaigns":"حملات قائمة على البيانات",
"Messaging conversations":"محادثة عبر الرسائل",
"Source: messaging campaigns overview in the supplied portfolio. These are historic results, not typical or guaranteed future outcomes.":"المصدر: لقطات الحملات في البورتفوليو. نتائج تاريخية وليست وعودًا بنتائج مستقبلية.",
"PUBLIC RECOGNITION":"آراء وتقدير",
"Trust built through execution.":"الثقة تبنى بالأفعال.",
"PEOPLE. TRUST. IMPACT.":"الناس. الثقة. الأثر.",
"Real connections.":"علاقات حقيقية.",
"Meaningful outcomes.":"وأثر ملموس.",
"Building communities through practical learning and service":"بناء مجتمعات مهنية بالتعلم العملي والخدمة",
"Excellent service and professional experts.":"خدمة ممتازة وخبرة احترافية.",
"Best service and highly respectful treatment.":"أفضل خدمة وتعامل في منتهى الاحترام.",
"Outstanding after-sales service and attention.":"متابعة واهتمام متميزان بعد الخدمة.",
"Highly appreciated and strongly recommended.":"تجربة تستحق التقدير والترشيح.",
"Testimonials transcribed from the supplied portfolio slide; original public review URLs were not supplied.":"النصوص من البورتفوليو المقدم، ولم تُرفق روابط المراجعات الأصلية.",
"PRACTICAL KNOWLEDGE HUB":"مكتبة المعرفة العملية",
"Explore. Learn. Apply.":"استكشف. اتعلم. طبّق.",
"Two curated collections for HR and business professionals. Open either collection to access the webinars, interactive tools and working materials.":"مجموعتان من الموارد العملية للمتخصصين في الإدارة والأعمال والموارد البشرية. افتح المجموعة للوصول للفيديوهات والأدوات والملفات.",
"LEARN • BUILD • APPLY":"اتعلم • ابنِ • طبّق",
"A living library of":"مكتبة متجددة من",
"real-world resources.":"موارد العمل الحقيقية.",
"Winners Webinars + AI-powered workplace materials":"ويبنارات Winners وموارد عملية بالذكاء الاصطناعي",
"FULL PROFESSIONAL PROFILE":"الملف المهني الكامل",
"Executive Portfolio (PDF)":"البورتفوليو التنفيذي (PDF)",
"Browse the complete executive portfolio, including professional experience, selected clients, certifications, and career highlights.":"استعرض الملف الكامل من خبرات وشهادات وإنجازات وجهات تعامل مهني.",
"Portfolio Document":"ملف البورتفوليو",
"Open Portfolio ↗":"افتح البورتفوليو ↗",
"WATCH & LEARN":"شاهد واتعلم",
"Practical sessions and video resources covering HR operations, auditing, job architecture, AI, personal branding and business English.":"جلسات عملية في التشغيل والتدقيق الوظيفي والذكاء الاصطناعي وبناء الهوية المهنية والإنجليزية للأعمال.",
"Video Resources":"فيديوهات",
"Explore Webinars ↗":"استعرض الويبنارات ↗",
"TOOLS & RESOURCES":"أدوات وموارد",
"Applied HR systems, assessment tools, AI prompts, checklists, and professional guides — organized for direct use or reference.":"أنظمة عملية وتقييمات وبرومبتات وقوائم مراجعة وأدلة مهنية جاهزة للاستخدام.",
"Listed Resources":"موردًا",
"Explore Tools ↗":"استعرض الأدوات ↗",
"LET'S CREATE VALUE":"خلّينا نعمل قيمة حقيقية",
"From business challenges":"من تحديات الأعمال",
"to practical solutions.":"إلى حلول قابلة للتنفيذ.",
"Business consulting, strategic planning, growth and marketing, operating-model improvement, organizational transformation, professional training and practical AI adoption — grounded in real business needs.":"استشارات الأعمال والتخطيط والنمو والتسويق وتحسين التشغيل والتحول المؤسسي والتدريب والذكاء الاصطناعي، حسب احتياج شركتك الفعلي.",
"For collaborations and business inquiries, connect directly with my team via WhatsApp or email.":"للتعاون أو الاستفسارات المهنية تواصل مع التيم على واتساب أو البريد.",
"Team WhatsApp":"واتساب الفريق",
"Send Email":"إرسال بريد",
"WhatsApp only:":"واتساب فقط:",
"Email:":"البريد:",
"All rights reserved.":"جميع الحقوق محفوظة.",
"Independent professional portfolio. Training reference is not an institutional endorsement.":"ملف مهني شخصي، والإشارة إلى جهات التدريب لا تعني اعتمادًا مؤسسيًا.",
"Back to top ↑":"العودة للأعلى ↑",
"RESOURCE LIBRARY":"مكتبة الموارد",
"Search resources...":"ابحث في الموارد...",
"All Videos":"كل الفيديوهات",
"All":"الكل",
"AI Systems":"أنظمة الذكاء الاصطناعي",
"Materials":"المواد",
"Open Resource ↗":"افتح المورد ↗",
"Link pending":"الرابط غير متاح",
"No matching resources. Try another keyword.":"لا توجد نتائج. جرّب كلمة مختلفة.",
"External links open in a new tab. Some documents may require access from their owners.":"الروابط الخارجية تفتح في تبويب جديد، وبعض الملفات تحتاج إذنًا من مالكها.",
"Videos link to the Winners Facebook Reels supplied for this portfolio.":"الفيديوهات بتفتح روابط Winners الأصلية على فيسبوك.",
"External resources may require permission. Items with incomplete or uncertain links are clearly marked instead of guessed.":"بعض الموارد قد تحتاج صلاحيات عرض؛ الروابط غير المكتملة موضحة بدون تخمين.",
"External form":"نموذج خارجي",
"External tool":"أداة خارجية",
"Drive file":"ملف Drive",
"Access may vary":"قد تحتاج إذن وصول",
"Link needed":"الرابط مطلوب",
"Deployment check":"التحقق من النشر",
"Facebook Reel":"فيديو فيسبوك",
"Assessment":"تقييم",
"AI System":"نظام ذكاء اصطناعي",
"Professional PDF":"ملف مهني PDF",
"Prompt Library":"مكتبة برومبتات",
"Automation Guide":"دليل أتمتة",
"Audit Checklist":"قائمة تدقيق",
"Career Assessment":"تقييم مهني",
"Legal Reference":"مرجع قانوني",
"Compliance Guide":"دليل امتثال",
"Open app":"افتح التطبيق"
};
var baseText=new WeakMap(),baseAttr=new WeakMap();
function captureAndTranslate(root){
  if(!root)return;
  var walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null,false);
  var node;
  while((node=walk.nextNode())){
    var parent=node.parentElement;
    if(!parent||parent.closest("script,style,noscript,textarea,[data-i18n-skip],.case-en,.case-ar"))continue;
    if(!baseText.has(node))baseText.set(node,node.nodeValue);
    var original=baseText.get(node),value=original.trim().replace(/\s+/g," ");
    var replacement=language==="ar"?translations[value]:null;
    var next=(replacement?original.replace(original.trim(),replacement):original);
    if(node.nodeValue!==next)node.nodeValue=next;
  }
  var attrs=(root.querySelectorAll?Array.prototype.slice.call(root.querySelectorAll("[placeholder],[title],[aria-label]")):[]);
  attrs.forEach(function(el){
    if(el.closest("[data-i18n-skip]"))return;
    if(!baseAttr.has(el))baseAttr.set(el,{placeholder:el.getAttribute("placeholder"),title:el.getAttribute("title"),ariaLabel:el.getAttribute("aria-label")});
    var original=baseAttr.get(el);
    ["placeholder","title","aria-label"].forEach(function(a){
      var v=(a==="aria-label"?original.ariaLabel:original[a]);if(v!=null){var next=(language==="ar"&&translations[v])||v;if(el.getAttribute(a)!==next)el.setAttribute(a,next);}
    });
  });
}
function setLang(v){
  language=v==="ar"?"ar":"en";
  document.documentElement.lang=language;document.documentElement.dir=language==="ar"?"rtl":"ltr";
  document.documentElement.classList.toggle("site-ar",language==="ar");
  captureAndTranslate(document.body);
  var toggle=document.getElementById("language-toggle");
  if(toggle){toggle.textContent=language==="ar"?"English":"العربية";toggle.setAttribute("aria-label",language==="ar"?"Switch website to English":"عرض الموقع باللغة العربية");toggle.setAttribute("aria-pressed",language==="ar"?"true":"false");}
  drawSolution();
  try{localStorage.setItem("saiedPortfolioLanguage",language)}catch(e){}
}
var offers={
 growth:{
  en:{label:"Strategy & Growth",headline:"The business is moving, but where is it heading?",intro:"We start with your market, customers and numbers — then agree on priorities before recommending another initiative.",steps:["Review business model and customer segments","Identify commercial bottlenecks and growth opportunities","Set a focused 90-day roadmap with owners and KPIs"],out:"Deliverables: opportunity map, prioritised actions and a practical performance dashboard."},
  ar:{label:"الاستراتيجية والنمو",headline:"الشركة شغالة… بس رايحة على فين؟",intro:"بنبدأ بالسوق والعملاء والأرقام، وبعدها نحدد الأولويات بدل ما نزود مبادرات ملهاش اتجاه.",steps:["مراجعة نموذج الأعمال وشرائح العملاء","تحديد معوقات النمو والفرص التجارية","خطة 90 يومًا بمسؤوليات ومؤشرات أداء"],out:"المخرجات: خريطة فرص، أولويات تنفيذ، ولوحة متابعة للإدارة."}
 },
 operations:{
  en:{label:"Operations & Efficiency",headline:"Too many approvals. Too little progress.",intro:"Before buying a new system, we map how work actually moves, who owns decisions and where delays start.",steps:["Map the current end-to-end workflow","Clarify ownership, approvals and handoffs","Pilot simpler SOPs, service levels and process KPIs"],out:"Deliverables: process map, RACI, targeted SOPs and improvement backlog."},
  ar:{label:"التشغيل والكفاءة",headline:"موافقات كتير… والشغل بيتأخر.",intro:"قبل ما نشتري نظام جديد، بنفهم الشغل ماشي إزاي، ومين صاحب القرار، والتعطيل بيبدأ فين.",steps:["رسم مسار العمل من البداية للنهاية","توضيح المسؤوليات والصلاحيات والتسليمات","تجربة إجراءات أبسط ومؤشرات لقياس سرعة الخدمة"],out:"المخرجات: خريطة عمليات، مصفوفة RACI، إجراءات وأولويات تحسين."}
 },
 marketing:{
  en:{label:"Marketing & Sales",headline:"Getting attention isn't the same as winning customers.",intro:"We connect positioning, offers, audience quality and conversion — not impressions alone.",steps:["Define target segments, value proposition and 7Ps","Review channels, messaging and lead journey","Build a campaign measurement and conversion plan"],out:"Deliverables: clearer offers, channel priorities and a lead-quality dashboard."},
  ar:{label:"التسويق والمبيعات",headline:"الانتشار مش معناه مبيعات.",intro:"بنربط التموضع والعرض والعميل الصح بمراحل التحويل، مش بنكتفي بعدد المشاهدات.",steps:["تحديد شرائح السوق والقيمة المقدمة والمزيج التسويقي","مراجعة القنوات والرسائل ورحلة العميل","خطة حملات مرتبطة بجودة العملاء المحتملين والتحويل"],out:"المخرجات: عروض أوضح، قنوات أولى بالميزانية، ولوحة متابعة لجودة العملاء."}
 },
 ai:{
  en:{label:"AI & Digital",headline:"Automate the right work, not the broken process.",intro:"We assess readiness, pick one useful workflow and design safe handoffs to humans.",steps:["Assess data, systems and repetitive tasks","Choose a small, high-value AI automation pilot","Define approval points, quality checks and ownership"],out:"Deliverables: use-case shortlist, pilot architecture and an adoption plan."},
  ar:{label:"الذكاء الاصطناعي والرقمنة",headline:"ما تأتمتش عملية بايظة.",intro:"بنراجع البيانات والأنظمة، ونختار Workflow واحد له قيمة، مع مراجعة بشرية عند القرارات الحساسة.",steps:["تقييم البيانات والأنظمة والمهام المتكررة","اختيار تجربة أتمتة صغيرة وعملية","تحديد نقاط الموافقة وفحص الجودة والمسؤوليات"],out:"المخرجات: قائمة استخدامات، تصميم تجربة أولية، وخطة تبنّي."}
 },
 people:{
  en:{label:"HR & Organization",headline:"People problems often begin as business design problems.",intro:"We look at authority, capacity, workflows and employee experience before prescribing an HR policy.",steps:["Diagnose structure, workload and process gaps","Prioritise critical workforce and governance controls","Activate a measurable HR operating plan"],out:"Deliverables: organisational priorities, owners, service standards and HR KPIs."},
  ar:{label:"الموارد البشرية والتنظيم",headline:"مش كل مشكلة موظفين سببها الموظفين.",intro:"بنراجع الهيكل والصلاحيات وحجم العمل وتجربة الموظف قبل ما نقترح لائحة أو سياسة جديدة.",steps:["تشخيص الهيكل وحجم العمل والفجوات التشغيلية","ترتيب أولويات الحوكمة والقوى العاملة","تفعيل خطة HR قابلة للقياس"],out:"المخرجات: أولويات تنظيمية ومسؤوليات ومستويات خدمة ومؤشرات HR."}
 },
 learning:{
  en:{label:"Training & Capability",headline:"Training only matters when behaviour changes.",intro:"We identify the capability gap and tie learning to the tasks people actually perform.",steps:["Identify role-based competency and performance gaps","Design practical sessions and workplace assignments","Measure application and follow-through"],out:"Deliverables: learning pathway, practice tools and post-training indicators."},
  ar:{label:"التدريب وبناء القدرات",headline:"الشهادة مش هي الهدف… التطبيق هو الهدف.",intro:"بنحدد فجوة المهارات الحقيقية ونربط التدريب بالمهام اللي الناس بتنفذها في الشغل.",steps:["تحديد فجوات المهارات والأداء حسب الوظيفة","تصميم جلسات وتكليفات تطبيقية","قياس ما تم تطبيقه ومتابعة الأثر"],out:"المخرجات: مسار تعلم وأدوات تدريب ومؤشرات بعد البرنامج."}
 }
};
function drawSolution(){
 var area=document.getElementById("solution-details"),btns=document.querySelectorAll("[data-solution]"),d=offers[chosen]&&offers[chosen][language];
 if(!area||!d)return;
 btns.forEach(function(b){var active=b.getAttribute("data-solution")===chosen;b.classList.toggle("selected",active);b.setAttribute("aria-pressed",active?"true":"false");var k=b.getAttribute("data-solution");var label=b.querySelector(".solution-option-label");if(label)label.textContent=offers[k][language].label;});
 var title=area.querySelector("[data-solution-title]"),intro=area.querySelector("[data-solution-intro]"),steps=area.querySelector("[data-solution-steps]"),out=area.querySelector("[data-solution-output]");
 if(title)title.textContent=d.headline;
 if(intro)intro.textContent=d.intro;
 if(steps){steps.replaceChildren();d.steps.forEach(function(s){var li=document.createElement("li");li.textContent=s;steps.appendChild(li)})}
 if(out)out.textContent=d.out;
 updateContact();
}
function updateContact(){
 var a=document.getElementById("business-whatsapp"),field=document.getElementById("business-context");
 if(!a)return;
 var d=offers[chosen][language],note=field?field.value.trim():"";
 var message=language==="ar"?"أهلاً، محتاج أتواصل مع فريق د. سعيد الصحارتي بخصوص: "+d.label+".":"Hello, I would like to contact Dr. Saied El Saharty's team about: "+d.label+".";
 if(note)message+=(language==="ar"?"\nتفاصيل مختصرة: ":"\nBrief context: ")+note.slice(0,700);
 a.href="https://wa.me/"+waNumber+"?text="+encodeURIComponent(message);
}
document.querySelectorAll("[data-solution]").forEach(function(b){b.addEventListener("click",function(){chosen=b.getAttribute("data-solution");drawSolution()})});
var context=document.getElementById("business-context");if(context)context.addEventListener("input",updateContact);
var toggle=document.getElementById("language-toggle");
if(toggle)toggle.addEventListener("click",function(){setLang(language==="en"?"ar":"en")});
var overlay=document.getElementById("collection-overlay");
if(overlay&&"MutationObserver" in window){
 var observer=new MutationObserver(function(m){if(language!=="ar")return;for(var i=0;i<m.length;i++){var newNodes=m[i].addedNodes||[];for(var j=0;j<newNodes.length;j++){if(newNodes[j].nodeType===1)captureAndTranslate(newNodes[j]);}}});
 observer.observe(overlay,{subtree:true,childList:true});
}
var saved="en";try{saved=localStorage.getItem("saiedPortfolioLanguage")||"en"}catch(e){}
setLang(saved);
})();