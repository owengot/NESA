<template>
  <div>

    <div class="main-container">
    
<h1>Featured Publication</h1>

<div class="featured-publication" v-for="publication in highlighted" :key='publication'>
<div class="highlight-images">
<img v-for="image in publication.images" :src="image" :key='image' />
</div>
<h2>{{ publication.title }}</h2>
<p style="font-weight: bold">{{ publication.editors }} (Eds.)</p>
<p>{{ publication.description }}</p>
<p style="font-style: italic; margin: -10px 0 0 0 !important">{{ publication.journal }}</p>
<a :href="publication.url" class="journal-link"> Publisher Page </a>

</div>

<h1>Recent publications</h1>


<input type="text" v-model="search" class="search" placeholder="Search by author, topic, journal.." />
     <transition-group name="publications" tag="div" class="publications">
<div class="entry" v-for="entry in filteredCustomers" :key='entry'>
 <h4>{{entry.author}}</h4>
  <p>{{entry.topic}}</p>
  <a :href="entry.url">{{entry.journal}}</a>
</div>
</transition-group>
  </div>
  </div>

</template>

<script>

export default {
  layout: "about",
  pageHeader: "../publications.jpg",
  pageTitle: "Publications",
  bgPosition: "0 -210px",
  data() {
    return {
      title: "Publications",
      highlighted: [
        {
      "title": "Uterine Myoma, Myomectomy and Minimally Invasive Treatments.",
      "description": "This book is devoted to myomas, covering both recent advances in our understanding of their behaviour, and an overview of the current options for their minimally invasive treatments, with endoscopy and new devices. As we learn more about the molecular, genetic and biology of myomas, we will be able to develop more innovative treatments.",
      "editors": "Tinelli, Andrea; Malvasi, Antonio",
      "journal": "Springer",
      "images": ["../publication_1.jpg", "../publication_2.jpg"],
      "url": "https://www.springer.com/gp/book/9783319103044",
        }
      ],
      users: [
        {
      "author": "Stark M.",
      "topic": "Skin-to-Skin Contact as Quality Measurement.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/29139307",
      "journal": "Am J Med Qual. 2017"
    },
    {
      "author": "Danilov A, Yurova A, Stark M, Mynbaev O, Vassilevski Y.",
      "topic": "Towards a unified evidence-based cesarean section in the african continent the introduction of the all-african surgical database. Clincal Obstetrics, gynecology and reproductive medicine.",
      "url": "https://www.oatext.com/Towards-a-unified-evidence-based-cesarean-section-in-the-african-continent-the-introduction-of-the-all-african-surgical-database.php",
      "journal": "DOI: 10.15761/COGRM.1000181"
    },
    {
      "author": "Stark M (et al.)",
      "topic": "Vaginal Total Hysterectomy in Benign Indications: Hysterectomy Techniques in the Normal-Sized Uterus",
      "url": "https://www.researchgate.net/publication/319773373_Vaginal_Total_Hysterectomy_in_Benign_Indications_Hysterectomy_Techniques_in_the_Normal-Sized_Uterus",
      "journal": "Hysterectomy. Springer, 2018"
    },
    {
      "author": "Witzel K, Benhidjeb T, Kaminski C, Messenbaeck FG, Weitzendorfer M.",
      "topic": "Hybrid techniques and patients' safety in implementing transoral sublingual thyroidectomy.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/29392619",
      "journal": "Endocrine, Feb 2018."
    },
    {
      "author": "Stark M (et al.)",
      "topic": "Cesarean Section: The Evidence-Based Technique, Complications, and Risks",
      "url": "https://www.springer.com/gp/book/9783319487304",
      "journal": "Management and Therapy of Late Pregnancy Complications. Springer 2017"
    },
    {
      "author": "Weichselbaum A, Stark M. ",
      "topic": "Uterine cervix dilatation based on new insights of embryology - method description.",
      "url": "https://www.oatext.com/uterine-cervix-dilatation-based-on-new-insights-of-embryology-method-description.php",
      "journal": "Obstetrics and Gynecology Review. DOI: 10.15761/OGR.1000108"
    },
    {
      "author": "Benhidjeb T, Kosmas IP, Hachem F et al. ",
      "topic": "Laparoscopic cholecystectomy versus transvaginal natural orifice transluminal endoscopic surgery cholecystectomy: results of a prospective comparative single-center study.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/28993135",
      "journal": "Gastrointest Endosc. 2017, 6."
    },
    {
      "author": "Tinelli A, Tsin DA, Forgione A, Zorron R et al.",
      "topic": "Exploring the umbilical and vaginal port during minimally invasive surgery.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/28890429",
      "journal": "J Turk Ger Gynecol Assoc. 2017, 1;18(3):143-147"
    },
    {
      "author": "Witzel K, Messenbaeck F, Weitzendorfer M",
      "topic": "Transoral thyroidectomy: limitations, patients' safety, and own experiences.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/28573543",
      "journal": "Updates Surg. 2017;69(2):193-198."
    },
    ,
    {
      "author": "Benhidjeb T, Ioannis P Kosmas, Hachem F",
      "topic": "Laparoscopic cholecystectomy versus transvaginal natural orifice transluminal endoscopic surgery cholecystectomy: results of a prospective comparative single-center study.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/28993135",
      "journal": "Gastrointestinal Endoscopy. Volume 87, Issue 2, 2018, Pages 509-516"
    },
    {
      "author": "Stark M, Malvasi A, Tinelli A",
      "topic": "The Importance of Standardizing Surgical Methods for Comparison between Hospitals.",
      "url": "http://www.clinicsinsurgery.com/pdfs_folder/cis-v2-id1566.pdf",
      "journal": "Clinics in Surgery V 2. 17, 2017"
    },
    {
      "author": "Mynbaev O, Ivanov A, Benhidjeb T, Stark M",
      "topic": "Re: \"The Onset of Intra-Abdominal Adhesions During Closed-Abdomen Hyperthermic Intraperitoneal Chemotherapy\"",
      "url": "https://www.liebertpub.com/doi/10.1089/lap.2017.0011",
      "journal": "J Laparoendosc Adv Surg Tech A. 2017 Mar 2."
    },
    {
      "author": "Mynbaev O, Ivanov A, Simakov S, Roubliova X, Eliseeva M, Benhidjeb T, Stark M.",
      "topic": "Work of separation - A method to assess intraperitoneal adhesion and healing of parietal peritoneum in an animal model.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/28129591",
      "journal": "Clin Biomech (Bristol, Avon) 2017 Feb;42:97-98."
    },
    {
      "author": "Mynbaev O, Tinelli A, Malvasi A, Babenko T, Kalzhanov Z, Dao B, Stark M. Lancet.",
      "topic": "The CORONIS trial on caesarean section.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/27707489",
      "journal": "2016 Oct 1;388(10052):1372-1373."
    },
    {
      "author": "Stark M.",
      "topic": "Does size matter?",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5019837/",
      "journal": "J Turk Ger Gynecol Assoc. 2016 Sep 1;17(3):175"
    },
    {
      "author": "Stark, M, Mynbaev. O, Vassilevski, Y, Rozenberg",
      "topic": "Could Revision of the Embryology Influence Our Cesarean Delivery Technique: Towards an Optimized Cesarean Delivery for Universal Use",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5045307/",
      "journal": "P AJP Rep 2016; 06(03): e352-e354"
    },
    {
      "author": "Malvasi A, Tinelli A.",
      "topic": "Persistent occiput posterior position associated to asynclitism, solved by manual rotation: is always possible to perform safely this maneuver?",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/27609143",
      "journal": "J Matern Fetal Neonatal Med. 2016 Sep 9:1-2."
    },
    {
      "author": "Sparic R, Malvasi A, Kadija S, Babovic I, Nejkovic L, Tinelli A.",
      "topic": "Cesarean myomectomy trends and controversies: an appraisal.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/27328626",
      "journal": "J Matern Fetal Neonatal Med. 2016 Jul 17:1-10."
    },
    {
      "author": "Malvasi A, Cavallotti C, Resta L, Mynbaev OA, Di Tommaso S, Vergara D, Gustapane S, Giacci F, Tinelli A.",
      "topic": "Laminin and collagen IV: Two polypeptides as marker of dystocic labor. ",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/27001062",
      "journal": "Curr Protein Pept Sci. 2016 Mar 22."
    },
    {
      "author": "Malvasi A, Tinelli A. ",
      "topic": "The smartphone use during intrapartum ultrasound: a useful tool to diagnose the persistent asynclitism and occiput posterior position before and during birth.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26788834",
      "journal": "J Matern Fetal Neonatal Med. 2016 Nov;29(21):3488-9."
    },
    {
      "author": "Tinelli A, Sparic R, Kadija S, Babovic I, Tinelli R, Mynbaev OA, Malvasi A.",
      "topic": "Myomas: anatomy and related issues.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26785282",
      "journal": "Minerva Ginecol. 2016 Jun;68(3):261-73."
    },
    {
      "author": "Malvasi A, di Renzo GC (Editors)",
      "topic": "Cesarean Delivery: A Comprehensive Illustrated Practical Guide",
      "url": "https://www.crcpress.com/Cesarean-Delivery-A-Comprehensive-Illustrated-Practical-Guide/Renzo-Malvasi/p/book/9781482226331",
      "journal": "2016 Apple Academic Press Inc. 978-1-4822-2633-1 (ISBN)"
    },
    {
      "author": "Mynbaev OA, Tinelli A, Malvasi A, Kadayifci O, Benhidjeb T, Stark M.",
      "topic": "Is there only CO2 insufflation pressure impact on surgical field visualization during robotic surgery?",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26335187",
      "journal": "Arch Gynecol Obstet. 2015 Dec;292(6):1177-8"
    },
    {
      "author": "Gerntke CI, Kersten JF, Schön G, Mann O, Stark M, Benhidjeb T.",
      "topic": "Women's Perception of Transvaginal Natural Orifice Transluminal Endoscopic Surgery (NOTES): Results of a Survey of Female Medical Staff and Literature Review.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26234564",
      "journal": "Surg Innov. 2015 Aug 2. pii: 1553350615598621."
    },
    {
      "author": "Mynbaev OA, Malvasi A, Melerzanov AV, Stark M, Tinelli A.",
      "topic": "Abdominopelvic drainage during laparoscopic myomectomy: left-over hook or still relevant?",
      "url": "#N/A",
      "journal": "Eur J Obstet Gynecol Reprod Biol. 2015 Aug;191:138-9"
    },
    {
      "author": "Stark M.",
      "topic": "The man behind the name Joel - a personal encounter.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25758013",
      "journal": "Acta Obstet Gynecol Scand. 2015 Jun;94(6):669."
    },
    {
      "author": "Stark M, Pomati S, D'Ambrosio A, Giraudi F, Gidaro S.",
      "topic": "A new telesurgical platform--preliminary clinical results.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25627435",
      "journal": "Minim Invasive Ther Allied Technol. 2015 Feb;24(1):31-6"
    },
    {
      "author": "Malvasi A, Giacci F, Gustapane S, Sparic R, Barbera A, Tinelli A.",
      "topic": "Intrapartum sonographic signs: new diagnostic tools in malposition and malrotation.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26444321",
      "journal": "J Matern Fetal Neonatal Med. 2015 Oct 7:1-6"
    },
    {
      "author": "Malvasi A, Barbera A, Di Vagno G, Gimovsky A, Berghella V, Ghi T, Di Renzo GC, Tinelli A.",
      "topic": "Asynclitism: a literature review of an often forgotten clinical condition.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25283847",
      "journal": "J Matern Fetal Neonatal Med. 2015 Nov;28(16):1890-4"
    },
    {
      "author": "Malvasi A, Barbera A, Ghi T, Tinelli A.",
      "topic": "Lateral asynclitism: introduction of a new terminology associated to specific fetal position of the fetal head diagnosed by ultrasound in the second stage of labor.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25260132",
      "journal": "J Matern Fetal Neonatal Med. 2015 Oct;28(15):1839-41"
    },
    {
      "author": "Tinelli A, Di Renzo GC, Malvasi A.",
      "topic": "The intrapartum ultrasonographic detection of the Bandl ring as a marker of dystocia.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26384791",
      "journal": "Int J Gynaecol Obstet. 2015 Sep 4. pii: S0020-7292(15)00571-8"
    },
    {
      "author": "Malvasi A, Tinelli A.",
      "topic": "Intrapartum sonography: two sings to detect asynclitism degree.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26037727",
      "journal": "J Matern Fetal Neonatal Med. 2015 Jun 5:1-2."
    },
    {
      "author": "Tinelli A, Mynbaev OA, Mettler L, Hurst BS, Pellegrino M, Nicolardi G, Kosmas I, Malvasi A.",
      "topic": "A combined ultrasound and histologic approach for analysis of uterine fibroid pseudocapsule thickness.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24879045",
      "journal": "Reprod Sci. 2014 Sep;21(9):1177-86"
    },
    {
      "author": "Di Tommaso S, Massari S, Malvasi A, Vergara D, Maffia M, Greco M, Tinelli A.",
      "topic": "Selective genetic analysis of myoma pseudocapsule and potential biological impact on uterine fibroid medical therapy.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25363374",
      "journal": "Expert Opin Ther Targets. 2015;19(1):7-12."
    },
    {
      "author": "Malvasi A, Di Renzo GC, Tinelli A.",
      "topic": "Is the twisted head position a lateral asynclitism in the first stage of labor?",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25488838",
      "journal": "Ultrasound Obstet Gynecol. 2014 Dec 9."
    },
    {
      "author": "Mynbaev OA, Eliseeva MY, Kadayifci OT, Benhidjeb T, Stark M.",
      "topic": "Inhibition of oxygen scavengers realized by peritoneal macrophages: an adhesion prevention target?",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4238895",
      "journal": "Int J Nanomedicine. 2014 Nov 14;9:5259-60. eCollection 2014."
    },
    {
      "author": "Falavolti C, Gidaro S, Ruiz E, Altobelli E, Stark M, Ravasio G, Ravasio G, Lazzaretti SS, Buscarini M.",
      "topic": "Experimental Nephrectomies Using a Novel Telesurgical System: (The Telelap ALF-X)-A Pilot Study.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25433265",
      "journal": "Surg Technol Int. 2014;25:37-41."
    },
    {
      "author": "Belci D, Di Renzo GC, Stark M, Duric J, Zoricic D, Belci M, Peteh LL.",
      "topic": "Morbidity and chronic pain following different techniques of caesarean section: A comparative study.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25384067",
      "journal": "J Obstet Gynaecol. 2014 Nov 10:1-5."
    },
    ,
    {
      "author": "Malvasi A, Barbera A, Di Vagno G, Gimovsky A, Berghella V, Ghi T, Di Renzo GC, Tinelli A.",
      "topic": "Asynclitism: a literature review of an often forgotten clinical condition.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25283847",
      "journal": "J Matern Fetal Neonatal Med. 2014 Oct 29:1-5."
    },
    {
      "author": "Mynbaev OA, Eliseeva MY, Tinelli A, Malvasi A, Kosmas IP, Medvediev MV, Babenko TI, Mazitova MI, Kalzhanov ZhR, Stark M.",
      "topic": "A personalized adhesion prevention strategy: E. Arslan, T. Talih, B. Oz, B. Halaclar, K. Caglayan, M. Sipahi, Comparison of lovastatin and hyaluronic acid/carboxymethyl cellulose on experimental created peritoneal adhesion model in rats",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/25072704",
      "journal": "Int. J. Surg. 12 (2) (2014) 120-124. Int J Surg. 2014;12(9):901-5."
    },
    {
      "author": "Mynbaev OA, Eliseeva MY, Tinelli A, Malvasi A, Massaro F, Simakov SS, Stark M.",
      "topic": "Re. 'Abdominal hypertension and decompression: the effect on peritoneal metabolism in an experimental porcine study'.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24931381",
      "journal": "Eur J Vasc Endovasc Surg. 2014;48(2):229-30."
    },
    {
      "author": "Stark M.",
      "topic": "Misgav-Ladach method for Cesarean section: Detailed description of surgical methods.",
      "url": "#N/A",
      "journal": "Obstetrics, Gynecology and Neonatology (Armenia) 2014;8: 56-60."
    },
    {
      "author": "Tinelli A, Mynbaev OA, Mettler L, Hurst BS, Pellegrino M, Nicolardi G, Kosmas I, Malvasi A.",
      "topic": "A Combined Ultrasound and Histologic Approach for Analysis of Uterine Fibroid Pseudocapsule Thickness.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24879045",
      "journal": "Reprod Sci. 2014."
    },
    {
      "author": "Kitsou C, Kosmas I, Lazaros L, Hatzi E, Euaggelou A, Mynbaev O, Tournaye H, Prapas N, Prapas I, Zikopoulos K, Galani V, Georgiou I.",
      "topic": "Ovarian hyperstimulation syndrome inhibition by targeting VEGF, COX-2 and Calcium pathways: a preclinical randomized study.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24819316",
      "journal": "Gynecol Endocrinol. 2014 May 13:1-6."
    },
    {
      "author": "Malvasi A, Casciaro F, Minervini MM, Kosmas I, Mynbaev OA, Pacella E, Monti Condesnitt V, Creanza A, Di Renzo GC, Tinelli A.",
      "topic": "Myo-inositol, D-chiro-inositol, folic acid and manganese in second trimester of pregnancy: a preliminary investigation.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24488919",
      "journal": "Eur Rev Med Pharmacol Sci. 2014;18(2):270-4."
    },
    {
      "author": "Ruiz Morales E, Gidaro S, Stark M. ",
      "topic": "The future of telesurgery and new technology. In: ",
      "url": "https://www.degruyter.com/viewbooktoc/product/204040",
      "journal": "Kilic SG, Ertan KA, Kose MF. (Eds.) Robotic Surgery: Practical examples in gynecology. Berlin/Boston: De Gruyter, 2014: 385-90. ISBN 978-3-11-030655-2"
    },
    {
      "author": "Mynbaev OA, Stark M, Biro P.",
      "topic": "Toward adhesion-free endoscopy?",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24726219",
      "journal": "Fertil Steril. 2014 10. pii: S0015-0282(14)00207-6."
    },
    {
      "author": "Gidaro S, Altobelli E, Falavolti C, Bove AM, Ruiz EM, Stark M, Ravasio G, Lazzaretti SS, Maurizio B. ",
      "topic": "Vesicourethral anastomosis using a novel telesurgical system with haptic sensation, the telelap alf-x: a pilot study.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24706079",
      "journal": "Surg Technol Int. 2014;24:35-40."
    },
    {
      "author": "Mynbaev OA, Biro P, Eliseeva MY, Tinelli A, Malvasi A, Kosmas IP, Medvediev MV, Babenko TI, Mazitova MI, Simakov SS, Stark M. ",
      "topic": "A surgical polypragmasy: Koninckx PR, Corona R, Timmerman D, Verguts J, Adamyan L. Peritoneal full-conditioning reduces postoperative adhesions and pain: a randomised controlled trial in deep endometriosis surgery.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3984740",
      "journal": "J Ovarian Res. 2013 Dec 11;6(1):90.J Ovarian Res.2014 10;7(1):29."
    },
    {
      "author": "Stark M, Benhidjeb T. ",
      "topic": "Endoscopia transvaginal. El futuro de la cirugia abdominal. In: Davila Avila F, Tsin D. Cirurgia sin Huella. Cirurgia Laparoscopica con 1 Puerto (CL1P) y Culdolaparoscopia.",
      "url": "#N/A",
      "journal": "AMOLCA, Actualidades Medicas, C.A., 2014: 373-378. ISBN 978-958-8816159"
    },
    {
      "author": "Davila Avila F, Tsin D. ",
      "topic": "Cirurgia sin Huella. Cirurgia Laparoscopica con 1 Puerto (CL1P) y Culdolaparoscopia.",
      "url": "http://www.amolca.com/publicaciones/cirugia-sin-huella-tecnicas-innovadoras-de-cirugia-laparoscopica-con-1-puerto-cl1p/",
      "journal": "AMOLCA, Actualidades Medicas, C.A., 2014. ISBN 978-958-8816159."
    },
    {
      "author": "Mynbaev OA, Eliseeva MY, Babenko TI, Tinelli A, Malvasi A, Kosmas IP, Stark M. ",
      "topic": "Comment on \"Prospective Experimental Study to Investigate the Peritoneal Adhesion Formation of Argon Plasma Coagulation (APC) Versus a Novel Aerosol Plasma in a Rat Model\".",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24532316",
      "journal": "Surg Innov. 2014 Feb 14."
    },
    {
      "author": "Mynbaev OA, Tinelli A, Malvasi A, Stark M. ",
      "topic": "Letter to the editor: Local tissue ischemia is not necessary for suture-induced adhesion formation by Dr. Rajab.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24477639",
      "journal": "Langenbecks Arch Surg. 2014 Jan 31."
    },
    {
      "author": "Tinelli A, Malvasi A, Mynbaev OA, Barbera A, Perrone E, Guido M, Kosmas I, Stark M. ",
      "topic": "The surgical outcome of intracapsular cesarean myomectomy. A match control study.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/23662726",
      "journal": "J Matern Fetal Neonatal Med. 2014;27(1):66-71."
    },
    {
      "author": "D'Ambrosio A, Spadaro S, Mirabella L, Natale C, Cotoia A, De Capraris A, Menga R, Salatto P, Malvasi A, Brizzi A, Tinelli A, Dambrosio M, Cinnella G. ",
      "topic": "The anaesthetic and recovery profile of two concentrations (0.25% and 0.50%), of intrathecal isobaric Levobupivacaine for combined spinal-epidural (CSE) anaesthesia in patients undergoing modified Stark method caesarean delivery: a double blinded randomized trial.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24338466",
      "journal": "Eur Rev Med Pharmacol Sci. 2013;17(23):3229-36."
    },
    {
      "author": "Mynbaev OA, Eliseeva MY, Tinelli A, Malvasi A, Kosmas IP, Medvediev MV, Kalzhanov ZR, Stark M. ",
      "topic": "An inexact study design produced misleading conclusions: To perform operative procedures in an optimized local atmosphere: Can it reduce post-operative adhesion formation?",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24316018",
      "journal": "de Vries A, Mårvik R, Kuhry E. [Int J Surg 2013 Sep 27. pii: S1743-9191(13)01053-4. doi: 10.1016/j.ijsu.2013.09.005]. Int J Surg. 2013 4. pii: S1743-9191(13)01109-6."
    },
    {
      "author": "Carati D, Guido M, Malvasi A, Zizza A, Tinelli A. ",
      "topic": "Efficacy of a Dermoxen® lenitiva for pruritus genitalis in a randomized, double blind trial.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24142616",
      "journal": "Eur Rev Med Pharmacol Sci. 2013;17(19):2668-74."
    },
    {
      "author": "Davis CR, Bates AS, Toll EC, Cole M, Smith FC, Stark M. ",
      "topic": "Surgical Safety Training of World Health Organization Initiatives.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24006029",
      "journal": "Am J Med Qual. 2013 Sep 4."
    },
    {
      "author": "Malvasi A, Bochicchio M, Vaira L, Longo A, Pacella E, Tinelli A. ",
      "topic": "The fetal head evaluation during labor in the occiput posterior position: the ESA (evaluation by simulation algorithm) approach.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24093425",
      "journal": "J Matern Fetal Neonatal Med. 2013."
    },
    {
      "author": "Tinelli A, Mettler L, Malvasi A, Hurst B, Catherino W, Mynbaev OA, Guido M, Alkatout I, Schollmeyer T. ",
      "topic": "Impact of surgical approach on blood loss during intracapsular myomectomy.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24044380",
      "journal": "Minim Invasive Ther Allied Technol. 2013."
    },
    {
      "author": "Malvasi A, Cavallotti C, Nicolardi G, Pellegrino M, Vergara D, Greco M, Kosmas I, Mynbaev OA, Kumakiri J, Tinelli A. ",
      "topic": "The opioid neuropeptides in uterine fibroid pseudocapsules: a putative association with cervical integrity in human reproduction.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/23937196",
      "journal": "GynecolEndocrinol. 2013;29(11):982-8."
    },
    {
      "author": "Mettler L, Schollmeyer T, Tinelli A, Malvasi A, Alkatout I. ",
      "topic": "Complications of Uterine Fibroids and Their Management, Surgical Management of Fibroids, Laparoscopy and Hysteroscopy versus Hysterectomy, Haemorrhage, Adhesions, and Complications.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3348525",
      "journal": "Obstet Gynecol Int. 2012;2012:791248."
    },
    {
      "author": "Mettler L, Clevin L, Ternamian A, Puntambekar S, Schollmeyer T, Alkatout I. ",
      "topic": "The past, present and future of minimally invasive endoscopy in gynecology: a review and speculative outlook.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/23964793",
      "journal": "Minim Invasive Ther Allied Technol. 2013;22(4):210-26."
    },
    {
      "author": "Tinelli A, Gasbarro N, Lupo P, Malvasi A, Tsin DA, Davila F, Dominguez G, Mettler L, Wetter PA. ",
      "topic": "Safe introduction of ancillary trocars.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3481235",
      "journal": "JSLS. 2012;16(2):276-9."
    },
    {
      "author": "Alkatout I, Schollmeyer T, Hawaldar NA, Sharma N, Mettler L. ",
      "topic": "Principles and safety measures of electrosurgery in laparoscopy.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3407433",
      "journal": "JSLS. 2012;16(1):130-9."
    },
    {
      "author": "Malvasi A, Tinelli A, Stark M. Stark or Misgav Ladah cesarean section, in: Sheiner E (ed.)",
      "topic": "Cesarean Section: Procedures, Complications and Recovery",
      "url": "https://www.novapublishers.com/catalog/product_info.php?products_id=32561",
      "journal": "Nova Science Pub Inc, 2012: 97-116. ISBN-10 1-62081-214-2"
    },
    {
      "author": "Stark M, Malvasi A, Tinelli A, Mynbaev O. ",
      "topic": "Peripartum robotic-assisted laparoscopic hysterectomy after second-trimester pregnancy loss with placenta increta.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/23884253",
      "journal": "Obstet Gynecol. 2013;122(6):1303."
    },
    {
      "author": "Mynbaev OA, Biro P, Stark M. ",
      "topic": "Intraoperative low-tidal-volume ventilation.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24195562",
      "journal": "N Engl J Med. 2013 7;369(19):1862."
    },
    {
      "author": "Benhidjeb T, Gerntke IC, Stark M. ",
      "topic": "Scarless surgery by using natural orifices of the body: rationale and results.",
      "url": "#N/A",
      "journal": "Arab Health Mag. 2013;5:80-2."
    },
    {
      "author": "Stark M, Pomati S, D'Ambrosio A, Blanco R, Brasset D, Giorgi F, Nizovtsev D, Ruiz Morales E. ",
      "topic": "The Telelap Alf-x concept and system: universal telesurgery",
      "url": "http://www.cambridge.org/cr/academic/subjects/medicine/obstetrics-and-gynecology-reproductive-medicine/nezhats-video-assisted-and-robotic-assisted-laparoscopy-and-hysteroscopy-4th-edition?format=WW&isbn=9781107011601",
      "journal": "Nezhat C, Nezhat F, Nezhat C (eds.), Nezhat's video-assisted and robotic-assisted laparoscopy and hysteroscopy Cambridge: Cambridge University Press, 2013, 4th ed.: 637-41. ISBN 978-1-107-01160-1."
    },
    {
      "author": "Stark M, Gidaro S, Ruiz Morales E.  ",
      "topic": "The future of telesurgery.",
      "url": "https://www.amazon.com/Current-Progress-Obstetrics-Gynecology-Studd/dp/8190491431",
      "journal": "Studd J, Lin Tan S, Chervenak FA (Eds.), Current progress in obstetrics &amp; gynaecology., Tree Life Media, 2012:367-73. ISBN: 978-81-904914-3-3"
    },
    {
      "author": "Tsin DA, Dominguez G, Davila F, Alonso-Rivera JM, Safro B, Tinelli A. ",
      "topic": "Transvaginal liver surgery using a tethered magnet and a laparoscopic rein.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3662732/",
      "journal": "JSLS. 2013;17(1):135-8."
    },
    {
      "author": "Gidaro S, Buscarini M, Ruiz E, Labruzzo A, Stark M. ",
      "topic": "Telelap Alf-X: A novel Telesurgical System for the 21st Century.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/23225591",
      "journal": "Surg Technol Int. 2012 Dec 1;XXII."
    },
    {
      "author": "Stark M, Gidaro S, Ruiz Morales E. ",
      "topic": "The future of telesurgery: a universal system with haptic sensation.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3940229",
      "journal": "Obstetrics, Gynecology, and Neonatology 2012; Vol. 6, No. 1:29-33."
    },
    {
      "author": "Malvasi, Antonio (Ed.). ",
      "topic": "Intrapartum Ultrasonography for Labor Management.",
      "url": "https://www.springer.com/gp/book/9783642299384",
      "journal": "Springer, 2013. ISBN 978-3-642-29939-1."
    },
    {
      "author": "Stark M, Benhidjeb T, Gidaro S, Ruiz Morales E. ",
      "topic": "The future of telesurgery: a universal system with haptic sensation.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/24627681",
      "journal": "J Turkish German Gynecol Assoc 2012; 13: 74-6."
    },
    {
      "author": "Stark M, Ruiz Morales E, Gidaro S. ",
      "topic": "Telesurgery is promising but still need proof through prospective comparative studies.",
      "url": "http://pdf.medrang.co.kr/Ksgoc/023/Ksgoc023-02-15.pdf",
      "journal": "J Gynecol Oncol Vol. 23, No. 2:134-135. (Download)"
    },
    {
      "author": "Zizza A, Tinelli A, Malvasi A, Barbone E, Stark M, De Donno A, Guido M. ",
      "topic": "Caesarean Section in the World: a new ecological approach.",
      "url": "http://www.nesacademy.org/downloads/JPMH_Cesarean%20section_2011.pdf",
      "journal": "J prev med hyg 2011; 52: 161-173. (Download)"
    },
    {
      "author": "Tinelli A (Ed.)",
      "topic": "Laparoscopic Entry - Traditional Methods, New Insights and Novel Approaches.",
      "url": "https://www.springer.com/gp/book/9780857299796",
      "journal": "London: Springer, 2012. ISBN: 9780857299796"
    },
    {
      "author": "Tinelli A, Hurst BS, Hudelist G, Tsin DA, Stark M, Mettler L, Guido M, Malvasi A. ",
      "topic": "Laparoscopic myomectomy focusing on the myoma pseudocapsule: technical and outcome reports.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/22095838",
      "journal": "Hum Reprod. 2012;27(2):427-35."
    },
    {
      "author": "Malvasi A, Tinelli A, Guido M, Cavallotti C, Dell'edera D, Zizza A, Di Renzo GC, Stark M, Bettocchi S. ",
      "topic": "Effect of avoiding bladder flap formation in caesarean section on repeat caesarean delivery.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21992961",
      "journal": "Eur J Obstet Gynecol Reprod Biol. 2011;159(2):300-4;"
    },
    {
      "author": "Tinelli A, Malvasi A, Cavallotti C, Dell'Edera D, Tsin DA, Stark M, Mettler L.",
      "topic": "The management of fibroids based on immunohistochemical studies of their pseudocapsules.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21961807",
      "journal": "Expert Opin Ther Targets. 2011;15(11):1241-7."
    },
    {
      "author": "Tsin DA, Tinelli A, Malvasi A, Davila F, Jesus R, Castro-Perez R. ",
      "topic": "Laparoscopy and Natural Orifice Surgery: First Entry Safety Surveillance Step.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21902961",
      "journal": "JSLS. 2011 15(2):133-5."
    },
    {
      "author": "Malvasi A, Tinelli A, Rahimi S, D'Agnese G, Rotoni C, Dell'edera D, Tsin DA, Cavallotti C. ",
      "topic": "A three-dimensional morphological reconstruction of uterine leiomyoma pseudocapsule vasculature by the Allen-Cahn mathematical model.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21782377",
      "journal": "Biomed Pharmacother. 2011;65(5):359-63."
    },
    {
      "author": "Tsin DA. ",
      "topic": "Laparoscopy rein and cushion: Strategies in single incision laparoscopy surgery and natural orifice surgery.",
      "url": "http://www.obgyn.net/articles/laparoscopy-rein-and-cushion-strategies-single-incision-laparoscopy-surgery-and-natural-orifice",
      "journal": "obgyn.net. Vol. No. September 13, 2011."
    },
    {
      "author": "Wilhelm T, Benhidjeb T. ",
      "topic": "Transoral endoscopic neck surgery: feasibility and safety in a porcine model based on the example of thymectomy.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20734070",
      "journal": "Surg Endosc. 2011;25(6):1741-6."
    },
    {
      "author": "Malvasi A, Tinelli A, Brizzi A, Guido M, Laterza F, De Nunzio G, Bochicchio M, Ghi T, Stark M, Benhamou D, Di Renzo G. ",
      "topic": "Intrapartum sonography head transverse and asynclitic diagnosis with and without epidural analgesia initiated early during the first stage of labor.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21744746",
      "journal": "Eur Rev Med Pharmacol Sci. 2011;15(5):518-23."
    },
    {
      "author": "Davila FJ, Tsin DA, Gutierrez LS, Lemus J, Jesus R, Davila MR, Torres-Morales J. ",
      "topic": "Transvaginal single port cholecystectomy.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21654308",
      "journal": "Surg Laparosc Endosc Percutan Tech. 2011;21(3):203-6."
    },
    {
      "author": "Uzunoglu FG, Koenig AM, Bockhorn M, Cataldegirmen G, Izbicki J, Benhidjeb T. ",
      "topic": "Emergency sternotomy during percutaneous central venous catheterisation - a case report.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21341182",
      "journal": "Zentralbl Chir. 2012 Jun;137(3):262-3."
    },
    {
      "author": "Mettler L, Reich H, Feng L, Puntambekar S, Gallinat A, Stark M. ",
      "topic": "Hysterectomy: Current Methods and Alternatives.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3143425/",
      "journal": "Obstetrics and Gynecology International, vol. 2010, Article ID 705073, 2010."
    },
    {
      "author": "Tinelli A, Malvasi A, Gustapane S, Buscarini M, Gill IS, Stark M, Nezhat FR, Mettler L. ",
      "topic": "Robotic Assisted Surgery in Gynecology: Current Insights and Future Perspectives.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21517747",
      "journal": "Recent Pat Biotechnol. 2011;5(1):12-24."
    },
    {
      "author": "Stark M. ",
      "topic": "Optimised meta-analysis should be based on standardised methods.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21481140",
      "journal": "BJOG. 2011 May;118(6):765-6."
    },
    {
      "author": "Benhidjeb T, Stark M. ",
      "topic": "Endoscopic Minimally Invasive Thyroidectomy (eMIT): Safety First!",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21472370",
      "journal": "World J Surg. 2011;35(8):1936-7"
    },
    {
      "author": "Benhidjeb T, Gericke C, Spies C, Miller K, Schneider A, Müller F. ",
      "topic": "Perception of natural orifice surgery. Results of a survey of female physicians and nursing staff.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/26234564",
      "journal": "Chirurg. 2011;82(8):707-13."
    },
    {
      "author": "Benhidjeb T, Witzel K, Stark M, Mann O. ",
      "topic": "Transoral thyroid and parathyroid surgery: still experimental!",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/?term=Transoral+thyroid+and+parathyroid+surgery%3A+still+experimental",
      "journal": "Surg Endosc. 2011 Jul;25(7):2411-3."
    },
    {
      "author": "Tinelli A, Malvasi A, Guido M, Tsin DA, Hudelist G, Hurst B, Stark M, Mettler L. ",
      "topic": "Adhesion formation after intracapsular myomectomy with or without adhesion barrier.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21256483",
      "journal": "Fertil Steril. 2011 Apr;95(5):1780-5."
    },
    {
      "author": "Tinelli A, Malvasi A, Manca C, Alemanno G, Bettocchi S, Benhidjeb T. ",
      "topic": "Post-laparoscopic mesh in post-menopausal umbilical hernia repair: A case series.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21247250",
      "journal": "Minim Invasive Ther Allied Technol. 2011;20(5):290-5."
    },
    {
      "author": "Tinelli A, Malvasi A, Guido M, Tsin DA, Hudelist G, Stark M, Mettler L. ",
      "topic": "Laparoscopy Entry in Patients With Previous Abdominal and Pelvic Surgery.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21245070",
      "journal": "Surg Innov. 2011;18(3):201-5."
    },
    {
      "author": "Malvasi A, Tinelli A, Cavallotti C, Morroni M, Tsin Daniel A, Camran N, Stark M, Mettler L. ",
      "topic": "Distribution of Substance P (SP) and Vasoactive Intestinal Peptide (VIP) in pseudocapsules of uterine fibroids.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21167238",
      "journal": "Peptides. 2011;32(2):327-32."
    },
    {
      "author": "Malvasi A, Di Renzo GC (ed.)",
      "topic": "Ecografia intrapartum",
      "url": "http://www.cnr.it/istituti/ProdottoDellaRicerca.html?cds=035&id=203233",
      "journal": "Bari: Edizioni Giuseppe Laterza, 2010. ISBN 9788882315733"
    },
    {
      "author": "Tsin DA, Davila F, Dominguez G, Manolas P. ",
      "topic": "Secured independent tools in peritoneoscopy.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20932379",
      "journal": "JSLS. 2010;14(2):256-8."
    },
    {
      "author": "Malvasi A, Tinelli A, Brizzi A, Guido M, Martino V, Casciaro S, Celleno D, Frigo MG, Stark M, Benhamou D. ",
      "topic": "Intrapartum sonography for occiput posterior detection in early low dose combined spinal epidural analgesia by sufentanil and ropivacaine.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/21061841",
      "journal": "Eur Rev Med Pharmacol Sci. 2010; 14: 799-806."
    },
    {
      "author": "Benhidjeb T, Witzel K, Burghardt J, Bärlehner E, Stark M, Mann O. ",
      "topic": "Endoscopic minimally invasive thyroidectomy: ethical and patients safety considerations on the first clinical experience of an innovative approach.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20734079",
      "journal": "Surg Endosc. 2010 Aug 24."
    },
    {
      "author": "Malvasi A, Tinelli A, Cavallotti C, Bettocchi S, Di Renzo GC, Stark M. ",
      "topic": "Substance P (SP) and vasoactive intestinal polypeptide (VIP) in the lower uterine segment in first and repeated cesarean sections.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20692311",
      "journal": "Peptides. 2010;31(11):2052-9."
    },
    {
      "author": "Malvasi A, Tinelli A, Guido M, Zizza A, Farine D, Stark M. ",
      "topic": "Should the visceral peritoneum at the bladder flap closed at cesarean sections? A post-partum sonographic and clinical assessment.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20540660",
      "journal": "J Matern Fetal Neonatal Med. 2010;23(7):662-9."
    },
    {
      "author": "Stark M. ",
      "topic": "Misgav-Ladach-Sectio – Operationsmethode im Detail.",
      "url": "http://www.nesacademy.org/downloads/g_u_g.pdf",
      "journal": "Gynaekologie &amp; Geburtshilfe 2010;5:27-30. (Download)"
    },
    {
      "author": "Richmon JD, Pattani KM, Benhidjeb T, Tufano RP. ",
      "topic": "Transoral robotic-assisted thyroidectomy: A preclinical feasibility study in 2 cadavers.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20629089",
      "journal": "Head Neck. 2011;33(3):330-3."
    },
    {
      "author": "Benhidjeb T, Stark M. ",
      "topic": "An innovative technique for colorectal specimen retrieval: a new era of \"Natural Orifice Specimen Extraction\" (N.O.S.E.).",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20305453",
      "journal": "Dis Colon Rectum. 2010;53(4):502-3; author reply 503."
    },
    {
      "author": "Malvasi A, Tinelli A, Stark M, Pontrelli G, Brizzi A, Wetzl RG, Benhamou D. ",
      "topic": "Low-dose sequential combined spinal-epidural anaesthesia in elective stark caesarean section: a preliminary cohort study.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20391961",
      "journal": "Eur Rev Med Pharmacol Sci. 2010;14(3):215-21."
    },
    {
      "author": "Tsin DA, Castro-Perez R, Davila MR, Davila F. ",
      "topic": "Postoperative Patient Attitudes and Perceptions of Transvaginal Cholecystectomy.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20201686",
      "journal": "J Laparoendosc Adv Surg Tech A. 2010;20(2):119-21."
    },
    {
      "author": "Wilhelm T, Harlaar JJ, Kerver A, Kleinrensink GJ, Benhidjeb T. ",
      "topic": "Surgical anatomy of the floor of the oral cavity and the cervical spaces as a rationale for trans-oral, minimal-invasive endoscopic surgical procedures: results of anatomical studies.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/20179955",
      "journal": "Eur Arch Otorhinolaryngol. 2010;267(8):1285-90."
    },
    {
      "author": "Stark M, Di Renzo GC, Benhidjeb T. ",
      "topic": "Natural orifice surgery (NOS) – toward a single-port transdouglas approach for intra-abdominal procedures.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/19926205",
      "journal": "Eur J Obstet Gynecol Reprod Biol. 2010;148(2):114-7."
    },
    {
      "author": "Benhidjeb T, Harlaar J, Kerver A, Kleinrensink GJ, Wilhelm T. ",
      "topic": "Transoral endoscopic thyroidectomy : Part 2: Surgical technique.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/19876604",
      "journal": "Chirurg. 2010;81(2):134-8."
    },
    {
      "author": "Wilhelm T, Harlaar J, Kerver A, Kleinrensink GJ, Benhidjeb T. ",
      "topic": "Transoral endoscopic thyroidectomy. Part 1: rationale and anatomical studies.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/19940971",
      "journal": "Chirurg. 2010;81(1):50-5."
    },
    {
      "author": "Malvasi A, Tinelli A, Stark M",
      "topic": "Il taglio cesareo: confronto tra tecniche chirurgiche",
      "url": "https://www.verduci.it/testo.asp?cod_art=011175",
      "journal": "Di Renzo, GC (ed.), Trattato di Ginecologia e Ostetricia, Rome: Verduci Editore, 2009: I, 1453-1475. ISBN 9788876208126."
    },
    {
      "author": "Tinelli A, Malvasi A, Istre O, Keckstein J, Stark M, Mettler L. ",
      "topic": "Abdominal access in gynaecological laparoscopy: a comparison between direct optical and blind closed access by Verres needle.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/19926203",
      "journal": "Eur J Obstet Gynecol Reprod Biol. 2010;148(2):191-4."
    },
    {
      "author": "Stark M, Benhidjeb T, Di Renzo GC",
      "topic": "Natural Orifice Surgery (NOS) – Toward a transdouglas approach for intra-abdominal procedures.",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/19926205",
      "journal": "Eur J Obstet Gynecol Reprod Biol. 2010;148(2):114-7."
    },
    {
      "author": "Stark M.",
      "topic": "Episiotomy: The Destructive Tradition",
      "url": "http://www.nesacademy.org/downloads/Episiotomy.pdf",
      "journal": "Gyneco ro 2009; 5-3(17):142-5. (Download)"
    },
    {
      "author": "Benhidjeb T, Stark M",
      "topic": "NOS – Natural Orifice Surgery: Eine Option für die Gynäkologie.",
      "url": "#N/A",
      "journal": "Gynäkologie Geburtshilfe 2009; 9:28-31."
    },
    {
      "author": "Benhidjeb T, Wilhelm T, Harlaar J, Kleinrensink GJ, Schneider TA, Stark M",
      "topic": "Reply to: doi:10.1007/s00464-009-0677-y: Re: Natural orifice surgery on thyroid gland-totally transoral video-assisted thyroidectomy (TOVAT)-report of first experimental results of a new surgical method (2009 (23):1119-1120)",
      "url": "http://www.nesacademy.org/downloads/TOVATReply.pdf",
      "journal": "Surg Endosc. 2009 Sep 16. (Download)"
    },
    {
      "author": "Barnea O, Luria O, Jaffa A, Stark M, Fox HE, Farine D",
      "topic": "Relations between fetal head descent and cervical dilatation during individual uterine contractions in the active stage of labor",
      "url": "http://www.nesacademy.org/downloads/RelationsFetalHDCD.pdf",
      "journal": "Journal of Obstetrics and Gynecology Research, 2009;35(4):654-9. (Download)"
    },
    {
      "author": "Stark M, Benhidjeb T",
      "topic": "Natural orifice surgery – the future of abdominal surgery",
      "url": "#N/A",
      "journal": "Proceedings of the 8th Turkish-German Gynecology Congress, ed.: TAJEV Turkish-German Gynecological Education and Research Foundation:76-7."
    },
    {
      "author": "Stark M",
      "topic": "Episiotomy – destructive traditions: The anti-episiotomy campaign",
      "url": "http://gineco.eu/index.php/arhiv/55",
      "journal": "Proceedings of the 8th Turkish-German Gynecology Congress, ed.: TAJEV Turkish-German Gynecological Education and Research Foundation:45-6."
    },
    {
      "author": "Stark M",
      "topic": "God is in the Details. The Standardization of Surgical Procedures as a Condition to Quality",
      "url": "http://www.nesacademy.org/downloads/GodIsInTheDetails.pdf",
      "journal": "Journal of Obstetrics and Gynecology, Gineco.ro, 2009, 5(2):115-6. (Download)"
    },
    {
      "author": "Benhidjeb T, Wilhelm T, Harlaar J, Kleinrensink GJ, Schneider TA, Stark M",
      "topic": "Natural orifice surgery on thyroid gland: totally transoral video-assisted thyroidectomy (TOVAT): report of first experimental results of a new surgical method",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/19263151",
      "journal": "Surg Endosc. 2009 May;23(5):1119-20."
    },
    {
      "author": "Malvasi A, Tinelli A, Farine D, Rahimi S, Cavallotti C, Vergara D, Martignago R, Stark M",
      "topic": "Effects of visceral peritoneal closure on scar formation at casarean delivery",
      "url": "http://www.nesacademy.org/downloads/Effects%20of%20visceral%20peritoneal%20closure.pdf",
      "journal": "Int J Gynaecol Obstet. 2009 May;105(2):131-5. (Download)"
    },
    {
      "author": "Stark M, Gerli S, Di Renzo GC",
      "topic": "The importance of analyzing and standardizing surgical methods",
      "url": "http://www.nesacademy.org/downloads/ImportanceOfAnalStand.pdf",
      "journal": "J Minim Invasive Gynecol. 2009;16(2):122-5. (Download)"
    },
    {
      "author": "Stark M",
      "topic": "In the era of \"non-closure of the peritoneum\", how to open it? (Not every simple method is optimal, but every optimal method is simple)",
      "url": "#N/A",
      "journal": "Acta Obstet Gynecol Scand, 2009, 88(1): 119."
    },
    {
      "author": "Stark M (ed.)",
      "topic": "Der Kaiserschnitt: Indikationen. Hintergründe. Operatives Management der Misgav-Ladach-Methode",
      "url": "https://www.amazon.de/Kaiserschnitt-Indikationen-Hintergründe-Operatives-Misgav-Ladach-Methode/dp/3437243101",
      "journal": "München: Elsevier, 2008. ISBN 978-3-437-24310-3"
    }
      ],
      search: ""
    };
  },
  async asyncData({ params }) {
    let post = await import("~/content/publications.json");
    return post;
  },
  computed: {
    filteredCustomers:function()
    {
    	 var self=this;

       return this.users.filter(
        item =>
          item.topic.toLowerCase().includes(this.search) ||
          item.author.toLowerCase().includes(this.search) ||
          item.journal.toLowerCase().includes(this.search)
      );
       //return this.customers;
    }
  }
};
</script>

