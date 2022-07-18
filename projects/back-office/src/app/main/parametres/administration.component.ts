import { Component, OnInit } from '@angular/core';
// import { DashboardCount, DataDashboardCount } from '../../dashboard/dashboard.model';
// import { DashboardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent /*implements OnInit*/ {
  loading$;

  refresh() { }
  // public dashboardCount: DashboardCount;

  // constructor(private dashboardService: DashboardService) { }

  // ngOnInit(): void {
  //   this.getDashboardCount();
  // }

  // getDashboardCount() {
  //   this.dashboardCount = null;
  //   this.dashboardService.countAdministration().subscribe((response: DataDashboardCount) => this.dashboardCount = response.data);
  // }
}
