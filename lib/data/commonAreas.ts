import type { Localized } from "@/lib/i18n/translations";

/** Sezione "Parti comuni e servizi" nella pagina La Casa. Foto in /public/foto, uguali in tutte le lingue. */
export type CommonPhoto = { src: string; alt: Localized };
export type CommonArea = { slug: string; name: Localized; text: Localized; photos: CommonPhoto[] };

export const commonAreasHead = {
  eyebrow: { it: "Parti comuni e servizi", en: "Shared areas and services", de: "Gemeinschaftsbereiche und Services", fr: "Espaces communs et services" } as Localized,
  title: { it: "Tutta la casa è vostra", en: "The whole house is yours", de: "Das ganze Haus gehört Ihnen", fr: "Toute la maison est à vous" } as Localized,
};

export const commonAreas: CommonArea[] = [
  {
    slug: "terrazzo-idromassaggio",
    name: {
      it: "Terrazzo panoramico e idromassaggio",
      en: "Panoramic terrace and hot tub",
      de: "Panoramaterrasse und Whirlpool",
      fr: "Terrasse panoramique et jacuzzi",
    },
    text: {
      it: "In cima alla casa, un grande terrazzo con vasca idromassaggio, sedute per rilassarsi al sole e un binocolo panoramico puntato sulle colline della Sabina: al tramonto il cielo si accende di rosa e arancio.",
      en: "At the top of the house, a large terrace with a hot tub, loungers to relax in the sun and panoramic binoculars pointed at the Sabine hills: at sunset the sky turns pink and orange.",
      de: "Ganz oben im Haus: eine große Terrasse mit Whirlpool, Liegestühlen zum Sonnen und einem Panorama-Fernglas mit Blick auf die Hügel der Sabina – bei Sonnenuntergang färbt sich der Himmel rosa und orange.",
      fr: "Au sommet de la maison, une grande terrasse avec jacuzzi, des transats pour profiter du soleil et des jumelles panoramiques tournées vers les collines de la Sabine : au coucher du soleil, le ciel se teinte de rose et d'orange.",
    },
    photos: [
      { src: "/foto/comuni-idromassaggio-tramonto.webp", alt: { it: "Vasca idromassaggio sul terrazzo al tramonto", en: "Terrace hot tub at sunset", de: "Whirlpool auf der Terrasse bei Sonnenuntergang", fr: "Jacuzzi sur la terrasse au coucher du soleil" } },
      { src: "/foto/comuni-terrazzo-idromassaggio.webp", alt: { it: "Il terrazzo con idromassaggio, sedute e binocolo", en: "The terrace with hot tub, seating and binoculars", de: "Die Terrasse mit Whirlpool, Sitzplätzen und Fernglas", fr: "La terrasse avec jacuzzi, fauteuils et jumelles" } },
      { src: "/foto/comuni-idromassaggio-calici.webp", alt: { it: "Calici e bottiglia sul bordo dell'idromassaggio", en: "Glasses and a bottle on the edge of the hot tub", de: "Gläser und eine Flasche am Whirlpoolrand", fr: "Verres et bouteille au bord du jacuzzi" } },
      { src: "/foto/comuni-terrazzo-binocolo.webp", alt: { it: "Un ospite osserva il panorama con il binocolo", en: "A guest looking at the view through the binoculars", de: "Ein Gast betrachtet das Panorama durch das Fernglas", fr: "Un hôte admire le panorama aux jumelles" } },
      { src: "/foto/comuni-binocolo-dettaglio.webp", alt: { it: "Il binocolo panoramico del terrazzo", en: "The terrace's panoramic binoculars", de: "Das Panorama-Fernglas der Terrasse", fr: "Les jumelles panoramiques de la terrasse" } },
      { src: "/foto/comuni-vista-colline.webp", alt: { it: "Vista sulle colline della Sabina al tramonto", en: "View over the Sabine hills at sunset", de: "Blick über die Hügel der Sabina bei Sonnenuntergang", fr: "Vue sur les collines de la Sabine au coucher du soleil" } },
      { src: "/foto/comuni-vista-panorama.webp", alt: { it: "Il panorama dalla casa, fino ai monti all'orizzonte", en: "The view from the house, to the mountains on the horizon", de: "Der Blick vom Haus bis zu den Bergen am Horizont", fr: "Le panorama depuis la maison, jusqu'aux montagnes à l'horizon" } },
    ],
  },
  {
    slug: "terrazzino",
    name: { it: "Terrazzino con tavolo all'aperto", en: "Small terrace with outdoor table", de: "Kleine Terrasse mit Tisch im Freien", fr: "Petite terrasse avec table extérieure" },
    text: {
      it: "Un secondo spazio all'aperto, tra i tetti del borgo, con tavolo e sedie per la colazione o un pranzo al sole.",
      en: "A second outdoor space, among the village rooftops, with a table and chairs for breakfast or lunch in the sun.",
      de: "Ein zweiter Außenbereich zwischen den Dächern des Dorfes, mit Tisch und Stühlen für Frühstück oder Mittagessen in der Sonne.",
      fr: "Un second espace extérieur, parmi les toits du village, avec table et chaises pour le petit-déjeuner ou un déjeuner au soleil.",
    },
    photos: [
      { src: "/foto/comuni-terrazzino-tavolo.webp", alt: { it: "Terrazzino con tavolo e sedie all'aperto", en: "Small terrace with outdoor table and chairs", de: "Kleine Terrasse mit Tisch und Stühlen", fr: "Petite terrasse avec table et chaises" } },
    ],
  },
  {
    slug: "palestra-attrezzata",
    name: { it: "Palestra", en: "Gym", de: "Fitnessraum", fr: "Salle de sport" },
    text: {
      it: "Una palestra attrezzata Technogym, con tapis roulant, ellittica, cyclette e una stazione multifunzione per i pesi, su parquet e con un grande murale in bianco e nero: per non rinunciare all'allenamento neanche in vacanza.",
      en: "A gym equipped by Technogym, with treadmill, elliptical trainer, exercise bikes and a multi-station for weights, on parquet floors with a large black-and-white mural: so you never have to skip a workout, even on holiday.",
      de: "Ein mit Technogym ausgestatteter Fitnessraum mit Laufband, Crosstrainer, Ergometern und einer Kraftstation, auf Parkett und mit einem großen Schwarz-Weiß-Wandbild – damit Sie auch im Urlaub nicht auf Ihr Training verzichten müssen.",
      fr: "Une salle de sport équipée Technogym, avec tapis de course, vélo elliptique, vélos d'appartement et une station de musculation multifonction, sur parquet et avec une grande fresque en noir et blanc : pour ne pas renoncer à l'entraînement, même en vacances.",
    },
    photos: [
      { src: "/foto/comuni-palestra-murale.webp", alt: { it: "La palestra con attrezzi Technogym e il murale in bianco e nero", en: "The gym with Technogym equipment and the black-and-white mural", de: "Der Fitnessraum mit Technogym-Geräten und dem Schwarz-Weiß-Wandbild", fr: "La salle de sport avec équipements Technogym et la fresque en noir et blanc" } },
      { src: "/foto/comuni-palestra-sala.webp", alt: { it: "Tapis roulant, cyclette ed ellittica in palestra", en: "Treadmill, exercise bikes and elliptical trainer in the gym", de: "Laufband, Ergometer und Crosstrainer im Fitnessraum", fr: "Tapis de course, vélos et vélo elliptique dans la salle de sport" } },
      { src: "/foto/comuni-palestra-ellittica.webp", alt: { it: "Ellittica e cyclette davanti allo specchio", en: "Elliptical trainer and exercise bike in front of the mirror", de: "Crosstrainer und Ergometer vor dem Spiegel", fr: "Vélo elliptique et vélo d'appartement devant le miroir" } },
      { src: "/foto/comuni-palestra-multistazione.webp", alt: { it: "La stazione multifunzione per i pesi e il tapis roulant", en: "The multi-station for weights and the treadmill", de: "Die Kraftstation und das Laufband", fr: "La station de musculation multifonction et le tapis de course" } },
    ],
  },
  {
    slug: "cucina",
    name: { it: "Cucina", en: "Kitchen", de: "Küche", fr: "Cuisine" },
    text: {
      it: "Una cucina moderna con isola centrale, piano a induzione, due forni da incasso e sgabelli per un caffè al volo: tutto il necessario per cucinare insieme.",
      en: "A modern kitchen with a central island, induction hob, two built-in ovens and stools for a quick coffee: everything you need to cook together.",
      de: "Eine moderne Küche mit Kochinsel, Induktionskochfeld, zwei Einbauöfen und Barhockern für einen schnellen Kaffee – alles, um gemeinsam zu kochen.",
      fr: "Une cuisine moderne avec îlot central, plaque à induction, deux fours encastrés et tabourets pour un café sur le pouce : tout le nécessaire pour cuisiner ensemble.",
    },
    photos: [
      { src: "/foto/comuni-cucina-sgabelli.webp", alt: { it: "Cucina con isola e sgabelli rossi", en: "Kitchen with island and red stools", de: "Küche mit Kochinsel und roten Barhockern", fr: "Cuisine avec îlot et tabourets rouges" } },
      { src: "/foto/comuni-cucina-isola.webp", alt: { it: "L'isola della cucina con lavello e piano a induzione", en: "The kitchen island with sink and induction hob", de: "Die Kochinsel mit Spüle und Induktionskochfeld", fr: "L'îlot de la cuisine avec évier et plaque à induction" } },
      { src: "/foto/comuni-cucina-forni.webp", alt: { it: "La colonna con i due forni", en: "The tall unit with the two ovens", de: "Der Hochschrank mit den zwei Öfen", fr: "La colonne avec les deux fours" } },
    ],
  },
  {
    slug: "sala-pranzo",
    name: { it: "Sala da pranzo", en: "Dining room", de: "Esszimmer", fr: "Salle à manger" },
    text: {
      it: "Un grande tavolo in legno sotto le lampade dorate, la TV e il distributore di bevande e caffè a pagamento. A parete, la mappa dei borghi della Sabina.",
      en: "A large wooden table beneath golden lamps, the TV and the paid drinks and coffee machine. On the wall, a map of the villages of Sabina.",
      de: "Ein großer Holztisch unter goldenen Lampen, der Fernseher und der kostenpflichtige Getränke- und Kaffeeautomat. An der Wand: eine Karte der Dörfer der Sabina.",
      fr: "Une grande table en bois sous des suspensions dorées, la télévision et le distributeur payant de boissons et de café. Au mur, la carte des villages de la Sabine.",
    },
    photos: [
      { src: "/foto/comuni-sala-pranzo.webp", alt: { it: "Sala da pranzo con tavolo in legno e lampade dorate", en: "Dining room with wooden table and golden lamps", de: "Esszimmer mit Holztisch und goldenen Lampen", fr: "Salle à manger avec table en bois et suspensions dorées" } },
      { src: "/foto/comuni-sala-pranzo-mappa.webp", alt: { it: "La parete con la mappa della Sabina", en: "The wall with the map of Sabina", de: "Die Wand mit der Karte der Sabina", fr: "Le mur avec la carte de la Sabine" } },
    ],
  },
  {
    slug: "ingresso",
    name: { it: "Ingresso e scale", en: "Entrance and stairs", de: "Eingang und Treppen", fr: "Entrée et escaliers" },
    text: {
      it: "Un salottino d'accoglienza, la scala in travertino sotto l'arco e, lungo il percorso, il mappamondo in legno che anticipa il viaggio tra i continenti.",
      en: "A welcoming sitting area, the travertine staircase beneath the arch and, along the way, the wooden world map that hints at the journey through the continents.",
      de: "Eine einladende Sitzecke, die Travertintreppe unter dem Bogen und unterwegs die hölzerne Weltkarte, die auf die Reise durch die Kontinente einstimmt.",
      fr: "Un petit salon d'accueil, l'escalier en travertin sous l'arche et, en chemin, la carte du monde en bois qui annonce le voyage à travers les continents.",
    },
    photos: [
      { src: "/foto/comuni-ingresso-salottino.webp", alt: { it: "Salottino d'ingresso con divanetto e poltrona gialli", en: "Entrance sitting area with yellow sofa and armchair", de: "Sitzecke im Eingang mit gelbem Sofa und Sessel", fr: "Petit salon d'entrée avec canapé et fauteuil jaunes" } },
      { src: "/foto/comuni-scala-travertino.webp", alt: { it: "Scala in travertino sotto l'arco", en: "Travertine staircase beneath the arch", de: "Travertintreppe unter dem Bogen", fr: "Escalier en travertin sous l'arche" } },
      { src: "/foto/comuni-busto-mappamondo.webp", alt: { it: "Busto classico davanti al mappamondo in legno", en: "Classical bust in front of the wooden world map", de: "Klassische Büste vor der hölzernen Weltkarte", fr: "Buste classique devant la carte du monde en bois" } },
    ],
  },
];