<style lang="sass" scoped>

.featured-publication
  margin: 0 auto 30px
  display: inline-block
  font-family: 'Open Sans'
  h2
    color: black
    border-bottom: 1px solid #efefef
    display: inline-block
    padding: 10px 0
  p
    color: black
    padding: 10px 0
    font-size: 1.3em
  .journal-link
    border: 1px solid #016895
    border-radius: 10px
    padding: 10px
    display: inline-block
    margin: 5px 0 0 0
    color: #016895
    text-decoration: none





.highlight-images
  width: 40%
  float: left
  display: block
  margin: 0px auto 20px
  img
    width: 45%
    float: left
    margin-right: 20px
    border-radius: 10px
    box-shadow: 0 1px 3px rgba(0,0,0,0.4)

.search
  margin: 0
  padding: 10px 10px
  font-family: 'Open Sans'
  font-size: 1.3em
  border-radius: 10px
  padding: 12px 15px
  border: 1px solid #efefef
  width: 50%
  margin-bottom: 10px
  transition: border .5s ease
  &:focus
    outline: none
    border: 1px solid #016895


.publications
  column-count: 4
  column-gap: 1.5em
  overflow: hidden
  margin: 20px 0 0 0
  width: 100%
  padding: 0
  display: inline-block
  color: black

