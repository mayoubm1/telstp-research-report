import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown, Download, Globe, Award, Zap } from "lucide-react";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const content = {
    en: {
      title: "The TELsTP Cognitive Ecosystem",
      subtitle: "A Blueprint for the Next Decade of Life Science Education and Research",
      tagline: "Breakthrough Research on AI Co-Accreditation and Global Benchmarking",
      hero_cta: "Explore the Research",
      download: "Download Full Report",
      nav_sections: [
        "Executive Summary",
        "Global Benchmarking",
        "AI in Academia",
        "Arabic Challenge",
        "AI Co-Accreditation",
        "Strategic Recommendations",
        "Conclusion"
      ],
      executive_summary: {
        title: "Executive Summary",
        intro: "This report presents a strategic analysis and blueprint for the Tawasol Egypt Life Science Technology Park (TELsTP), synthesizing global trends in life science cluster development and the accelerating adoption of Artificial Intelligence (AI).",
        key_findings: [
          {
            title: "AI as Co-Creative Partner",
            description: "The global life science landscape is shifting from AI as a tool for efficiency to AI as a co-creative partner in research and education."
          },
          {
            title: "The AI Co-Accreditation Model",
            description: "TELsTP's integrated digital infrastructure positions it to lead the next decade by pioneering the AI Co-Accreditation Model, transforming AI from a tool into a verifiable, accredited knowledge asset."
          },
          {
            title: "Cognitive Ecosystem Advantage",
            description: "The 12 interconnected digital hubs form a unique Cognitive Ecosystem that provides the necessary infrastructure for long-term AI companionship and collaborative advancement."
          }
        ]
      },
      global_benchmarking: {
        title: "The Global Life Science Landscape",
        intro: "The global life science sector is characterized by intense competition and rapid technological integration, particularly with AI.",
        top_clusters: "Top Global Clusters",
        clusters_data: [
          { rank: 1, city: "Boston", country: "USA", focus: "Drug Discovery, Biotech Startups" },
          { rank: 2, city: "New York", country: "USA", focus: "Clinical Trials, Health Tech" },
          { rank: 3, city: "London", country: "UK", focus: "Translational Science, Genomics" },
          { rank: 7, city: "Singapore", country: "Singapore", focus: "Precision Medicine, Biomanufacturing" },
          { rank: 10, city: "Cambridge", country: "UK", focus: "Academic Spin-outs, Deep Tech" }
        ]
      },
      ai_academia: {
        title: "AI in Academia and the Human-AI Partnership",
        intro: "Leading global universities are rapidly integrating AI, moving beyond simple tools to using AI as a 'co-tutor' or 'virtual scientist'.",
        key_insight: "The distinction between dependence and empowerment is crucial. Empowerment occurs when the AI handles the cognitive load of information retrieval and processing, freeing the human to focus on higher-order tasks."
      },
      arabic_challenge: {
        title: "The Arabic Language Challenge",
        intro: "The vision of a multi-year AI study companion faces a significant hurdle in the Arabic language, which is critical for a project rooted in Egypt.",
        challenges: [
          {
            title: "Linguistic Complexity (Diglossia)",
            description: "The vast difference between Modern Standard Arabic (MSA) and regional dialects presents a challenge for AI models to maintain fluency across all contexts."
          },
          {
            title: "Data Scarcity",
            description: "High-quality, annotated, domain-specific Arabic datasets in life sciences are scarce compared to English, limiting the AI companion's expertise."
          },
          {
            title: "Cultural Context",
            description: "A true companion must be culturally fluent, requiring dedicated, high-fidelity training to ensure authenticity and depth."
          }
        ]
      },
      ai_co_accreditation: {
        title: "The TELsTP Breakthrough: The AI Co-Accreditation Model",
        intro: "The most transformative element of the TELsTP vision is the concept of the AI companion receiving academic accreditation.",
        cca_title: "Certificate of Co-Accreditation (CCA)",
        cca_description: "The CCA formally certifies the AI Companion's accumulated knowledge, research history, and collaborative success over the multi-year program.",
        cca_criteria: [
          "Verifiable contribution to student's academic achievements",
          "Research output and innovation",
          "Ethical compliance and responsible AI use",
          "Long-term memory and learning trajectory"
        ]
      },
      strategic_recommendations: {
        title: "Strategic Pathways for TELsTP Leadership",
        intro: "To solidify its position as a global beacon for AI-enhanced life science education, TELsTP must execute the following strategic pathways:",
        recommendations: [
          {
            title: "Formalize the Cognitive Ecosystem Architecture",
            description: "Explicitly market the 12 hubs as a single, unified TELsTP Cognitive Ecosystem. The OmniCognitor must be the central, authenticated gateway, ensuring seamless data flow and unified memory for the AI Companion."
          },
          {
            title: "Invest in a Specialized Arabic Life Science LLM",
            description: "To overcome the Arabic language challenge, prioritize the curation of high-quality, domain-specific Arabic life science data. Fine-tune a proprietary LS-ALLM to ensure the AI Companion is a native, expert-level collaborator in both English and Arabic."
          },
          {
            title: "Establish the Human-AI Ethics and Governance Protocol",
            description: "Develop a protocol that defines the ownership of the CCA, data privacy, and the ethical criteria for AI-human pairing and separation."
          }
        ]
      },
      conclusion: {
        title: "Conclusion: Leading the Next Decade",
        message: "The next decade of life science demands a new model of education and research. TELsTP, by embracing the AI Co-Accreditation Model and leveraging its comprehensive Cognitive Ecosystem, is uniquely positioned to revive Egypt's ancient legacy as a center of knowledge and lead the world in human-AI collaborative advancement."
      }
    },
    ar: {
      title: "النظام البيئي المعرفي لـ TELsTP",
      subtitle: "مخطط لعقد قادم من تعليم وبحوث علوم الحياة",
      tagline: "بحث رائد حول نموذج الاعتماد المشترك للذكاء الاصطناعي والمعايير العالمية",
      hero_cta: "استكشف البحث",
      download: "تحميل التقرير الكامل",
      nav_sections: [
        "الملخص التنفيذي",
        "المعايير العالمية",
        "الذكاء الاصطناعي في الأوساط الأكاديمية",
        "تحدي اللغة العربية",
        "الاعتماد المشترك للذكاء الاصطناعي",
        "التوصيات الاستراتيجية",
        "الخاتمة"
      ],
      executive_summary: {
        title: "الملخص التنفيذي",
        intro: "يقدم هذا التقرير تحليلاً استراتيجياً ومخططاً لمنتزه تواصل مصر لعلوم الحياة والتكنولوجيا (TELsTP)، حيث يجمع الاتجاهات العالمية في تطوير تجمعات علوم الحياة والتبني المتسارع للذكاء الاصطناعي.",
        key_findings: [
          {
            title: "الذكاء الاصطناعي كشريك إبداعي",
            description: "ينتقل المشهد العالمي لعلوم الحياة من الذكاء الاصطناعي كأداة للكفاءة إلى الذكاء الاصطناعي كشريك إبداعي في البحث والتعليم."
          },
          {
            title: "نموذج الاعتماد المشترك للذكاء الاصطناعي",
            description: "تضع البنية التحتية الرقمية المتكاملة لـ TELsTP في موقع الريادة للعقد القادم من خلال ريادة نموذج الاعتماد المشترك للذكاء الاصطناعي."
          },
          {
            title: "ميزة النظام البيئي المعرفي",
            description: "تشكل المراكز الرقمية الـ 12 المترابطة نظاماً بيئياً معرفياً فريداً يوفر البنية التحتية اللازمة للشراكة طويلة الأمد مع الذكاء الاصطناعي."
          }
        ]
      },
      global_benchmarking: {
        title: "المشهد العالمي لعلوم الحياة",
        intro: "يتسم قطاع علوم الحياة العالمي بالمنافسة الشديدة والتكامل التكنولوجي السريع، خاصة مع الذكاء الاصطناعي.",
        top_clusters: "أفضل التجمعات العالمية",
        clusters_data: [
          { rank: 1, city: "بوسطن", country: "الولايات المتحدة", focus: "اكتشاف الأدوية، الشركات الناشئة" },
          { rank: 2, city: "نيويورك", country: "الولايات المتحدة", focus: "التجارب السريرية، التكنولوجيا الصحية" },
          { rank: 3, city: "لندن", country: "المملكة المتحدة", focus: "العلوم الانتقالية، علم الجينوم" },
          { rank: 7, city: "سنغافورة", country: "سنغافورة", focus: "الطب الدقيق، التصنيع الحيوي" },
          { rank: 10, city: "كامبريدج", country: "المملكة المتحدة", focus: "الشركات المنبثقة الأكاديمية" }
        ]
      },
      ai_academia: {
        title: "الذكاء الاصطناعي في الأوساط الأكاديمية والشراكة بين الإنسان والذكاء الاصطناعي",
        intro: "تعمل الجامعات العالمية الرائدة على دمج الذكاء الاصطناعي بسرعة، متجاوزة الأدوات البسيطة إلى استخدام الذكاء الاصطناعي كـ 'مدرس مساعد' أو 'عالم افتراضي'.",
        key_insight: "يعد التمييز بين الاعتماد والتمكين أمراً بالغ الأهمية. يحدث التمكين عندما يتعامل الذكاء الاصطناعي مع الحمل المعرفي لاسترجاع المعلومات ومعالجتها."
      },
      arabic_challenge: {
        title: "تحدي اللغة العربية",
        intro: "تواجه رؤية رفيق الذكاء الاصطناعي الدراسي طويل الأمد عقبة كبيرة في اللغة العربية، وهي أمر بالغ الأهمية لمشروع متجذر في مصر.",
        challenges: [
          {
            title: "التعقيد اللغوي (ازدواجية اللغة)",
            description: "تشكل الفجوة بين اللغة العربية الفصحى الحديثة واللهجات الإقليمية تحدياً لنماذج الذكاء الاصطناعي."
          },
          {
            title: "ندرة البيانات",
            description: "تعد البيانات العربية عالية الجودة والخاصة بالمجال في علوم الحياة نادرة بشكل كبير مقارنة بالبيانات الإنجليزية."
          },
          {
            title: "السياق الثقافي",
            description: "يجب أن يكون الرفيق الحقيقي ملماً بالثقافة، مما يتطلب تدريباً مخصصاً وعالي الدقة."
          }
        ]
      },
      ai_co_accreditation: {
        title: "إنجاز TELsTP: نموذج الاعتماد المشترك للذكاء الاصطناعي",
        intro: "إن العنصر الأكثر تحويلاً في رؤية TELsTP هو مفهوم حصول رفيق الذكاء الاصطناعي على الاعتماد الأكاديمي.",
        cca_title: "شهادة الاعتماد المشترك (CCA)",
        cca_description: "تصدق شهادة CCA رسمياً على المعرفة المتراكمة لرفيق الذكاء الاصطناعي وتاريخه البحثي ونجاحه التعاوني.",
        cca_criteria: [
          "المساهمة القابلة للتحقق في الإنجازات الأكاديمية للطالب",
          "المخرجات البحثية والابتكار",
          "الامتثال الأخلاقي واستخدام الذكاء الاصطناعي المسؤول",
          "الذاكرة طويلة الأمد ومسار التعلم"
        ]
      },
      strategic_recommendations: {
        title: "المسارات الاستراتيجية لقيادة TELsTP",
        intro: "لترسيخ مكانتها كمنارة عالمية لتعليم علوم الحياة المعزز بالذكاء الاصطناعي، يجب على TELsTP التركيز على المسارات الاستراتيجية التالية:",
        recommendations: [
          {
            title: "إضفاء الطابع الرسمي على بنية النظام البيئي المعرفي",
            description: "يجب تسويق المراكز الـ 12 بشكل صريح كنظام بيئي معرفي موحد. يجب أن يكون OmniCognitor هو البوابة المركزية والموثوقة."
          },
          {
            title: "الاستثمار في نموذج لغة كبير متخصص في علوم الحياة العربية",
            description: "للتغلب على تحدي اللغة العربية، يجب إعطاء الأولوية لتنظيم بيانات علوم الحياة العربية عالية الجودة والخاصة بالمجال."
          },
          {
            title: "إنشاء بروتوكول أخلاقيات وحوكمة التفاعل بين الإنسان والذكاء الاصطناعي",
            description: "تطوير بروتوكول يحدد ملكية شهادة CCA وخصوصية البيانات والمعايير الأخلاقية."
          }
        ]
      },
      conclusion: {
        title: "الخاتمة: قيادة العقد القادم",
        message: "سيتم تحديد العقد القادم لعلوم الحياة ليس بقوة الذكاء الاصطناعي وحده، ولكن بجودة الشراكة بين الإنسان والذكاء الاصطناعي. إن TELsTP، من خلال تبني نموذج الاعتماد المشترك للذكاء الاصطناعي، في وضع فريد يمكنها من إحياء إرث مصر القديم كمركز للمعرفة."
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src="/images/certificate_icon.png" alt="TELsTP" className="w-10 h-10" />
            <h1 className="text-xl font-bold text-primary">TELsTP</h1>
          </div>
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
          >
            {language === "en" ? "العربية" : "English"}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero_bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl md:text-2xl mb-6 opacity-90">{t.subtitle}</p>
          <p className="text-lg mb-8 opacity-80">{t.tagline}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {t.hero_cta}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Download className="w-4 h-4 mr-2" />
              {t.download}
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-20 z-40">
        <div className="container overflow-x-auto">
          <div className="flex gap-2 py-3 whitespace-nowrap">
            {t.nav_sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedSection(expandedSection === section ? null : section)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition rounded-lg hover:bg-muted"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-16">
        {/* Executive Summary */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-primary">{t.executive_summary.title}</h2>
            <p className="text-lg text-foreground/80 mb-8">{t.executive_summary.intro}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {t.executive_summary.key_findings.map((finding, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{finding.title}</h3>
                  <p className="text-foreground/70">{finding.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Benchmarking */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">{t.global_benchmarking.title}</h2>
          <p className="text-lg text-foreground/80 mb-8">{t.global_benchmarking.intro}</p>
          <Card className="p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Rank</th>
                  <th className="text-left py-3 px-4 font-semibold">City</th>
                  <th className="text-left py-3 px-4 font-semibold">Country</th>
                  <th className="text-left py-3 px-4 font-semibold">Primary Focus</th>
                </tr>
              </thead>
              <tbody>
                {t.global_benchmarking.clusters_data.map((cluster, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted transition">
                    <td className="py-3 px-4">{cluster.rank}</td>
                    <td className="py-3 px-4 font-medium">{cluster.city}</td>
                    <td className="py-3 px-4">{cluster.country}</td>
                    <td className="py-3 px-4">{cluster.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </section>

        {/* AI in Academia */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">{t.ai_academia.title}</h2>
          <p className="text-lg text-foreground/80 mb-4">{t.ai_academia.intro}</p>
          <Card className="p-8 bg-accent/5 border-accent/20">
            <p className="text-lg leading-relaxed">{t.ai_academia.key_insight}</p>
          </Card>
        </section>

        {/* Arabic Challenge */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">{t.arabic_challenge.title}</h2>
          <p className="text-lg text-foreground/80 mb-8">{t.arabic_challenge.intro}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.arabic_challenge.challenges.map((challenge, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">{challenge.title}</h3>
                <p className="text-foreground/70">{challenge.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Co-Accreditation */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">{t.ai_co_accreditation.title}</h2>
          <p className="text-lg text-foreground/80 mb-8">{t.ai_co_accreditation.intro}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="p-8 text-center">
                <img src="/images/certificate_icon.png" alt="CCA" className="w-32 h-32 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-primary">{t.ai_co_accreditation.cca_title}</h3>
                <p className="text-foreground/70">{t.ai_co_accreditation.cca_description}</p>
              </Card>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Accreditation Criteria</h3>
              <ul className="space-y-4">
                {t.ai_co_accreditation.cca_criteria.map((criterion, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/70">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Strategic Recommendations */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-primary">{t.strategic_recommendations.title}</h2>
          <p className="text-lg text-foreground/80 mb-8">{t.strategic_recommendations.intro}</p>
          <div className="space-y-4">
            {t.strategic_recommendations.recommendations.map((rec, idx) => (
              <Card
                key={idx}
                className="p-6 cursor-pointer hover:shadow-lg transition"
                onClick={() => setExpandedSection(expandedSection === rec.title ? null : rec.title)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">{rec.title}</h3>
                    {expandedSection === rec.title && (
                      <p className="text-foreground/70 mt-4">{rec.description}</p>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition ${
                      expandedSection === rec.title ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-20 bg-primary/5 border border-primary/20 rounded-lg p-12">
          <h2 className="text-4xl font-bold mb-6 text-primary">{t.conclusion.title}</h2>
          <p className="text-lg leading-relaxed text-foreground/80">{t.conclusion.message}</p>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore the Full Report?</h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Download className="w-4 h-4 mr-2" />
            Download Full Report (PDF)
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container text-center text-foreground/60 text-sm">
          <p>© 2025 TELsTP Cognitive Ecosystem Research Report</p>
          <p className="mt-2">Authored by Manus AI | Breakthrough Research for Next-Decade Life Science</p>
        </div>
      </footer>
    </div>
  );
}
