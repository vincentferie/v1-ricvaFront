import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        loadChildren: () => import('../../menu/menu.module').then(module => module.MenuModule)
      },
      /* Gestion */
      {
        path: 'approvisionnement',
        loadChildren: () => import('../../gestion/approvisionnement/approvisionnement.module').then(module => module.ApprovisionnementModule)
      },
      {
        path: 'dechargement',
        loadChildren: () => import('../../gestion/dechargement/dechargement.module').then(module => module.DechargementModule)
      },
      /* Stockage */
      {
        path: 'stock-lot',
        loadChildren: () => import('../../stockage/stock-lot/stock-lot.module').then(module => module.StockLotModule)
      },
      {
        path: 'usinage',
        loadChildren: () => import('../../stockage/usinage/usinage.module').then(module => module.UsinageModule)
      },
      {
        path: 'stock-lot-usine',
        loadChildren: () => import('../../stockage/stock-lot-usine/stock-lot-usine.module').then(module => module.StockLotUsineModule)
      },
      {
        path: 'inventaire',
        loadChildren: () => import('../../stockage/inventaire/inventaire.module').then(module => module.InventaireModule)
      },
      {
        path: 'etat-stock',
        loadChildren: () => import('../../stockage/etat/etat.module').then(module => module.EtatModule)
      },
      {
        path: 'vente',
        loadChildren: () => import('../../gestion/vente/vente.module').then(module => module.VenteModule)
      },
      /* Comptabilité */
      {
        path: 'facturation',
        loadChildren: () => import('../../comptabilite/facturation/facturation.module').then(module => module.FacturationModule)
      },
      /* Membres */
      {
        path: 'membre',
        loadChildren: () => import('../../membres/membre/membre.module').then(module => module.MembreModule)
      },
      {
        path: 'droit-adhesion',
        loadChildren: () => import('../../membres/droit-adhesion/droit-adhesion.module').then(module => module.DroitAdhesionModule)
      },
      {
        path: 'part-sociale',
        loadChildren: () => import('../../membres/part-sociale/part-sociale.module').then(module => module.PartSocialeModule)
      },
      /* Paramètres */
      {
        path: 'utilisateur',
        loadChildren: () => import('../../parametres/utilisateur/utilisateur.module').then(module => module.UtilisateurModule)
      },
      {
        path: 'fournisseur',
        loadChildren: () => import('../../parametres/fournisseur/fournisseur.module').then(module => module.FournisseurModule)
      },
      {
        path: 'client',
        loadChildren: () => import('../../parametres/client/client.module').then(module => module.ClientModule)
      },
      {
        path: 'transport',
        loadChildren: () => import('../../parametres/transport/transport.module').then(module => module.TransportModule)
      }
    ],
    data: {
      app: 'anarcade'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnarcadeRoutingModule { }
