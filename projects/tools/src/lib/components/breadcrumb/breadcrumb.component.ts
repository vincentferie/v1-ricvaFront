import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { NavigationItem } from '../../layout/admin/navigation/navigation';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() type: string;

  public navigation: any;
  breadcrumbList: Array<any> = [];
  public navigationList: Array<any> = [];
  appUrl: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public nav: NavigationItem,
    private titleService: Title,
    private appService: AppService
  ) {
    this.navigation = this.nav.get();
    this.type = 'theme2';
    this.setBreadcrumb();
  }

  ngOnInit() {
  }

  getUrlArray(url) {
    return ['/', this.appUrl, ...url.split('/')];
  }

  setBreadcrumb() {
    let routerUrl: string;
    this.router.events.subscribe((router: any) => {
      let currentRoute = this.route.root;
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(routes => {
          if (routes.outlet === 'primary') {
            this.appUrl = routes.snapshot.data.app;
            currentRoute = routes;
          }
          if (this.appUrl !== undefined ) {
            this.appService.setAppUrl(this.appUrl);
          }
        });
      } while (currentRoute);
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        this.breadcrumbList.length = 0;
        const activeLink = router.url.replace(`/${this.appUrl}/`, '');
        this.filterNavigation(activeLink);
      }
    });
  }

  filterNavigation(activeLink) {
    let result = [];
    let title = 'Bienvenue';
    this.navigation.forEach((a) => {
      if ((a.type === 'item' || a.type === 'component') && 'url' in a) {
        if (!('children' in a) && a.url === activeLink) {
          result = [
            {
              url: ('url' in a) ? a.url : false,
              title: a.title,
              breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
              type: a.type
            }
          ];
          title = a.title;
        } else if('children' in a) {
          a.children.forEach((b) => {
            if ((b.type === 'item' || b.type === 'component') && 'url' in b && b.url === activeLink) {
              result = [
                {
                  url: ('url' in b) ? b.url : false,
                  title: b.title,
                  breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                  type: b.type
                }
              ];
              title = b.title;
            }
          });
        }
      } else {
        if (a.type === 'group' && 'children' in a) {
          a.children.forEach((b) => {
            if ((b.type === 'item' || b.type === 'component') && 'url' in b) {
              if (!('children' in b) && b.url === activeLink) {
                result = [
                  {
                    url: ('url' in b) ? b.url : false,
                    title: b.title,
                    breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                    type: b.type
                  }
                ];
                title = b.title;
              } else if('children' in b) {
                b.children.forEach((c) => {
                  if ((c.type === 'item' || c.type === 'component') && 'url' in c && c.url === activeLink) {
                    result = [
                      {
                        url: ('url' in b) ? b.url : false,
                        title: b.title,
                        breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                        type: b.type
                      },
                      {
                        url: ('url' in c) ? c.url : false,
                        title: c.title,
                        breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                        type: c.type
                      }
                    ];
                    title = `${c.title} ${b.title}`;
                  }
                });
              }
            }
          });
        }
      }
    });
    this.navigationList = result;
    this.titleService.setTitle(title + ' | RIVCA Capsikan');
  }
}
