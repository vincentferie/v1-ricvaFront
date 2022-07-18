export const alertDeleteConfig = {
  title: 'Êtes vous sûr de vouloir supprimer ?',
  text: 'Une fois lancée, l\'action est irréversible'
};
export const alertSuccessDeleteMessage = {
  title: 'Supprimé',
  message: 'La suppression a bien été effectuée.'
};
export const alertFailDeleteMessage = {
  title: 'Echoué',
  message: 'La suppression a echouée.'
};
export const toastInvalidFileImgPdfMessage = {
  title: 'Echec',
  msg: 'Veuillez importer un fichier au format jpg, jpeg, png, pdf !'
};
export const toastInvalidFileMaxSizeMessage = (fileMaxSize) => {
  return {
    title: 'Echec',
    msg: `Veuillez importer un fichier valide ! Taille maximale ${fileMaxSize / 1048576} mo.`
  };
};
export class NextConfig {
  public static config = {
    layout: 'vertical', // vertical, horizontal
    subLayout: '', // horizontal-2
    collapseMenu: true,
    layoutType: 'menu-light', // menu-dark, menu-light, dark
    headerBackColor: 'background-blue', // background-blue, background-red, background-purple, background-info, background-dark
    rtlLayout: false,
    navFixedLayout: false,
    headerFixedLayout: false,
    boxLayout: false,
  };
}
