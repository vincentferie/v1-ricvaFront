import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'accueil',
    title: 'Acceuil',
    type: 'group',
    icon: 'feather icon-home',
    children: [
      {
        id: 'menu',
        title: 'Menu',
        type: 'item',
        icon: 'feather icon-home',
        url: 'menu',
        color: 'bg-c-blue'
      },
    ]
  },
  {
    id: 'gestion',
    title: 'Gestion',
    type: 'group',
    icon: 'feather icon-shield',
    children: [
      {
        id: 'approvisionnement',
        title: 'Approvisionnement',
        type: 'item',
        icon: 'feather icon-shopping-cart',
        url: 'approvisionnement/create',
        color: 'bg-c-blue',
        children: [
          {
            id: 'approvisionnement-create',
            title: 'Ajouter',
            type: 'component',
            url: 'approvisionnement/create'
          },
          {
            id: 'approvisionnement-historic',
            title: 'Historique',
            type: 'component',
            url: 'approvisionnement/historic'
          }
        ]
      },
      {
        id: 'dechargement',
        title: 'Déchargement',
        type: 'item',
        icon: 'feather icon-download',
        url: 'dechargement/create',
        color: 'bg-c-yellow',
        children: [
          {
            id: 'dechargement-create',
            title: 'Ajouter',
            type: 'component',
            url: 'dechargement/create'
          },
          {
            id: 'dechargement-historic',
            title: 'Historique',
            type: 'component',
            url: '/dechargement/historic'
          }
        ]
      },
      {
        id: 'vente',
        title: 'Vente',
        type: 'item',
        icon: 'feather icon-trending-up',
        url: 'vente/create',
        color: 'bg-c-green',
        children: [
          {
            id: 'vente-create',
            title: 'Ajouter',
            type: 'component',
            url: 'vente/create'
          },
          {
            id: 'vente-historic',
            title: 'Historique',
            type: 'component',
            url: 'vente/historic'
          }
        ]
      }
    ]
  },
  {
    id: 'stockage',
    title: 'Stockage',
    icon: 'feather icon-layers',
    type: 'group',
    children: [
      {
        id: 'stock-lot',
        title: 'Stock lot',
        type: 'item',
        icon: 'feather icon-layers',
        url: 'stock-lot',
        color: 'bg-c-blue'
      },
      {
        id: 'usinage',
        title: 'Usinage',
        type: 'item',
        icon: 'feather icon-box',
        url: 'usinage',
        color: 'bg-c-yellow'
      },
      {
        id: 'stock-lot-usine',
        title: 'Stock lot usiné',
        type: 'item',
        icon: 'feather icon-package',
        url: 'stock-lot-usine',
        color: 'bg-c-green'
      },
      {
        id: 'inventaire',
        title: 'Inventaire',
        type: 'item',
        icon: 'feather icon-clipboard',
        url: 'inventaire/create',
        color: 'bg-c-red',
        children: [
          {
            id: 'inventaire-create',
            title: 'Ajouter',
            type: 'component',
            url: 'inventaire/create'
          },
          {
            id: 'inventaire-historic',
            title: 'Historique',
            type: 'component',
            url: 'inventaire/historic'
          }
        ]
      },
      {
        id: 'etat-stock',
        title: 'Etat de stock',
        type: 'item',
        icon: 'feather icon-activity',
        url: 'etat-stock',
        color: 'bg-c-blue'
      },
    ]
  },
  {
    id: 'comptabilite',
    title: 'Comptabilité',
    icon: 'feather icon-archive',
    type: 'group',
    children: [
      {
        id: 'facturation',
        title: 'Facturation',
        type: 'item',
        icon: 'feather icon-file-plus',
        url: 'facturation/create',
        color: 'bg-c-blue',
        children: [
          {
            id: 'facturation-create',
            title: 'Faire',
            type: 'component',
            url: 'facturation/create'
          },
          {
            id: 'facturation-historic',
            title: 'Suivis',
            type: 'component',
            url: 'facturation/historic'
          }
        ]
      },
      {
        id: 'bilan',
        title: 'Bilan',
        type: 'item',
        url: 'bilan',
        icon: 'feather icon-pie-chart',
        color: 'bg-c-yellow'
      }
    ]
  },
  {
    id: 'membres',
    title: 'Membres',
    icon: 'feather icon-users',
    type: 'group',
    children: [
      {
        id: 'membre',
        title: 'Membre',
        type: 'item',
        icon: 'feather icon-user-check',
        url: 'membre/create',
        color: 'bg-c-blue',
        children: [
          {
            id: 'membre-create',
            title: 'Ajouter',
            type: 'component',
            url: 'membre/create'
          },
          {
            id: 'membre-historic',
            title: 'Historique',
            type: 'component',
            url: 'membre/historic'
          }
        ]
      },
      {
        id: 'droit-adhesion',
        title: 'Droit d\'adhésion',
        type: 'item',
        icon: 'feather icon-airplay',
        url: 'droit-adhesion/create',
        color: 'bg-c-yellow',
        children: [
          {
            id: 'droit-adhesion-create',
            title: 'Payer',
            type: 'component',
            url: 'droit-adhesion'
          },
          {
            id: 'droit-adhesion-historic',
            title: 'Historique',
            type: 'component',
            url: 'droit-adhesion/historic'
          }
        ]
      },
      {
        id: 'part-sociale',
        title: 'Part sociale',
        type: 'item',
        icon: 'feather icon-percent',
        url: 'part-sociale',
        color: 'bg-c-green',
        children: [
          {
            id: 'part-sociale-create',
            title: 'Payer',
            type: 'component',
            url: 'part-sociale/create'
          },
          {
            id: 'part-sociale-historic',
            title: 'Historique',
            type: 'component',
            url: 'part-sociale/historic'
          }
        ]
      }
    ]
  },
  {
    id: 'parametre',
    title: 'Paramètres',
    icon: 'feather icon-settings',
    type: 'group',
    children: [
      {
        id: 'utilisateur',
        title: 'Utilisateur',
        type: 'item',
        icon: 'feather icon-users',
        url: 'utilisateur/create',
        color: 'bg-c-blue',
        children: [
          {
            id: 'utilisateur-create',
            title: 'Ajouter',
            type: 'component',
            url: 'utilisateur/create'
          },
          {
            id: 'utilisateur-historic',
            title: 'Historique',
            type: 'component',
            url: 'utilisateur/historic'
          }
        ]
      },
      {
        id: 'fournisseur',
        title: 'Fournisseur',
        type: 'item',
        icon: 'feather icon-user-plus',
        url: 'fournisseur/create',
        color: 'bg-c-yellow',
        children: [
          {
            id: 'fournisseur-create',
            title: 'Ajouter',
            type: 'component',
            url: 'fournisseur/create'
          },
          {
            id: 'fournisseur-historic',
            title: 'Historique',
            type: 'component',
            url: 'fournisseur/historic'
          }
        ]
      },
      {
        id: 'client',
        title: 'Client',
        type: 'item',
        icon: 'feather icon-user',
        url: 'client/create',
        color: 'bg-c-green',
        children: [
          {
            id: 'client-create',
            title: 'Ajouter',
            type: 'component',
            url: 'client/create'
          },
          {
            id: 'client-historic',
            title: 'Historique',
            type: 'component',
            url: 'client/historic'
          }
        ]
      },
      {
        id: 'transport',
        title: 'Transport',
        type: 'item',
        icon: 'feather icon-disc',
        url: 'transport/create',
        color: 'bg-c-red',
        children: [
          {
            id: 'transport-create',
            title: 'Ajouter',
            type: 'component',
            url: 'transport/create'
          },
          {
            id: 'transport-historic',
            title: 'Historique',
            type: 'component',
            url: 'transport/historic'
          }
        ]
      }
    ]
  },
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