.entry
  list-style: none
  break-inside: avoid
  width: 100%
  border-radius: 10px
  border: 1px solid #efefef
  background: #fafcfc
  display: inline-block
  break-inside: avoid !important
  margin: 0 0 6% 0
  padding: 0
  transition: all .85s ease
  height: auto
  h4
    width: 100%
    border-radius: 10px 10px 0 0
    margin: 0
    padding: 12px 3% 12px 5%
    font-size: 1.05em
    background: linear-gradient( to top, #fff, #f8fafa)
    border-bottom: 1px solid #EFEFEF
    color: #016895
    line-height: 23px
    font-family: "Exo 2", sans-serif
    font-weight: 200
  p
    font-size: 1em !important
    margin: 10px 15px 4px 15px !important
    font-family: 'Open Sans'
    font-weight: bold
    background: none
    line-height: 23px !important
    padding: 0
    font-weight: 600
  a
    display: inline-block
    font-family: 'Open Sans'
    width: 100%
    font-size: 1em
    overflow-wrap: break-word
    color: blue !important
    line-height: 21px !important
    padding: 2.4% 4% 2% 3.5% !important
    border-top: 1px solid #efefef
    border-radius: 0 0 10px 10px
    margin: 5px 0 0 0 !important

.publications-enter, .publications-leave-to
  opacity: 0
  transform: scale(0.5)

.publications-leave-active
  transform: scale(0.5)
  z-index: 0


@import '~/assets/sass/news.sass'

@keyframes opacity
  100%
    opacity: 1
  
@keyframes acrossIn
  0%
    opacity: 1
  100%
    opacity: 0

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1

.posts
  width: 70%
  float: left
  .post
    width: 94%
    margin: 0 4% 6% 0

.page-leave-active 
  animation: opacity .7s ease-out
  .post
    animation: acrossIn .47s ease-out forwards !important
    animation-delay: 0.3s !important
    &:nth-child(2n)
      animation-delay: 0s !important

.page-enter .post
  opacity: 0 !important

.page-enter-active 
  animation: opacity 1.7s ease-out
  .post
    opacity: 0
    animation: fadeIn 1.47s forwards !important
    animation-delay: 0.3s !important
    &:nth-child(2)
      animation-delay: 0s !important



.post-move 
  transition: all 600ms ease-in-out 50ms

.post-enter-active 
  transition: all 400ms ease-out

.post-leave-active 
  transition: all 200ms ease-in
  position: absolute
  z-index: 0

.post-enter
  opacity: 0

.post-leave-to 
  opacity: 0

.main-container
  width: 90%
  margin: 50px auto !important
  display: block 


h1
  font-size: 2.1em
  line-height: 46px !important
  font-family: 'Open Sans', sans-serif
  font-weight: 800
  color: black
  width: 97%
  float: none
  clear: both !important
  padding-bottom: 15px
  margin-bottom: 25px
  border-bottom: 1px solid #DDD

</style>