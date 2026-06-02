import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TyroUiLangService } from 'tyrolium-ui';

type FromProject = 'tyrolium' | 'tyroserv' | 'solidserv' | 'tyrociel' | 'gamenium' | 'influnias' | 'vturias' | 'nexiumiacrm' | 'useritium';

const VALID_PROJECTS: FromProject[] = ['tyrolium', 'tyroserv', 'solidserv', 'tyrociel', 'gamenium', 'influnias', 'vturias', 'nexiumiacrm', 'useritium'];

const TITLES: Record<FromProject, { fr: string; en: string }> = {
  tyrolium:    { fr: 'Parlons de<br>votre projet',             en: "Let's talk about<br>your project" },
  tyroserv:    { fr: 'Parlons de<br>TyroServ',                en: "Let's talk about<br>TyroServ" },
  solidserv:   { fr: 'Parlons de<br>votre hébergement',        en: "Let's talk about<br>your hosting" },
  tyrociel:    { fr: 'Parlons de<br>TyroCiel',                 en: "Let's talk about<br>TyroCiel" },
  gamenium:    { fr: 'Parlons de<br>Gamenium',                 en: "Let's talk about<br>Gamenium" },
  influnias:   { fr: 'Parlons de<br>votre présence Influnias', en: "Let's talk about<br>your Influnias presence" },
  vturias:     { fr: 'Parlons de<br>Vturias',                  en: "Let's talk about<br>Vturias" },
  nexiumiacrm: { fr: 'Parlons de<br>NexiumiaCRM',              en: "Let's talk about<br>NexiumiaCRM" },
  useritium:   { fr: 'Parlons de<br>Useritium',                en: "Let's talk about<br>Useritium" },
};

const DESCS: Record<FromProject, { fr: string; en: string }> = {
  tyrolium:    { fr: 'Que vous ayez un projet web, une infrastructure à déployer ou simplement une question, écrivez-nous. Nous répondons généralement sous 48 h.', en: 'Whether you have a web project, infrastructure to deploy or simply a question, write to us. We usually reply within 48 hours.' },
  tyroserv:    { fr: 'Une question sur votre grade, un problème sur le serveur Minecraft ou une suggestion ? Notre équipe est là pour vous.', en: 'A question about your rank, an issue on the Minecraft server or a suggestion? Our team is here for you.' },
  solidserv:   { fr: 'Vous cherchez un serveur, un VPS ou avez une question sur votre hébergement SolidServ ? Contactez-nous, on vous répond sous 48 h.', en: 'Looking for a server, a VPS, or have a question about your SolidServ hosting? Get in touch, we reply within 48 h.' },
  tyrociel:    { fr: 'Une question sur TyroCiel, une idée ou un partenariat ? Notre équipe vous répond rapidement.', en: 'A question about TyroCiel, an idea or a partnership? Our team will get back to you quickly.' },
  gamenium:    { fr: 'Une question sur Gamenium, un projet gaming ou une collaboration ? Écrivez-nous, on vous répond.', en: 'A question about Gamenium, a gaming project or a collaboration? Write to us, we reply.' },
  influnias:   { fr: 'Vous souhaitez rejoindre Influnias, proposer un partenariat ou avez une question sur la plateforme ? Contactez-nous.', en: 'Looking to join Influnias, propose a partnership or have a question about the platform? Get in touch.' },
  vturias:     { fr: 'Une question sur Vturias, un goodie ou une collaboration VTuber ? Notre équipe vous répond sous 48 h.', en: 'A question about Vturias, a goodie or a VTuber collaboration? Our team replies within 48 h.' },
  nexiumiacrm: { fr: 'Un projet CRM, une question sur votre abonnement ou une demande de démo ? Écrivez-nous, on revient vers vous rapidement.', en: "A CRM project, a question about your subscription or a demo request? Write to us, we'll get back to you quickly." },
  useritium:   { fr: 'Une question sur Useritium, une intégration ou une demande technique ? Notre équipe vous répond dans les meilleurs délais.', en: 'A question about Useritium, an integration or a technical request? Our team will reply as soon as possible.' },
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  imports: [],
})
export class Contact {
  readonly lang = inject(TyroUiLangService).lang;

  readonly title: { fr: string; en: string };
  readonly desc: { fr: string; en: string };

  constructor() {
    const raw = inject(ActivatedRoute).snapshot.queryParamMap.get('from') ?? '';
    const from: FromProject = VALID_PROJECTS.includes(raw as FromProject) ? (raw as FromProject) : 'tyrolium';
    this.title = TITLES[from];
    this.desc = DESCS[from];
  }
}
