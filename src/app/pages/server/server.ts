import { Component, inject, signal, computed, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TyroUiLangService } from 'tyrolium-ui';

export interface ServerEntry {
  name: string;
  alias: string;
  description: string;
  lieu: string;
  url: string;
  tag: string;
  group: string;
  date: string;
}

export interface ServerGroup {
  name: string;
  nameEn: string;
  prefix: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

const GROUPS: ServerGroup[] = [
  { name: 'Serveur Interne', nameEn: 'Internal Server', prefix: 'int',   icon: '/assets/server/int.png',   description: 'Il s\'agit des serveurs hébergés dans les locaux de Tyrolium.', descriptionEn: 'Servers hosted in Tyrolium\'s own premises.' },
  { name: 'VPS',             nameEn: 'VPS',             prefix: 'vps',   icon: '/assets/server/vps.png',   description: 'Il s\'agit de VPS hébergés dans un data center.', descriptionEn: 'VPS instances hosted in data centers.' },
  { name: 'Cloud',           nameEn: 'Cloud',           prefix: 'cloud', icon: '/assets/server/cloud.png', description: 'Il s\'agit de serveurs conçus pour héberger exclusivement des sites web.', descriptionEn: 'Servers designed exclusively for web hosting.' },
  { name: 'Proxy',           nameEn: 'Proxy',           prefix: 'proxy', icon: '/assets/server/proxy.png', description: 'Il s\'agit de serveurs proxy qui permettent de rediriger le trafic vers les sauvegardes.', descriptionEn: 'Proxy servers that redirect traffic to backups.' },
  { name: 'Serveur dédié',   nameEn: 'Dedicated',      prefix: 'serv',  icon: '/assets/server/serv.png',  description: 'Il s\'agit de serveurs dédiés hébergés dans un data center.', descriptionEn: 'Dedicated servers hosted in data centers.' },
  { name: 'Base de données',  nameEn: 'Database',       prefix: 'db',    icon: '/assets/server/db.png',    description: 'Il s\'agit de serveurs conçus pour héberger exclusivement des bases de données.', descriptionEn: 'Servers designed exclusively for databases.' },
  { name: 'VPN',             nameEn: 'VPN',             prefix: 'vpn',   icon: '/assets/server/vpn.png',   description: 'Il s\'agit de serveurs utilisés pour les VPN, souvent pour notre sécurité.', descriptionEn: 'Servers used for VPNs, mostly for security.' },
];

const PROJECT_LOGOS: Record<string, string> = {
  'Tyrolium':    '/assets/tyrolium-ui/projects/Tyrolium.png',
  'TyroServ':    '/assets/tyrolium-ui/projects/TyroServ.png',
  'SolidServ':   '/assets/tyrolium-ui/projects/SolidServ.png',
  'Gamenium':    '/assets/tyrolium-ui/projects/Gamenium.png',
  'Useritium':   '/assets/tyrolium-ui/projects/Useritium.png',
  'Vturias':     '/assets/tyrolium-ui/projects/Vturias.png',
  'NexiumiaCRM': '/assets/tyrolium-ui/projects/NexiumiaCRM.png',
  'TyroCiel':  '/assets/tyrolium-ui/projects/TyroCiel.png',
};

const SERVERS: ServerEntry[] = [
  // ── Serveurs Internes ──────────────────────────────────────────────────
  { name:'int801',      alias:'server-dell',   description:'Serveur de Proxy et VPN à Tyrolium',                    lieu:'Décines-Charpieu - France',     url:'int801.tyrolium.fr',   tag:'Tyrolium',    group:'int',   date:'20/10/2023' },
  { name:'int802',      alias:'server-lenovo', description:'Serveur de Test Interne à Tyrolium',                    lieu:'Décines-Charpieu - France',     url:'int802.tyrolium.fr',   tag:'Tyrolium',    group:'int',   date:'22/10/2023' },
  { name:'int803',      alias:'server-pl',     description:'Serveur de Test Interne à Tyrolium',                    lieu:'Blainville - France',           url:'int803.tyrolium.fr',   tag:'Tyrolium',    group:'int',   date:'24/10/2023' },
  { name:'int804',      alias:'',              description:'Serveur de SolidServ V2',                               lieu:'Décines-Charpieu - France',     url:'int804.tyrolium.fr',   tag:'SolidServ',   group:'int',   date:'24/11/2023' },
  { name:'int805',      alias:'',              description:'Serveur de SolidServ V2.5',                             lieu:'Décines-Charpieu - France',     url:'int805.tyrolium.fr',   tag:'SolidServ',   group:'int',   date:'05/04/2026' },
  // ── VPS ──────────────────────────────────────────────────────────────
  { name:'vps201',      alias:'',              description:'Serveur pour TyroServ S1 & S3 et les bots discord',     lieu:'Gravelines - France',           url:'vps201.tyrolium.fr',   tag:'TyroServ',    group:'vps',   date:'04/02/2020' },
  { name:'vps202',      alias:'',              description:'Serveur de Test',                                       lieu:'Gravelines - France',           url:'vps202.tyrolium.fr',   tag:'',            group:'vps',   date:'01/04/2021' },
  { name:'vps203',      alias:'',              description:'VPS utilisé pour la création de VPN',                   lieu:'Tokyo - Japon',                 url:'vps203.tyrolium.fr',   tag:'',            group:'vps',   date:'14/11/2021' },
  { name:'vps204',      alias:'tyroserv-vps',  description:'Serveur Officiel de la S2.5 de TyroServ',              lieu:'Strasbourg - France',           url:'vps204.tyrolium.fr',   tag:'TyroServ',    group:'vps',   date:'16/05/2023' },
  { name:'vps205',      alias:'',              description:'Serveur de SolidServ V2',                               lieu:'Gravelines - France',           url:'vps205.tyrolium.fr',   tag:'SolidServ',   group:'vps',   date:'16/05/2023' },
  { name:'vps206',      alias:'',              description:'Serveur pour les formations',                           lieu:'Gravelines - France',           url:'vps206.tyrolium.fr',   tag:'',            group:'vps',   date:'04/11/2023' },
  { name:'vps207',      alias:'',              description:'Serveur Officiel de la S3 de TyroServ',                 lieu:'Gravelines - France',           url:'vps207.tyrolium.fr',   tag:'TyroServ',    group:'vps',   date:'26/03/2024' },
  { name:'vps208',      alias:'',              description:'Serveur pour les prestations d\'événements Minecraft',  lieu:'Strasbourg - France',           url:'vps208.tyrolium.fr',   tag:'Tyrolium',    group:'vps',   date:'14/06/2024' },
  { name:'vps209',      alias:'',              description:'Serveur pour Gamenium Bêta Fermé',                      lieu:'Francfort - Allemagne',         url:'gamenium.fr',          tag:'Gamenium',    group:'vps',   date:'21/12/2024' },
  // ── VPS INT804 ────────────────────────────────────────────────────────
  { name:'vps211',      alias:'',              description:'Serveur de com de Tyrolium',                            lieu:'Décines-Charpieu - France',     url:'vps211.tyrolium.fr',   tag:'Tyrolium',    group:'vps',   date:'18/11/2023' },
  { name:'vps212',      alias:'',              description:'Serveur de client (10564)',                              lieu:'Décines-Charpieu - France',     url:'vps212.tyrolium.fr',   tag:'',            group:'vps',   date:'20/11/2023' },
  { name:'vps213',      alias:'',              description:'Serveur pour le site de TyroCiel',                      lieu:'Décines-Charpieu - France',     url:'vps213.tyrolium.fr',   tag:'TyroCiel',    group:'vps',   date:'18/11/2023' },
  { name:'vps214',      alias:'',              description:'Serveur pour TyroServ S2.5',                            lieu:'Décines-Charpieu - France',     url:'vps214.tyrolium.fr',   tag:'TyroServ',    group:'vps',   date:'18/11/2023' },
  { name:'vps215',      alias:'',              description:'Serveur pour le site de SolidServ',                     lieu:'Décines-Charpieu - France',     url:'vps215.tyrolium.fr',   tag:'SolidServ',   group:'vps',   date:'—' },
  { name:'vps216',      alias:'',              description:'Serveur pour Gamenium',                                 lieu:'Décines-Charpieu - France',     url:'vps216.tyrolium.fr',   tag:'Gamenium',    group:'vps',   date:'—' },
  { name:'vps217',      alias:'',              description:'Serveur pour NexiumiaCRM',                              lieu:'Décines-Charpieu - France',     url:'vps217.tyrolium.fr',   tag:'NexiumiaCRM', group:'vps',   date:'—' },
  { name:'vps218',      alias:'',              description:'Serveur pour les serveurs Pterodactyl',                 lieu:'Décines-Charpieu - France',     url:'vps218.tyrolium.fr',   tag:'SolidServ',   group:'vps',   date:'—' },
  { name:'vps219',      alias:'',              description:'Serveur de Vturias',                                    lieu:'Décines-Charpieu - France',     url:'vps219.tyrolium.fr',   tag:'Vturias',     group:'vps',   date:'25/11/2023' },
  { name:'vps220',      alias:'',              description:'Serveur de Repository de Tyrolium',                     lieu:'Décines-Charpieu - France',     url:'vps220.tyrolium.fr',   tag:'Tyrolium',    group:'vps',   date:'25/11/2023' },
  { name:'vps221',      alias:'',              description:'Serveur de client (10567)',                              lieu:'Décines-Charpieu - France',     url:'vps221.tyrolium.fr',   tag:'',            group:'vps',   date:'02/12/2023' },
  { name:'vps222',      alias:'',              description:'Serveur de client (10568)',                              lieu:'Décines-Charpieu - France',     url:'vps222.tyrolium.fr',   tag:'',            group:'vps',   date:'21/12/2023' },
  // ── VPS ──────────────────────────────────────────────────────────────
  { name:'vps240',      alias:'',              description:'Serveur pour TyroServ',                                 lieu:'Gravelines - France',           url:'vps240.tyrolium.fr',   tag:'TyroServ',    group:'vps',   date:'10/01/2025' },
  { name:'vps241',      alias:'',              description:'Serveur de client (10569)',                              lieu:'Francfort - Allemagne',         url:'vps241.tyrolium.fr',   tag:'',            group:'vps',   date:'22/01/2025' },
  { name:'vps242',      alias:'',              description:'Serveur de client (10570)',                              lieu:'Francfort - Allemagne',         url:'vps242.tyrolium.fr',   tag:'',            group:'vps',   date:'22/01/2025' },
  { name:'vps243',      alias:'',              description:'Serveur de client (10571)',                              lieu:'Strasbourg - France',           url:'vps243.tyrolium.fr',   tag:'',            group:'vps',   date:'05/02/2025' },
  { name:'vps244',      alias:'',              description:'Serveur de client (10572)',                              lieu:'Strasbourg - France',           url:'vps244.tyrolium.fr',   tag:'',            group:'vps',   date:'04/03/2025' },
  { name:'vps245',      alias:'',              description:'Serveur de client (10573)',                              lieu:'Strasbourg - France',           url:'vps245.tyrolium.fr',   tag:'',            group:'vps',   date:'10/03/2025' },
  // ── VPS INT801 ────────────────────────────────────────────────────────
  { name:'vps290',      alias:'',              description:'Serveur de redirection de paquet',                      lieu:'Décines-Charpieu - France',     url:'vps290.tyrolium.fr',   tag:'Tyrolium',    group:'vps',   date:'18/11/2023' },
  // ── VPS SERV302 ───────────────────────────────────────────────────────
  { name:'vps501',      alias:'',              description:'Serveur de client (10001)',                                   lieu:'Strasbourg - France',           url:'vps501.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps502',      alias:'',              description:'Serveur de client (10002)',                                   lieu:'Strasbourg - France',           url:'vps502.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps503',      alias:'',              description:'Serveur de client (10003)',                                   lieu:'Strasbourg - France',           url:'vps503.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps504',      alias:'',              description:'Serveur de client (10004)',                                   lieu:'Strasbourg - France',           url:'vps504.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps505',      alias:'',              description:'Serveur de client (10005)',                                   lieu:'Strasbourg - France',           url:'vps505.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps506',      alias:'',              description:'Serveur de client (10006)',                                   lieu:'Strasbourg - France',           url:'vps506.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps507',      alias:'',              description:'Serveur de client (10007)',                                   lieu:'Strasbourg - France',           url:'vps507.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps508',      alias:'',              description:'Serveur de client (10008)',                                   lieu:'Strasbourg - France',           url:'vps508.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps509',      alias:'',              description:'Serveur de client (10009)',                                   lieu:'Strasbourg - France',           url:'vps509.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps510',      alias:'',              description:'Serveur de client (10010)',                                   lieu:'Strasbourg - France',           url:'vps510.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps511',      alias:'',              description:'Serveur de client (10011)',                                   lieu:'Strasbourg - France',           url:'vps511.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps512',      alias:'',              description:'Serveur de client (10012)',                                   lieu:'Strasbourg - France',           url:'vps512.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps513',      alias:'',              description:'Serveur de client (10013)',                                   lieu:'Strasbourg - France',           url:'vps513.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps514',      alias:'',              description:'Serveur de client (10014)',                                   lieu:'Strasbourg - France',           url:'vps514.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps515',      alias:'',              description:'Serveur de client (10015)',                                   lieu:'Strasbourg - France',           url:'vps515.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps516',      alias:'',              description:'Serveur de client (10016)',                                   lieu:'Strasbourg - France',           url:'vps516.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps517',      alias:'',              description:'Serveur de client (10017)',                                   lieu:'Strasbourg - France',           url:'vps517.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps518',      alias:'',              description:'Serveur de client (10018)',                                   lieu:'Strasbourg - France',           url:'vps518.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps519',      alias:'',              description:'Serveur de client (10019)',                                   lieu:'Strasbourg - France',           url:'vps519.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps520',      alias:'',              description:'Serveur de client (10020)',                                   lieu:'Strasbourg - France',           url:'vps520.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps521',      alias:'',              description:'Serveur de client (10021)',                                   lieu:'Strasbourg - France',           url:'vps521.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps522',      alias:'',              description:'Serveur de client (10022)',                                   lieu:'Strasbourg - France',           url:'vps522.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps523',      alias:'',              description:'Serveur de client (10023)',                                   lieu:'Strasbourg - France',           url:'vps523.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps524',      alias:'',              description:'Serveur de client (10024)',                                   lieu:'Strasbourg - France',           url:'vps524.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps525',      alias:'',              description:'Serveur de client (10025)',                                   lieu:'Strasbourg - France',           url:'vps525.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps526',      alias:'',              description:'Serveur de client (10026)',                                   lieu:'Strasbourg - France',           url:'vps526.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps527',      alias:'',              description:'Serveur de client (10027)',                                   lieu:'Strasbourg - France',           url:'vps527.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps528',      alias:'',              description:'Serveur de client (10028)',                                   lieu:'Strasbourg - France',           url:'vps528.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps529',      alias:'',              description:'Serveur de client (10029)',                                   lieu:'Strasbourg - France',           url:'vps529.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps530',      alias:'',              description:'Serveur de client (10030)',                                   lieu:'Strasbourg - France',           url:'vps530.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps531',      alias:'',              description:'Serveur de client (10031)',                                   lieu:'Strasbourg - France',           url:'vps531.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps532',      alias:'',              description:'Serveur de client (10032)',                                   lieu:'Strasbourg - France',           url:'vps532.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps533',      alias:'',              description:'Serveur de client (10033)',                                   lieu:'Strasbourg - France',           url:'vps533.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps534',      alias:'',              description:'Serveur de client (10034)',                                   lieu:'Strasbourg - France',           url:'vps534.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps535',      alias:'',              description:'Serveur de client (10035)',                                   lieu:'Strasbourg - France',           url:'vps535.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps536',      alias:'',              description:'Serveur de client (10036)',                                   lieu:'Strasbourg - France',           url:'vps536.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps537',      alias:'',              description:'Serveur de client (10037)',                                   lieu:'Strasbourg - France',           url:'vps537.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps538',      alias:'',              description:'Serveur de client (10038)',                                   lieu:'Strasbourg - France',           url:'vps538.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps539',      alias:'',              description:'Serveur de client (10039)',                                   lieu:'Strasbourg - France',           url:'vps539.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps540',      alias:'',              description:'Serveur de client (10040)',                                   lieu:'Strasbourg - France',           url:'vps540.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps541',      alias:'',              description:'Serveur de client (10041)',                                   lieu:'Strasbourg - France',           url:'vps541.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps542',      alias:'',              description:'Serveur de client (10042)',                                   lieu:'Strasbourg - France',           url:'vps542.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps543',      alias:'',              description:'Serveur de client (10043)',                                   lieu:'Strasbourg - France',           url:'vps543.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps544',      alias:'',              description:'Serveur de client (10044)',                                   lieu:'Strasbourg - France',           url:'vps544.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps545',      alias:'',              description:'Serveur de client (10045)',                                   lieu:'Strasbourg - France',           url:'vps545.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps546',      alias:'',              description:'Serveur de client (10046)',                                   lieu:'Strasbourg - France',           url:'vps546.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps547',      alias:'',              description:'Serveur de client (10047)',                                   lieu:'Strasbourg - France',           url:'vps547.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps548',      alias:'',              description:'Serveur de client (10048)',                                   lieu:'Strasbourg - France',           url:'vps548.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps549',      alias:'',              description:'Serveur de client (10049)',                                   lieu:'Strasbourg - France',           url:'vps549.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps550',      alias:'',              description:'Serveur de client (10050)',                                   lieu:'Strasbourg - France',           url:'vps550.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps551',      alias:'',              description:'Serveur de client (10051)',                                   lieu:'Strasbourg - France',           url:'vps551.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps552',      alias:'',              description:'Serveur de client (10052)',                                   lieu:'Strasbourg - France',           url:'vps552.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps553',      alias:'',              description:'Serveur de client (10053)',                                   lieu:'Strasbourg - France',           url:'vps553.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps554',      alias:'',              description:'Serveur de client (10054)',                                   lieu:'Strasbourg - France',           url:'vps554.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps555',      alias:'',              description:'Serveur de client (10055)',                                   lieu:'Strasbourg - France',           url:'vps555.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps556',      alias:'',              description:'Serveur de client (10056)',                                   lieu:'Strasbourg - France',           url:'vps556.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps557',      alias:'',              description:'Serveur de client (10057)',                                   lieu:'Strasbourg - France',           url:'vps557.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps558',      alias:'',              description:'Serveur de client (10058)',                                   lieu:'Strasbourg - France',           url:'vps558.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps559',      alias:'',              description:'Serveur de client (10059)',                                   lieu:'Strasbourg - France',           url:'vps559.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps560',      alias:'',              description:'Serveur de client (10060)',                                   lieu:'Strasbourg - France',           url:'vps560.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps561',      alias:'',              description:'Serveur de client (10061)',                                   lieu:'Strasbourg - France',           url:'vps561.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps562',      alias:'',              description:'Serveur de client (10062)',                                   lieu:'Strasbourg - France',           url:'vps562.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps563',      alias:'',              description:'Serveur de client (10063)',                                   lieu:'Strasbourg - France',           url:'vps563.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps564',      alias:'',              description:'Serveur de client (10064)',                                   lieu:'Strasbourg - France',           url:'vps564.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps565',      alias:'',              description:'Serveur de client (10065)',                                   lieu:'Strasbourg - France',           url:'vps565.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps566',      alias:'',              description:'Serveur de client (10066)',                                   lieu:'Strasbourg - France',           url:'vps566.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps567',      alias:'',              description:'Serveur de client (10067)',                                   lieu:'Strasbourg - France',           url:'vps567.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps568',      alias:'',              description:'Serveur de client (10068)',                                   lieu:'Strasbourg - France',           url:'vps568.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps569',      alias:'',              description:'Serveur de client (10069)',                                   lieu:'Strasbourg - France',           url:'vps569.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps570',      alias:'',              description:'Serveur de client (10070)',                                   lieu:'Strasbourg - France',           url:'vps570.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps571',      alias:'',              description:'Serveur de client (10071)',                                   lieu:'Strasbourg - France',           url:'vps571.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps572',      alias:'',              description:'Serveur de client (10072)',                                   lieu:'Strasbourg - France',           url:'vps572.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps573',      alias:'',              description:'Serveur de client (10073)',                                   lieu:'Strasbourg - France',           url:'vps573.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps574',      alias:'',              description:'Serveur de client (10074)',                                   lieu:'Strasbourg - France',           url:'vps574.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps575',      alias:'',              description:'Serveur de client (10075)',                                   lieu:'Strasbourg - France',           url:'vps575.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps576',      alias:'',              description:'Serveur de client (10076)',                                   lieu:'Strasbourg - France',           url:'vps576.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps577',      alias:'',              description:'Serveur de client (10077)',                                   lieu:'Strasbourg - France',           url:'vps577.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps578',      alias:'',              description:'Serveur de client (10078)',                                   lieu:'Strasbourg - France',           url:'vps578.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps579',      alias:'',              description:'Serveur de client (10079)',                                   lieu:'Strasbourg - France',           url:'vps579.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps580',      alias:'',              description:'Serveur de client (10080)',                                   lieu:'Strasbourg - France',           url:'vps580.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps581',      alias:'',              description:'Serveur de client (10081)',                                   lieu:'Strasbourg - France',           url:'vps581.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps582',      alias:'',              description:'Serveur de client (10082)',                                   lieu:'Strasbourg - France',           url:'vps582.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps583',      alias:'',              description:'Serveur de client (10083)',                                   lieu:'Strasbourg - France',           url:'vps583.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps584',      alias:'',              description:'Serveur de client (10084)',                                   lieu:'Strasbourg - France',           url:'vps584.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps585',      alias:'',              description:'Serveur de client (10085)',                                   lieu:'Strasbourg - France',           url:'vps585.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps586',      alias:'',              description:'Serveur de client (10086)',                                   lieu:'Strasbourg - France',           url:'vps586.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps587',      alias:'',              description:'Serveur de client (10087)',                                   lieu:'Strasbourg - France',           url:'vps587.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps588',      alias:'',              description:'Serveur de client (10088)',                                   lieu:'Strasbourg - France',           url:'vps588.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  { name:'vps589',      alias:'',              description:'Serveur de client (10089)',                                   lieu:'Strasbourg - France',           url:'vps589.tyrolium.fr',   tag:'',            group:'vps',   date:'22/04/2022' },
  // ── Cloud ─────────────────────────────────────────────────────────────
  { name:'cloud101',    alias:'',              description:'Serveur pour le site officiel de Tyrolium',             lieu:'Gravelines - France',           url:'cloud101.tyrolium.fr', tag:'Tyrolium',    group:'cloud', date:'18/01/2020' },
  { name:'cloud102',    alias:'',              description:'Serveur pour les sites projet de Tyrolium (Gamenium, Useritium, etc..)', lieu:'Gravelines - France', url:'cloud102.tyrolium.fr', tag:'Tyrolium', group:'cloud', date:'06/06/2022' },
  // ── Proxy ─────────────────────────────────────────────────────────────
  { name:'proxy601',    alias:'',              description:'Proxy de redirection en cas de panne de serveur',       lieu:'Strasbourg - France',           url:'vps201.tyrolium.fr',   tag:'Tyrolium',    group:'proxy', date:'04/02/2020' },
  { name:'proxy602',    alias:'',              description:'Proxy de redirection des vps interne',                  lieu:'Lyon - France',                 url:'proxy602.tyrolium.fr', tag:'Tyrolium',    group:'proxy', date:'26/11/2023' },
  // ── Serveurs dédiés ───────────────────────────────────────────────────
  { name:'serv301',     alias:'ionos-serv',    description:'Serveur de Test Interne à SolidServ',                   lieu:'Frankfurt am Main - Allemagne', url:'serv301.tyrolium.fr',  tag:'SolidServ',   group:'serv',  date:'27/04/2022' },
  { name:'serv302',     alias:'ovh-serv',      description:'Serveur de SolidServ V1',                               lieu:'Strasbourg - France',           url:'serv302.tyrolium.fr',  tag:'SolidServ',   group:'serv',  date:'22/04/2022' },
  // ── Bases de données ──────────────────────────────────────────────────
  { name:'database701', alias:'',              description:'Base de données liée à Tyrolium.fr et Sélémusium.xyz',  lieu:'Gravelines - France',           url:'cloud101.tyrolium.fr', tag:'Tyrolium',    group:'db',    date:'18/01/2020' },
  { name:'database702', alias:'',              description:'Base de données liée au bot discord',                   lieu:'Gravelines - France',           url:'vps201.tyrolium.fr',   tag:'Tyrolium',    group:'db',    date:'04/02/2020' },
  { name:'database703', alias:'',              description:'Base de données liée à TyroServ (Log)',                 lieu:'Gravelines - France',           url:'vps204.tyrolium.fr',   tag:'TyroServ',    group:'db',    date:'16/05/2023' },
  { name:'database704', alias:'',              description:'Base de données liée à TyroServ (User)',                lieu:'Gravelines - France',           url:'vps204.tyrolium.fr',   tag:'TyroServ',    group:'db',    date:'16/05/2023' },
  { name:'database705', alias:'',              description:'Base de données liée à Useritium',                      lieu:'Gravelines - France',           url:'cloud102.tyrolium.fr', tag:'Tyrolium',    group:'db',    date:'06/06/2022' },
  { name:'database706', alias:'',              description:'Base de données liée à SolidServ',                      lieu:'Gravelines - France',           url:'vps205.tyrolium.fr',   tag:'SolidServ',   group:'db',    date:'22/10/2023' },
  // ── VPN ───────────────────────────────────────────────────────────────
  { name:'vpn401',      alias:'',              description:'VPN de sécurité pour les projets internes de Tyrolium', lieu:'Gravelines - France',           url:'vps201.tyrolium.fr',   tag:'Tyrolium',    group:'vpn',   date:'04/02/2020' },
  { name:'vpn402',      alias:'',              description:'VPN situé au Japon',                                    lieu:'Tokyo - Japon',                 url:'vps203.tyrolium.fr',   tag:'',            group:'vpn',   date:'14/11/2021' },
  { name:'vpn403',      alias:'',              description:'VPN situé au Japon',                                    lieu:'Tokyo - Japon',                 url:'vps203.tyrolium.fr',   tag:'',            group:'vpn',   date:'14/11/2021' },
  { name:'vpn404',      alias:'',              description:'VPN de connexion à l\'intranet de Tyrolium',            lieu:'Décines-Charpieu - France',     url:'vps290.tyrolium.fr',   tag:'Tyrolium',    group:'vpn',   date:'18/11/2023' },
  { name:'vpn405',      alias:'',              description:'VPN de connexion à l\'intranet de Tyrolium',            lieu:'Décines-Charpieu - France',     url:'int804.tyrolium.fr',   tag:'Tyrolium',    group:'vpn',   date:'25/08/2024' },
];

@Component({
  selector: 'app-server',
  imports: [FormsModule],
  templateUrl: './server.html',
  styleUrl: './server.css',
  encapsulation: ViewEncapsulation.None,
})
export class Server {
  readonly lang = inject(TyroUiLangService).lang;

  readonly groups = GROUPS;
  readonly totalServers = SERVERS.length;

  search = signal('');
  activeGroup = signal<string | null>(null);

  readonly filtered = computed<ServerEntry[]>(() => {
    const q = this.search().toLowerCase().trim();
    const g = this.activeGroup();
    return SERVERS.filter(s => {
      const matchGroup = !g || s.group === g;
      if (!matchGroup) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.alias.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tag.toLowerCase().includes(q) ||
        s.lieu.toLowerCase().includes(q)
      );
    });
  });

  readonly groupedSections = computed<{ group: ServerGroup; servers: ServerEntry[] }[]>(() => {
    const list = this.filtered();
    return GROUPS
      .map(g => ({ group: g, servers: list.filter(s => s.group === g.prefix) }))
      .filter(section => section.servers.length > 0);
  });

  readonly filteredCount = computed(() => this.filtered().length);
  readonly isGroupedView = computed(() => this.activeGroup() === null);

  setGroup(prefix: string | null) {
    this.activeGroup.set(prefix === this.activeGroup() ? null : prefix);
  }

  groupOf(prefix: string | null): ServerGroup | undefined {
    return GROUPS.find(g => g.prefix === prefix);
  }

  projectLogo(tag: string): string | null {
    return PROJECT_LOGOS[tag] ?? null;
  }

  onSearch(value: string) {
    this.search.set(value);
  }
}
